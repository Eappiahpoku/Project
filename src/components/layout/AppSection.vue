<!--
  AppSection.vue
  StudyDock: Interactive Tools Section
  - Mobile-first, Ghana-optimized, offline-aware
  - Shows available and coming-soon study tools
  - All navigation for available tools uses external links (opens in new tab)
  - "Coming Soon" tools show notification
  - Follows StudyDock Development Guidelines (see docs)
-->

<template>
  <section class="bg-background py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
          StudyDock <span class="text-primary">Interactive Tools</span>
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Powerful study tools that work offline and online. Designed for Ghanaian students with mobile-first approach and optimized for all network conditions.
        </p>
        <!-- App Statistics -->
        <div class="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">10K+</div>
            <p class="text-sm text-gray-600">Downloads</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">2.5K</div>
            <p class="text-sm text-gray-600">Active Users</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">4.8★</div>
            <p class="text-sm text-gray-600">Rating</p>
          </div>
        </div>
      </div>

      <!-- ===== INTERACTIVE STUDY TOOLS GRID ===== -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

        <!-- ===== Pomodoro Timer ===== -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-primary to-primary-600 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-20 w-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">Available</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">Time Management</span>
            </div>
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">Pomodoro Timer</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Focus timer with 25-minute work sessions and 5-minute breaks. Works offline and includes study session analytics.
            </p>
            <ul class="text-sm text-gray-500 mb-4 space-y-1">
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Offline functionality</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Session analytics</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Custom time intervals</li>
            </ul>
            <!-- ===== [New Feature] START: External link navigation ===== -->
            <button
              @click="navigateToApp('pomodoro')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-primary text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 min-h-[48px]"
              aria-label="Try Pomodoro Timer app"
            >
              <span>Try Tool</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <!-- ===== [New Feature] END ===== -->
          </div>
        </div>

        <!-- ===== Flashcards ===== -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-secondary to-secondary-600 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-20 w-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">Available</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">Memory Tools</span>
            </div>
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">Smart Flashcards</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Create and study with intelligent flashcards that adapt to your learning pace. Includes spaced repetition.
            </p>
            <ul class="text-sm text-gray-500 mb-4 space-y-1">
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Spaced repetition</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Progress tracking</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Import/Export cards</li>
            </ul>
            <!-- ===== [New Feature] START: External link navigation ===== -->
            <button
              @click="navigateToApp('flashcards')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-secondary text-white rounded-lg hover:bg-secondary-600 focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-all duration-200 min-h-[48px]"
              aria-label="Try Smart Flashcards app"
            >
              <span>Try Tool</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <!-- ===== [New Feature] END ===== -->
          </div>
        </div>

        <!-- ===== Smart Notes ===== -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-accent to-highlight relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-20 w-20 text-gray-900 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">Available</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-gray-900">Note Taking</span>
            </div>
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">Smart Notes</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Take organized notes with markdown support, tagging, and search. Syncs across devices when online.
            </p>
            <ul class="text-sm text-gray-500 mb-4 space-y-1">
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Markdown support</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Tag organization</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Cross-device sync</li>
            </ul>
            <!-- ===== [New Feature] START: External link navigation ===== -->
            <button
              @click="navigateToApp('notes')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-accent text-gray-900 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all duration-200 min-h-[48px]"
              aria-label="Try Smart Notes app"
            >
              <span>Try Tool</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <!-- ===== [New Feature] END ===== -->
          </div>
        </div>

        <!-- ===== Mind Map Creator (Coming Soon) ===== -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-primary-600 to-secondary relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-20 w-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">Visual Learning</span>
            </div>
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">Mind Map Creator</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Create beautiful mind maps to visualize complex topics and ideas. Perfect for brainstorming and organizing visually.
            </p>
            <ul class="text-sm text-gray-500 mb-4 space-y-1">
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Drag & drop interface</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Export to image</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Collaboration features</li>
            </ul>
            <button
              @click="notifyWhenReady('mindmap')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/30 transition-all duration-200 min-h-[48px]"
              aria-label="Get notified when Mind Map Creator is ready"
            >
              <span>Notify Me</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- ===== Study Planner (Coming Soon) ===== -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-highlight to-accent relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-20 w-20 text-gray-900 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-highlight/20 text-gray-900">Planning</span>
            </div>
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">Study Planner</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Plan your study sessions with intelligent scheduling that considers your exam dates, available time, and learning preferences.
            </p>
            <ul class="text-sm text-gray-500 mb-4 space-y-1">
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Smart scheduling</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Progress tracking</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Exam reminders</li>
            </ul>
            <button
              @click="notifyWhenReady('planner')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/30 transition-all duration-200 min-h-[48px]"
              aria-label="Get notified when Study Planner is ready"
            >
              <span>Notify Me</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- ===== Quiz Generator (Coming Soon) ===== -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-secondary-600 to-primary relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-20 w-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">Assessment</span>
            </div>
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">Quiz Generator</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Generate practice quizzes from your notes and study materials. Perfect for self-assessment and exam preparation.
            </p>
            <ul class="text-sm text-gray-500 mb-4 space-y-1">
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Auto-generate from notes</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Multiple question types</li>
              <li class="flex items-center"><svg class="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Performance analytics</li>
            </ul>
            <button
              @click="notifyWhenReady('quiz')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/30 transition-all duration-200 min-h-[48px]"
              aria-label="Get notified when Quiz Generator is ready"
            >
              <span>Notify Me</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

<!===== MOBILE APP DOWNLOAD SECTION ===== >
      <!-- <div class="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 md:p-12 text-white"> -->
        <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> -->
          <!-- Mobile App Content -->
          <!-- <div> -->
            <!-- <h3 class="text-2xl md:text-3xl font-bold mb-4"> -->
              <!-- StudyDock Mobile App -->
            <!-- </h3> -->
            <!-- <p class="text-lg text-primary-100 mb-6 leading-relaxed"> -->
              <!-- Take StudyDock with you everywhere! Our mobile app works perfectly offline 
              and is optimized for Ghanaian mobile networks. Access all your study tools 
              even without internet connection. -->
            <!-- </p>
             -->
            <!-- Mobile App Features -->
            <!-- <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>100% offline functionality</span> -->
              <!-- </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg> -->
                <!-- <span>Optimized for 2G/3G networks</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Data-saving mode for low bandwidth</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Works on Android 6.0+ devices</span>
              </li> -->
            <!-- </ul> -->
            
            <!-- Download Buttons
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="downloadApp('android')"
                class="group inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 min-h-[48px]"
                aria-label="Download StudyDock for Android"
              >
                <svg class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5018c-.5536-.2569-1.1734-.3171-1.8272-.3171s-1.2736.0602-1.8272.3171l-2.0223-3.5018a.416.416 0 00-.5972-.1518.416.416 0 00-.1518.5972l1.9973 3.4592c-2.1869 1.1938-3.6816 3.5414-3.6816 6.2918h14c0-2.7504-1.4947-5.098-3.6816-6.2918z"/>
                </svg>
                <span>Download for Android</span> -->
              <!-- </button>
              
              <button
                @click="downloadApp('ios')"
                class="group inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 min-h-[48px]"
                aria-label="Download StudyDock for iOS (Coming Soon)"
              >
                <svg class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg> -->
                <!-- <span>iOS Coming Soon</span>
              </button>
            </div>
          </div> -->
          
          <!-- Mobile App Mockup -->
          <!-- <div class="flex justify-center lg:justify-end">
            <div class="relative"> -->
              <!-- Phone Frame -->
              <!-- <div class="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div class="w-full h-full bg-white rounded-2xl overflow-hidden"> -->
                  <!-- Phone Screen Content -->
                  <!-- <div class="h-full bg-gradient-to-br from-primary-50 to-white p-4 flex flex-col"> -->
                    <!-- App Header -->
                    <!-- <div class="flex items-center justify-between mb-6">
                      <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-600">StudyDock</span>
                    </div>
                     -->
                    <!-- App Grid -->
                    <!-- <div class="grid grid-cols-2 gap-3 flex-1">
                      <div class="bg-primary rounded-xl p-3 flex flex-col items-center justify-center">
                        <svg class="h-8 w-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-xs text-white text-center">Timer</span>
                      </div> -->
                      
                      <!-- <div class="bg-secondary rounded-xl p-3 flex flex-col items-center justify-center">
                        <svg class="h-8 w-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span class="text-xs text-white text-center">Cards</span>
                      </div> -->
                      
                      <!-- <div class="bg-accent rounded-xl p-3 flex flex-col items-center justify-center">
                        <svg class="h-8 w-8 text-gray-900 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        <span class="text-xs text-gray-900 text-center">Notes</span>
                      </div> -->
                      
                      <!-- <div class="bg-highlight rounded-xl p-3 flex flex-col items-center justify-center">
                        <svg class="h-8 w-8 text-gray-900 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span class="text-xs text-gray-900 text-center">Stats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              
              <!-- Floating Elements -->
              <!-- <div class="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <svg class="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> -->









      <!-- ===== WEB APP PROMOTION ===== -->
      <!-- <div class="mt-16 text-center">
        <h3 class="text-2xl font-semibold text-text mb-4">
          Or Use Our Web Tools Right Now
        </h3>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          No download required! Access our study tools directly in your browser. Works on any device and saves your progress automatically.
        </p>
        <button
          @click="exploreWebApps"
          class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-secondary to-secondary-600 text-white rounded-xl hover:from-secondary-600 hover:to-secondary-700 focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 min-h-[48px]"
          aria-label="Explore web-based study tools"
        >
          <span>Explore Web Tools</span>
          <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
// ===== File-level comment =====
// Handles navigation for StudyDock tools section. All available apps use external links.
// "Coming Soon" apps show notification. Follows StudyDock guidelines for Ghanaian users.

// ===== Helper Functions =====

/**
 * Navigate to a specific study app/tool.
 * If available, opens the external app in a new tab.
 * If not, shows a notification.
 * @param appId - string key for the app/tool
 */
function navigateToApp(appId: string): void {
  // ===== [New Feature] START: External URLs for available apps =====
  const routes: Record<string, string> = {
    pomodoro: 'https://studydockpomodoro.vercel.app/',
    flashcards: 'https://studydockflashcards.vercel.app/',
    notes: 'https://studydocknotes.vercel.app/'
    // Mindmap, planner, quiz are "coming soon"
  }
  const url = routes[appId]
  if (url) {
    // Open external app in a new tab (safe for mobile/desktop)
    window.open(url, '_blank', 'noopener')
  } else {
    // Show notification for "coming soon" apps
    notifyWhenReady(appId)
  }
  // ===== [New Feature] END =====
}

/**
 * Show notification for "coming soon" apps.
 * @param appId - string key for the app/tool
 */
function notifyWhenReady(appId: string): void {
  alert(`Thanks! We'll notify you when ${getAppName(appId)} is ready. Check your WhatsApp for updates!`)
  // Could integrate with WhatsApp or newsletter in future
}

/**
 * Open the main web tools page (external).
 */
// function exploreWebApps(): void {
//   // For now, open the notes app as the main web tool
//   window.open('https://studydocknotes.vercel.app/', '_blank', 'noopener')
// }

/**
 * Get display name for app based on ID (for notifications).
 * @param appId - string key for the app/tool
 * @returns string
 */
function getAppName(appId: string): string {
  const names: Record<string, string> = {
    mindmap: 'Mind Map Creator',
    planner: 'Study Planner',
    quiz: 'Quiz Generator'
  }
  return names[appId] || 'New Tool'
}

/**
 * Handle mobile app download based on platform
 * For now, shows placeholder links but could integrate with app store APIs
 */
// function downloadApp(platform: 'android' | 'ios'): void {
//   if (platform === 'android') {
//     // Placeholder - would link to Google Play Store when app is published
//     alert('StudyDock for Android will be available soon on Google Play Store!')
//     // window.open('https://play.google.com/store/apps/details?id=com.studydock.app', '_blank')
//   } else {
//     // iOS app coming later - Fixed string escaping issue
//     alert("StudyDock for iOS is in development. We'll notify you when it's ready!")
//   }
// }
</script>

<!--
  All styling via Tailwind utility classes for maintainability and mobile-first workflow.
  - Mobile-first grid, touch targets, color palette
  - No custom CSS, all utility classes
  - Ghana-optimized: fast, offline-aware, clear UI
-->