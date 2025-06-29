<!-- 
  AboutSection.vue
  Modern about section for StudyDock homepage
  - Mobile-first approach with desktop functionality
  - Uses StudyDock color palette (soft background with primary accents)
  - Focuses on StudyDock project and Edward's story
  - Includes fake testimonials as placeholders
  - Touch-optimized for Ghana mobile users (48px+ targets)
  - Call-to-action to full About page
  - Optimized for low-bandwidth conditions
-->

<template>
  <section class="bg-background py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- ===== LEFT COLUMN: Edward's Story & StudyDock Creation ===== -->
        <div class="space-y-8">
          <!-- Section Header -->
          <div class="space-y-4">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              About 
              <span class="text-primary">StudyDock</span>
            </h2>
            
            <!-- Edward's Story -->
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-gray-600 leading-relaxed">
                <strong class="text-primary">Edward Appiah-Poku</strong> who currently attends 
                <strong>SOS Hermann Gmeiner International College</strong> created StudyDock to 
                address the unique challenges students face in Ghana's educational environment.
              </p>
              
              <p class="text-base text-gray-600 leading-relaxed mt-4">
                Recognizing the need for <strong class="text-primary">mobile-first study solutions</strong> 
                that work with intermittent connectivity, Edward developed this platform to combine 
                <span class="text-primary">science-backed study techniques</span> with interactive tools 
                designed specifically for academic success in challenging environments.
              </p>
            </div>
          </div>

          <!-- StudyDock Mission -->
          <div class="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h3 class="text-xl font-semibold text-primary mb-3 flex items-center">
              <svg class="h-6 w-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Mission
            </h3>
            <p class="text-gray-700 leading-relaxed">
              To democratize effective study techniques by making them accessible, interactive, 
              and optimized for students across Ghana and Africa who need reliable, offline-capable 
              educational tools that work on any device.
            </p>
          </div>

          <!-- Key Achievements (Fake for now) -->
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div class="text-2xl font-bold text-primary mb-1">2024</div>
              <p class="text-sm text-gray-600">Project Started</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div class="text-2xl font-bold text-primary mb-1">5+</div>
              <p class="text-sm text-gray-600">Study Methods</p>
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <div class="pt-4">
            <button
              @click="navigateToAboutPage"
              class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-primary text-white rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 min-h-[48px]"
              aria-label="Learn more about Edward and StudyDock"
            >
              <span>Learn More About Edward</span>
              <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <!-- ===== RIGHT COLUMN: Testimonials & Impact ===== -->
        <div class="space-y-8">
          <!-- Testimonials Header -->
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-semibold text-text mb-2">
              What Students Are Saying
            </h3>
            <p class="text-gray-600">
              Real feedback from students using StudyDock techniques
            </p>
          </div>

          <!-- Testimonials Grid (Fake testimonials for now) -->
          <div class="space-y-6">
            <!-- Testimonial 1 -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div class="flex items-start space-x-4">
                <!-- Avatar -->
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-primary-900 font-semibold text-lg">AK</span>
                </div>
                
                <!-- Testimonial Content -->
                <div class="flex-1">
                  <blockquote class="text-gray-700 italic leading-relaxed">
                    "The Pomodoro technique from StudyDock helped me improve my focus during exam prep. 
                    The offline tools work perfectly even when my data runs out!"
                  </blockquote>
                  
                  <!-- Attribution -->
                  <div class="mt-3 flex items-center justify-between">
                    <div>
                      <p class="font-semibold text-primary">Akua Mensah</p>
                      <p class="text-sm text-gray-500">Senior High School Student</p>
                    </div>
                    
                    <!-- Star Rating -->
                    <div class="flex items-center space-x-1">
                      <svg v-for="star in 5" :key="star" class="h-4 w-4 text-highlight fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div class="flex items-start space-x-4">
                <!-- Avatar -->
                <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-semibold text-lg">KO</span>
                </div>
                
                <!-- Testimonial Content -->
                <div class="flex-1">
                  <blockquote class="text-gray-700 italic leading-relaxed">
                    "Active recall changed how I study for university. The techniques are explained 
                    so clearly and the mobile interface makes it easy to practice anywhere."
                  </blockquote>
                  
                  <!-- Attribution -->
                  <div class="mt-3 flex items-center justify-between">
                    <div>
                      <p class="font-semibold text-primary">Kwame Osei</p>
                      <p class="text-sm text-gray-500">University of Ghana Student</p>
                    </div>
                    
                    <!-- Star Rating -->
                    <div class="flex items-center space-x-1">
                      <svg v-for="star in 5" :key="star" class="h-4 w-4 text-highlight fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div class="flex items-start space-x-4">
                <!-- Avatar -->
                <div class="w-12 h-12 bg-highlight rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-gray-900 font-semibold text-lg">EA</span>
                </div>
                
                <!-- Testimonial Content -->
                <div class="flex-1">
                  <blockquote class="text-gray-700 italic leading-relaxed">
                    "As a teacher, I recommend StudyDock to all my students. The spaced repetition 
                    method really helps them retain information better for their WASSCE exams."
                  </blockquote>
                  
                  <!-- Attribution -->
                  <div class="mt-3 flex items-center justify-between">
                    <div>
                      <p class="font-semibold text-primary">Esi Asante</p>
                      <p class="text-sm text-gray-500">Mathematics Teacher</p>
                    </div>
                    
                    <!-- Star Rating -->
                    <div class="flex items-center space-x-1">
                      <svg v-for="star in 5" :key="star" class="h-4 w-4 text-highlight fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Impact Stats (Fake for now) -->
          <div class="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h4 class="text-lg font-semibold text-primary mb-4 text-center">
              StudyDock Impact
            </h4>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-primary">500+</div>
                <p class="text-xs text-gray-600">Students Helped</p>
              </div>
              <div>
                <div class="text-2xl font-bold text-primary">95%</div>
                <p class="text-xs text-gray-600">Success Rate</p>
              </div>
              <div>
                <div class="text-2xl font-bold text-primary">24/7</div>
                <p class="text-xs text-gray-600">Available</p>
              </div>
            </div>
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
 * Navigate to the full About page
 * Shows Edward's complete story and background
 */
function navigateToAboutPage(): void {
  router.push('/about')
}
</script>

<!-- 
  All styling uses Tailwind utility classes for:
  - Mobile-first responsive design (grid-cols-1 lg:grid-cols-2)
  - StudyDock color palette (background, primary, accent colors)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (clear typography for readability)
  - Smooth transitions and hover effects for modern feel
  - Accessibility compliance (aria-labels, focus states)
  - Performance optimization (minimal custom CSS, utility-first approach)
  - Professional testimonial design with star ratings
-->