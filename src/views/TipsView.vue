<!-- 
  TipsView.vue
  Quick study tips and strategies page
  - Bite-sized, actionable study tips
  - Mobile-first card-based layout
  - Offline-friendly design for Ghana users
  - Touch-optimized for mobile interactions
  - Categories for different study areas
  - Search and filter functionality
-->

<template>
  <div class="min-h-screen bg-gray-50">
    
    <!-- ===== HEADER SECTION ===== -->
    <header class="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Study Tips & Quick Strategies
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover proven study tips and strategies to boost your academic performance. 
            Quick, actionable advice you can implement immediately.
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-md mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search tips..."
                class="w-full px-4 py-3 pl-12 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                aria-label="Search study tips"
              />
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ===== FILTER TABS SECTION ===== -->
    <section class="bg-white border-b border-gray-200  top-0">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-2 py-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[48px] flex items-center"
            :class="activeCategory === category.id 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            :aria-pressed="activeCategory === category.id"
          >
            <span class="mr-2">{{ category.icon }}</span>
            {{ category.name }}
            <span class="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {{ category.count }}
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- ===== TIPS GRID SECTION ===== -->
    <section class="py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Results Summary -->
        <div class="mb-8">
          <p class="text-gray-600">
            Showing {{ filteredTips.length }} tips
            <span v-if="searchQuery"> for "{{ searchQuery }}"</span>
            <span v-if="activeCategory !== 'all'"> in {{ getCategoryName(activeCategory) }}</span>
          </p>
        </div>

        <!-- Tips Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div
            v-for="tip in filteredTips"
            :key="tip.id"
            class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
          >
            <!-- Tip Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center">
                <span class="text-2xl mr-3">{{ tip.icon }}</span>
                <div>
                  <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {{ getCategoryName(tip.category) }}
                  </span>
                </div>
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ tip.readTime }}
              </div>
            </div>

            <!-- Tip Title -->
            <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
              {{ tip.title }}
            </h3>

            <!-- Tip Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ tip.description }}
            </p>

            <!-- Tip Action Steps -->
            <div class="space-y-2 mb-4">
              <h4 class="text-sm font-medium text-gray-900">Quick Steps:</h4>
              <ol class="text-sm text-gray-600 space-y-1">
                <li v-for="(step, index) in tip.steps" :key="index" class="flex items-start">
                  <span class="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">
                    {{ index + 1 }}
                  </span>
                  <span>{{ step }}</span>
                </li>
              </ol>
            </div>

            <!-- Tip Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in tip.tags"
                :key="tag"
                class="inline-flex items-center px-2 py-1 rounded text-xs bg-primary/5 text-primary"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Tip Actions -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center space-x-2">
                <button
                  @click="toggleFavorite(tip.id)"
                  class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  :class="isFavorite(tip.id) ? 'text-red-500' : 'text-gray-400'"
                  :aria-label="isFavorite(tip.id) ? 'Remove from favorites' : 'Add to favorites'"
                >
                  <svg class="h-5 w-5" :fill="isFavorite(tip.id) ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                <button
                  @click="shareTip(tip)"
                  class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-400 hover:text-primary"
                  aria-label="Share tip"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
              
              <button
                v-if="tip.relatedArticle"
                @click="navigateToArticle(tip.relatedArticle)"
                class="text-sm text-primary hover:text-primary-600 font-medium transition-colors duration-200"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>

        <!-- No Results State -->
        <div v-if="filteredTips.length === 0" class="text-center py-12">
          <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No tips found</h3>
          <p class="text-gray-600 mb-6">Try adjusting your search or category filter.</p>
          <button
            @click="clearFilters"
            class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>

    <!-- ===== FEATURED STUDY TOOLS SECTION ===== -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">StudyDock Study Tools</h2>
          <p class="text-lg text-gray-600">
            Put these tips into practice with our study tools
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="tool in studyTools"
            :key="tool.id"
            class="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:bg-white transition-all duration-300 group cursor-pointer"
            @click="navigateToTool(tool.route)"
          >
            <div class="text-4xl mb-4">{{ tool.icon }}</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
              {{ tool.name }}
            </h3>
            <p class="text-gray-600 text-sm">{{ tool.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== NEWSLETTER SIGNUP SECTION ===== -->
    <section class="bg-gradient-to-r from-primary to-secondary py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Get Weekly Study Tips</h2>
        <p class="text-xl text-primary-100 mb-8">
          Join thousands of Ghanaian students receiving our best study tips via WhatsApp
        </p>
        
        <div class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="024 XXX XXXX"
              class="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="Phone number for WhatsApp updates"
            />
            <button
              @click="subscribeToTips"
              class="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[48px] flex items-center justify-center"
              :disabled="isSubscribing"
            >
              <svg v-if="isSubscribing" class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </div>
          <p class="text-primary-100 text-sm mt-4">
            We'll send you 2-3 tips per week. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// ===== Types & Interfaces =====
interface StudyTip {
  id: string
  title: string
  description: string
  steps: string[]
  category: string
  tags: string[]
  icon: string
  readTime: string
  relatedArticle?: string
}

interface Category {
  id: string
  name: string
  icon: string
  count: number
}

interface StudyTool {
  id: string
  name: string
  description: string
  icon: string
  route: string
}

// ===== Router Setup =====
const router = useRouter()

// ===== Reactive State =====
const searchQuery = ref('')
const activeCategory = ref('all')
const favorites = ref<string[]>([])
const phoneNumber = ref('')
const isSubscribing = ref(false)

// ===== Study Tips Data =====
const studyTips: StudyTip[] = [
  {
    id: 'tip-1',
    title: 'Use the 25-5 Rule for Focus',
    description: 'Work in 25-minute focused blocks followed by 5-minute breaks to maintain concentration throughout your study session.',
    steps: [
      'Set a timer for 25 minutes',
      'Work on one task only',
      'Take a 5-minute break when timer rings',
      'Repeat 3-4 cycles, then take a longer break'
    ],
    category: 'time-management',
    tags: ['pomodoro', 'focus', 'breaks'],
    icon: '⏱️',
    readTime: '2 min',
    relatedArticle: 'blog1'
  },
  {
    id: 'tip-2',
    title: 'Test Yourself Before You Think You\'re Ready',
    description: 'Self-testing reveals gaps in knowledge and strengthens memory better than passive review.',
    steps: [
      'Cover your notes after reading',
      'Write down everything you remember',
      'Check for missing information',
      'Focus review on forgotten areas'
    ],
    category: 'memory',
    tags: ['active recall', 'testing', 'memory'],
    icon: '🧠',
    readTime: '1 min',
    relatedArticle: 'blog2'
  },
  {
    id: 'tip-3',
    title: 'Create Visual Mind Maps',
    description: 'Transform text-heavy notes into visual diagrams to improve understanding and recall.',
    steps: [
      'Put main topic in the center',
      'Add branches for main ideas',
      'Use colors and simple drawings',
      'Connect related concepts with lines'
    ],
    category: 'note-taking',
    tags: ['visual learning', 'mind maps', 'organization'],
    icon: '🗺️',
    readTime: '3 min',
    relatedArticle: 'blog4'
  },
  {
    id: 'tip-4',
    title: 'Review at Spaced Intervals',
    description: 'Review information at increasing intervals (1 day, 3 days, 1 week, 2 weeks) for long-term retention.',
    steps: [
      'Review new material after 1 day',
      'Review again after 3 days',
      'Next review after 1 week',
      'Final review after 2-3 weeks'
    ],
    category: 'memory',
    tags: ['spaced repetition', 'long-term memory', 'scheduling'],
    icon: '🔄',
    readTime: '2 min',
    relatedArticle: 'blog3'
  },
  {
    id: 'tip-5',
    title: 'Use the Cornell Note-Taking System',
    description: 'Divide your page into sections for notes, cues, and summaries to improve organization and review.',
    steps: [
      'Draw lines to create 3 sections',
      'Take notes in the main area',
      'Add keywords in the cue column',
      'Write a summary at the bottom'
    ],
    category: 'note-taking',
    tags: ['cornell method', 'organization', 'review'],
    icon: '📝',
    readTime: '2 min',
    relatedArticle: 'blog5'
  },
  {
    id: 'tip-6',
    title: 'Study in Short, Frequent Sessions',
    description: 'Multiple short study sessions are more effective than one long cramming session.',
    steps: [
      'Break large topics into smaller chunks',
      'Study for 30-45 minutes at a time',
      'Take 10-15 minute breaks between sessions',
      'Spread sessions across multiple days'
    ],
    category: 'time-management',
    tags: ['distributed practice', 'scheduling', 'breaks'],
    icon: '📅',
    readTime: '1 min'
  },
  {
    id: 'tip-7',
    title: 'Eliminate Distractions During Study',
    description: 'Create a distraction-free environment to maximize focus and learning efficiency.',
    steps: [
      'Turn off phone notifications',
      'Close unnecessary apps and websites',
      'Find a quiet study space',
      'Use website blockers if needed'
    ],
    category: 'productivity',
    tags: ['focus', 'environment', 'distractions'],
    icon: '🔇',
    readTime: '1 min'
  },
  {
    id: 'tip-8',
    title: 'Teach Someone Else',
    description: 'Explaining concepts to others reveals your understanding and strengthens your own learning.',
    steps: [
      'Find a study partner or family member',
      'Explain the concept in simple terms',
      'Answer their questions',
      'Identify areas where you struggled to explain'
    ],
    category: 'comprehension',
    tags: ['teaching', 'explanation', 'understanding'],
    icon: '👥',
    readTime: '2 min'
  },
  {
    id: 'tip-9',
    title: 'Use Multiple Senses When Learning',
    description: 'Engage sight, sound, and touch to create stronger memory connections.',
    steps: [
      'Read information aloud',
      'Write notes by hand',
      'Create visual diagrams',
      'Use different colors for emphasis'
    ],
    category: 'memory',
    tags: ['multisensory', 'visual', 'auditory'],
    icon: '👁️',
    readTime: '2 min'
  },
  {
    id: 'tip-10',
    title: 'Review Before Sleep',
    description: 'Studying before bed helps consolidate information in long-term memory during sleep.',
    steps: [
      'Review key concepts 30 minutes before bed',
      'Focus on the most important material',
      'Keep review light and not stressful',
      'Get adequate sleep (7-8 hours)'
    ],
    category: 'memory',
    tags: ['sleep learning', 'consolidation', 'bedtime'],
    icon: '🌙',
    readTime: '1 min'
  },
  {
    id: 'tip-11',
    title: 'Connect New Info to What You Know',
    description: 'Link new concepts to existing knowledge to make them easier to understand and remember.',
    steps: [
      'Ask "How is this like something I already know?"',
      'Create analogies and comparisons',
      'Build on previous lessons',
      'Make personal connections to the material'
    ],
    category: 'comprehension',
    tags: ['connections', 'analogies', 'prior knowledge'],
    icon: '🔗',
    readTime: '2 min'
  },
  {
    id: 'tip-12',
    title: 'Practice Problems Daily',
    description: 'For subjects like math and science, daily problem-solving maintains and builds skills.',
    steps: [
      'Solve 3-5 problems each day',
      'Mix easy and challenging problems',
      'Time yourself on some problems',
      'Review mistakes immediately'
    ],
    category: 'practice',
    tags: ['problem solving', 'math', 'science', 'daily'],
    icon: '🧮',
    readTime: '1 min'
  }
]

// ===== Categories Data =====
const categories: Category[] = [
  { id: 'all', name: 'All Tips', icon: '📚', count: studyTips.length },
  { id: 'memory', name: 'Memory', icon: '🧠', count: studyTips.filter(t => t.category === 'memory').length },
  { id: 'time-management', name: 'Time Management', icon: '⏰', count: studyTips.filter(t => t.category === 'time-management').length },
  { id: 'note-taking', name: 'Note-Taking', icon: '📝', count: studyTips.filter(t => t.category === 'note-taking').length },
  { id: 'productivity', name: 'Productivity', icon: '⚡', count: studyTips.filter(t => t.category === 'productivity').length },
  { id: 'comprehension', name: 'Understanding', icon: '💡', count: studyTips.filter(t => t.category === 'comprehension').length },
  { id: 'practice', name: 'Practice', icon: '🎯', count: studyTips.filter(t => t.category === 'practice').length }
]

// ===== Study Tools Data =====
const studyTools: StudyTool[] = [
  {
    id: 'pomodoro',
    name: 'Pomodoro Timer',
    description: 'Focus timer with break reminders',
    icon: '⏱️',
    route: '/tools/pomodoro'
  },
  {
    id: 'flashcards',
    name: 'Flashcards',
    description: 'Spaced repetition study cards',
    icon: '🎴',
    route: '/tools/flashcards'
  },
  {
    id: 'notes',
    name: 'Note Templates',
    description: 'Cornell and outline templates',
    icon: '📋',
    route: '/tools/note-templates'
  },
  {
    id: 'mindmap',
    name: 'Mind Mapper',
    description: 'Visual concept mapping',
    icon: '🗺️',
    route: '/tools/mind-mapper'
  }
]

// ===== Computed Properties =====
const filteredTips = computed(() => {
  let tips = studyTips

  // Filter by category
  if (activeCategory.value !== 'all') {
    tips = tips.filter(tip => tip.category === activeCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    tips = tips.filter(tip => 
      tip.title.toLowerCase().includes(query) ||
      tip.description.toLowerCase().includes(query) ||
      tip.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return tips
})

// ===== Methods =====
/**
 * Set the active category filter
 * Updates the displayed tips based on category selection
 */
function setActiveCategory(categoryId: string): void {
  activeCategory.value = categoryId
}

/**
 * Get category name by ID
 * Helper function for display purposes
 */
function getCategoryName(categoryId: string): string {
  const category = categories.find(c => c.id === categoryId)
  return category ? category.name : 'Unknown'
}

/**
 * Clear all filters and show all tips
 * Reset search and category filters
 */
function clearFilters(): void {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

/**
 * Toggle tip favorite status
 * Add/remove tip from favorites list
 */
function toggleFavorite(tipId: string): void {
  const index = favorites.value.indexOf(tipId)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(tipId)
  }
  
  // Save to localStorage for persistence
  localStorage.setItem('studydock-favorites', JSON.stringify(favorites.value))
}

/**
 * Check if tip is in favorites
 * Helper function for favorite button state
 */
function isFavorite(tipId: string): boolean {
  return favorites.value.includes(tipId)
}

/**
 * Share tip via WhatsApp or social media
 * Generate shareable message with tip content
 */
function shareTip(tip: StudyTip): void {
  const message = `💡 Study Tip: ${tip.title}\n\n${tip.description}\n\nQuick Steps:\n${tip.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\nFrom StudyDock - Ghana's #1 Study Platform`
  
  // Use WhatsApp sharing for mobile users
  if (navigator.share) {
    navigator.share({
      title: tip.title,
      text: message,
      url: window.location.href
    })
  } else {
    // Fallback to WhatsApp web
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
}

/**
 * Navigate to related blog article
 * Link tips to detailed blog posts
 */
function navigateToArticle(articleId: string): void {
  router.push(`/blog/${articleId}`)
}

/**
 * Navigate to study tool
 * Link to StudyDock tools mentioned in tips
 */
function navigateToTool(route: string): void {
  router.push(route)
}

/**
 * Subscribe to WhatsApp study tips
 * Sign up user for weekly study tips via WhatsApp
 * FIXED: Changed return type from void to Promise<void> for async function
 */
async function subscribeToTips(): Promise<void> {
  if (!phoneNumber.value) {
    alert('Please enter your phone number')
    return
  }

  isSubscribing.value = true
  
  try {
    // Simulate API call for subscription
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Success! You\'ll receive study tips on WhatsApp. Welcome to StudyDock! 🎉')
    phoneNumber.value = ''
  } catch (error) {
    alert('Something went wrong. Please try again later.')
  } finally {
    isSubscribing.value = false
  }
}

// ===== Lifecycle Hooks =====
onMounted(() => {
  // Load favorites from localStorage
  const savedFavorites = localStorage.getItem('studydock-favorites')
  if (savedFavorites) {
    favorites.value = JSON.parse(savedFavorites)
  }
})
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - StudyDock color palette (primary/secondary gradient themes)
  - Touch-optimized interactions (min-h-[48px] for all interactive elements)
  - Ghana-specific optimizations (WhatsApp integration, offline-friendly layout)
  - Modern card-based design (rounded-xl, shadow-sm, hover effects)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (efficient filtering, minimal re-renders)
  - Interactive features (search, filtering, favorites, sharing)
  - Clear typography and spacing for easy mobile reading
-->