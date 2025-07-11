'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, Camera, Palette, MessageCircle, Sparkles, CheckCircle, TrendingUp, Award, BookOpen, Users, Star, Lightbulb, Target } from 'lucide-react'

const CRITIQUE_STYLES = [
  { id: 'constructive', name: 'Constructive', desc: 'Balanced feedback focused on improvement', icon: '🎯' },
  { id: 'detailed', name: 'Detailed Analysis', desc: 'Comprehensive technical breakdown', icon: '🔍' },
  { id: 'encouraging', name: 'Encouraging', desc: 'Positive, motivational feedback', icon: '✨' },
  { id: 'professional', name: 'Professional', desc: 'Industry-standard critique', icon: '🏆' },
]

const COURSE_INTEGRATIONS = [
  { title: 'Modern Watercolor Techniques', instructor: 'Ana Victoria Calderon', students: '225,132' },
  { title: 'Drawing for Beginners Level -1', instructor: 'Puño', students: '268,029' },
  { title: 'Creative Drawing Techniques', instructor: 'Puño', students: '173,210' },
]

export default function PracticePage() {
  const [uploadedWork, setUploadedWork] = useState<string | null>(null)
  const [workDescription, setWorkDescription] = useState('')
  const [selectedCritiqueStyle, setSelectedCritiqueStyle] = useState('constructive')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [feedback, setFeedback] = useState<any>(null)
  const [practiceMode, setPracticeMode] = useState<'upload' | 'collaborate'>('upload')

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

  const generateFeedback = async () => {
    setIsAnalyzing(true)
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const feedbackByStyle: Record<string, any> = {
      constructive: {
        overallScore: 8.2,
        strengths: [
          'Excellent composition following the rule of thirds',
          'Strong color harmony between warm and cool tones',
          'Good attention to detail in the focal areas'
        ],
        improvements: [
          'Consider adding more depth with atmospheric perspective',
          'The lighting could be more consistent throughout the piece',
          'Some background elements could use more refinement'
        ],
        techniques: [
          'Try using warmer highlights in the foreground objects',
          'Experiment with softer brush strokes for background elements',
          'Consider adding subtle texture overlays for visual interest'
        ],
        nextSteps: [
          'Practice similar compositions with different lighting',
          'Try this style with a limited color palette',
          'Experiment with adding narrative elements'
        ]
      },
      detailed: {
        overallScore: 8.2,
        technicalAnalysis: [
          'Brush work: 85% - Good control, some areas need refinement',
          'Color theory: 90% - Excellent complementary color usage',
          'Composition: 82% - Strong focal point, could improve negative space',
          'Lighting: 78% - Consistent direction, shadows need more depth'
        ],
        improvements: [
          'Values: Increase contrast in the midground for better depth',
          'Edges: Soften some hard edges in the background',
          'Color temperature: Push warm/cool relationships further'
        ],
        courseRecommendations: [
          'Advanced Color Theory Workshop',
          'Digital Lighting Techniques',
          'Composition Masterclass'
        ]
      },
      encouraging: {
        overallScore: 8.2,
        positives: [
          'Fantastic work! Your artistic vision really shines through',
          'The color choices create such a beautiful, cohesive mood',
          'Your style is developing beautifully - very distinctive!',
          'The level of detail shows real dedication to your craft'
        ],
        encouragement: [
          'You\'re definitely on the right path with your artistic development',
          'This shows real growth from your previous work',
          'Your unique perspective is what makes your art special'
        ],
        nextChallenge: 'You\'re ready to tackle more complex lighting scenarios!'
      },
      professional: {
        overallScore: 8.2,
        marketReadiness: '75% - Strong foundation, needs refinement',
        industryStandards: [
          'Technical execution: Meets current digital art standards',
          'Conceptual strength: Good narrative potential',
          'Commercial viability: Suitable for illustration market'
        ],
        careerAdvice: [
          'Focus on developing a consistent style for portfolio',
          'Consider specializing in this type of atmospheric work',
          'Build a series of similar pieces to show depth'
        ],
        nextLevel: 'Ready for intermediate-level professional projects'
      }
    }
    
    setFeedback(feedbackByStyle[selectedCritiqueStyle])
    setIsAnalyzing(false)
  }

  const startCollaboration = async () => {
    setIsAnalyzing(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockCollaboration = {
      sessionType: 'Creative Brainstorming',
      aiPartner: 'Maya - Digital Art Specialist',
      suggestions: [
        'Let\'s start with exploring different mood and atmosphere options',
        'I can help you develop a stronger color story for your piece',
        'We could work together on refining the composition and focal points'
      ],
      tools: ['Color palette generator', 'Composition guides', 'Reference library', 'Mood board creator']
    }
    
    setFeedback(mockCollaboration)
    setIsAnalyzing(false)
  }

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
              <div className="w-6 h-6 bg-domestika-primary rounded-full flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              <span className="text-domestika-dark font-medium">AI-Powered Practice</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-domestika-dark mb-4">
            Get Expert-Level Feedback on Your Creative Work
          </h1>
          <p className="text-lg text-domestika-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your artwork and receive detailed, personalized feedback from AI trained on 
            expert critique patterns. Choose your preferred feedback style and improve faster.
          </p>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-domestika-primary">100K+</div>
              <div className="text-sm text-domestika-gray-600">Artworks analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-domestika-primary">85%</div>
              <div className="text-sm text-domestika-gray-600">Improvement satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-domestika-primary">4.9/5</div>
              <div className="text-sm text-domestika-gray-600">Feedback quality</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setPracticeMode('upload')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                practiceMode === 'upload'
                  ? 'bg-domestika-primary text-white'
                  : 'border border-domestika-gray-300 text-domestika-dark hover:border-domestika-primary'
              }`}
            >
              Upload for Feedback
            </button>
            <button
              onClick={() => setPracticeMode('collaborate')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                practiceMode === 'collaborate'
                  ? 'bg-domestika-primary text-white'
                  : 'border border-domestika-gray-300 text-domestika-dark hover:border-domestika-primary'
              }`}
            >
              AI Co-Creation
            </button>
          </div>
        </div>

        {practiceMode === 'upload' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="bg-white rounded-xl p-8 border border-domestika-gray-200">
              <h2 className="text-xl font-semibold text-domestika-dark mb-6">Upload Your Artwork</h2>
              
              {!uploadedWork ? (
                <div className="border-2 border-dashed border-domestika-gray-300 rounded-lg p-12 text-center hover:border-domestika-primary transition-colors">
                  <Upload className="w-16 h-16 text-domestika-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-domestika-dark mb-2">Drop your artwork here</h3>
                  <p className="text-domestika-gray-600 mb-4">or click to browse files</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-domestika-primary text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition-colors"
                  >
                    Choose File
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <img
                    src={uploadedWork}
                    alt="Uploaded artwork"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setUploadedWork(null)}
                    className="text-domestika-primary hover:text-domestika-dark"
                  >
                    Upload different image
                  </button>
                </div>
              )}

              {uploadedWork && (
                <div className="mt-6 space-y-6">
                  {/* Critique Style Selection */}
                  <div>
                    <label className="block text-domestika-dark font-medium mb-3">
                      Choose Feedback Style
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

                  {/* Course Integration */}
                  <div>
                    <label className="block text-domestika-dark font-medium mb-3">
                      Related to a Domestika course? (Optional)
                    </label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full p-3 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none"
                    >
                      <option value="">Select a course...</option>
                      {COURSE_INTEGRATIONS.map((course, index) => (
                        <option key={index} value={course.title}>
                          {course.title} - {course.instructor}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Work Description */}
                  <div>
                    <label className="block text-domestika-dark font-medium mb-2">
                      Tell us about your work (optional)
                    </label>
                    <textarea
                      value={workDescription}
                      onChange={(e) => setWorkDescription(e.target.value)}
                      placeholder="What were you trying to achieve? Any specific areas you'd like feedback on?"
                      className="w-full p-3 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none"
                      rows={3}
                    />
                  </div>
                  
                  <button
                    onClick={generateFeedback}
                    disabled={isAnalyzing}
                    className="w-full bg-domestika-primary text-white py-3 rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 transition-colors"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Get AI Feedback'}
                  </button>
                </div>
              )}
            </div>

            {/* Feedback Section */}
            <div className="bg-white rounded-xl p-8 border border-domestika-gray-200">
              <h2 className="text-xl font-semibold text-domestika-dark mb-6">AI Feedback</h2>
              
              {isAnalyzing && (
                <div className="text-center py-12">
                  <Sparkles className="w-12 h-12 text-domestika-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-domestika-gray-600">Analyzing your artwork...</p>
                  <p className="text-sm text-domestika-gray-500 mt-2">
                    Using {CRITIQUE_STYLES.find(s => s.id === selectedCritiqueStyle)?.name} style
                  </p>
                </div>
              )}

              {feedback && !isAnalyzing && (
                <div className="space-y-6">
                  {/* Overall Score */}
                  <div className="bg-domestika-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-domestika-dark">Overall Assessment</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-xl font-bold text-domestika-primary">{feedback.overallScore}/10</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Content Based on Critique Style */}
                  {selectedCritiqueStyle === 'constructive' && (
                    <>
                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Strengths
                        </h3>
                        <ul className="space-y-2">
                          {feedback.strengths?.map((strength: string, index: number) => (
                            <li key={index} className="text-domestika-gray-600 text-sm flex items-start">
                              <span className="text-domestika-primary mr-2">•</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                          Areas for Improvement
                        </h3>
                        <ul className="space-y-2">
                          {feedback.improvements?.map((improvement: string, index: number) => (
                            <li key={index} className="text-domestika-gray-600 text-sm flex items-start">
                              <span className="text-domestika-primary mr-2">•</span>
                              <span>{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3 flex items-center">
                          <Lightbulb className="w-4 h-4 text-domestika-primary mr-2" />
                          Technique Suggestions
                        </h3>
                        <ul className="space-y-2">
                          {feedback.techniques?.map((technique: string, index: number) => (
                            <li key={index} className="text-domestika-gray-600 text-sm flex items-start">
                              <span className="text-domestika-primary mr-2">•</span>
                              <span>{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {selectedCritiqueStyle === 'detailed' && (
                    <>
                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3">Technical Analysis</h3>
                        <div className="space-y-2">
                          {feedback.technicalAnalysis?.map((analysis: string, index: number) => (
                            <div key={index} className="text-sm text-domestika-gray-600 p-2 bg-domestika-gray-50 rounded">
                              {analysis}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3">Recommended Courses</h3>
                        <div className="space-y-2">
                          {feedback.courseRecommendations?.map((course: string, index: number) => (
                            <div key={index} className="flex items-center text-sm text-domestika-gray-600">
                              <BookOpen className="w-4 h-4 text-domestika-primary mr-2" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {selectedCritiqueStyle === 'encouraging' && (
                    <>
                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3 flex items-center">
                          <Sparkles className="w-4 h-4 text-domestika-primary mr-2" />
                          What's Working Great
                        </h3>
                        <div className="space-y-2">
                          {feedback.positives?.map((positive: string, index: number) => (
                            <div key={index} className="text-domestika-gray-600 text-sm p-3 bg-green-50 rounded-lg">
                              {positive}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-domestika-primary bg-opacity-10 rounded-lg p-4">
                        <h3 className="font-medium text-domestika-dark mb-2">Ready for Your Next Challenge?</h3>
                        <p className="text-domestika-gray-600 text-sm">{feedback.nextChallenge}</p>
                      </div>
                    </>
                  )}

                  {selectedCritiqueStyle === 'professional' && (
                    <>
                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3">Market Readiness</h3>
                        <div className="text-sm text-domestika-gray-600 p-3 bg-domestika-gray-50 rounded">
                          {feedback.marketReadiness}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-domestika-dark mb-3">Industry Standards</h3>
                        <div className="space-y-2">
                          {feedback.industryStandards?.map((standard: string, index: number) => (
                            <div key={index} className="text-sm text-domestika-gray-600 flex items-start">
                              <Award className="w-4 h-4 text-domestika-primary mr-2 mt-0.5" />
                              <span>{standard}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <h3 className="font-medium text-domestika-dark mb-2">Career Development</h3>
                        <p className="text-sm text-domestika-gray-600 mb-3">{feedback.nextLevel}</p>
                        <div className="space-y-1">
                          {feedback.careerAdvice?.map((advice: string, index: number) => (
                            <div key={index} className="text-sm text-domestika-gray-600 flex items-start">
                              <Target className="w-3 h-3 text-blue-500 mr-2 mt-1" />
                              <span>{advice}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-domestika-primary text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                      Save Feedback
                    </button>
                    <button className="flex-1 border border-domestika-gray-300 text-domestika-dark py-3 rounded-lg font-medium hover:border-domestika-primary transition-colors">
                      Try Another Style
                    </button>
                  </div>
                </div>
              )}

              {!uploadedWork && !isAnalyzing && !feedback && (
                <div className="text-center py-12 text-domestika-gray-500">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-4">Upload your artwork to receive personalized AI feedback</p>
                  <div className="text-sm text-domestika-gray-400">
                    <p>✓ Detailed analysis in multiple styles</p>
                    <p>✓ Technique suggestions</p>
                    <p>✓ Course recommendations</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {practiceMode === 'collaborate' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-domestika-gray-200">
              <h2 className="text-xl font-semibold text-domestika-dark mb-6">AI Co-Creation Session</h2>
              
              {!feedback && !isAnalyzing && (
                <div className="text-center py-12">
                  <Palette className="w-16 h-16 text-domestika-primary mx-auto mb-6" />
                  <h3 className="text-xl font-medium text-domestika-dark mb-4">Start Creating Together</h3>
                  <p className="text-domestika-gray-600 mb-8 max-w-2xl mx-auto">
                    Collaborate with our AI assistant to brainstorm ideas, develop concepts, and create amazing artwork together.
                    Perfect for overcoming creative blocks and exploring new directions.
                  </p>
                  <button
                    onClick={startCollaboration}
                    className="bg-domestika-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Begin Collaboration
                  </button>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-12">
                  <Sparkles className="w-12 h-12 text-domestika-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-domestika-gray-600">Setting up your creative session...</p>
                </div>
              )}

              {feedback && !isAnalyzing && (
                <div className="space-y-6">
                  <div className="bg-domestika-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-domestika-dark mb-2">{feedback.sessionType}</h3>
                    <p className="text-domestika-gray-600">with {feedback.aiPartner}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-domestika-dark mb-4">AI Suggestions to Get Started:</h3>
                    <div className="space-y-3">
                      {feedback.suggestions?.map((suggestion: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-domestika-gray-50 rounded-lg">
                          <MessageCircle className="w-5 h-5 text-domestika-primary mt-0.5" />
                          <span className="text-domestika-gray-700">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-domestika-dark mb-4">Available Tools:</h3>
                    <div className="flex flex-wrap gap-2">
                      {feedback.tools?.map((tool: string, index: number) => (
                        <span key={index} className="bg-domestika-primary text-white px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="bg-domestika-gray-50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-domestika-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                          AI
                        </div>
                        <div className="flex-1">
                          <p className="text-domestika-gray-700">
                            Hi! I'm excited to work with you today. What kind of project would you like to explore? 
                            I can help with ideation, composition, color theory, or technical execution.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your response..."
                        className="flex-1 p-3 border border-domestika-gray-300 rounded-lg focus:border-domestika-primary focus:outline-none"
                      />
                      <button className="bg-domestika-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Course Integration Section */}
        {uploadedWork && (
          <div className="mt-12 bg-domestika-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-medium text-domestika-dark mb-6 text-center">
              Continue Your Learning Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {COURSE_INTEGRATIONS.map((course, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-domestika-gray-200">
                  <h4 className="font-medium text-domestika-dark mb-2 text-sm">{course.title}</h4>
                  <p className="text-xs text-domestika-gray-600 mb-3">by {course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-domestika-gray-500">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{course.students}</span>
                    </div>
                    <button className="text-xs text-domestika-primary hover:text-domestika-dark font-medium">
                      View Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 