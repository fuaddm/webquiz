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
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export async function getQuestions(categoryId) {
  try {
    // Ensure we have the category ID
    if (!categoryId) {
      return { message: 'Category ID is required' };
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Fetch category with populated questions
    let category = await Category.findById(categoryId).populate('questions').exec();
    if (!category) {
      return { message: 'Category not found' };
    }

    category = JSON.parse(JSON.stringify(category));

    return { questions: category.questions };
  } catch (error) {
    console.error('Error fetching questions:', error);
    return { message: 'Internal Server Error' };
  }
}
