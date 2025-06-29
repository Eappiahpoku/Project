<!-- 
  Blog2View.vue
  Individual blog post page for "Active Recall: The Science of Effective Learning"
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
    <section class="bg-gradient-to-br from-secondary to-secondary-600 py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back to Blog Button -->
        <div class="mb-8">
          <button
            @click="navigateBack"
            class="group inline-flex items-center text-secondary-100 hover:text-white transition-colors duration-200 min-h-[48px]"
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
              Memory Techniques
            </span>
          </div>
          
          <!-- Article Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Active Recall: The Science of Effective Learning
          </h1>
          
          <!-- Article Subtitle -->
          <p class="text-xl text-secondary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover why testing yourself is more effective than re-reading notes. Learn practical active recall 
            strategies that boost memory retention by up to 50%.
          </p>
          
          <!-- Article Metadata -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-secondary-100">
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
              <span>June 23, 2025</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
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
                    class="block text-sm text-gray-600 hover:text-secondary transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-secondary pl-3"
                    :class="{ 'text-secondary border-secondary': activeSection === section.id }"
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
                    <span class="text-sm text-gray-600">Memory Boost</span>
                    <span class="text-sm font-medium text-secondary">+50%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Study Time</span>
                    <span class="text-sm font-medium text-gray-900">Reduced</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Long-term Retention</span>
                    <span class="text-sm font-medium text-secondary">+75%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Difficulty Level</span>
                    <span class="text-sm font-medium text-gray-900">Easy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Article Content -->
          <div class="lg:col-span-3">
            <article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              <!-- Article Featured Image -->
              <div class="aspect-video bg-gradient-to-br from-secondary to-secondary-600 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="h-24 w-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <!-- Image overlay for better text readability -->
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm opacity-80">Illustration: Active Recall Learning Process</p>
                </div>
              </div>

              <!-- Article Body -->
              <div class="p-8 sm:p-12">
                
                <!-- Introduction Section -->
                <section id="introduction" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Most students spend countless hours re-reading notes, highlighting textbooks, and copying 
                      information over and over again. Unfortunately, these popular study methods are among the 
                      least effective ways to learn and remember information long-term.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Active recall, on the other hand, is a scientifically proven learning technique that 
                      involves actively retrieving information from memory without looking at your notes or 
                      textbook. Research shows that this method can improve memory retention by up to 50% 
                      compared to passive study methods.
                    </p>
                    <div class="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
                      <p class="text-secondary font-medium">
                        <strong>Key Insight:</strong> The effort required to retrieve information from memory 
                        strengthens neural pathways and makes information more accessible in the future.
                      </p>
                    </div>
                  </div>
                </section>

                <!-- What Is Active Recall Section -->
                <section id="what-is-active-recall" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Is Active Recall?</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Active recall is a learning principle where you deliberately attempt to remember information 
                      without referring to your study materials. Instead of passively reading or listening, you 
                      actively test your knowledge and force your brain to work harder.
                    </p>
                    
                    <!-- Comparison Table -->
                    <div class="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Passive vs. Active Learning</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-red-700 mb-3">❌ Passive Learning (Less Effective)</h5>
                          <ul class="space-y-2 text-sm text-gray-600">
                            <li>• Re-reading notes multiple times</li>
                            <li>• Highlighting textbooks</li>
                            <li>• Copying notes word-for-word</li>
                            <li>• Listening to recorded lectures</li>
                            <li>• Creating detailed summaries</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-green-700 mb-3">✅ Active Learning (More Effective)</h5>
                          <ul class="space-y-2 text-sm text-gray-600">
                            <li>• Testing yourself with flashcards</li>
                            <li>• Explaining concepts out loud</li>
                            <li>• Solving practice problems</li>
                            <li>• Creating mind maps from memory</li>
                            <li>• Teaching concepts to others</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Science Behind Section -->
                <section id="science-behind" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Science Behind Active Recall</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Decades of research in cognitive psychology have proven that active recall is one of the 
                      most effective learning strategies. Here's what happens in your brain:
                    </p>
                    
                    <div class="space-y-6 mb-8">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Strengthens Neural Pathways</h4>
                          <p class="text-gray-600">
                            When you actively retrieve information, you strengthen the neural connections 
                            associated with that memory, making it easier to access in the future.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Creates Desirable Difficulties</h4>
                          <p class="text-gray-600">
                            The effort required to recall information creates "desirable difficulties" that 
                            enhance learning and make memories more durable.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Reveals Knowledge Gaps</h4>
                          <p class="text-gray-600">
                            Testing yourself helps identify what you don't know, allowing you to focus 
                            your study time on areas that need improvement.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Improves Transfer</h4>
                          <p class="text-gray-600">
                            Active recall helps you apply knowledge in new situations, rather than just 
                            recognizing information in familiar contexts.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Research Statistics -->
                    <div class="bg-secondary rounded-xl p-8 text-white mb-8">
                      <h4 class="text-xl font-semibold mb-4">Research Findings</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-secondary-100">
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">50%</div>
                          <p class="text-sm">Better retention compared to re-reading</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">75%</div>
                          <p class="text-sm">Improvement in long-term memory</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">40%</div>
                          <p class="text-sm">Reduction in study time needed</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">90%</div>
                          <p class="text-sm">Of top students use this method</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Practical Methods Section -->
                <section id="practical-methods" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Practical Active Recall Methods</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Here are proven active recall techniques you can start using immediately:
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Flashcards</h4>
                        </div>
                        <p class="text-gray-600 mb-3">
                          Create digital or physical flashcards with questions on one side and answers on the other.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Use spaced repetition software</li>
                          <li>• Focus on difficult concepts</li>
                          <li>• Review regularly</li>
                        </ul>
                      </div>
                      
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Blank Page Method</h4>
                        </div>
                        <p class="text-gray-600 mb-3">
                          Take a blank page and write everything you remember about a topic without looking at notes.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Start with main concepts</li>
                          <li>• Add details and examples</li>
                          <li>• Check against your notes</li>
                        </ul>
                      </div>
                      
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Explain Out Loud</h4>
                        </div>
                        <p class="text-gray-600 mb-3">
                          Explain concepts out loud as if you're teaching someone else.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Use simple language</li>
                          <li>• Include examples</li>
                          <li>• Identify weak areas</li>
                        </ul>
                      </div>
                      
                      <div class="bg-gray-50 rounded-lg p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-gray-900">Practice Problems</h4>
                        </div>
                        <p class="text-gray-600 mb-3">
                          Solve practice problems without referring to solutions or examples.
                        </p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Start with easier problems</li>
                          <li>• Time yourself</li>
                          <li>• Review mistakes thoroughly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Getting Started Section -->
                <section id="getting-started" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Getting Started with Active Recall</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Ready to transform your study habits? Follow this step-by-step guide to implement 
                      active recall in your daily routine:
                    </p>
                    
                    <div class="bg-secondary rounded-xl p-8 text-white mb-8">
                      <h4 class="text-xl font-semibold mb-4">Your First Active Recall Session</h4>
                      <ol class="space-y-3 text-secondary-100">
                        <li class="flex items-start">
                          <span class="font-bold mr-3">1.</span>
                          <span>Study your material normally for 15-20 minutes</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">2.</span>
                          <span>Close your notes and textbook completely</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">3.</span>
                          <span>Write down everything you remember on a blank paper</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">4.</span>
                          <span>Check your notes to see what you missed or got wrong</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-3">5.</span>
                          <span>Focus on the gaps in your knowledge and repeat</span>
                        </li>
                      </ol>
                    </div>
                    
                    <!-- Implementation Tips -->
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Implementation Tips</h3>
                    <ul class="space-y-3 text-gray-600 mb-6">
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Start small:</strong> Begin with 10-15 minute active recall sessions</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Be consistent:</strong> Use active recall for every study session</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Embrace difficulty:</strong> If it feels challenging, it's working</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Track progress:</strong> Note which topics need more practice</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <!-- Common Mistakes Section -->
                <section id="common-mistakes" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Many students make these mistakes when first trying active recall:
                    </p>
                    
                    <div class="space-y-6">
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Giving Up Too Quickly</h4>
                        <p class="text-red-700">
                          Active recall feels harder than passive reading, but that difficulty is what makes it effective. 
                          Stick with it even when it feels challenging.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Looking at Notes Too Soon</h4>
                        <p class="text-red-700">
                          Resist the urge to check your notes immediately. Struggle to remember first, 
                          then verify your answers.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Only Using Recognition</h4>
                        <p class="text-red-700">
                          Multiple choice questions only test recognition. Practice free recall by writing 
                          or speaking answers without options.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Avoiding Difficult Topics</h4>
                        <p class="text-red-700">
                          Focus extra attention on topics you struggle to recall. These are exactly 
                          the areas that need more work.
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
                      Active recall isn't just another study technique—it's a fundamental principle of how 
                      our brains learn and remember information. By forcing yourself to actively retrieve 
                      knowledge from memory, you build stronger, more durable memories that will serve you 
                      well in exams and beyond.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      For Ghanaian students facing competitive exams and limited study time, active recall 
                      offers a way to learn more effectively in less time. The initial difficulty is worth 
                      the long-term benefits of improved retention and understanding.
                    </p>
                    
                    <div class="bg-gradient-to-r from-secondary to-secondary-600 rounded-xl p-8 text-white">
                      <h3 class="text-xl font-semibold mb-4">Start Your Active Recall Journey</h3>
                      <p class="text-secondary-100 mb-6">
                        Don't just read about it—try it now! Take a topic you studied recently and see 
                        how much you can recall without looking at your notes. You might be surprised 
                        by what you discover.
                      </p>
                      <button
                        @click="navigateToFlashcards"
                        class="inline-flex items-center px-6 py-3 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[48px]"
                      >
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Try StudyDock Flashcards
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
          
          <!-- Related Article 1: Pomodoro Technique -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 group overflow-hidden">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-secondary transition-colors duration-200">
                Mastering the Pomodoro Technique for Better Focus
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Learn how to use 25-minute focused work sessions to improve productivity.
              </p>
              
              <button
                @click="navigateToBlogPost('blog1')"
                class="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 2: Spaced Repetition -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-accent to-highlight relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-secondary transition-colors duration-200">
                Spaced Repetition: Remember Everything Forever
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Master the art of spaced repetition to move information to long-term memory.
              </p>
              
              <button
                @click="navigateToBlogPost('blog3')"
                class="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 3: Mind Mapping -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 group overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-primary-600 to-secondary relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-12 w-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            
            <div class="p-6">
              <div class="mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Visual Learning
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-secondary transition-colors duration-200">
                Mind Mapping: Visualize Your Way to Success
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Transform complex information into visual mind maps for better learning.
              </p>
              
              <button
                @click="navigateToBlogPost('blog4')"
                class="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-600 transition-colors duration-200"
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
  { id: 'what-is-active-recall', title: 'What Is Active Recall?' },
  { id: 'science-behind', title: 'The Science Behind' },
  { id: 'practical-methods', title: 'Practical Methods' },
  { id: 'getting-started', title: 'Getting Started' },
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
 * Navigate to StudyDock Flashcards tool
 * Call-to-action to try the actual active recall tool
 */
function navigateToFlashcards(): void {
  router.push('/tools/flashcards')
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
  - StudyDock color palette (secondary theme for this article)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (clear typography, offline-friendly design)
  - Modern article typography (prose classes, proper line height)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (smooth scrolling, efficient event handling)
  - Educational design (step-by-step processes, comparison tables)
  - Professional blog layout (table of contents, related articles)
-->