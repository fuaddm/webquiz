import connectMongoDB from '@/libs/mongodb';
import { Category } from '@/models/Models';

export async function getCategories() {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch categories with the count of questions
    let categories = await Category.aggregate([
      {
        $project: {
          name: 1,
          questionCount: { $size: '$questions' },
        },
      },
    ]);
    categories = JSON.parse(JSON.stringify(categories));

    return { categories };
  } catch {
    return { error: 'Sorry, there are some problems with server.' };
  }
}

export async function getQuestions(categoryId) {
  try {
    // Ensure we have the category ID
    if (!categoryId) {
      return { error: 'Sorry, there are some problems with server.' };
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Fetch category with populated questions
    let category = await Category.findById(categoryId).populate('questions').exec();
    if (!category) {
      return { error: 'Sorry, there are some problems with server.' };
    }

    category = JSON.parse(JSON.stringify(category));

    return { questions: category.questions };
  } catch (error) {
    return { error: 'Sorry, there are some problems with server.' };
  }
}
