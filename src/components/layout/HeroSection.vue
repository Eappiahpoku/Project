<!-- 
  HeroSection.vue
  Focused hero section for StudyDock homepage
  - Clean design with strategic negative space
  - Mobile-first approach with desktop functionality
  - Uses StudyDock color palette (teal green gradient)
  - Search bar for quick navigation to study techniques
  - Call-to-action buttons for exploring techniques
  - Touch-optimized for Ghana mobile users (48px+ targets)
  - Brief introduction about StudyDock's purpose
  - Optimized for low-bandwidth conditions
-->

<template>
  <section class="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white overflow-hidden min-h-screen flex items-center">
    <!-- ===== BACKGROUND PATTERN (Subtle) ===== -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="study-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#study-pattern)" />
      </svg>
    </div>

    <!-- ===== MAIN HERO CONTENT ===== -->
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
      
      <!-- ===== MAIN HEADLINE SECTION ===== -->
      <div class="space-y-6 mb-12">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Master the Art
          <br class="hidden sm:block" />
          <span class="text-accent">of Studying</span>
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
          Discover effective study techniques and tools to enhance your learning.
        </p>
      </div>

      <!-- ===== BRIEF INTRODUCTION ===== -->
      <div class="mb-12">
        <div class="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-primary-500/20 max-w-4xl mx-auto">
          <p class="text-primary-50 text-base sm:text-lg leading-relaxed">
            StudyDock combines <strong class="text-accent">science-backed study methods</strong> with 
            interactive tools designed for students who want to achieve academic excellence. 
            Perfect for Ghana's mobile-first learning environment.
          </p>
        </div>
      </div>

      <!-- ===== SEARCH SECTION ===== -->
      <div class="mb-12">
        <div class="max-w-2xl mx-auto space-y-4">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Find Your Study Method
          </h2>
          
          <!-- Search Bar Container -->
          <div class="relative">
            <label for="study-search" class="sr-only">Search study techniques</label>
            <input
              id="study-search"
              v-model="searchQuery"
              type="text"
              placeholder="Search study techniques (e.g., Pomodoro, Active Recall)"
              class="w-full px-6 py-4 text-gray-900 bg-white rounded-xl border-2 border-transparent focus:border-accent focus:ring-4 focus:ring-accent/20 focus:outline-none text-base placeholder-gray-500 shadow-lg transition-all duration-200"
              @keyup.enter="handleSearch"
              @input="handleSearchInput"
            />
            <!-- Search Icon -->
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <!-- Search Suggestions (appears when typing) -->
          <div v-if="searchSuggestions.length > 0 && showSuggestions" class="mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <ul class="divide-y divide-gray-100">
              <li 
                v-for="suggestion in searchSuggestions" 
                :key="suggestion.id"
                class="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                @click="selectSuggestion(suggestion)"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span class="text-gray-900 font-medium">{{ suggestion.name }}</span>
                </div>
                <p class="text-sm text-gray-600 mt-1 ml-5">{{ suggestion.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ===== CALL-TO-ACTION BUTTONS ===== -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <!-- Primary CTA -->
        <button
          @click="exploreStudyTechniques"
          class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent text-primary-900 rounded-xl hover:bg-accent-400 focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 min-h-[48px]"
          aria-label="Explore study techniques and tools"
        >
          <span>Explore Techniques</span>
          <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <!-- Secondary CTA -->
        <button
          @click="viewStudyTools"
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-accent rounded-xl hover:bg-accent hover:text-primary-900 focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all duration-200 min-h-[48px]"
          aria-label="View interactive study tools"
        >
          View Study Tools
        </button>
      </div>
    </div>

    <!-- ===== SCROLL INDICATOR ===== -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// ===== Types & Interfaces =====
interface StudyTechnique {
  id: number
  name: string
  description: string
  route?: string
}

// ===== Router Setup =====
const router = useRouter()

// ===== Reactive State =====
const searchQuery = ref('')
const showSuggestions = ref(false)

// ===== Constants & Config =====
/**
 * Available study techniques for search suggestions
 * Based on common study methods that will be featured in StudyDock
 */
const studyTechniques: StudyTechnique[] = [
  {
    id: 1,
    name: 'Pomodoro Technique',
    description: 'Time management method using 25-minute focused work sessions',
    route: '/blog/pomodoro-technique'
  },
  {
    id: 2,
    name: 'Active Recall',
    description: 'Testing yourself to improve memory retention',
    route: '/blog/active-recall'
  },
  {
    id: 3,
    name: 'Spaced Repetition',
    description: 'Reviewing information at increasing intervals',
    route: '/blog/spaced-repetition'
  },
  {
    id: 4,
    name: 'Mind Mapping',
    description: 'Visual representation of information and concepts',
    route: '/blog/mind-mapping'
  },
  {
    id: 5,
    name: 'Feynman Technique',
    description: 'Learning by teaching concepts in simple terms',
    route: '/blog/feynman-technique'
  }
]

// ===== Computed Properties =====
/**
 * Filter study techniques based on search query
 * Shows relevant suggestions as user types
 */
const searchSuggestions = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < 2) {
    return []
  }
  
  return studyTechniques.filter(technique =>
    technique.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    technique.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  ).slice(0, 3) // Limit to 3 suggestions for mobile UX
})

// ===== Helper Functions =====
/**
 * Handle search input changes
 * Shows/hides suggestions based on input
 */
function handleSearchInput(): void {
  showSuggestions.value = searchQuery.value.length >= 2
}

/**
 * Handle search when user presses Enter
 * Navigates to first suggestion or general search
 */
function handleSearch(): void {
  if (searchSuggestions.value.length > 0) {
    selectSuggestion(searchSuggestions.value[0])
  } else {
    // Navigate to general study tips page with search query
    router.push({
      path: '/tips',
      query: { search: searchQuery.value }
    })
  }
  showSuggestions.value = false
}

/**
 * Handle selecting a search suggestion
 * Navigates to the specific technique page
 */
function selectSuggestion(suggestion: StudyTechnique): void {
  searchQuery.value = suggestion.name
  showSuggestions.value = false
  
  if (suggestion.route) {
    router.push(suggestion.route)
  } else {
    router.push('/tips')
  }
}

/**
 * Handle primary CTA - explore study techniques
 * Navigates to the main study tips page
 */
function exploreStudyTechniques(): void {
  router.push('/tips')
}

/**
 * Handle secondary CTA - view study tools
 * Scrolls to the app section on the homepage
 */
function viewStudyTools(): void {
  // Scroll to the AppSection component
  const appSection = document.querySelector('#app-section')
  if (appSection) {
    appSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

/**
 * Close suggestions when clicking outside
 * Improves mobile UX by hiding suggestions appropriately
 */
function handleClickOutside(event: Event): void {
  const target = event.target as HTMLElement
  if (!target.closest('#study-search') && !target.closest('.bg-white.rounded-lg')) {
    showSuggestions.value = false
  }
}

// ===== Lifecycle Hooks =====
onMounted(() => {
  // Add click outside listener for search suggestions
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  // Clean up event listener
  document.removeEventListener('click', handleClickOutside)
})
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Mobile-first responsive design with strategic spacing
  - StudyDock color palette (primary gradient background, accent highlights)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (backdrop-blur for low-bandwidth)
  - Smooth transitions and hover effects for modern feel
  - Accessibility compliance (aria-labels, focus states, sr-only labels)
  - Performance optimization (minimal custom CSS, utility-first approach)
-->