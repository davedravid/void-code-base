'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Target, Clock, Sparkles, BookOpen, Users, Award, TrendingUp } from 'lucide-react'

const CREATIVE_FIELDS = [
  { id: 'illustration', name: 'Illustration', icon: '🎨', popular: true },
  { id: 'design', name: 'Graphic Design', icon: '✏️', popular: true },
  { id: 'photography', name: 'Photography', icon: '📷', popular: true },
  { id: 'animation', name: 'Animation', icon: '🎬', popular: false },
  { id: 'writing', name: 'Creative Writing', icon: '📝', popular: false },
  { id: 'crafts', name: 'Arts & Crafts', icon: '🧵', popular: false },
]

const SKILL_LEVELS = [
  { id: 'beginner', name: 'Beginner', desc: 'Just starting out or new to the field' },
  { id: 'intermediate', name: 'Intermediate', desc: 'Have some experience and basic skills' },
  { id: 'advanced', name: 'Advanced', desc: 'Experienced with strong fundamental skills' },
]

const GOALS = [
  { id: 'hobby', name: 'Creative Hobby', desc: 'Learn for personal enjoyment and fulfillment' },
  { id: 'professional', name: 'Professional Development', desc: 'Advance my career or start a creative business' },
  { id: 'portfolio', name: 'Portfolio Building', desc: 'Create work to showcase my skills' },
  { id: 'specific', name: 'Specific Project', desc: 'Learn for a particular project or goal' },
]

const COURSE_SUGGESTIONS: Record<string, Array<{title: string, students: string, rating: string}>> = {
  illustration: [
    { title: 'Drawing for Beginners Level -1', students: '268,029', rating: '99%' },
    { title: 'Creative Drawing Techniques for Beginners', students: '173,210', rating: '99%' },
    { title: 'Modern Watercolor Techniques', students: '225,132', rating: '99%' },
  ],
  design: [
    { title: 'Introduction to Adobe Photoshop', students: '376,256', rating: '100%' },
    { title: 'Introduction to Adobe Illustrator', students: '214,086', rating: '98%' },
    { title: 'Brand Strategy on Instagram', students: '176,662', rating: '98%' },
  ],
  photography: [
    { title: 'Professional Photography for Instagram', students: '276,971', rating: '99%' },
    { title: 'Content Creation and Editing for Instagram Stories', students: '261,305', rating: '98%' },
    { title: 'Photography: Art and Techniques Specialization', students: '3,082', rating: '100%' },
  ],
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    field: '',
    level: '',
    goal: '',
    timeCommitment: 5,
    completedCourses: []
  })

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-domestika-dark mb-4">
              What creative field interests you most?
            </h2>
            <p className="text-domestika-gray-600 max-w-2xl mx-auto">
              Choose your primary area of interest so we can personalize your learning path 
              and connect you with relevant Domestika courses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {CREATIVE_FIELDS.map((field) => (
              <button
                key={field.id}
                onClick={() => setFormData({ ...formData, field: field.id })}
                className={`p-6 rounded-xl border text-left transition-all ${
                  formData.field === field.id
                    ? 'border-domestika-primary bg-domestika-primary bg-opacity-5'
                    : 'border-domestika-gray-200 hover:border-domestika-primary'
                }`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{field.icon}</span>
                  <h3 className="font-semibold text-domestika-dark">{field.name}</h3>
                  {field.popular && (
                    <span className="ml-auto text-xs bg-domestika-primary text-white px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-domestika-gray-600">
                  Explore courses and get AI feedback tailored to {field.name.toLowerCase()}
                </p>
              </button>
            ))}
          </div>
        </div>
      )
    }

    if (step === 2) {
      return (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-domestika-dark mb-4">
              What's your current skill level?
            </h2>
            <p className="text-domestika-gray-600 max-w-2xl mx-auto">
              This helps us recommend the right courses and calibrate AI feedback to your experience level.
            </p>
          </div>
          
          <div className="space-y-4">
            {SKILL_LEVELS.map((level) => (
              <button
                key={level.id}
                onClick={() => setFormData({ ...formData, level: level.id })}
                className={`w-full p-6 rounded-xl border text-left transition-all ${
                  formData.level === level.id
                    ? 'border-domestika-primary bg-domestika-primary bg-opacity-5'
                    : 'border-domestika-gray-200 hover:border-domestika-primary'
                }`}
              >
                <h3 className="font-semibold text-domestika-dark mb-2">{level.name}</h3>
                <p className="text-domestika-gray-600">{level.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )
    }

    if (step === 3) {
      return (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-domestika-dark mb-4">
              What's your main goal?
            </h2>
            <p className="text-domestika-gray-600 max-w-2xl mx-auto">
              Understanding your goals helps us prioritize the right skills and create a meaningful learning journey.
            </p>
          </div>
          
          <div className="space-y-4">
            {GOALS.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setFormData({ ...formData, goal: goal.id })}
                className={`w-full p-6 rounded-xl border text-left transition-all ${
                  formData.goal === goal.id
                    ? 'border-domestika-primary bg-domestika-primary bg-opacity-5'
                    : 'border-domestika-gray-200 hover:border-domestika-primary'
                }`}
              >
                <h3 className="font-semibold text-domestika-dark mb-2">{goal.name}</h3>
                <p className="text-domestika-gray-600">{goal.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )
    }

    if (step === 4) {
      const courses = COURSE_SUGGESTIONS[formData.field] || []
      return (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <Sparkles className="w-16 h-16 text-domestika-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-domestika-dark mb-4">
              Your Personalized Learning Path
            </h2>
            <p className="text-domestika-gray-600 max-w-2xl mx-auto">
              Based on your preferences, here's a curated selection of Domestika courses 
              plus AI-powered practice sessions to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recommended Courses */}
            <div className="bg-white rounded-xl p-6 border border-domestika-gray-200">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-domestika-primary mr-2" />
                <h3 className="font-semibold text-domestika-dark">Recommended Courses</h3>
              </div>
              <div className="space-y-3">
                                 {courses.map((course: {title: string, students: string, rating: string}, index: number) => (
                   <div key={index} className="p-3 bg-domestika-gray-50 rounded-lg">
                     <h4 className="font-medium text-domestika-dark text-sm mb-1">{course.title}</h4>
                     <div className="flex items-center text-xs text-domestika-gray-500">
                       <Users className="w-3 h-3 mr-1" />
                       <span className="mr-3">{course.students} students</span>
                       <Award className="w-3 h-3 mr-1" />
                       <span>{course.rating} positive reviews</span>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* AI Practice Plan */}
            <div className="bg-white rounded-xl p-6 border border-domestika-gray-200">
              <div className="flex items-center mb-4">
                <Target className="w-5 h-5 text-domestika-primary mr-2" />
                <h3 className="font-semibold text-domestika-dark">AI Practice Plan</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-domestika-gray-50 rounded-lg">
                  <h4 className="font-medium text-domestika-dark text-sm mb-1">Week 1: Foundation Practice</h4>
                  <p className="text-xs text-domestika-gray-600">Complete exercises + get AI feedback on basics</p>
                </div>
                <div className="p-3 bg-domestika-gray-50 rounded-lg">
                  <h4 className="font-medium text-domestika-dark text-sm mb-1">Week 2: Skill Application</h4>
                  <p className="text-xs text-domestika-gray-600">Apply course techniques + receive personalized tips</p>
                </div>
                <div className="p-3 bg-domestika-gray-50 rounded-lg">
                  <h4 className="font-medium text-domestika-dark text-sm mb-1">Week 3: Portfolio Building</h4>
                  <p className="text-xs text-domestika-gray-600">Create showcase pieces + get career guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-domestika-gray-50 rounded-xl p-6 mt-8">
            <h3 className="font-semibold text-domestika-dark mb-4 text-center">
              Expected Progress with AI Assistance
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-domestika-primary mb-1">2x</div>
                <div className="text-sm text-domestika-gray-600">Faster skill acquisition</div>
              </div>
              <div>
                <div className="text-xl font-bold text-domestika-primary mb-1">85%</div>
                <div className="text-sm text-domestika-gray-600">Improvement satisfaction</div>
              </div>
              <div>
                <div className="text-xl font-bold text-domestika-primary mb-1">3x</div>
                <div className="text-sm text-domestika-gray-600">More confident sharing</div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.field
      case 2: return formData.level
      case 3: return formData.goal
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-domestika-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-domestika-gray-600 hover:text-domestika-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-domestika-primary rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-domestika-dark font-medium">Personalized Onboarding</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-domestika-gray-600">Step {step} of 4</span>
          <span className="text-sm text-domestika-gray-600">{Math.round((step / 4) * 100)}% complete</span>
        </div>
        <div className="w-full bg-domestika-gray-200 rounded-full h-2">
          <div 
            className="bg-domestika-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pb-12">
        {renderStepContent()}

        {step < 4 && (
          <div className="flex justify-between mt-12">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center text-domestika-gray-600 hover:text-domestika-dark font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
            )}
            <div className="ml-auto">
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex items-center bg-domestika-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 3 ? 'Generate My Path' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex justify-center mt-12 space-x-4">
            <Link 
              href="/courses" 
              className="bg-domestika-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600"
            >
              Browse AI-Enhanced Courses
            </Link>
            <button 
              onClick={() => setStep(1)}
              className="border border-domestika-gray-300 text-domestika-dark px-8 py-3 rounded-lg font-medium hover:border-domestika-primary"
            >
              Customize Path
            </button>
          </div>
        )}
      </main>
    </div>
  )
} 