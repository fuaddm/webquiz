import connectMongoDB from '@/libs/mongodb';
import { Category, Question } from '@/models/Models';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { categoryId, question, options, correctAnswer } = await request.json();

    // Ensure we have all necessary data
    if (!categoryId || !question || !options || options.length !== 4 || correctAnswer < 0 || correctAnswer >= 4) {
      return NextResponse.json({ message: 'Invalid data provided' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create the new question
    const newQuestion = await Question.create({ question, options, correctAnswer });

    // Update the category to include the new question
    const category = await Category.findById(categoryId);
    if (!category) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }
    category.questions.push(newQuestion._id);
    await category.save();

    return NextResponse.json({ message: 'Question created and added to category', question: newQuestion }, { status: 201 });
  } catch (error) {
    console.error('Error creating question:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const urlParams = new URLSearchParams(new URL(request.url).search);
    const categoryId = urlParams.get('categoryId');

    // Ensure we have the category ID
    if (!categoryId) {
      return NextResponse.json({ message: 'Category ID is required' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Fetch category with populated questions
    const category = await Category.findById(categoryId).populate('questions').exec();
    if (!category) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json({ questions: category.questions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
