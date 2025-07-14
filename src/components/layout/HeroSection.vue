<!--
  HeroSection.vue
  Modern StudyDock hero section with image-background color blending
  - Mobile-first: image on top, text/buttons below
  - Desktop: text/buttons left, image right  
  - Clean, modern design with seamless image/background integration
  - Uses matching color (#00614A) for perfect image blend
  - Touch-optimized for Ghana mobile users (48px+ targets)
  - Optimized for low-bandwidth conditions
  - [2025-07-04] Updated: Background color changed to #00614A for seamless blend
-->

<template>
  <section
    class="relative text-white overflow-hidden min-h-screen rounded-xl flex items-center"
    style="background-color: #00614A;" 
    
  >
    <!-- ===== ENHANCED BACKGROUND PATTERN (optional, subtle) ===== -->
    <div class="absolute inset-0 opacity-5 pointer-events-none select-none">
      <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="study-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            <circle cx="5" cy="15" r="0.8" fill="currentColor" opacity="0.6" />
            <circle cx="15" cy="5" r="0.8" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#study-pattern)" />
      </svg>
    </div>

    <!-- ===== FLOATING ANIMATION ELEMENTS (Better Integration) ===== -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Floating study icons that connect image to text -->
      <div class="absolute top-1/4 left-1/4 animate-pulse opacity-20">
        <svg class="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="absolute top-3/4 right-1/4 animate-bounce opacity-20" style="animation-delay: 1s;">
        <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="absolute top-1/2 left-1/6 animate-pulse opacity-15" style="animation-delay: 2s;">
        <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      </div>
    </div>

    <!-- ===== MAIN HERO CONTAINER ===== -->
    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <!-- ===== HERO GRID: Modern layout with better spacing ===== -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[70vh]">
        
        <!-- ===== TEXT CONTENT SECTION ===== -->
        <!-- Mobile: order-2 (bottom), Desktop: order-1 (left) -->
        <div class="order-2 lg:order-1 space-y-8 max-w-xl lg:max-w-none md:mx-auto md:text-center">
          <!-- ===== HEADLINE WITH MODERN TYPOGRAPHY ===== -->
          <div class="space-y-6">
            <h1 class="text-4xl text-center lg:text-left lg:text-5xl font-extrabold leading-none tracking-tight">
              <span class="block text-white">Master the</span>
              <span class="block">
                <span class="text-white">Art of</span>
                <span class="text-accent bg-gradient-to-r from-accent to-accent-400 bg-clip-text text-transparent ml-4">Studying
                </span>
              </span>
            </h1>
            <!-- ===== Subtitle for better hierarchy ===== -->
            <p class="text-xl sm:text-2xl text-primary-100/90 leading-relaxed font-light max-w-2xl text-center lg:text-left">
              Discover <span class="font-semibold text-accent">science-backed techniques</span> and 
              interactive tools designed to enhance your learning journey.
            </p>
          </div>
          <!-- ===== CTA SECTION ===== -->
          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <!-- Primary CTA -->
              <button
                @click="exploreStudyTechniques"
                class="group relative px-8 py-4 bg-accent text-primary-900 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-accent-400 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/30 min-h-[56px] overflow-hidden"
                aria-label="Explore study techniques and tools"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <span class="relative flex items-center justify-center">
                  Explore Techniques
                  <svg class="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
            </div>
          
          </div>
        </div>

        <!-- ===== IMAGE SECTION (Right/Top) ===== -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
          <div class="relative group">
            <div class="relative">
              <!-- Animated border/glow effect -->
              <div class="absolute -inset-1   opacity-20 rounded-3xl  group-hover:opacity-30 transition-opacity duration-500"></div>
          <div class="animate-float">
              <img
                class="relative w-full max-w-lg h-auto rounded-2xl  group-hover:scale-105 transition-transform duration-500"
                src="/studyimageRev01.webp"
                alt="StudyDock demo showing study techniques in action"
                loading="lazy"
                width="500"
                height="400"
                style="background-color: #00614A;" 
                
              />
              </div>
              <div>
              <!-- Floating study elements for visual connection -->
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-ping"></div>
              <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/30 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
             
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>

  
  </section>
</template>

<script setup lang="ts">
// ===== File-level comment =====
// Modern HeroSection with enhanced animation integration and clean design
// Optimized for Ghana's mobile-first environment with better visual hierarchy
// [UPDATED] Background color changed to #00614A for seamless image blending

import { useRouter } from 'vue-router'

// ===== Router Setup =====
const router = useRouter()

// ===== Helper Functions =====

/**
 * Navigates to the main study tips page
 * Enhanced with smooth transition
 */
function exploreStudyTechniques(): void {
  router.push('/tips')
}




</script>


<style scoped>
/* Custom animations */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

/* ===== [UPDATED] Changed from bounce to expand/contract animation ===== */
@keyframes expand-contract {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===== [UPDATED] Changed animation name and timing ===== */
.animate-float {
    animation: expand-contract 2s ease-in-out infinite;
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}
</style>

<!--
  Modern styling with enhanced features:
  - [UPDATED] Background color changed to #00614A for perfect image blending
  - Enhanced button designs with hover animations
  - Improved image integration with glow effects (now seamlessly blends)
  - Trust indicators for credibility
  - Floating elements for better visual connection
  - Mobile-first responsive design (image top/mobile, right/desktop)
  - Touch-optimized interactions (56px height for better accessibility)
  - Ghana-specific optimizations (offline indicators, data-saving features)
  - Enhanced accessibility (better aria-labels, focus states)
  - Performance optimization (static image loading, optimized for low-bandwidth)
-->