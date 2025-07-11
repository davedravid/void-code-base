'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Pause, Volume2, Settings, BookOpen, MessageCircle, Sparkles, CheckCircle, ArrowRight, Clock, Target } from 'lucide-react'

const LESSON_DATA = {
  'watercolor-techniques': {
    1: {
      title: 'Introduction to Modern Watercolor',
      duration: '12m',
      videoUrl: '/api/placeholder/800/450',
      description: 'Welcome to modern watercolor techniques. In this lesson, we\'ll explore contemporary approaches to traditional watercolor painting.',
      keyPoints: [
        'Understanding modern watercolor vs traditional techniques',
        'Essential tools and materials for contemporary watercolor',
        'Setting up your workspace for optimal results',
        'Safety considerations and best practices'
      ],
      resources: [
        { title: 'Recommended Brush Set', url: '#' },
        { title: 'Color Palette Guide', url: '#' },
        { title: 'Paper Selection Chart', url: '#' }
      ],
      aiContext: 'This lesson introduces foundational concepts of modern watercolor. I can help explain techniques, suggest materials, or clarify any watercolor basics.',
      nextLesson: 2
    },
    2: {
      title: 'Color Theory & Palette Selection',
      duration: '18m',
      videoUrl: '/api/placeholder/800/450',
      description: 'Master color relationships and learn to create harmonious palettes that bring your watercolor paintings to life.',
      keyPoints: [
        'Understanding color temperature and its emotional impact',
        'Creating limited palettes for maximum impact',
        'Mixing colors effectively with watercolor',
        'Choosing colors that work well together'
      ],
      resources: [
        { title: 'Color Wheel Reference', url: '#' },
        { title: 'Palette Examples', url: '#' },
        { title: 'Color Mixing Chart', url: '#' }
      ],
      aiContext: 'This lesson covers color theory specific to watercolor. I can help with color mixing questions, palette suggestions, or explain color relationships.',
      nextLesson: 3
    },
    4: {
      title: 'Wet-on-Wet Methods',
      duration: '25m',
      videoUrl: '/api/placeholder/800/450',
      description: 'Learn to control wet-on-wet techniques for creating beautiful, organic effects in your watercolor paintings.',
      keyPoints: [
        'Timing and water control for wet-on-wet technique',
        'Creating soft edges and atmospheric effects',
        'Managing paint flow and bloom effects',
        'Troubleshooting common wet-on-wet problems'
      ],
      resources: [
        { title: 'Wet-on-Wet Practice Exercises', url: '#' },
        { title: 'Paper Timing Guide', url: '#' },
        { title: 'Troubleshooting Common Issues', url: '#' }
      ],
      aiContext: 'This lesson focuses on wet-on-wet watercolor techniques. I can help with timing questions, troubleshooting problems, or suggest practice exercises.',
      nextLesson: 5
    }
  }
}

export default function LessonPage({ params }: { params: { courseId: string, lessonId: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false)
  const [aiMessages, setAiMessages] = useState<Array<{role: 'user' | 'ai', content: string}>>([])
  const [aiInput, setAiInput] = useState('')
  const [lessonCompleted, setLessonCompleted] = useState(false)
  const [notes, setNotes] = useState('')

  // @ts-ignore
  const lesson = LESSON_DATA[params.courseId as keyof typeof LESSON_DATA]?.[parseInt(params.lessonId)]
  
  if (!lesson) {
    return <div>Lesson not found</div>
  }

  const handleAiQuestion = async () => {
    if (!aiInput.trim()) return
    
    const userMessage = { role: 'user' as const, content: aiInput }
    setAiMessages(prev => [...prev, userMessage])
    setAiInput('')
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        role: 'ai' as const, 
        content: `Great question about ${lesson.title}! Based on the lesson content, here's what I can help with: ${lesson.aiContext} Let me know if you'd like me to elaborate on any specific technique or concept.`
      }
      setAiMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const handleCompleteLesson = () => {
    setLessonCompleted(true)
    // In real app, this would update the backend
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-domestika-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/courses/${params.courseId}`} className="flex items-center text-domestika-gray-600 hover:text-domestika-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-domestika-gray-600" />
                <span className="text-sm text-domestika-gray-600">{lesson.duration}</span>
              </div>
              <button
                onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
                className="flex items-center space-x-2 bg-domestika-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Help</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 overflow-hidden mb-8">
              <div className="relative bg-gray-900 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-domestika-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-medium">{lesson.title}</p>
                    <p className="text-sm text-gray-300">{lesson.duration}</p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 bg-domestika-primary rounded-full hover:bg-orange-600 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm">0:00 / {lesson.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-600 rounded-full h-1">
                    <div 
                      className="bg-domestika-primary h-1 rounded-full transition-all duration-300"
                      style={{ width: '25%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6 mb-8">
              <h1 className="text-2xl font-bold text-domestika-dark mb-4">{lesson.title}</h1>
              <p className="text-domestika-gray-700 mb-6">{lesson.description}</p>
              
              <div className="space-y-6">
                {/* Key Points */}
                <div>
                  <h3 className="text-lg font-semibold text-domestika-dark mb-3">What You'll Learn</h3>
                                     <ul className="space-y-2">
                     {/* @ts-ignore */}
                     {lesson.keyPoints.map((point, index) => (
                       <li key={index} className="flex items-start space-x-3">
                         <Target className="w-4 h-4 text-domestika-primary mt-0.5" />
                         <span className="text-domestika-gray-700">{point}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-lg font-semibold text-domestika-dark mb-3">Additional Resources</h3>
                                     <div className="space-y-2">
                     {/* @ts-ignore */}
                     {lesson.resources.map((resource, index) => (
                       <a key={index} href={resource.url} className="flex items-center space-x-3 text-domestika-primary hover:text-domestika-dark transition-colors">
                         <BookOpen className="w-4 h-4" />
                         <span>{resource.title}</span>
                       </a>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Personal Notes */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6">
              <h3 className="text-lg font-semibold text-domestika-dark mb-4">My Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes about this lesson..."
                className="w-full h-32 p-3 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* AI Assistant */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-domestika-dark">AI Assistant</h3>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
                          {lesson.aiContext}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="max-h-64 overflow-y-auto space-y-3">
                    {aiMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.role === 'user' 
                            ? 'bg-domestika-primary text-white' 
                            : 'bg-domestika-gray-100 text-domestika-gray-700'
                        }`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Input */}
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      placeholder="Ask about this lesson..."
                      className="flex-1 p-2 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none text-sm"
                      onKeyPress={(e) => e.key === 'Enter' && handleAiQuestion()}
                    />
                    <button 
                      onClick={handleAiQuestion}
                      className="bg-domestika-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"
                    >
                      Ask
                    </button>
                  </div>
                </div>
              )}
              
              {!aiAssistantOpen && (
                <div className="text-center py-4">
                  <MessageCircle className="w-12 h-12 text-domestika-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-domestika-gray-600">Click "AI Help" to get assistance</p>
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl border border-domestika-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-domestika-dark mb-4">Lesson Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-domestika-gray-600">Watched</span>
                  <span className="text-sm font-medium text-domestika-dark">25%</span>
                </div>
                <div className="w-full bg-domestika-gray-200 rounded-full h-2">
                  <div 
                    className="bg-domestika-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: '25%' }}
                  />
                </div>
                
                {!lessonCompleted && (
                  <button
                    onClick={handleCompleteLesson}
                    className="w-full bg-domestika-primary text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Mark as Complete
                  </button>
                )}
                
                {lessonCompleted && (
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Lesson Completed!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Next Lesson */}
            {lesson.nextLesson && (
              <div className="bg-white rounded-xl border border-domestika-gray-200 p-6">
                <h3 className="text-lg font-semibold text-domestika-dark mb-4">Up Next</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-domestika-gray-50 rounded-lg">
                                         <h4 className="font-medium text-domestika-dark mb-2">
                       {/* @ts-ignore */}
                       Lesson {lesson.nextLesson}: {LESSON_DATA[params.courseId as keyof typeof LESSON_DATA]?.[lesson.nextLesson]?.title}
                     </h4>
                     <p className="text-sm text-domestika-gray-600 mb-3">
                       {/* @ts-ignore */}
                       {LESSON_DATA[params.courseId as keyof typeof LESSON_DATA]?.[lesson.nextLesson]?.duration}
                     </p>
                    <Link 
                      href={`/courses/${params.courseId}/lessons/${lesson.nextLesson}`}
                      className="w-full bg-domestika-primary text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                    >
                      <span>Continue Learning</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 