'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, Clock, Star, Play, Award, TrendingUp } from 'lucide-react'

const FEATURED_COURSES = [
  {
    id: 'watercolor-techniques',
    title: 'Modern Watercolor Techniques',
    instructor: 'Ana Victoria Calderon',
    students: '225,132',
    duration: '3h 45m',
    rating: 4.8,
    level: 'Intermediate',
    category: 'Illustration',
    thumbnail: '/api/placeholder/400/250',
    description: 'Master contemporary watercolor methods with vibrant colors and modern approaches',
    lessons: 12,
    assignments: 8,
    aiIntegrated: true
  },
  {
    id: 'drawing-beginners',
    title: 'Drawing for Beginners Level -1',
    instructor: 'Puño',
    students: '268,029',
    duration: '4h 20m',
    rating: 4.9,
    level: 'Beginner',
    category: 'Drawing',
    thumbnail: '/api/placeholder/400/250',
    description: 'Learn fundamental drawing skills from basic shapes to detailed illustrations',
    lessons: 15,
    assignments: 10,
    aiIntegrated: true
  },
  {
    id: 'creative-drawing',
    title: 'Creative Drawing Techniques',
    instructor: 'Puño',
    students: '173,210',
    duration: '5h 10m',
    rating: 4.7,
    level: 'Intermediate',
    category: 'Drawing',
    thumbnail: '/api/placeholder/400/250',
    description: 'Explore advanced drawing techniques and develop your unique artistic style',
    lessons: 18,
    assignments: 12,
    aiIntegrated: true
  },
  {
    id: 'digital-illustration',
    title: 'Digital Illustration Fundamentals',
    instructor: 'Maria Santos',
    students: '156,890',
    duration: '6h 30m',
    rating: 4.8,
    level: 'Beginner',
    category: 'Digital Art',
    thumbnail: '/api/placeholder/400/250',
    description: 'Master digital illustration from concept to final artwork using industry tools',
    lessons: 20,
    assignments: 15,
    aiIntegrated: true
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-domestika-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-domestika-gray-600 hover:text-domestika-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-domestika-primary" />
              <span className="text-domestika-dark font-medium">Your Learning Path</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-domestika-dark mb-4">
            AI-Enhanced Creative Courses
          </h1>
          <p className="text-lg text-domestika-gray-600 mb-8 max-w-2xl mx-auto">
            Start your personalized learning journey with courses enhanced by AI feedback, 
            assignment guidance, and creative collaboration tools.
          </p>
          
          {/* AI Integration Highlight */}
          <div className="bg-domestika-primary bg-opacity-10 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-domestika-primary rounded-full flex items-center justify-center mr-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-domestika-dark">AI-Enhanced Learning Experience</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium text-domestika-dark mb-1">Assignment Feedback</h4>
                <p className="text-sm text-domestika-gray-600">Get detailed AI feedback on every assignment</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-medium text-domestika-dark mb-1">Creative Assistant</h4>
                <p className="text-sm text-domestika-gray-600">AI help available while you create</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-medium text-domestika-dark mb-1">Progress Tracking</h4>
                <p className="text-sm text-domestika-gray-600">Monitor your improvement over time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURED_COURSES.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border border-domestika-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Course Thumbnail */}
              <div className="relative">
                <div className="w-full h-48 bg-domestika-gray-100 flex items-center justify-center">
                  <div className="text-6xl">{course.category === 'Illustration' ? '🎨' : course.category === 'Drawing' ? '✏️' : '🖼️'}</div>
                </div>
                <div className="absolute top-4 right-4 bg-domestika-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  AI Enhanced
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {course.duration}
                </div>
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-domestika-dark mb-1">{course.title}</h3>
                    <p className="text-domestika-gray-600 text-sm">by {course.instructor}</p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <p className="text-domestika-gray-600 text-sm mb-4">{course.description}</p>
                
                {/* Course Stats */}
                <div className="flex items-center justify-between text-xs text-domestika-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span>{course.assignments} assignments</span>
                  </div>
                </div>
                
                {/* Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-domestika-gray-500">{course.category}</span>
                </div>
                
                {/* Action Button */}
                <Link 
                  href={`/courses/${course.id}`}
                  className="w-full bg-domestika-primary text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <div className="bg-domestika-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-domestika-dark mb-4">More Courses Coming Soon</h3>
            <p className="text-domestika-gray-600 mb-6">
              We're adding more AI-enhanced courses across photography, animation, and digital design.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl mb-2">📷</div>
                <p className="text-sm text-domestika-gray-600">Photography</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎬</div>
                <p className="text-sm text-domestika-gray-600">Animation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-sm text-domestika-gray-600">Digital Design</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 