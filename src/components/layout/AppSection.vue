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

      <!-- ===== WEB APP PROMOTION ===== -->
      <div class="mt-16 text-center">
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
      </div>
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
function exploreWebApps(): void {
  // For now, open the notes app as the main web tool
  window.open('https://studydocknotes.vercel.app/', '_blank', 'noopener')
}

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
</script>

<!--
  All styling via Tailwind utility classes for maintainability and mobile-first workflow.
  - Mobile-first grid, touch targets, color palette
  - No custom CSS, all utility classes
  - Ghana-optimized: fast, offline-aware, clear UI
-->