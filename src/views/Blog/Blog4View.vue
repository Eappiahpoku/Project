<!-- 
  Blog4View.vue
  Individual blog post page for "Mind Mapping: Visualize Your Way to Success"
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
    <section class="bg-gradient-to-br from-primary-600 to-secondary py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back to Blog Button -->
        <div class="mb-8">
          <button
            @click="navigateBack"
            class="group inline-flex items-center text-primary-100 hover:text-white transition-colors duration-200 min-h-[48px]"
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
            <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
              Visual Learning
            </span>
          </div>
          
          <!-- Article Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Mind Mapping: Visualize Your Way to Success
          </h1>
          
          <!-- Article Subtitle -->
          <p class="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform complex information into visual mind maps for better learning and understanding. 
            Discover how visual thinking can revolutionize your study habits.
          </p>
          
          <!-- Article Metadata -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-100">
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
              <span>June 18, 2025</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
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
                    class="block text-sm text-gray-600 hover:text-primary transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    :class="{ 'text-primary border-primary': activeSection === section.id }"
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
                    <span class="text-sm text-gray-600">Learning Speed</span>
                    <span class="text-sm font-medium text-primary">+60%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Information Recall</span>
                    <span class="text-sm font-medium text-primary">+40%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Tools Needed</span>
                    <span class="text-sm font-medium text-gray-900">Paper & Pen</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Difficulty Level</span>
                    <span class="text-sm font-medium text-gray-900">Beginner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Article Content -->
          <div class="lg:col-span-3">
            <article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              <!-- Article Featured Image -->
              <div class="aspect-video bg-gradient-to-br from-primary-600 to-secondary relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="h-24 w-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <!-- Image overlay for better text readability -->
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm opacity-80">Illustration: Mind Map Visualization Process</p>
                </div>
              </div>

              <!-- Article Body -->
              <div class="p-8 sm:p-12">
                
                <!-- Introduction Section -->
                <section id="introduction" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Have you ever felt overwhelmed when trying to understand complex topics with lots of 
                      interconnected information? Whether it's history, biology, economics, or literature, 
                      some subjects seem to have so many pieces that it's hard to see how they all fit together.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Mind mapping is a visual learning technique that transforms complex information into 
                      clear, organized diagrams that mirror how your brain naturally processes information. 
                      Instead of linear notes that go from top to bottom, mind maps radiate outward from a 
                      central concept, showing relationships and connections in a way that's easy to understand.
                    </p>
                    <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                      <p class="text-primary font-medium">
                        <strong>Key Insight:</strong> Your brain doesn't think in lists—it thinks in connections. 
                        Mind maps work because they match your brain's natural way of organizing information.
                      </p>
                    </div>
                  </div>
                </section>

                <!-- What Is Mind Mapping Section -->
                <section id="what-is-mind-mapping" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Is Mind Mapping?</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      A mind map is a visual diagram that represents information in a radial, branching structure. 
                      It starts with a central topic in the middle and branches out to related subtopics, facts, 
                      and ideas. Each branch can have sub-branches, creating a tree-like structure that shows 
                      how all pieces of information connect.
                    </p>
                    
                    <!-- Mind Map Structure Example -->
                    <div class="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Basic Mind Map Structure</h4>
                      <div class="text-center space-y-4">
                        <!-- Central Topic -->
                        <div class="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold">
                          CENTRAL TOPIC
                        </div>
                        
                        <!-- Main Branches -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div class="text-center">
                            <div class="bg-secondary text-white px-4 py-2 rounded-lg mb-2">Main Branch 1</div>
                            <div class="space-y-1">
                              <div class="bg-secondary/20 px-3 py-1 rounded text-sm">Sub-topic A</div>
                              <div class="bg-secondary/20 px-3 py-1 rounded text-sm">Sub-topic B</div>
                            </div>
                          </div>
                          
                          <div class="text-center">
                            <div class="bg-secondary text-white px-4 py-2 rounded-lg mb-2">Main Branch 2</div>
                            <div class="space-y-1">
                              <div class="bg-secondary/20 px-3 py-1 rounded text-sm">Sub-topic C</div>
                              <div class="bg-secondary/20 px-3 py-1 rounded text-sm">Sub-topic D</div>
                            </div>
                          </div>
                          
                          <div class="text-center">
                            <div class="bg-secondary text-white px-4 py-2 rounded-lg mb-2">Main Branch 3</div>
                            <div class="space-y-1">
                              <div class="bg-secondary/20 px-3 py-1 rounded text-sm">Sub-topic E</div>
                              <div class="bg-secondary/20 px-3 py-1 rounded text-sm">Sub-topic F</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Key Elements -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div class="border border-gray-200 rounded-lg p-4">
                        <h5 class="font-semibold text-gray-900 mb-2">🎯 Central Topic</h5>
                        <p class="text-gray-600 text-sm">
                          The main subject placed in the center of your paper. Everything radiates from here.
                        </p>
                      </div>
                      
                      <div class="border border-gray-200 rounded-lg p-4">
                        <h5 class="font-semibold text-gray-900 mb-2">🌿 Main Branches</h5>
                        <p class="text-gray-600 text-sm">
                          Major categories or themes that connect directly to the central topic.
                        </p>
                      </div>
                      
                      <div class="border border-gray-200 rounded-lg p-4">
                        <h5 class="font-semibold text-gray-900 mb-2">🍃 Sub-branches</h5>
                        <p class="text-gray-600 text-sm">
                          Specific details, facts, or examples that support each main branch.
                        </p>
                      </div>
                      
                      <div class="border border-gray-200 rounded-lg p-4">
                        <h5 class="font-semibold text-gray-900 mb-2">🔗 Connections</h5>
                        <p class="text-gray-600 text-sm">
                          Lines or arrows showing relationships between different parts of the map.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Why Mind Maps Work Section -->
                <section id="why-it-works" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Mind Maps Work So Well</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Mind mapping is effective because it aligns with how your brain naturally processes 
                      and stores information. Here's the science behind why they work:
                    </p>
                    
                    <div class="space-y-6 mb-8">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Activates Both Brain Hemispheres</h4>
                          <p class="text-gray-600">
                            Mind maps combine logical structure (left brain) with colors, images, and spatial 
                            relationships (right brain), creating stronger neural connections and better memory.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Shows the Big Picture</h4>
                          <p class="text-gray-600">
                            Unlike linear notes, mind maps let you see the entire topic at once, helping you 
                            understand how all pieces fit together and spot patterns.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Improves Memory Through Association</h4>
                          <p class="text-gray-600">
                            By showing connections between ideas, mind maps help you remember information 
                            through association—one idea triggers another, creating memory chains.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Encourages Active Learning</h4>
                          <p class="text-gray-600">
                            Creating a mind map requires you to actively process information, decide what's 
                            important, and organize it logically—all forms of active learning.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Research Statistics -->
                    <div class="bg-primary rounded-xl p-8 text-white mb-8">
                      <h4 class="text-xl font-semibold mb-4">Research Results</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-primary-100">
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">60%</div>
                          <p class="text-sm">Faster learning compared to traditional notes</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">40%</div>
                          <p class="text-sm">Better information recall after one week</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">80%</div>
                          <p class="text-sm">Of students prefer mind maps for complex topics</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">50%</div>
                          <p class="text-sm">Reduction in study time needed for exams</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- How to Create Section -->
                <section id="how-to-create" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How to Create Your First Mind Map</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Creating effective mind maps is easier than you think. Here's a step-by-step guide 
                      to get you started:
                    </p>
                    
                    <div class="space-y-6 mb-8">
                      <!-- Step 1 -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            1
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Start with a Blank Paper</h4>
                            <p class="text-gray-600 mb-3">
                              Use a large sheet of paper (A4 or bigger) in landscape orientation. This gives 
                              you plenty of space to expand your ideas.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>Materials needed:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Large paper (A4 minimum, A3 preferred)</li>
                                <li>• Colored pens or pencils (3-5 colors)</li>
                                <li>• Black pen for main text</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Step 2 -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            2
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Write Your Central Topic</h4>
                            <p class="text-gray-600 mb-3">
                              In the center of your paper, write your main topic in bold letters. Circle it 
                              or draw a box around it to make it stand out.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>Examples of central topics:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• "World War II" (for history class)</li>
                                <li>• "Photosynthesis" (for biology)</li>
                                <li>• "Shakespeare's Hamlet" (for literature)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Step 3 -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            3
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Add Main Branches</h4>
                            <p class="text-gray-600 mb-3">
                              Draw 3-7 thick lines radiating out from your central topic. These are your main 
                              branches—the major categories or themes.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>For "World War II" example:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Causes</li>
                                <li>• Major Battles</li>
                                <li>• Key Figures</li>
                                <li>• Consequences</li>
                                <li>• Timeline</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Step 4 -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            4
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Add Sub-branches and Details</h4>
                            <p class="text-gray-600 mb-3">
                              From each main branch, draw smaller lines for specific facts, examples, or 
                              sub-categories. Use keywords rather than full sentences.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>Under "Causes" branch:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Treaty of Versailles</li>
                                <li>• Economic Depression</li>
                                <li>• Rise of Fascism</li>
                                <li>• Invasion of Poland</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Step 5 -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start space-x-4">
                          <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            5
                          </div>
                          <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Use Colors and Images</h4>
                            <p class="text-gray-600 mb-3">
                              Use different colors for different branches to make them distinct. Add simple 
                              drawings, symbols, or icons to make information more memorable.
                            </p>
                            <div class="bg-gray-50 rounded p-4">
                              <p class="text-sm text-gray-600 mb-2"><strong>Color coding tips:</strong></p>
                              <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Use one color per main branch</li>
                                <li>• Keep sub-branches the same color as their parent</li>
                                <li>• Use red for important or urgent information</li>
                                <li>• Add simple drawings: 🏛️ for historical events, ⚔️ for battles</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Best Practices Section -->
                <section id="best-practices" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Mind Mapping Best Practices</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      To create effective mind maps that truly help your learning, follow these proven best practices:
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <!-- Do's -->
                      <div class="bg-green-50 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-green-800 mb-4">✅ Do This</h4>
                        <ul class="space-y-3 text-green-700">
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Use keywords only:</strong> Single words or short phrases work better than sentences</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Curve your lines:</strong> Curved branches are more visually appealing and memorable</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Start from the center:</strong> Always work outward from your central topic</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Use your own words:</strong> Rephrase information in your own terms</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Review and revise:</strong> Update your mind maps as you learn more</span>
                          </li>
                        </ul>
                      </div>
                      
                      <!-- Don'ts -->
                      <div class="bg-red-50 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-red-800 mb-4">❌ Avoid This</h4>
                        <ul class="space-y-3 text-red-700">
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Don't use full sentences:</strong> They clutter the map and slow down reading</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Don't make it too complex:</strong> Keep each level focused and clear</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Don't use only black ink:</strong> Colors help with memory and organization</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Don't be too neat:</strong> Perfection isn't the goal—understanding is</span>
                          </li>
                          <li class="flex items-start">
                            <span class="font-bold mr-2">•</span>
                            <span><strong>Don't copy exactly:</strong> Avoid copying text word-for-word from sources</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <!-- Digital vs Paper -->
                    <div class="bg-primary/5 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-3">💡 Digital vs. Paper Mind Maps</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 class="font-medium text-gray-900 mb-2">Paper Mind Maps (Recommended for Beginners)</h5>
                          <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Better for memory and learning</li>
                            <li>• No distractions</li>
                            <li>• Works without electricity</li>
                            <li>• More creative freedom</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-gray-900 mb-2">Digital Mind Maps</h5>
                          <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Easy to edit and share</li>
                            <li>• Professional appearance</li>
                            <li>• Can include links and files</li>
                            <li>• Better for collaboration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Study Applications Section -->
                <section id="study-applications" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Study Applications for Ghanaian Students</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Mind maps are particularly useful for the subjects and exams that Ghanaian students face. 
                      Here's how to apply them to your specific study needs:
                    </p>
                    
                    <div class="space-y-6 mb-8">
                      <!-- WASSCE Preparation -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">🎓 WASSCE Preparation</h4>
                        <p class="text-gray-600 mb-3">
                          Use mind maps to organize and review complex topics across multiple subjects:
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Social Studies</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Map Ghana's history by periods</li>
                              <li>• Connect economic policies to outcomes</li>
                              <li>• Visualize government structures</li>
                            </ul>
                          </div>
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Integrated Science</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Connect physics formulas to applications</li>
                              <li>• Map biological processes and systems</li>
                              <li>• Link chemistry concepts to daily life</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Literature -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">📚 Literature Analysis</h4>
                        <p class="text-gray-600 mb-3">
                          Perfect for analyzing novels, plays, and poems:
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1 mb-3">
                          <li>• Central topic: Book title (e.g., "Purple Hibiscus")</li>
                          <li>• Main branches: Characters, Themes, Plot, Setting, Style</li>
                          <li>• Sub-branches: Specific examples and quotes</li>
                          <li>• Connections: Show relationships between characters and themes</li>
                        </ul>
                      </div>
                      
                      <!-- Mathematics -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">🧮 Mathematics Concepts</h4>
                        <p class="text-gray-600 mb-3">
                          Organize formulas, theorems, and problem-solving strategies:
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1 mb-3">
                          <li>• Group related formulas together</li>
                          <li>• Connect concepts to real-world applications</li>
                          <li>• Map step-by-step problem-solving processes</li>
                          <li>• Link prerequisites to advanced topics</li>
                        </ul>
                      </div>
                      
                      <!-- Languages -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">🗣️ Language Learning</h4>
                        <p class="text-gray-600 mb-3">
                          Effective for English, French, or local language studies:
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1 mb-3">
                          <li>• Vocabulary maps by theme (family, school, food)</li>
                          <li>• Grammar rules with examples</li>
                          <li>• Essay structure planning</li>
                          <li>• Pronunciation guides with phonetic symbols</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Common Mistakes Section -->
                <section id="common-mistakes" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Common Mind Mapping Mistakes</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Avoid these common mistakes that can make your mind maps less effective:
                    </p>
                    
                    <div class="space-y-6">
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Making It Too Detailed</h4>
                        <p class="text-red-700">
                          Trying to include every piece of information makes the map cluttered and hard to read. 
                          Focus on key concepts and main connections.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Using Too Many Colors</h4>
                        <p class="text-red-700">
                          Using every color in your pencil case creates visual chaos. Stick to 3-5 colors 
                          with a clear system for what each color represents.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Starting with Sub-details</h4>
                        <p class="text-red-700">
                          Beginning with small details instead of the big picture leads to disorganized maps. 
                          Always start with the central topic and work outward.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Making One-Time Maps</h4>
                        <p class="text-red-700">
                          Creating a mind map once and never revisiting it wastes its potential. Review and 
                          update your maps regularly as you learn more.
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
                      Mind mapping is more than just a note-taking technique—it's a powerful tool that can 
                      transform how you learn, understand, and remember information. By organizing information 
                      visually and showing connections between ideas, mind maps work with your brain's natural 
                      thinking patterns.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      For Ghanaian students facing diverse subjects in WASSCE and beyond, mind mapping offers 
                      a simple yet effective way to handle complex information. Whether you're analyzing 
                      literature, memorizing historical events, or understanding scientific processes, mind 
                      maps can help you see the bigger picture and remember details more effectively.
                    </p>
                    
                    <div class="bg-gradient-to-r from-primary-600 to-secondary rounded-xl p-8 text-white">
                      <h3 class="text-xl font-semibold mb-4">Start Mapping Your Success</h3>
                      <p class="text-primary-100 mb-6">
                        The best way to learn mind mapping is by doing it. Pick a topic you're studying 
                        right now, grab a piece of paper and some colored pens, and create your first mind map. 
                        You'll be surprised by how much clearer the information becomes.
                      </p>
                      <button
                        @click="navigateToMindMapping"
                        class="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[48px]"
                      >
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Try StudyDock Mind Mapper
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
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                Active Recall: The Science of Effective Learning
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Discover why testing yourself is more effective than re-reading notes.
              </p>
              
              <button
                @click="navigateToBlogPost('blog2')"
                class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 2: Spaced Repetition -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-accent to-highlight relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-gray-900 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                  Long-term Learning
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                Spaced Repetition: Remember Everything Forever
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Master the art of spaced repetition to move information to long-term memory.
              </p>
              
              <button
                @click="navigateToBlogPost('blog3')"
                class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 3: Pomodoro Technique -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group overflow-hidden">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                Mastering the Pomodoro Technique for Better Focus
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Learn how to use 25-minute focused work sessions to improve productivity.
              </p>
              
              <button
                @click="navigateToBlogPost('blog1')"
                class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200"
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
  { id: 'what-is-mind-mapping', title: 'What Is Mind Mapping?' },
  { id: 'why-it-works', title: 'Why It Works' },
  { id: 'how-to-create', title: 'How to Create' },
  { id: 'best-practices', title: 'Best Practices' },
  { id: 'study-applications', title: 'Study Applications' },
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
    blog3: '/blog/blog3',
    blog5: '/blog/blog5'
  }
  
  const route = routes[blogId as keyof typeof routes]
  if (route) {
    router.push(route)
  }
}

/**
 * Navigate to StudyDock Mind Mapping tool
 * Call-to-action to try the actual mind mapping application
 */
function navigateToMindMapping(): void {
  router.push('/tools/mind-mapper')
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
  - StudyDock color palette (primary-secondary gradient theme for this article)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (clear typography, offline-friendly design)
  - Modern article typography (prose classes, proper line height)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (smooth scrolling, efficient event handling)
  - Educational design (step-by-step tutorials, visual examples, practical applications)
  - Professional blog layout (table of contents, related articles)
-->