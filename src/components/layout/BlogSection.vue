<!-- 
  BlogSection.vue
  Modern blog section for StudyDock homepage
  - Mobile-first approach with desktop functionality
  - Grid layout showing 5 study technique blog posts equally
  - Navigation to individual blog post pages (Blog1View.vue, etc.)
  - "View All Posts" button to main BlogView.vue page
  - Metadata including publish date, reading time, and author
  - Touch-optimized for Ghana mobile users (48px+ targets)
  - Nice modern design with cards and hover effects
  - Optimized for low-bandwidth conditions
-->

<template>
  <section class="bg-gray-50 py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
          Latest from Our 
          <span class="text-primary">Study Blog</span>
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover science-backed study techniques and productivity tips to enhance your academic performance. 
          Perfect for students across Ghana and beyond.
        </p>
      </div>

      <!-- ===== BLOG POSTS GRID ===== -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        
        <!-- Blog Post 1: Pomodoro Technique -->
        <article class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-primary to-primary-600 relative overflow-hidden">
            <!-- Featured Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-16 w-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <!-- Reading Time Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                5 min read
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Blog Category -->
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Time Management
              </span>
            </div>
            
            <!-- Blog Title -->
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
              Mastering the Pomodoro Technique for Better Focus
            </h3>
            
            <!-- Blog Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              Learn how to use 25-minute focused work sessions to dramatically improve your productivity and concentration. 
              Perfect for students preparing for exams.
            </p>
            
            <!-- Blog Metadata -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 25, 2025</span>
              </div>
              <div class="text-sm text-gray-500">
                by Edward A-P
              </div>
            </div>
            
            <!-- Read More Button -->
            <button
              @click="navigateToBlogPost('blog1')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-primary text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 min-h-[48px]"
              aria-label="Read full article about Pomodoro Technique"
            >
              <span>Read Full Article</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>

        <!-- Blog Post 2: Active Recall -->
        <article class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-secondary to-secondary-600 relative overflow-hidden">
            <!-- Featured Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-16 w-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <!-- Reading Time Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                7 min read
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Blog Category -->
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                Memory Techniques
              </span>
            </div>
            
            <!-- Blog Title -->
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
              Active Recall: The Science of Effective Learning
            </h3>
            
            <!-- Blog Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              Discover why testing yourself is more effective than re-reading notes. Learn practical active recall 
              strategies that boost memory retention by up to 50%.
            </p>
            
            <!-- Blog Metadata -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 23, 2025</span>
              </div>
              <div class="text-sm text-gray-500">
                by Edward A-P
              </div>
            </div>
            
            <!-- Read More Button -->
            <button
              @click="navigateToBlogPost('blog2')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-secondary text-white rounded-lg hover:bg-secondary-600 focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-all duration-200 min-h-[48px]"
              aria-label="Read full article about Active Recall"
            >
              <span>Read Full Article</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>

        <!-- Blog Post 3: Spaced Repetition -->
        <article class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-accent to-highlight relative overflow-hidden">
            <!-- Featured Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-16 w-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <!-- Reading Time Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                6 min read
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Blog Category -->
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                Long-term Learning
              </span>
            </div>
            
            <!-- Blog Title -->
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
              Spaced Repetition: Remember Everything Forever
            </h3>
            
            <!-- Blog Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              Master the art of spaced repetition to move information from short-term to long-term memory. 
              Learn optimal spacing intervals for maximum retention.
            </p>
            
            <!-- Blog Metadata -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 20, 2025</span>
              </div>
              <div class="text-sm text-gray-500">
                by Edward A-P
              </div>
            </div>
            
            <!-- Read More Button -->
            <button
              @click="navigateToBlogPost('blog3')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-accent text-gray-900 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all duration-200 min-h-[48px]"
              aria-label="Read full article about Spaced Repetition"
            >
              <span>Read Full Article</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>

        <!-- Blog Post 4: Mind Mapping -->
        <article class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-primary-600 to-secondary relative overflow-hidden">
            <!-- Featured Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-16 w-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <!-- Reading Time Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                8 min read
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Blog Category -->
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Visual Learning
              </span>
            </div>
            
            <!-- Blog Title -->
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
              Mind Mapping: Visualize Your Way to Success
            </h3>
            
            <!-- Blog Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              Transform complex information into visual mind maps that make studying more engaging and memorable. 
              Perfect for visual learners and exam preparation.
            </p>
            
            <!-- Blog Metadata -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 18, 2025</span>
              </div>
              <div class="text-sm text-gray-500">
                by Edward A-P
              </div>
            </div>
            
            <!-- Read More Button -->
            <button
              @click="navigateToBlogPost('blog4')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-primary text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 min-h-[48px]"
              aria-label="Read full article about Mind Mapping"
            >
              <span>Read Full Article</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>

        <!-- Blog Post 5: Feynman Technique -->
        <article class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden md:col-span-2 lg:col-span-1">
          <div class="aspect-video bg-gradient-to-br from-highlight to-accent relative overflow-hidden">
            <!-- Featured Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-16 w-16 text-gray-900 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <!-- Reading Time Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/20 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                9 min read
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Blog Category -->
            <div class="mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-highlight/20 text-gray-900">
                Teaching Method
              </span>
            </div>
            
            <!-- Blog Title -->
            <h3 class="text-xl font-semibold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
              Feynman Technique: Learn by Teaching Simply
            </h3>
            
            <!-- Blog Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              Master complex concepts by explaining them in simple terms. Learn how Nobel Prize winner Richard Feynman's 
              method can revolutionize your understanding.
            </p>
            
            <!-- Blog Metadata -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 15, 2025</span>
              </div>
              <div class="text-sm text-gray-500">
                by Edward A-P
              </div>
            </div>
            
            <!-- Read More Button -->
            <button
              @click="navigateToBlogPost('blog5')"
              class="group/btn inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-highlight text-gray-900 rounded-lg hover:bg-highlight/80 focus:outline-none focus:ring-4 focus:ring-highlight/30 transition-all duration-200 min-h-[48px]"
              aria-label="Read full article about Feynman Technique"
            >
              <span>Read Full Article</span>
              <svg class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- ===== VIEW ALL POSTS BUTTON ===== -->
      <div class="text-center">
        <button
          @click="navigateToBlogPage"
          class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 min-h-[48px]"
          aria-label="View all blog posts"
        >
          <span>View All Posts</span>
          <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        
        <!-- Blog Stats -->
        <div class="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">5</div>
            <p class="text-sm text-gray-600">Study Guides</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">35</div>
            <p class="text-sm text-gray-600">Min Total Read</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">100%</div>
            <p class="text-sm text-gray-600">Science-Backed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// ===== Router Setup =====
const router = useRouter()

// ===== Helper Functions =====
/**
 * Navigate to individual blog post page
 * Maps blog IDs to their corresponding view files
 */
function navigateToBlogPost(blogId: string): void {
  const routes = {
    blog1: '/blog/blog1',
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
 * Navigate to main blog page
 * Shows all blog posts in BlogView.vue
 */
function navigateToBlogPage(): void {
  router.push('/blog')
}
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - StudyDock color palette (primary, secondary, accent, highlight)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (clear typography, efficient card design)
  - Modern design elements (gradients, shadows, hover effects)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (minimal custom CSS, utility-first approach)
-->