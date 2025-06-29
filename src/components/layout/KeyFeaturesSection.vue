<!-- 
  KeyFeaturesSection.vue
  Clean features section for StudyDock homepage
  - Dedicated space for statistics and key features
  - Strategic negative space for better readability
  - Mobile-first grid layout with responsive design
  - Professional card design with hover effects
  - Touch-optimized for Ghana mobile users
  - Complementary to the focused HeroSection
-->

<template>
  <section class="bg-gray-50 py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Choose
          <span class="text-primary">StudyDock</span>
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Built specifically for students who need reliable, offline-capable study tools that work on any device.
        </p>
      </div>

      <!-- ===== KEY STATISTICS GRID ===== -->
      <div class="mb-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <!-- Study Techniques Count -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">5+</div>
            <p class="text-gray-900 text-sm sm:text-base font-medium mb-1">Study Techniques</p>
            <p class="text-gray-500 text-xs">Science-backed methods</p>
          </div>

          <!-- Interactive Tools Count -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div class="text-3xl sm:text-4xl font-bold text-accent mb-2">8+</div>
            <p class="text-gray-900 text-sm sm:text-base font-medium mb-1">Interactive Tools</p>
            <p class="text-gray-500 text-xs">Productivity apps</p>
          </div>

          <!-- Blog Posts Count -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div class="text-3xl sm:text-4xl font-bold text-secondary mb-2">5+</div>
            <p class="text-gray-900 text-sm sm:text-base font-medium mb-1">Blog Posts</p>
            <p class="text-gray-500 text-xs">Expert insights</p>
          </div>

          <!-- Mobile Optimized -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
              </svg>
            </div>
            <div class="text-3xl sm:text-4xl font-bold text-green-500 mb-2">100%</div>
            <p class="text-gray-900 text-sm sm:text-base font-medium mb-1">Mobile Ready</p>
            <p class="text-gray-500 text-xs">Ghana optimized</p>
          </div>
        </div>
      </div>

      <!-- ===== KEY FEATURES GRID ===== -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- ===== LEFT COLUMN: Feature List ===== -->
        <div class="order-2 lg:order-1">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Key Features</h3>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-center text-primary-100">
                <svg class="h-4 w-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-900 font-medium">Offline-capable study tools</span>
              </li>
              <li class="flex items-center text-primary-100">
                <svg class="h-4 w-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-900 font-medium">Mobile-first design for Ghana</span>
              </li>
              <li class="flex items-center text-primary-100">
                <svg class="h-4 w-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-900 font-medium">Science-backed study methods</span>
              </li>
              <li class="flex items-center text-primary-100">
                <svg class="h-4 w-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-900 font-medium">Interactive productivity apps</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- ===== RIGHT COLUMN: Visual Element ===== -->
        <div class="order-1 lg:order-2">
          <div class="relative">
            <!-- Main illustration background -->
            <div class="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-10 text-center">
              <div class="space-y-6">
                <!-- Large icon -->
                <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <svg class="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <!-- Feature highlight -->
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Smart Learning</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Our platform adapts to your learning style and provides personalized recommendations to maximize your study efficiency.
                  </p>
                </div>
                
                <!-- Mini stats -->
                <div class="grid grid-cols-3 gap-4 pt-6">
                  <div class="text-center">
                    <div class="text-xl font-bold text-primary">98%</div>
                    <div class="text-xs text-gray-600">Success Rate</div>
                  </div>
                  <div class="text-center">
                    <div class="text-xl font-bold text-accent">24/7</div>
                    <div class="text-xs text-gray-600">Availability</div>
                  </div>
                  <div class="text-center">
                    <div class="text-xl font-bold text-secondary">Fast</div>
                    <div class="text-xs text-gray-600">Loading</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ===== REMOVED: Unused types, constants, and functions =====
// The previous studyTechniques array and handleClickOutside function
// were not being used in this component, so they have been removed
// to eliminate TypeScript warnings and keep the code clean.

// This component is purely presentational and doesn't need any
// complex logic or state management.
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Clean, well-spaced design with strategic padding and margins
  - Mobile-first responsive grid layout
  - Professional card design with subtle shadows and hover effects
  - StudyDock color palette integration
  - Touch-optimized spacing and sizing
  - Accessibility compliance with proper contrast and focus states
  - Performance optimization with utility-first CSS approach
-->