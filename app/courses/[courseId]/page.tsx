'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, Clock, Star, Play, CheckCircle, Lock, Award, MessageCircle, Upload, Sparkles, Target, TrendingUp, Palette, Lightbulb } from 'lucide-react'

// Mock course data (in real app, this would come from API)
const COURSE_DATA = {
  'watercolor-techniques': {
    title: 'Modern Watercolor Techniques',
    instructor: 'Ana Victoria Calderon',
    students: '225,132',
    duration: '3h 45m',
    rating: 4.8,
    level: 'Intermediate',
    category: 'Illustration',
    description: 'Master contemporary watercolor methods with vibrant colors and modern approaches',
    lessons: [
      { id: 1, title: 'Introduction to Modern Watercolor', duration: '12m', completed: true, type: 'video' },
      { id: 2, title: 'Color Theory & Palette Selection', duration: '18m', completed: true, type: 'video' },
      { id: 3, title: 'Basic Brush Techniques', duration: '22m', completed: true, type: 'video' },
      { id: 4, title: 'Wet-on-Wet Methods', duration: '25m', completed: false, type: 'video' },
      { id: 5, title: 'Layering & Glazing', duration: '20m', completed: false, type: 'video' },
      { id: 6, title: 'Texture Creation', duration: '28m', completed: false, type: 'video' }
    ],
    assignments: [
      { 
        id: 1, 
        title: 'Color Palette Exercise', 
        description: 'Create a personal color palette using 5 primary watercolor pigments',
        dueAfterLesson: 2,
        completed: true,
        submitted: true,
        score: 85,
        feedback: 'Excellent color harmony and understanding of temperature relationships'
      },
      { 
        id: 2, 
        title: 'Basic Brush Strokes Practice', 
        description: 'Practice 10 different brush stroke techniques from the lesson',
        dueAfterLesson: 3,
        completed: true,
        submitted: true,
        score: 78,
        feedback: 'Good control, focus on consistent pressure in next assignment'
      },
      { 
        id: 3, 
        title: 'Wet-on-Wet Landscape', 
        description: 'Create a simple landscape using wet-on-wet techniques',
        dueAfterLesson: 4,
        completed: false,
        submitted: false,
        score: null,
        feedback: null
      }
    ],
    currentLesson: 4,
    progress: 45
  }
}

const CRITIQUE_STYLES = [
  { id: 'constructive', name: 'Constructive', desc: 'Balanced feedback focused on improvement', icon: '🎯' },
  { id: 'detailed', name: 'Detailed Analysis', desc: 'Comprehensive technical breakdown', icon: '🔍' },
  { id: 'encouraging', name: 'Encouraging', desc: 'Positive, motivational feedback', icon: '✨' },
  { id: 'professional', name: 'Professional', desc: 'Industry-standard critique', icon: '🏆' },
]

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const [activeTab, setActiveTab] = useState('lessons')
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false)
  const [currentAssignment, setCurrentAssignment] = useState<any>(null)
  const [uploadedWork, setUploadedWork] = useState<string | null>(null)
  const [aiFeedback, setAiFeedback] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedCritiqueStyle, setSelectedCritiqueStyle] = useState('constructive')
  const [showCoCreation, setShowCoCreation] = useState(false)
  const [coCreationInput, setCoCreationInput] = useState('')
  const [coCreationMessages, setCoCreationMessages] = useState<any[]>([])
  const [isCoCreating, setIsCoCreating] = useState(false)

  const course = COURSE_DATA[params.courseId as keyof typeof COURSE_DATA]

  if (!course) {
    return <div>Course not found</div>
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedWork(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateAssignmentFeedback = async () => {
    if (!uploadedWork || !currentAssignment) return
    
    setIsAnalyzing(true)
    setAiFeedback(null)
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const feedbackByStyle: Record<string, any> = {
      constructive: {
        overallScore: 82,
        assignmentContext: `Assignment: ${currentAssignment.title}`,
        strengths: [
          'Good application of lesson techniques from the course material',
          'Clear understanding of the assignment requirements',
          'Creative interpretation while staying within guidelines'
        ],
        improvements: [
          'Consider applying the wet-on-wet technique more consistently',
          'Reference the color palette examples from Lesson 2',
          'Practice the brush control exercises before next assignment'
        ],
        nextSteps: [
          'Review Lesson 3 videos on brush pressure',
          'Complete practice exercise 2 before moving forward',
          'Try this technique with a limited color palette'
        ]
      },
      detailed: {
        overallScore: 82,
        assignmentContext: `Assignment: ${currentAssignment.title}`,
        technicalAnalysis: [
          'Brush technique: 85% - Good control, practice pressure variation',
          'Color application: 80% - Nice harmony, work on blending transitions',
          'Assignment criteria: 90% - Meets all requirements clearly',
          'Course application: 75% - Shows understanding, needs more practice'
        ],
        lessonConnections: [
          'Applied Lesson 2 color theory concepts effectively',
          'Missing Lesson 3 wet-on-wet techniques in background',
          'Could benefit from Lesson 1 workspace setup principles'
        ]
      },
      encouraging: {
        overallScore: 82,
        assignmentContext: `Assignment: ${currentAssignment.title}`,
        positives: [
          'Fantastic effort on this assignment! Your creativity really shines through',
          'You\'ve clearly absorbed the course material and applied it thoughtfully',
          'Your color choices create such a beautiful, cohesive mood',
          'This shows real progress from your previous work in this course'
        ],
        encouragement: [
          'You\'re developing a distinctive style that\'s uniquely yours',
          'Your assignment demonstrates real understanding of the course concepts',
          'Keep exploring - you\'re on exactly the right track!'
        ],
        nextChallenge: 'You\'re ready to tackle more complex compositions in the next assignment!'
      },
      professional: {
        overallScore: 82,
        assignmentContext: `Assignment: ${currentAssignment.title}`,
        marketReadiness: '70% - Strong foundation, needs refinement for professional work',
        courseAlignment: [
          'Assignment meets learning objectives: Excellent',
          'Technical execution: Good, practice will improve',
          'Creative application: Strong understanding demonstrated'
        ],
        careerAdvice: [
          'Focus on consistency across multiple pieces',
          'Document your process for portfolio presentation',
          'Consider this style for client illustration work'
        ],
        nextLevel: 'Ready for intermediate assignments in this course'
      }
    }
    
    setAiFeedback(feedbackByStyle[selectedCritiqueStyle])
    setIsAnalyzing(false)
  }

  const handleCoCreation = async () => {
    if (!coCreationInput.trim()) return
    
    setIsCoCreating(true)
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: coCreationInput,
      timestamp: new Date()
    }
    
    setCoCreationMessages(prev => [...prev, userMessage])
    setCoCreationInput('')
    
    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const aiResponses = [
      {
        content: `Great idea! For a landscape using wet-on-wet technique from this course, I'd suggest starting with a light wash of ultramarine blue for the sky. Remember from Lesson 2 that wet-on-wet works best when your paper is properly saturated but not dripping. What specific landscape elements are you thinking of including?`,
        suggestions: ['Mountain range', 'Forest scene', 'Coastal view', 'Urban landscape']
      },
      {
        content: `Perfect! Let's break this down using techniques from ${course.title}. Start with your lightest colors first - maybe a pale yellow ochre for the distant hills. Then layer progressively darker colors as you move forward in the composition. This creates the atmospheric perspective we covered in Lesson 3.`,
        suggestions: ['Show me color palette options', 'Help with brush selection', 'Composition tips', 'Troubleshooting guide']
      },
      {
        content: `Excellent choice! For this technique, I recommend using a 1-inch flat brush for the sky wash and a round #8 for details. Remember to keep your brush strokes confident and continuous - hesitation can cause unwanted hard edges. Would you like me to walk you through the step-by-step process?`,
        suggestions: ['Step-by-step guide', 'Common mistakes to avoid', 'Alternative approaches', 'Finish this session']
      }
    ]
    
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
    
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: randomResponse.content,
      suggestions: randomResponse.suggestions,
      timestamp: new Date()
    }
    
    setCoCreationMessages(prev => [...prev, aiMessage])
    setIsCoCreating(false)
  }

  const handleQuickPrompt = (prompt: string) => {
    setCoCreationInput(prompt)
  }

  const nextLesson = course.lessons.find(lesson => !lesson.completed)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-domestika-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/courses" className="flex items-center text-domestika-gray-600 hover:text-domestika-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-domestika-gray-600">
                Progress: {course.progress}%
              </div>
              <div className="w-32 bg-domestika-gray-200 rounded-full h-2">
                <div 
                  className="bg-domestika-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Course Header */}
        <div className="bg-white rounded-xl border border-domestika-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-domestika-dark mb-2">{course.title}</h1>
              <p className="text-domestika-gray-600 mb-4">by {course.instructor}</p>
              <p className="text-domestika-gray-700 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-domestika-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-domestika-primary" />
                  <span>AI Enhanced</span>
                </div>
              </div>
            </div>
            
            <div className="ml-8">
              <div className="w-32 h-32 bg-domestika-gray-100 rounded-lg flex items-center justify-center text-4xl">
                🎨
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6">
              <button
                onClick={() => setActiveTab('lessons')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'lessons' 
                    ? 'bg-domestika-primary text-white' 
                    : 'text-domestika-gray-600 hover:text-domestika-dark'
                }`}
              >
                Lessons
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'assignments' 
                    ? 'bg-domestika-primary text-white' 
                    : 'text-domestika-gray-600 hover:text-domestika-dark'
                }`}
              >
                Assignments
              </button>
              <button
                onClick={() => setActiveTab('co-creation')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'co-creation' 
                    ? 'bg-domestika-primary text-white' 
                    : 'text-domestika-gray-600 hover:text-domestika-dark'
                }`}
              >
                AI Co-Creation
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'progress' 
                    ? 'bg-domestika-primary text-white' 
                    : 'text-domestika-gray-600 hover:text-domestika-dark'
                }`}
              >
                Progress
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6">
              {activeTab === 'lessons' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-domestika-dark mb-4">Course Lessons</h2>
                  {course.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border border-domestika-gray-100 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          lesson.completed 
                            ? 'bg-green-100 text-green-600' 
                            : lesson.id === course.currentLesson 
                              ? 'bg-domestika-primary text-white' 
                              : 'bg-domestika-gray-100 text-domestika-gray-400'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : lesson.id === course.currentLesson ? (
                            <Play className="w-4 h-4" />
                          ) : (
                            <Lock className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-domestika-dark">{lesson.title}</h3>
                          <p className="text-sm text-domestika-gray-600">{lesson.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {lesson.id === course.currentLesson && (
                          <Link 
                            href={`/courses/${params.courseId}/lessons/${lesson.id}`}
                            className="bg-domestika-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                          >
                            Continue
                          </Link>
                        )}
                        {lesson.completed && (
                          <Link 
                            href={`/courses/${params.courseId}/lessons/${lesson.id}`}
                            className="text-domestika-primary hover:text-domestika-dark text-sm font-medium"
                          >
                            Review
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'assignments' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-domestika-dark mb-4">Course Assignments</h2>
                  {course.assignments.map((assignment) => (
                    <div key={assignment.id} className="p-4 border border-domestika-gray-100 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-domestika-dark">{assignment.title}</h3>
                          <p className="text-sm text-domestika-gray-600 mt-1">{assignment.description}</p>
                          <p className="text-xs text-domestika-gray-500 mt-2">Due after Lesson {assignment.dueAfterLesson}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {assignment.completed && (
                            <span className="text-green-600 text-sm font-medium">Completed</span>
                          )}
                          {assignment.score && (
                            <span className="bg-domestika-primary text-white px-2 py-1 rounded text-xs">
                              {assignment.score}/100
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {assignment.feedback && (
                        <div className="bg-domestika-gray-50 p-3 rounded-lg mb-3">
                          <p className="text-sm text-domestika-gray-700">
                            <strong>AI Feedback:</strong> {assignment.feedback}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {assignment.submitted ? (
                            <span className="text-green-600 text-sm">✓ Submitted</span>
                          ) : (
                            <span className="text-domestika-gray-500 text-sm">Not submitted</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {!assignment.submitted && (
                            <button
                              onClick={() => {
                                setCurrentAssignment(assignment)
                                setUploadedWork(null)
                                setAiFeedback(null)
                                setIsAnalyzing(false)
                              }}
                              className="bg-domestika-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                            >
                              Submit Work
                            </button>
                          )}
                          {assignment.submitted && (
                            <button className="text-domestika-primary hover:text-domestika-dark text-sm font-medium">
                              View Submission
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'co-creation' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-domestika-dark mb-4">AI Co-Creation Studio</h2>
                  
                  <div className="bg-domestika-primary bg-opacity-10 rounded-lg p-6 text-center">
                    <Palette className="w-16 h-16 text-domestika-primary mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-domestika-dark mb-4">Create Together with AI</h3>
                    <p className="text-domestika-gray-600 mb-6 max-w-2xl mx-auto">
                      Collaborate with our AI assistant to brainstorm ideas, develop concepts, and create amazing artwork together.
                      Perfect for overcoming creative blocks and exploring new directions within this course.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg border border-domestika-gray-200">
                        <h4 className="font-medium text-domestika-dark mb-2">Course-Specific Help</h4>
                        <p className="text-sm text-domestika-gray-600">Get help with techniques from this specific watercolor course</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-domestika-gray-200">
                        <h4 className="font-medium text-domestika-dark mb-2">Creative Brainstorming</h4>
                        <p className="text-sm text-domestika-gray-600">Explore new ideas and overcome creative blocks together</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setShowCoCreation(true)}
                      className="bg-domestika-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                      Start AI Co-Creation Session
                    </button>
                  </div>
                  
                  {showCoCreation && (
                    <div className="bg-white border border-domestika-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-domestika-dark">Creative Session with AI</h3>
                        <button
                          onClick={() => setShowCoCreation(false)}
                          className="text-domestika-gray-400 hover:text-domestika-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-domestika-gray-50 p-4 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-domestika-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                              AI
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-domestika-gray-700">
                                Hi! I'm your creative partner for this watercolor course. I can help you with:
                              </p>
                              <ul className="text-xs text-domestika-gray-600 mt-2 space-y-1">
                                <li>• Applying techniques from {course.title}</li>
                                <li>• Brainstorming ideas for your assignments</li>
                                <li>• Troubleshooting watercolor problems</li>
                                <li>• Exploring creative variations</li>
                              </ul>
                              <p className="text-sm text-domestika-gray-700 mt-3">
                                What would you like to create or explore today?
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Conversation History */}
                        {coCreationMessages.length > 0 && (
                          <div className="space-y-4 max-h-96 overflow-y-auto">
                            {coCreationMessages.map((message) => (
                              <div key={message.id} className={`flex items-start space-x-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                                {message.type === 'ai' && (
                                  <div className="w-8 h-8 bg-domestika-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                                    AI
                                  </div>
                                )}
                                <div className={`max-w-xs p-3 rounded-lg ${
                                  message.type === 'user' 
                                    ? 'bg-domestika-primary text-white' 
                                    : 'bg-domestika-gray-50 text-domestika-gray-700'
                                }`}>
                                  <p className="text-sm">{message.content}</p>
                                  {message.suggestions && (
                                    <div className="mt-2 space-y-1">
                                      {message.suggestions.map((suggestion: string, index: number) => (
                                        <button
                                          key={index}
                                          onClick={() => handleQuickPrompt(suggestion)}
                                          className="block w-full text-left text-xs bg-white bg-opacity-20 p-2 rounded hover:bg-opacity-30 transition-colors"
                                        >
                                          {suggestion}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                {message.type === 'user' && (
                                  <div className="w-8 h-8 bg-domestika-gray-300 text-domestika-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                                    You
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={coCreationInput}
                            onChange={(e) => setCoCreationInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleCoCreation()}
                            placeholder="I want to create a landscape using wet-on-wet technique..."
                            className="flex-1 p-3 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none"
                            disabled={isCoCreating}
                          />
                          <button 
                            onClick={handleCoCreation}
                            disabled={isCoCreating || !coCreationInput.trim()}
                            className="bg-domestika-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isCoCreating ? 'Creating...' : 'Let\'s Create'}
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-3">
                          <button 
                            onClick={() => handleQuickPrompt('Help me choose a color palette for a sunset landscape')}
                            className="p-3 bg-domestika-gray-50 rounded-lg text-left hover:bg-domestika-gray-100 transition-colors"
                          >
                            <h4 className="font-medium text-domestika-dark text-sm mb-1">Color Palette Help</h4>
                            <p className="text-xs text-domestika-gray-600">Generate harmonious color combinations</p>
                          </button>
                          <button 
                            onClick={() => handleQuickPrompt('Give me composition ideas for a watercolor landscape')}
                            className="p-3 bg-domestika-gray-50 rounded-lg text-left hover:bg-domestika-gray-100 transition-colors"
                          >
                            <h4 className="font-medium text-domestika-dark text-sm mb-1">Composition Ideas</h4>
                            <p className="text-xs text-domestika-gray-600">Explore different layout options</p>
                          </button>
                          <button 
                            onClick={() => handleQuickPrompt('I\'m having trouble with my wet-on-wet technique')}
                            className="p-3 bg-domestika-gray-50 rounded-lg text-left hover:bg-domestika-gray-100 transition-colors"
                          >
                            <h4 className="font-medium text-domestika-dark text-sm mb-1">Technique Troubleshooting</h4>
                            <p className="text-xs text-domestika-gray-600">Solve specific watercolor challenges</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'progress' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-domestika-dark mb-4">Your Progress</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-domestika-gray-50 p-6 rounded-lg">
                      <h3 className="font-medium text-domestika-dark mb-2">Course Completion</h3>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-domestika-gray-200 rounded-full h-3">
                          <div 
                            className="bg-domestika-primary h-3 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-domestika-dark">{course.progress}%</span>
                      </div>
                    </div>
                    
                    <div className="bg-domestika-gray-50 p-6 rounded-lg">
                      <h3 className="font-medium text-domestika-dark mb-2">Assignment Scores</h3>
                      <div className="space-y-2">
                        {course.assignments.filter(a => a.score).map((assignment) => (
                          <div key={assignment.id} className="flex items-center justify-between text-sm">
                            <span className="text-domestika-gray-600">{assignment.title}</span>
                            <span className="font-medium text-domestika-dark">{assignment.score}/100</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-domestika-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-domestika-dark mb-4">AI Learning Insights</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Target className="w-5 h-5 text-domestika-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-domestika-gray-700">
                            <strong>Strength:</strong> Excellent color theory understanding
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-domestika-gray-700">
                            <strong>Growth Area:</strong> Focus on brush pressure consistency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-domestika-gray-700">
                            <strong>Achievement:</strong> Mastered wet-on-wet techniques faster than average
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* AI Assistant */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-domestika-dark">AI Assistant</h3>
                <button
                  onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
                  className="p-2 bg-domestika-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
              
              {aiAssistantOpen && (
                <div className="space-y-4">
                  <div className="bg-domestika-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-domestika-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                        AI
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-domestika-gray-700">
                          Hi! I'm here to help with your watercolor journey. I can assist with:
                        </p>
                        <ul className="text-xs text-domestika-gray-600 mt-2 space-y-1">
                          <li>• Assignment feedback and guidance</li>
                          <li>• Technique explanations</li>
                          <li>• Creative problem-solving</li>
                          <li>• Progress tracking insights</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask me anything about watercolor..."
                      className="flex-1 p-2 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none text-sm"
                    />
                    <button className="bg-domestika-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                      Ask
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Next Up */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6">
              <h3 className="text-lg font-semibold text-domestika-dark mb-4">Next Up</h3>
              {nextLesson && (
                <div className="space-y-4">
                  <div className="p-4 bg-domestika-gray-50 rounded-lg">
                    <h4 className="font-medium text-domestika-dark mb-2">{nextLesson.title}</h4>
                    <p className="text-sm text-domestika-gray-600 mb-3">{nextLesson.duration}</p>
                    <Link 
                      href={`/courses/${params.courseId}/lessons/${nextLesson.id}`}
                      className="w-full bg-domestika-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Assignment Submission Modal */}
      {currentAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-bold text-domestika-dark mb-4">Submit Assignment</h2>
            <h3 className="text-lg font-medium text-domestika-dark mb-2">{currentAssignment.title}</h3>
            <p className="text-domestika-gray-600 mb-6">{currentAssignment.description}</p>
            
            <div className="space-y-6">
              {!uploadedWork ? (
                <div className="border-2 border-dashed border-domestika-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-domestika-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-domestika-dark mb-2">Upload Your Work</h3>
                  <p className="text-domestika-gray-600 mb-4">Drop your assignment here or click to browse</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="assignment-upload"
                  />
                  <label
                    htmlFor="assignment-upload"
                    className="bg-domestika-primary text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition-colors"
                  >
                    Choose File
                  </label>
                </div>
              ) : (
                <div className="space-y-6">
                  <img
                    src={uploadedWork}
                    alt="Uploaded assignment"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  {/* Critique Style Selection */}
                  <div>
                    <label className="block text-domestika-dark font-medium mb-3">
                      Choose AI Feedback Style
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {CRITIQUE_STYLES.map((style) => (
                        <button
                          key={style.id}
                          onClick={() => setSelectedCritiqueStyle(style.id)}
                          className={`p-3 rounded-lg text-left transition-colors ${
                            selectedCritiqueStyle === style.id
                              ? 'border-2 border-domestika-primary bg-domestika-primary bg-opacity-5'
                              : 'border border-domestika-gray-200 hover:border-domestika-primary'
                          }`}
                        >
                          <div className="flex items-center mb-1">
                            <span className="text-lg mr-2">{style.icon}</span>
                            <span className="font-medium text-domestika-dark text-sm">{style.name}</span>
                          </div>
                          <p className="text-xs text-domestika-gray-600">{style.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setUploadedWork(null)}
                      className="text-domestika-primary hover:text-domestika-dark text-sm"
                    >
                      Upload different file
                    </button>
                    <button 
                      onClick={generateAssignmentFeedback}
                      disabled={isAnalyzing}
                      className="bg-domestika-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors flex items-center disabled:opacity-50"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      {isAnalyzing ? 'Analyzing...' : 'Get AI Feedback'}
                    </button>
                  </div>
                  
                  {/* AI Feedback Display */}
                  {isAnalyzing && (
                    <div className="text-center py-8">
                      <Sparkles className="w-12 h-12 text-domestika-primary mx-auto mb-4 animate-pulse" />
                      <p className="text-domestika-gray-600">Analyzing your assignment...</p>
                      <p className="text-sm text-domestika-gray-500 mt-2">
                        Using {CRITIQUE_STYLES.find(s => s.id === selectedCritiqueStyle)?.name} style
                      </p>
                    </div>
                  )}
                  
                  {aiFeedback && !isAnalyzing && (
                    <div className="bg-domestika-gray-50 rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-domestika-dark">AI Assignment Feedback</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-lg font-bold text-domestika-primary">{aiFeedback.overallScore}/100</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-domestika-gray-600 bg-white p-3 rounded">
                        <strong>Context:</strong> {aiFeedback.assignmentContext}
                      </div>
                      
                      {selectedCritiqueStyle === 'constructive' && (
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              Strengths
                            </h5>
                            <ul className="space-y-1">
                              {aiFeedback.strengths?.map((strength: string, index: number) => (
                                <li key={index} className="text-sm text-domestika-gray-700 flex items-start">
                                  <span className="text-domestika-primary mr-2">•</span>
                                  <span>{strength}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2 flex items-center">
                              <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                              Areas for Improvement
                            </h5>
                            <ul className="space-y-1">
                              {aiFeedback.improvements?.map((improvement: string, index: number) => (
                                <li key={index} className="text-sm text-domestika-gray-700 flex items-start">
                                  <span className="text-domestika-primary mr-2">•</span>
                                  <span>{improvement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2 flex items-center">
                              <Lightbulb className="w-4 h-4 text-domestika-primary mr-2" />
                              Next Steps
                            </h5>
                            <ul className="space-y-1">
                              {aiFeedback.nextSteps?.map((step: string, index: number) => (
                                <li key={index} className="text-sm text-domestika-gray-700 flex items-start">
                                  <span className="text-domestika-primary mr-2">•</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {selectedCritiqueStyle === 'detailed' && (
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2">Technical Analysis</h5>
                            <div className="space-y-2">
                              {aiFeedback.technicalAnalysis?.map((analysis: string, index: number) => (
                                <div key={index} className="text-sm text-domestika-gray-700 p-2 bg-white rounded">
                                  {analysis}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2">Course Connections</h5>
                            <div className="space-y-1">
                              {aiFeedback.lessonConnections?.map((connection: string, index: number) => (
                                <div key={index} className="text-sm text-domestika-gray-700 flex items-start">
                                  <BookOpen className="w-4 h-4 text-domestika-primary mr-2 mt-0.5" />
                                  <span>{connection}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {selectedCritiqueStyle === 'encouraging' && (
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2 flex items-center">
                              <Sparkles className="w-4 h-4 text-domestika-primary mr-2" />
                              What's Working Great
                            </h5>
                            <div className="space-y-2">
                              {aiFeedback.positives?.map((positive: string, index: number) => (
                                <div key={index} className="text-sm text-domestika-gray-700 p-3 bg-green-50 rounded-lg">
                                  {positive}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-domestika-primary bg-opacity-10 rounded-lg p-4">
                            <h5 className="font-medium text-domestika-dark mb-2">Ready for Your Next Challenge?</h5>
                            <p className="text-sm text-domestika-gray-700">{aiFeedback.nextChallenge}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedCritiqueStyle === 'professional' && (
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2">Professional Assessment</h5>
                            <div className="text-sm text-domestika-gray-700 p-3 bg-white rounded">
                              {aiFeedback.marketReadiness}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-domestika-dark mb-2">Course Alignment</h5>
                            <div className="space-y-1">
                              {aiFeedback.courseAlignment?.map((alignment: string, index: number) => (
                                <div key={index} className="text-sm text-domestika-gray-700 flex items-start">
                                  <Award className="w-4 h-4 text-domestika-primary mr-2 mt-0.5" />
                                  <span>{alignment}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h5 className="font-medium text-domestika-dark mb-2">Career Development</h5>
                            <p className="text-sm text-domestika-gray-700 mb-3">{aiFeedback.nextLevel}</p>
                            <div className="space-y-1">
                              {aiFeedback.careerAdvice?.map((advice: string, index: number) => (
                                <div key={index} className="text-sm text-domestika-gray-700 flex items-start">
                                  <Target className="w-3 h-3 text-blue-500 mr-2 mt-1" />
                                  <span>{advice}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex space-x-3 pt-4">
                        <button 
                          onClick={() => setAiFeedback(null)}
                          className="flex-1 border border-domestika-gray-300 text-domestika-dark py-2 rounded-lg font-medium hover:border-domestika-primary transition-colors text-sm"
                        >
                          Try Different Style
                        </button>
                        <button className="flex-1 bg-domestika-primary text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm">
                          Save Feedback
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setCurrentAssignment(null)
                    setUploadedWork(null)
                    setAiFeedback(null)
                    setIsAnalyzing(false)
                  }}
                  className="text-domestika-gray-600 hover:text-domestika-dark"
                >
                  Cancel
                </button>
                <button
                  className="bg-domestika-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  disabled={!uploadedWork}
                  onClick={() => {
                    // In real app, this would submit to backend
                    alert('Assignment submitted successfully! You can view it in the assignments tab.')
                    setCurrentAssignment(null)
                    setUploadedWork(null)
                    setAiFeedback(null)
                    setIsAnalyzing(false)
                  }}
                >
                  Submit Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 