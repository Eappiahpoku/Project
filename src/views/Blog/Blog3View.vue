<!-- 
  Blog3View.vue
  Individual blog post page for "Spaced Repetition: Remember Everything Forever"
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
    <section class="bg-gradient-to-br from-accent to-highlight py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back to Blog Button -->
        <div class="mb-8">
          <button
            @click="navigateBack"
            class="group inline-flex items-center text-gray-800 hover:text-gray-900 transition-colors duration-200 min-h-[48px]"
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
            <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/30 backdrop-blur-sm text-gray-900">
              Long-term Learning
            </span>
          </div>
          
          <!-- Article Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Spaced Repetition: Remember Everything Forever
          </h1>
          
          <!-- Article Subtitle -->
          <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Master the art of spaced repetition to move information from short-term to long-term memory. 
            Learn optimal spacing intervals for maximum retention.
          </p>
          
          <!-- Article Metadata -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700">
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
              <span>June 20, 2025</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>6 min read</span>
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
                    class="block text-sm text-gray-600 hover:text-accent transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-accent pl-3"
                    :class="{ 'text-accent border-accent': activeSection === section.id }"
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
                    <span class="text-sm text-gray-600">Memory Retention</span>
                    <span class="text-sm font-medium text-accent">+80%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Optimal Intervals</span>
                    <span class="text-sm font-medium text-gray-900">1-3-7-21 days</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Study Time</span>
                    <span class="text-sm font-medium text-accent">Reduced</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Forgetting Rate</span>
                    <span class="text-sm font-medium text-gray-900">Minimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Article Content -->
          <div class="lg:col-span-3">
            <article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              <!-- Article Featured Image -->
              <div class="aspect-video bg-gradient-to-br from-accent to-highlight relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="h-24 w-24 text-gray-900 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <!-- Image overlay for better text readability -->
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute bottom-4 left-4 text-gray-900">
                  <p class="text-sm opacity-80">Illustration: Spaced Repetition Learning Cycle</p>
                </div>
              </div>

              <!-- Article Body -->
              <div class="p-8 sm:p-12">
                
                <!-- Introduction Section -->
                <section id="introduction" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Have you ever studied hard for an exam, performed well, but then forgotten most of the 
                      material a few weeks later? This frustrating experience is incredibly common among students 
                      and highlights one of the biggest challenges in learning: moving information from short-term 
                      to long-term memory.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Spaced repetition is a learning technique that solves this problem by strategically timing 
                      when you review information. Instead of cramming or reviewing randomly, spaced repetition 
                      uses scientifically-proven intervals to help you remember information for months or even 
                      years with minimal effort.
                    </p>
                    <div class="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-6">
                      <p class="text-gray-900 font-medium">
                        <strong>Key Insight:</strong> By reviewing information just before you're about to forget it, 
                        you strengthen the memory and extend how long you'll remember it.
                      </p>
                    </div>
                  </div>
                </section>

                <!-- What Is Spaced Repetition Section -->
                <section id="what-is-spaced-repetition" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Is Spaced Repetition?</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Spaced repetition is a learning technique where you review information at increasing intervals 
                      over time. Instead of studying something once and hoping it sticks, you review it multiple 
                      times with strategic gaps between each review session.
                    </p>
                    
                    <!-- Timeline Visualization -->
                    <div class="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Typical Spaced Repetition Schedule</h4>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-accent rounded-full mr-4"></div>
                          <div class="flex-1">
                            <div class="font-medium text-gray-900">Day 1: Learn new material</div>
                            <div class="text-sm text-gray-600">Initial learning session</div>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-accent rounded-full mr-4"></div>
                          <div class="flex-1">
                            <div class="font-medium text-gray-900">Day 2: First review (1 day later)</div>
                            <div class="text-sm text-gray-600">Quick review to reinforce</div>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-accent rounded-full mr-4"></div>
                          <div class="flex-1">
                            <div class="font-medium text-gray-900">Day 4: Second review (3 days later)</div>
                            <div class="text-sm text-gray-600">Longer gap, deeper consolidation</div>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-accent rounded-full mr-4"></div>
                          <div class="flex-1">
                            <div class="font-medium text-gray-900">Day 11: Third review (7 days later)</div>
                            <div class="text-sm text-gray-600">Memory is now more stable</div>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-accent rounded-full mr-4"></div>
                          <div class="flex-1">
                            <div class="font-medium text-gray-900">Day 32: Final review (21 days later)</div>
                            <div class="text-sm text-gray-600">Information moves to long-term memory</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Science Behind Section -->
                <section id="forgetting-curve" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Forgetting Curve Problem</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      To understand why spaced repetition works, we need to understand the "forgetting curve" 
                      discovered by German psychologist Hermann Ebbinghaus in 1885.
                    </p>
                    
                    <!-- Forgetting Curve Stats -->
                    <div class="bg-red-50 rounded-xl p-8 mb-8">
                      <h4 class="text-xl font-semibold text-red-800 mb-4">How Quickly We Forget</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-red-700">
                        <div>
                          <div class="text-3xl font-bold text-red-800 mb-2">20 minutes</div>
                          <p class="text-sm">We forget 40% of new information</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-red-800 mb-2">1 day</div>
                          <p class="text-sm">We forget 60% of new information</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-red-800 mb-2">1 week</div>
                          <p class="text-sm">We forget 75% of new information</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-red-800 mb-2">1 month</div>
                          <p class="text-sm">We forget 80% of new information</p>
                        </div>
                      </div>
                    </div>
                    
                    <p class="text-gray-600 leading-relaxed mb-6">
                      This rapid forgetting explains why cramming doesn't work for long-term retention. You might 
                      remember enough for next week's exam, but by the time finals come around, most of the 
                      information is gone.
                    </p>
                    
                    <!-- Solution -->
                    <div class="bg-accent rounded-xl p-8 text-gray-900 mb-8">
                      <h4 class="text-xl font-semibold mb-4">How Spaced Repetition Solves This</h4>
                      <p class="mb-4">
                        Each time you review information just before forgetting it, you:
                      </p>
                      <ul class="space-y-2">
                        <li class="flex items-start">
                          <span class="font-bold mr-3">•</span>
                          <span>Reset the forgetting curve back to 100% retention</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">•</span>
                          <span>Extend the time before you forget it again</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">•</span>
                          <span>Strengthen the neural pathways for permanent retention</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <!-- Optimal Intervals Section -->
                <section id="optimal-intervals" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Optimal Spacing Intervals</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Research has identified optimal intervals for spaced repetition. The key is to review 
                      information just before you're likely to forget it, but not so soon that it's still 
                      fresh in your mind.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <!-- Beginner Schedule -->
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Basic Schedule</h4>
                        </div>
                        <p class="text-gray-600 mb-3">
                          Perfect for students starting with spaced repetition.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Review after 1 day</li>
                          <li>• Review after 3 days</li>
                          <li>• Review after 1 week</li>
                          <li>• Review after 2 weeks</li>
                          <li>• Review after 1 month</li>
                        </ul>
                      </div>
                      
                      <!-- Advanced Schedule -->
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Advanced Schedule</h4>
                        </div>
                        <p class="text-gray-600 mb-3">
                          For experienced users who want maximum efficiency.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Review after 1 day</li>
                          <li>• Review after 4 days</li>
                          <li>• Review after 2 weeks</li>
                          <li>• Review after 2 months</li>
                          <li>• Review after 6 months</li>
                        </ul>
                      </div>
                    </div>
                    
                    <!-- Adaptive Intervals -->
                    <div class="bg-highlight/20 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-3">💡 Pro Tip: Adaptive Intervals</h4>
                      <p class="text-gray-600 mb-3">
                        The best spaced repetition systems adapt based on how well you remember each item:
                      </p>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Easy recall:</strong> Increase the interval (wait longer)</li>
                        <li>• <strong>Difficult recall:</strong> Decrease the interval (review sooner)</li>
                        <li>• <strong>Forgot completely:</strong> Start the interval sequence over</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <!-- Implementation Section -->
                <section id="how-to-implement" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How to Implement Spaced Repetition</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      You can implement spaced repetition using various methods, from simple paper cards 
                      to sophisticated software. Here are the most effective approaches:
                    </p>
                    
                    <div class="space-y-6 mb-8">
                      <!-- Method 1: Digital Apps -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                            1
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Digital Spaced Repetition Apps</h4>
                            <p class="text-gray-600 mb-3">
                              Apps automatically calculate optimal review times and track your progress.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>Popular options for Ghana:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Anki (free, works offline)</li>
                                <li>• Quizlet (simple, mobile-friendly)</li>
                                <li>• StudyDock Flashcards (optimized for Ghana)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Method 2: Manual System -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                            2
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Manual Card System</h4>
                            <p class="text-gray-600 mb-3">
                              Use physical cards with a simple box system for tracking intervals.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>Simple 5-box system:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Box 1: Daily review</li>
                                <li>• Box 2: Every 3 days</li>
                                <li>• Box 3: Weekly review</li>
                                <li>• Box 4: Monthly review</li>
                                <li>• Box 5: Permanent storage</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Method 3: Notebook System -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                            3
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Notebook Schedule System</h4>
                            <p class="text-gray-600 mb-3">
                              Perfect for students who prefer writing and don't always have device access.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>How it works:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Write topics with review dates</li>
                                <li>• Check calendar daily for what to review</li>
                                <li>• Update next review date after each session</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Getting Started Section -->
                <section id="getting-started" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Getting Started Today</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Ready to transform your long-term learning? Here's how to start implementing spaced 
                      repetition immediately:
                    </p>
                    
                    <div class="bg-accent rounded-xl p-8 text-gray-900 mb-8">
                      <h4 class="text-xl font-semibold mb-4">Your First Spaced Repetition Session</h4>
                      <ol class="space-y-3">
                        <li class="flex items-start">
                          <span class="font-bold mr-3">1.</span>
                          <span>Choose one topic you studied recently (within the last week)</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">2.</span>
                          <span>Create 5-10 questions about the most important concepts</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">3.</span>
                          <span>Test yourself on these questions without looking at notes</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">4.</span>
                          <span>Schedule your next review for 3 days from now</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">5.</span>
                          <span>Set a reminder and stick to the schedule!</span>
                        </li>
                      </ol>
                    </div>
                    
                    <!-- Implementation Tips -->
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Success Tips</h3>
                    <ul class="space-y-3 text-gray-600 mb-6">
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Start small:</strong> Begin with just 5-10 items to avoid overwhelm</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Be consistent:</strong> Daily review sessions are better than weekly marathons</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Track your progress:</strong> Keep notes on what you're remembering well</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Adjust intervals:</strong> If something's too easy, wait longer; if too hard, review sooner</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <!-- Common Mistakes Section -->
                <section id="common-mistakes" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Many students struggle with spaced repetition at first. Here are the most common mistakes 
                      and how to avoid them:
                    </p>
                    
                    <div class="space-y-6">
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Reviewing Too Frequently</h4>
                        <p class="text-red-700">
                          Reviewing every day defeats the purpose. The gaps between reviews are crucial 
                          for strengthening memory. Trust the intervals even if it feels uncomfortable.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Creating Too Many Cards at Once</h4>
                        <p class="text-red-700">
                          Starting with hundreds of cards leads to burnout. Begin with 10-20 cards and 
                          gradually add more as you build the habit.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Making Cards Too Complex</h4>
                        <p class="text-red-700">
                          Each card should test one specific fact or concept. Complex cards are hard to 
                          review quickly and break the spaced repetition flow.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Skipping Review Sessions</h4>
                        <p class="text-red-700">
                          Consistency is crucial. Missing review sessions breaks the carefully timed intervals 
                          and reduces effectiveness significantly.
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
                      Spaced repetition is one of the most powerful learning techniques ever discovered. 
                      By working with your brain's natural forgetting curve instead of against it, you can 
                      remember information for years with minimal effort.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      For Ghanaian students preparing for competitive exams like WASSCE or university entrance 
                      tests, spaced repetition offers a way to build a solid foundation of knowledge that 
                      will serve you throughout your academic career and beyond.
                    </p>
                    
                    <div class="bg-gradient-to-r from-accent to-highlight rounded-xl p-8 text-gray-900">
                      <h3 class="text-xl font-semibold mb-4">Start Your Spaced Repetition Journey</h3>
                      <p class="mb-6">
                        The best time to start was yesterday. The second best time is now. Pick one subject 
                        you're currently studying and create your first spaced repetition schedule today.
                      </p>
                      <button
                        @click="navigateToSpacedRepetition"
                        class="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[48px] shadow-lg"
                      >
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Try StudyDock Spaced Repetition
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
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group overflow-hidden">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                Active Recall: The Science of Effective Learning
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Discover why testing yourself is more effective than re-reading notes.
              </p>
              
              <button
                @click="navigateToBlogPost('blog2')"
                class="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 2: Pomodoro Technique -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-primary to-primary-600 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Time Management
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                Mastering the Pomodoro Technique for Better Focus
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Learn how to use 25-minute focused work sessions to improve productivity.
              </p>
              
              <button
                @click="navigateToBlogPost('blog1')"
                class="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 3: Mind Mapping -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group overflow-hidden">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                Mind Mapping: Visualize Your Way to Success
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Transform complex information into visual mind maps for better learning.
              </p>
              
              <button
                @click="navigateToBlogPost('blog4')"
                class="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
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
  { id: 'what-is-spaced-repetition', title: 'What Is Spaced Repetition?' },
  { id: 'forgetting-curve', title: 'The Forgetting Curve' },
  { id: 'optimal-intervals', title: 'Optimal Intervals' },
  { id: 'how-to-implement', title: 'How to Implement' },
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
    blog1: '/blog/blog1',
    blog2: '/blog/blog2',
    blog4: '/blog/blog4',
    blog5: '/blog/blog5'
  }
  
  const route = routes[blogId as keyof typeof routes]
  if (route) {
    router.push(route)
  }
}

/**
 * Navigate to StudyDock Spaced Repetition tool
 * Call-to-action to try the actual spaced repetition system
 */
function navigateToSpacedRepetition(): void {
  router.push('/tools/spaced-repetition')
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
  - StudyDock color palette (accent/highlight theme for this article)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (clear typography, offline-friendly design)
  - Modern article typography (prose classes, proper line height)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (smooth scrolling, efficient event handling)
  - Educational design (timelines, step-by-step processes, visual schedules)
  - Professional blog layout (table of contents, related articles)
-->