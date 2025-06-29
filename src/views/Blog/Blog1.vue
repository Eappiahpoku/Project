<!-- 
  Blog1View.vue
  Individual blog post page for "Mastering the Pomodoro Technique"
  - Full article content with proper typography
  - Table of contents for easy navigation
  - Back to blog navigation
  - Related articles section
  - Mobile-first responsive design
  - Ghana-optimized for low-bandwidth conditions
  - Touch-optimized for mobile users (48px+ targets)
-->

<template>
  <div class="min-h-screen bg-gray-50">
    
    <!-- ===== ARTICLE HERO SECTION ===== -->
    <section class="bg-gradient-to-br from-primary to-primary-600 py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back to Blog Button -->
        <div class="mb-8">
          <button
            @click="navigateBack"
            class="group inline-flex items-center text-primary-100 hover:text-white transition-colors duration-200 min-h-[48px]"
            aria-label="Back to blog"
          >
            <svg class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </button>
        </div>

        <!-- Article Header -->
        <div class="text-center">
          <!-- Category Badge -->
          <div class="mb-4">
            <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
              Time Management
            </span>
          </div>
          
          <!-- Article Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Mastering the Pomodoro Technique for Better Focus
          </h1>
          
          <!-- Article Subtitle -->
          <p class="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn how to use 25-minute focused work sessions to dramatically improve your productivity 
            and concentration. Perfect for students preparing for exams.
          </p>
          
          <!-- Article Metadata -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-100">
            <div class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>by Edward A-P</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>June 25, 2025</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ARTICLE CONTENT SECTION ===== -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <!-- Table of Contents Sidebar -->
          <div class="lg:col-span-1">
            <div class="lg:sticky lg:top-8">
              <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav class="space-y-2">
                  <a
                    v-for="section in tableOfContents"
                    :key="section.id"
                    :href="`#${section.id}`"
                    @click="scrollToSection(section.id)"
                    class="block text-sm text-gray-600 hover:text-primary transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    :class="{ 'text-primary border-primary': activeSection === section.id }"
                  >
                    {{ section.title }}
                  </a>
                </nav>
              </div>
              
              <!-- Quick Stats -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Work Session</span>
                    <span class="text-sm font-medium text-gray-900">25 minutes</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Short Break</span>
                    <span class="text-sm font-medium text-gray-900">5 minutes</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Long Break</span>
                    <span class="text-sm font-medium text-gray-900">15-30 minutes</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Effectiveness</span>
                    <span class="text-sm font-medium text-primary">+40% Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Article Content -->
          <div class="lg:col-span-3">
            <article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              <!-- Article Featured Image -->
              <div class="aspect-video bg-gradient-to-br from-primary to-primary-600 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="h-24 w-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <!-- Image overlay for better text readability -->
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm opacity-80">Illustration: The Pomodoro Timer Concept</p>
                </div>
              </div>

              <!-- Article Body -->
              <div class="p-8 sm:p-12">
                
                <!-- Introduction Section -->
                <section id="introduction" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      In today's digital age, maintaining focus has become increasingly challenging for students. 
                      With social media notifications, messaging apps, and constant distractions, many Ghanaian 
                      students struggle to maintain concentration during study sessions.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      The Pomodoro Technique, developed by Francesco Cirillo in the late 1980s, offers a simple 
                      yet powerful solution to this modern problem. Named after the tomato-shaped kitchen timer 
                      (pomodoro in Italian), this technique has helped millions of students worldwide improve 
                      their focus and productivity.
                    </p>
                    <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                      <p class="text-primary font-medium">
                        <strong>Key Insight:</strong> The Pomodoro Technique works by leveraging your brain's 
                        natural attention cycles and creating artificial urgency through time constraints.
                      </p>
                    </div>
                  </div>
                </section>

                <!-- How It Works Section -->
                <section id="how-it-works" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How the Pomodoro Technique Works</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      The Pomodoro Technique is beautifully simple. Here's the complete process:
                    </p>
                    
                    <!-- Step-by-step process -->
                    <div class="space-y-6 mb-8">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Choose Your Task</h4>
                          <p class="text-gray-600">
                            Select a specific task you want to work on. Make it concrete and measurable. 
                            For example: "Read Chapter 5 of Biology textbook" rather than just "study biology."
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Set Timer for 25 Minutes</h4>
                          <p class="text-gray-600">
                            Set a timer for exactly 25 minutes. You can use your phone, the StudyDock timer app, 
                            or any digital timer. The key is to commit to working for the full duration.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Work With Complete Focus</h4>
                          <p class="text-gray-600">
                            During these 25 minutes, work on your chosen task with complete concentration. 
                            No phone checking, no social media, no distractions. If you think of something 
                            else, write it down and return to it later.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Take a 5-Minute Break</h4>
                          <p class="text-gray-600">
                            When the timer rings, take a 5-minute break. Stand up, stretch, grab some water, 
                            or step outside. Avoid screens during this break to let your brain truly rest.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          5
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Repeat and Track</h4>
                          <p class="text-gray-600">
                            After every 4 pomodoros (work sessions), take a longer break of 15-30 minutes. 
                            Keep track of how many pomodoros you complete each day to measure your progress.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Benefits Section -->
                <section id="benefits" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why It's Perfect for Ghanaian Students</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      The Pomodoro Technique is especially beneficial for students in Ghana for several reasons:
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Works Without Internet</h4>
                        </div>
                        <p class="text-gray-600">
                          No need for constant internet connection. You can use any basic timer or even 
                          your phone's built-in timer to implement this technique.
                        </p>
                      </div>
                      
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Completely Free</h4>
                        </div>
                        <p class="text-gray-600">
                          No expensive apps or subscriptions required. The technique can be implemented 
                          with any timer, making it accessible to all students.
                        </p>
                      </div>
                      
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Fits Any Schedule</h4>
                        </div>
                        <p class="text-gray-600">
                          Whether you have 30 minutes or 3 hours to study, you can fit in pomodoro 
                          sessions. Perfect for busy students balancing work and study.
                        </p>
                      </div>
                      
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Reduces Mental Fatigue</h4>
                        </div>
                        <p class="text-gray-600">
                          Regular breaks prevent burnout and maintain high energy levels throughout 
                          long study sessions, especially important in Ghana's warm climate.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Getting Started Section -->
                <section id="getting-started" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Getting Started Today</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Ready to try the Pomodoro Technique? Here's how to start immediately:
                    </p>
                    
                    <div class="bg-primary rounded-xl p-8 text-white mb-8">
                      <h4 class="text-xl font-semibold mb-4">Your First Pomodoro Session</h4>
                      <ol class="space-y-3 text-primary-100">
                        <li class="flex items-start">
                          <span class="font-bold mr-3">1.</span>
                          <span>Choose one specific task (e.g., "Review math formulas for tomorrow's quiz")</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">2.</span>
                          <span>Put your phone in another room or turn on airplane mode</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">3.</span>
                          <span>Set a timer for 25 minutes</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">4.</span>
                          <span>Work on the task with complete focus until the timer rings</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">5.</span>
                          <span>Take a 5-minute break and celebrate your accomplishment!</span>
                        </li>
                      </ol>
                    </div>
                    
                    <!-- Tips for Success -->
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Tips for Success</h3>
                    <ul class="space-y-3 text-gray-600 mb-6">
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Start small:</strong> Begin with just 2-3 pomodoros per day and gradually increase</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Be specific:</strong> Choose concrete, measurable tasks for each session</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Track progress:</strong> Keep a simple tally of completed pomodoros each day</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Protect the break:</strong> Use break time to truly rest, not scroll social media</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <!-- Common Mistakes Section -->
                <section id="common-mistakes" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Many students make these mistakes when starting with the Pomodoro Technique:
                    </p>
                    
                    <div class="space-y-6">
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Checking Phone During Work Sessions</h4>
                        <p class="text-red-700">
                          Even a quick glance at your phone can break your focus. Put it in another room or use airplane mode.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Skipping Breaks</h4>
                        <p class="text-red-700">
                          Breaks are not optional! They're essential for maintaining focus throughout the day. Don't skip them to "get more done."
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Choosing Tasks That Are Too Big</h4>
                        <p class="text-red-700">
                          "Study for economics exam" is too vague. Break it down: "Read chapter 3 notes" or "Practice 5 economics problems."
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Giving Up After One Bad Session</h4>
                        <p class="text-red-700">
                          If you get distracted during a pomodoro, don't abandon the technique. Start fresh with the next session and learn from what went wrong.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Conclusion Section -->
                <section id="conclusion" class="mb-8">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      The Pomodoro Technique is more than just a time management method—it's a way to train 
                      your brain for sustained focus in our distraction-filled world. For Ghanaian students 
                      facing the challenges of modern education, this technique offers a simple, free, and 
                      effective solution.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Remember, the goal isn't to work harder—it's to work smarter. By giving your brain 
                      regular breaks and creating artificial urgency through time constraints, you can 
                      achieve more in less time while reducing stress and mental fatigue.
                    </p>
                    
                    <div class="bg-gradient-to-r from-primary to-primary-600 rounded-xl p-8 text-white">
                      <h3 class="text-xl font-semibold mb-4">Start Your Pomodoro Journey Today</h3>
                      <p class="text-primary-100 mb-6">
                        Don't wait for the perfect moment. Set a timer for 25 minutes right now and begin 
                        your first pomodoro session. Your future self will thank you for taking this simple 
                        step toward better focus and productivity.
                      </p>
                      <button
                        @click="navigateToPomodoro"
                        class="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[48px]"
                      >
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Try StudyDock Pomodoro Timer
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== RELATED ARTICLES SECTION ===== -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
          <p class="text-lg text-gray-600">
            Continue learning with these science-backed study techniques
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Related Article 1: Active Recall -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-secondary to-secondary-600 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                  Memory Techniques
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                Active Recall: The Science of Effective Learning
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Discover why testing yourself is more effective than re-reading notes.
              </p>
              
              <button
                @click="navigateToBlogPost('blog2')"
                class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 2: Spaced Repetition -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-accent to-highlight relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                  Long-term Learning
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                Spaced Repetition: Remember Everything Forever
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Master the art of spaced repetition to move information to long-term memory.
              </p>
              
              <button
                @click="navigateToBlogPost('blog3')"
                class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 3: Mind Mapping -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-primary-600 to-secondary relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Visual Learning
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                Mind Mapping: Visualize Your Way to Success
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Transform complex information into visual mind maps for better learning.
              </p>
              
              <button
                @click="navigateToBlogPost('blog4')"
                class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// ===== Types & Interfaces =====
interface TableOfContentsItem {
  id: string
  title: string
}

// ===== Router Setup =====
const router = useRouter()

// ===== Reactive State =====
const activeSection = ref('introduction')

// ===== Table of Contents Data =====
const tableOfContents: TableOfContentsItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'how-it-works', title: 'How It Works' },
  { id: 'benefits', title: 'Benefits for Students' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'common-mistakes', title: 'Common Mistakes' },
  { id: 'conclusion', title: 'Conclusion' }
]

// ===== Navigation Functions =====
/**
 * Navigate back to the main blog page
 * Provides clear path back to blog overview
 */
function navigateBack(): void {
  router.push('/blog')
}

/**
 * Navigate to specific blog post pages
 * Links to other related articles
 */
function navigateToBlogPost(blogId: string): void {
  const routes = {
    blog2: '/blog/blog2',
    blog3: '/blog/blog3',
    blog4: '/blog/blog4',
    blog5: '/blog/blog5'
  }
  
  const route = routes[blogId as keyof typeof routes]
  if (route) {
    router.push(route)
  }
}

/**
 * Navigate to StudyDock Pomodoro timer tool
 * Call-to-action to try the actual tool
 */
function navigateToPomodoro(): void {
  router.push('/tools/pomodoro')
}

/**
 * Smooth scroll to specific section within the article
 * Enhances navigation experience within long content
 */
function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// ===== Scroll Tracking for Table of Contents =====
/**
 * Track which section is currently in view
 * Updates table of contents highlighting based on scroll position
 */
function updateActiveSection(): void {
  const sections = tableOfContents.map(item => item.id)
  const scrollPosition = window.scrollY + 100 // Offset for header
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i])
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

// ===== Lifecycle Hooks =====
onMounted(() => {
  // Add scroll listener for table of contents highlighting
  window.addEventListener('scroll', updateActiveSection)
  
  // Set initial active section
  updateActiveSection()
})

onUnmounted(() => {
  // Clean up scroll listener
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Mobile-first responsive design (grid-cols-1 lg:grid-cols-4)
  - StudyDock color palette (primary, secondary, accent, highlight)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (clear typography, offline-friendly design)
  - Modern article typography (prose classes, proper line height)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (smooth scrolling, efficient event handling)
  - Educational design (step-by-step processes, clear sections)
  - Professional blog layout (table of contents, related articles)
-->