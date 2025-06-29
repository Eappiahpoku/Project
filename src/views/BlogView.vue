<!-- 
  BlogView.vue
  Modern blog page for StudyDock platform
  - Small hero section introducing the blog
  - Search/filter functionality (categories, reading time)
  - Grid of 5 blog posts from BlogSection
  - Navigation to individual blog post pages
  - Mobile-first responsive design
  - Ghana-optimized for low-bandwidth conditions
  - Touch-optimized for mobile users (48px+ targets)
-->

<template>
  <div class="min-h-screen bg-gray-50">
    
    <!-- ===== HERO SECTION ===== -->
    <section class="bg-gradient-to-br from-primary to-primary-600 py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          StudyDock <span class="text-accent">Blog</span>
        </h1>
        <p class="mt-4 text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
          Science-backed study techniques and productivity tips to boost your academic performance. 
          Perfect for students across Ghana and beyond.
        </p>
        
        <!-- Blog Stats -->
        <div class="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">5</div>
            <p class="text-sm text-primary-100">Study Guides</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">35</div>
            <p class="text-sm text-primary-100">Min Total Read</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">100%</div>
            <p class="text-sm text-primary-100">Science-Backed</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SEARCH & FILTER SECTION ===== -->
    <section class="bg-white shadow-sm  top-0 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row gap-4 items-center">
          
          <!-- Search Bar -->
          <div class="flex-1 w-full md:max-w-md">
            <div class="relative">
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search study techniques..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 min-h-[48px]"
                aria-label="Search blog posts"
              />
            </div>
          </div>

          <!-- Category Filter -->
          <div class="w-full md:w-auto">
            <select
              v-model="selectedCategory"
              class="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 min-h-[48px]"
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              <option value="Time Management">Time Management</option>
              <option value="Memory Techniques">Memory Techniques</option>
              <option value="Long-term Learning">Long-term Learning</option>
              <option value="Visual Learning">Visual Learning</option>
              <option value="Teaching Method">Teaching Method</option>
            </select>
          </div>

          <!-- Reading Time Filter -->
          <div class="w-full md:w-auto">
            <select
              v-model="selectedReadingTime"
              class="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 min-h-[48px]"
              aria-label="Filter by reading time"
            >
              <option value="">Any Length</option>
              <option value="quick">Quick Read (≤5 min)</option>
              <option value="medium">Medium Read (6-8 min)</option>
              <option value="long">Long Read (≥9 min)</option>
            </select>
          </div>

          <!-- Clear Filters Button -->
          <button
            v-if="hasActiveFilters"
            @click="clearFilters"
            class="w-full md:w-auto px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 min-h-[48px]"
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>

    <!-- ===== BLOG POSTS GRID ===== -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Results Header -->
        <div class="mb-8">
          <p class="text-gray-600">
            {{ filteredPosts.length === 1 ? '1 article found' : `${filteredPosts.length} articles found` }}
            <span v-if="hasActiveFilters" class="text-primary font-medium">
              {{ searchQuery && `matching "${searchQuery}"` }}
              {{ selectedCategory && `in ${selectedCategory}` }}
              {{ selectedReadingTime && `(${getReadingTimeLabel(selectedReadingTime)})` }}
            </span>
          </p>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <div class="max-w-md mx-auto">
            <svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8c2.127 0 4.157.83 5.657 2.343" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
            <p class="text-gray-600 mb-4">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            <button
              @click="clearFilters"
              class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 min-h-[48px]"
            >
              Show All Articles
            </button>
          </div>
        </div>

        <!-- Blog Posts Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Blog Post 1: Pomodoro Technique -->
          <article 
            v-show="shouldShowPost('blog1')" 
            class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden"
          >
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
          <article 
            v-show="shouldShowPost('blog2')" 
            class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden"
          >
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
          <article 
            v-show="shouldShowPost('blog3')" 
            class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden"
          >
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
          <article 
            v-show="shouldShowPost('blog4')" 
            class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden"
          >
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
          <article 
            v-show="shouldShowPost('blog5')" 
            class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden md:col-span-2 lg:col-span-1"
          >
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
      </div>
    </section>

    <!-- ===== NEWSLETTER SIGNUP SECTION ===== -->
    <section class="bg-primary py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Never Miss a Study Tip
        </h2>
        <p class="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Get our latest study techniques and productivity tips delivered straight to your WhatsApp. 
          Perfect for students on the go in Ghana.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            v-model="emailInput"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-accent focus:outline-none min-h-[48px]"
            aria-label="Email address for newsletter"
          />
          <button
            @click="subscribeToNewsletter"
            class="px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 min-h-[48px]"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </div>
        
        <p class="mt-4 text-sm text-primary-100">
          No spam, just quality study content. Unsubscribe anytime.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// ===== Types & Interfaces =====
interface BlogPost {
  id: string
  title: string
  category: string
  readingTime: number
  content: string
}

// ===== Router Setup =====
const router = useRouter()

// ===== Reactive State =====
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedReadingTime = ref('')
const emailInput = ref('')

// ===== Blog Posts Data =====
// Using the same 5 blog posts from BlogSection as requested
const blogPosts: BlogPost[] = [
  {
    id: 'blog1',
    title: 'Mastering the Pomodoro Technique for Better Focus',
    category: 'Time Management',
    readingTime: 5,
    content: 'Learn how to use 25-minute focused work sessions to dramatically improve your productivity and concentration. Perfect for students preparing for exams.'
  },
  {
    id: 'blog2',
    title: 'Active Recall: The Science of Effective Learning',
    category: 'Memory Techniques',
    readingTime: 7,
    content: 'Discover why testing yourself is more effective than re-reading notes. Learn practical active recall strategies that boost memory retention by up to 50%.'
  },
  {
    id: 'blog3',
    title: 'Spaced Repetition: Remember Everything Forever',
    category: 'Long-term Learning',
    readingTime: 6,
    content: 'Master the art of spaced repetition to move information from short-term to long-term memory. Learn optimal spacing intervals for maximum retention.'
  },
  {
    id: 'blog4',
    title: 'Mind Mapping: Visualize Your Way to Success',
    category: 'Visual Learning',
    readingTime: 8,
    content: 'Transform complex information into visual mind maps that make studying more engaging and memorable. Perfect for visual learners and exam preparation.'
  },
  {
    id: 'blog5',
    title: 'Feynman Technique: Learn by Teaching Simply',
    category: 'Teaching Method',
    readingTime: 9,
    content: 'Master complex concepts by explaining them in simple terms. Learn how Nobel Prize winner Richard Feynman method can revolutionize your understanding.'
  }
]

// ===== Computed Properties =====
/**
 * Check if any filters are currently active
 * Used to show/hide the "Clear Filters" button
 */
const hasActiveFilters = computed(() => {
  return searchQuery.value.trim() !== '' || selectedCategory.value !== '' || selectedReadingTime.value !== ''
})

/**
 * Filter blog posts based on search query, category, and reading time
 * Implements Ghana-optimized search that works offline
 */
const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    // Search query filter - searches in title and content
    const matchesSearch = searchQuery.value.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    // Category filter
    const matchesCategory = selectedCategory.value === '' || post.category === selectedCategory.value
    
    // Reading time filter
    const matchesReadingTime = selectedReadingTime.value === '' || 
      (selectedReadingTime.value === 'quick' && post.readingTime <= 5) ||
      (selectedReadingTime.value === 'medium' && post.readingTime >= 6 && post.readingTime <= 8) ||
      (selectedReadingTime.value === 'long' && post.readingTime >= 9)
    
    return matchesSearch && matchesCategory && matchesReadingTime
  })
})

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
 * Check if a specific blog post should be shown based on current filters
 * Used with v-show for better performance than filtering in template
 */
function shouldShowPost(blogId: string): boolean {
  return filteredPosts.value.some(post => post.id === blogId)
}

/**
 * Clear all active filters and reset search
 * Provides quick way for users to see all content again
 */
function clearFilters(): void {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedReadingTime.value = ''
}

/**
 * Get readable label for reading time filter
 * Used in results summary text
 */
function getReadingTimeLabel(value: string): string {
  const labels = {
    quick: 'Quick reads only',
    medium: 'Medium reads only', 
    long: 'Long reads only'
  }
  return labels[value as keyof typeof labels] || value
}

/**
 * Handle newsletter subscription
 * For now shows success message, could integrate with email service
 */
function subscribeToNewsletter(): void {
  if (emailInput.value.trim() === '') {
    alert('Please enter your email address')
    return
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address')
    return
  }
  
  // Success message (in production, this would call an API)
  alert(`Thanks for subscribing! We'll send study tips to ${emailInput.value}`)
  emailInput.value = ''
}
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - StudyDock color palette (primary, secondary, accent, highlight)
  - Touch-optimized interactions (min-h-[48px] for buttons and inputs)
  - Ghana-specific optimizations (clear typography, efficient search)
  - Modern design elements (gradients, shadows, hover effects)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (v-show instead of v-if for filtering)
  - Sticky search/filter bar for better UX on mobile
  - Newsletter signup optimized for WhatsApp-first Ghana users
-->