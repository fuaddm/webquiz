import connectMongoDB from '@/libs/mongodb';
import { Category } from '@/models/Models';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { categoryName } = await request.json();

    // Ensure we have the category name
    if (!categoryName) {
      return NextResponse.json({ message: 'Category name is required' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create the new category
    const newCategory = await Category.create({ name: categoryName });

    return NextResponse.json({ message: 'Category created successfully', category: newCategory }, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch categories with the count of questions
    const categories = await Category.aggregate([
      {
        $project: {
          name: 1,
          questionCount: { $size: '$questions' },
        },
      },
    ]);

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
