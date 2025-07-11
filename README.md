# Domestika Creative Assistant - Prototype

## Overview
This prototype demonstrates the **Domestika Creative Assistant**, an AI-powered companion designed to help creative learners:
- **Learn faster** through personalized skill journeys with AI-enhanced courses
- **Practice better** with intelligent feedback integrated into assignments
- **Share more confidently** by connecting with the right community

## 🚀 Demo Features

### Core User Flows Implemented:

1. **Personalized Onboarding** (`/onboarding`)
   - Interactive goal-setting questionnaire
   - AI-curated learning path recommendations
   - Customized curriculum based on user preferences

2. **AI-Enhanced Course Learning** (`/courses`)
   - Course catalog with AI-integrated learning
   - Individual course pages with lessons and assignments
   - Integrated AI assistant for contextual help
   - Assignment submission with AI feedback
   - Progress tracking and personalized insights

3. **In-Course AI Assistant** (`/courses/[courseId]/lessons/[lessonId]`)
   - Real-time AI help during lessons
   - Contextual guidance based on current lesson content
   - Assignment feedback and improvement suggestions
   - Creative collaboration and problem-solving support

## 🛠 Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom Domestika brand colors
- **Icons**: Lucide React
- **Language**: TypeScript
- **Animations**: CSS animations with Framer Motion ready

## 🎨 Design System
- **Primary Color**: #FF6B35 (Domestika Orange)
- **Secondary Color**: #004E64 (Deep Blue)
- **Accent Color**: #F5F5F5 (Light Gray)
- **Typography**: Inter font family
- **Components**: Modern, accessible UI with consistent spacing

## 📁 Project Structure
```
domestika-creative-assistant/
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage with feature overview
│   ├── onboarding/
│   │   └── page.tsx         # Personalized onboarding flow
│   ├── courses/
│   │   ├── page.tsx         # Course catalog with AI-enhanced courses
│   │   └── [courseId]/
│   │       ├── page.tsx     # Individual course with lessons & assignments
│   │       └── lessons/
│   │           └── [lessonId]/
│   │               └── page.tsx  # Lesson with integrated AI assistant
│   └── practice/            # Legacy practice interface (deprecated)
│       └── page.tsx         # Moved to course-integrated assignments
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
└── README.md               # This file
```

## 🔧 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 💡 Prototype Limitations & Next Steps

### Current Limitations:
- **Mock AI Responses**: Feedback and recommendations are simulated
- **No Backend**: All data is client-side only
- **Limited File Handling**: Basic image upload without processing
- **No Authentication**: User sessions not implemented

### Production Roadmap:
1. **AI Integration**: Connect to GPT-4V, Claude, or custom models
2. **Backend API**: User accounts, data persistence, file storage
3. **Real Feedback**: Computer vision analysis for artwork critique
4. **Community Features**: Mentor matching, peer connections
5. **Mobile App**: React Native or Progressive Web App

## 📊 Key Metrics Tracked (Prototype Ready)
- **Course Completion Rate with AI Integration**
- **Assignment Submission & Feedback Quality Scores** 
- **Time to First AI Interaction within Course**
- **In-Course AI Assistant Engagement**
- **User Progression Through Course Milestones**
- **Assignment Improvement Scores Over Time**

## 🎯 Success Criteria
1. **Course-Centric Learning**: Seamless integration of AI within course structure
2. **Contextual AI Assistant**: AI help that understands current lesson and assignment context
3. **Assignment-Based Progress**: Learning measured through practical application
4. **Measurable Improvement**: AI feedback leading to demonstrable skill growth

## 🔗 Related Documents
- [Strategy & Roadmap Document](./strategy-document.md)
- [Metrics & Operations Sheet](./metrics-operations.md)

## 📧 Submission
This prototype addresses the Domestika PM - AI assignment requirements:
- ✅ Two core user flows implemented
- ✅ Modern, responsive web interface
- ✅ AI-driven personalization concepts
- ✅ Clear path to production implementation

---

*Prototype developed as part of Domestika Product Manager - AI role application* 