'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Target, Palette, Users, BookOpen, TrendingUp, Award, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-domestika-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-domestika-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-domestika-dark">Domestika Creative Assistant</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/onboarding" className="text-domestika-gray-600 hover:text-domestika-dark transition-colors font-medium">
                Get Started
              </Link>
              <Link href="/courses" className="text-domestika-gray-600 hover:text-domestika-dark transition-colors font-medium">
                Courses
              </Link>
              <Link href="/onboarding" className="bg-domestika-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Start Learning
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-domestika-dark mb-6 leading-tight">
            Learn faster, practice better, and share more confidently with 
            <span className="text-domestika-primary"> AI-powered guidance</span>
          </h2>
          <p className="text-lg text-domestika-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized feedback on your creative work, discover tailored learning paths, 
            and connect with the global Domestika community through intelligent AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/onboarding" className="bg-domestika-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Start Your Journey
            </Link>
            <Link href="/practice" className="flex items-center text-domestika-gray-600 hover:text-domestika-dark transition-colors font-medium">
              <Play className="w-4 h-4 mr-2" />
              See How It Works
            </Link>
          </div>
        </div>

        {/* Course Integration Banner */}
        <div className="bg-domestika-gray-50 rounded-xl p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 text-domestika-primary mr-3" />
            <h3 className="text-xl font-semibold text-domestika-dark">Seamlessly integrates with your Domestika courses</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                <Target className="w-6 h-6 text-domestika-primary" />
              </div>
              <h4 className="font-medium text-domestika-dark mb-2">After Course Completion</h4>
              <p className="text-sm text-domestika-gray-600">Get AI-guided practice exercises based on what you learned</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                <Palette className="w-6 h-6 text-domestika-primary" />
              </div>
              <h4 className="font-medium text-domestika-dark mb-2">Skill Application</h4>
              <p className="text-sm text-domestika-gray-600">Apply techniques with personalized feedback and improvement tips</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                <TrendingUp className="w-6 h-6 text-domestika-primary" />
              </div>
              <h4 className="font-medium text-domestika-dark mb-2">Continuous Growth</h4>
              <p className="text-sm text-domestika-gray-600">Track progress and discover your next learning opportunities</p>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Art Feedback */}
          <div className="bg-white rounded-xl p-8 border border-domestika-gray-200 hover:border-domestika-primary transition-colors">
            <div className="flex items-center mb-4">
              <Palette className="w-8 h-8 text-domestika-primary mr-3" />
              <h3 className="text-xl font-semibold text-domestika-dark">Expert-Level AI Feedback</h3>
            </div>
            <p className="text-domestika-gray-600 mb-6 leading-relaxed">
              Upload your creative work and receive detailed, constructive feedback from AI trained on 
              expert critique patterns. Get specific improvement suggestions and technique refinements.
            </p>
            <div className="flex items-center text-sm text-domestika-gray-500 mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span>Validated by platforms like WritingMate AI Art Critic</span>
            </div>
            <Link href="/practice" className="inline-flex items-center text-domestika-primary font-medium hover:text-domestika-dark transition-colors">
              Try AI Feedback <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Personalized Learning Paths */}
          <div className="bg-white rounded-xl p-8 border border-domestika-gray-200 hover:border-domestika-primary transition-colors">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-domestika-primary mr-3" />
              <h3 className="text-xl font-semibold text-domestika-dark">Adaptive Learning Paths</h3>
            </div>
            <p className="text-domestika-gray-600 mb-6 leading-relaxed">
              Set your creative goals and skill level. Our AI creates a customized learning journey 
              with courses, practice exercises, and milestones that adapt to your progress.
            </p>
            <div className="flex items-center text-sm text-domestika-gray-500 mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span>Based on proven personalized learning systems</span>
            </div>
            <Link href="/onboarding" className="inline-flex items-center text-domestika-primary font-medium hover:text-domestika-dark transition-colors">
              Start Learning Path <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="bg-white rounded-xl p-8 border border-domestika-gray-200 mb-16">
          <h3 className="text-xl font-semibold text-domestika-dark mb-6 text-center">
            Why Choose AI-Powered Creative Learning?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-domestika-primary mb-2">73%</div>
              <div className="text-sm text-domestika-gray-600">of Domestika learners report hitting skill plateaus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-domestika-primary mb-2">12%</div>
              <div className="text-sm text-domestika-gray-600">of learners receive meaningful critique currently</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-domestika-primary mb-2">68%</div>
              <div className="text-sm text-domestika-gray-600">of creatives hesitate to share work due to fear of criticism</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-domestika-dark mb-8 text-center">
            How AI-Powered Creative Learning Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-domestika-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-domestika-dark mb-2">Complete Your Course</h4>
              <p className="text-domestika-gray-600 text-sm">
                Finish any Domestika course and connect with our AI assistant for personalized follow-up
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-domestika-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-domestika-dark mb-2">Practice & Upload</h4>
              <p className="text-domestika-gray-600 text-sm">
                Apply what you learned and upload your work for detailed AI feedback and improvement tips
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-domestika-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-domestika-dark mb-2">Grow & Share</h4>
              <p className="text-domestika-gray-600 text-sm">
                Track your progress, discover new learning paths, and share your improved work with confidence
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-domestika-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-xl font-semibold text-domestika-dark mb-6 text-center">
            Built on Proven AI Technology
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-domestika-gray-200">
              <h4 className="font-semibold text-domestika-dark mb-2">AI Art Critique Technology</h4>
              <p className="text-domestika-gray-600 text-sm mb-3">
                Similar to WritingMate AI Art Critic, our system provides detailed, constructive feedback 
                on visual creative work with multiple critique styles.
              </p>
              <div className="flex items-center text-xs text-domestika-gray-500">
                <Award className="w-3 h-3 mr-1" />
                <span>Validated by 100,000+ professionals</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-domestika-gray-200">
              <h4 className="font-semibold text-domestika-dark mb-2">Personalized Learning Systems</h4>
              <p className="text-domestika-gray-600 text-sm mb-3">
                Following proven models from platforms like Fishtree and Elephango, our AI adapts 
                to individual learning styles and progress.
              </p>
              <div className="flex items-center text-xs text-domestika-gray-500">
                <Award className="w-3 h-3 mr-1" />
                <span>$44.2B market validation</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-domestika-dark mb-4">
            Ready to Break Through Your Creative Plateau?
          </h3>
          <p className="text-domestika-gray-600 mb-8 max-w-2xl mx-auto">
            Join the next generation of creative learners who are accelerating their skills 
            with AI-powered guidance and personalized feedback.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/onboarding" className="bg-domestika-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Start Your AI Learning Journey
            </Link>
            <Link href="/practice" className="border border-domestika-gray-300 text-domestika-dark px-8 py-3 rounded-lg font-medium hover:border-domestika-primary hover:text-domestika-primary transition-colors">
              Try AI Feedback Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 