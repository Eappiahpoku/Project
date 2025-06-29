<!-- 
  Blog5View.vue
  Individual blog post page for "Note-Taking Strategies That Actually Work"
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
    <section class="bg-gradient-to-br from-secondary-600 to-primary py-12 sm:py-16">
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
              Study Techniques
            </span>
          </div>
          
          <!-- Article Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Note-Taking Strategies That Actually Work
          </h1>
          
          <!-- Article Subtitle -->
          <p class="text-xl text-secondary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Master proven note-taking methods that improve comprehension and retention. 
            From Cornell notes to digital strategies, find the system that works for you.
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
              <span>June 15, 2025</span>
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
                    <span class="text-sm text-gray-600">Comprehension Boost</span>
                    <span class="text-sm font-medium text-secondary">+50%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Retention Rate</span>
                    <span class="text-sm font-medium text-secondary">+70%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Best Method</span>
                    <span class="text-sm font-medium text-gray-900">Cornell Notes</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Tools Needed</span>
                    <span class="text-sm font-medium text-gray-900">Paper & Pen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Article Content -->
          <div class="lg:col-span-3">
            <article class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              <!-- Article Featured Image -->
              <div class="aspect-video bg-gradient-to-br from-secondary-600 to-primary relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="h-24 w-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <!-- Image overlay for better text readability -->
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm opacity-80">Illustration: Effective Note-Taking Methods</p>
                </div>
              </div>

              <!-- Article Body -->
              <div class="p-8 sm:p-12">
                
                <!-- Introduction Section -->
                <section id="introduction" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Have you ever sat through a lecture, writing frantically to capture every word, only to 
                      look at your notes later and feel completely lost? Or maybe you've tried taking notes 
                      but found yourself either writing too much or too little, missing the key points entirely.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Effective note-taking is one of the most important skills for academic success, yet most 
                      students never learn how to do it properly. The right note-taking strategy can dramatically 
                      improve your understanding during lectures, make studying more efficient, and boost your 
                      exam performance.
                    </p>
                    <div class="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
                      <p class="text-secondary font-medium">
                        <strong>Key Insight:</strong> Good notes aren't just a record of what was said—they're 
                        a tool for learning, understanding, and remembering information long-term.
                      </p>
                    </div>
                  </div>
                </section>

                <!-- Why Note-Taking Matters Section -->
                <section id="why-note-taking-matters" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Note-Taking Matters</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Taking notes isn't just about having something to refer to later. The process of note-taking 
                      itself is a powerful learning tool that engages multiple parts of your brain and improves 
                      comprehension in real-time.
                    </p>
                    
                    <!-- Benefits Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div class="bg-green-50 rounded-xl p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-green-800">Active Learning</h4>
                        </div>
                        <p class="text-green-700 text-sm">
                          Writing notes forces your brain to process and organize information actively, 
                          leading to better understanding and retention.
                        </p>
                      </div>
                      
                      <div class="bg-blue-50 rounded-xl p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h4 class="text-lg font-semibold text-blue-800">Focus Enhancement</h4>
                        </div>
                        <p class="text-blue-700 text-sm">
                          Taking notes keeps your mind engaged and prevents it from wandering during 
                          lectures or reading sessions.
                        </p>
                      </div>
                      
                      <div class="bg-purple-50 rounded-xl p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <h4 class="text-lg font-semibold text-purple-800">Memory Boost</h4>
                        </div>
                        <p class="text-purple-700 text-sm">
                          The physical act of writing creates stronger memory pathways than just 
                          listening or reading alone.
                        </p>
                      </div>
                      
                      <div class="bg-orange-50 rounded-xl p-6">
                        <div class="flex items-center mb-3">
                          <svg class="h-6 w-6 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          <h4 class="text-lg font-semibold text-orange-800">Review Tool</h4>
                        </div>
                        <p class="text-orange-700 text-sm">
                          Well-organized notes become an invaluable study resource for exam 
                          preparation and assignment work.
                        </p>
                      </div>
                    </div>
                    
                    <!-- Research Stats -->
                    <div class="bg-secondary rounded-xl p-8 text-white mb-8">
                      <h4 class="text-xl font-semibold mb-4">Research Shows</h4>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-secondary-100">
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">50%</div>
                          <p class="text-sm">Better comprehension when taking notes vs. just listening</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">70%</div>
                          <p class="text-sm">Improved retention with handwritten vs. no notes</p>
                        </div>
                        <div>
                          <div class="text-3xl font-bold text-white mb-2">65%</div>
                          <p class="text-sm">Higher test scores with structured note-taking methods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Cornell Note-Taking Method Section -->
                <section id="cornell-method" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Cornell Note-Taking Method</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      The Cornell Note-Taking System, developed at Cornell University, is one of the most 
                      effective and widely-used note-taking methods. It divides your page into three sections, 
                      each serving a specific purpose in the learning process.
                    </p>
                    
                    <!-- Cornell Method Visual -->
                    <div class="bg-gray-50 rounded-lg p-8 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-6 text-center">Cornell Note Layout</h4>
                      <div class="bg-white border-2 border-gray-300 rounded-lg p-4 max-w-2xl mx-auto">
                        <div class="space-y-4">
                          <!-- Header -->
                          <div class="border-b border-gray-300 pb-2">
                            <div class="bg-blue-100 p-2 rounded text-center">
                              <span class="text-sm font-medium text-blue-800">Header: Course, Date, Topic</span>
                            </div>
                          </div>
                          
                          <!-- Main Content Area -->
                          <div class="grid grid-cols-3 gap-4 min-h-[200px]">
                            <!-- Cue Column -->
                            <div class="bg-yellow-100 p-3 rounded">
                              <h5 class="text-xs font-semibold text-yellow-800 mb-2">Cue Column</h5>
                              <div class="text-xs text-yellow-700 space-y-1">
                                <p>• Key questions</p>
                                <p>• Keywords</p>
                                <p>• Main ideas</p>
                                <p>• Formulas</p>
                              </div>
                            </div>
                            
                            <!-- Notes Column -->
                            <div class="col-span-2 bg-green-100 p-3 rounded">
                              <h5 class="text-xs font-semibold text-green-800 mb-2">Notes Column</h5>
                              <div class="text-xs text-green-700 space-y-1">
                                <p>• Detailed lecture notes</p>
                                <p>• Explanations and examples</p>
                                <p>• Important facts and figures</p>
                                <p>• Diagrams and illustrations</p>
                              </div>
                            </div>
                          </div>
                          
                          <!-- Summary Section -->
                          <div class="border-t border-gray-300 pt-2">
                            <div class="bg-purple-100 p-2 rounded">
                              <span class="text-xs font-medium text-purple-800">Summary: Key takeaways and main concepts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- How to Use Cornell Method -->
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">How to Use the Cornell Method</h3>
                    <div class="space-y-6 mb-8">
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Set Up Your Page</h4>
                          <p class="text-gray-600 mb-3">
                            Draw a vertical line about 2.5 inches from the left margin. Draw a horizontal 
                            line about 2 inches from the bottom. This creates three sections.
                          </p>
                          <div class="bg-gray-50 rounded p-4">
                            <p class="text-sm text-gray-600"><strong>Page dimensions for notebooks:</strong></p>
                            <ul class="text-sm text-gray-600 space-y-1 mt-2">
                              <li>• Cue column: 6cm wide</li>
                              <li>• Notes column: Remaining width</li>
                              <li>• Summary section: 5cm high</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Take Notes in the Main Column</h4>
                          <p class="text-gray-600 mb-3">
                            During the lecture, write your notes in the larger right column. Focus on 
                            capturing key ideas, explanations, and examples. Use abbreviations to keep up.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Add Cues After Class</h4>
                          <p class="text-gray-600 mb-3">
                            Within 24 hours, review your notes and add keywords, questions, and main 
                            ideas in the left column. This reinforces learning and creates study cues.
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 class="text-lg font-semibold text-gray-900 mb-2">Write a Summary</h4>
                          <p class="text-gray-600 mb-3">
                            At the bottom, write a brief summary of the main concepts. This helps 
                            consolidate your understanding and creates a quick review tool.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Outline Method Section -->
                <section id="outline-method" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Outline Method</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      The Outline Method is perfect for lectures that follow a clear structure. It organizes 
                      information hierarchically, showing the relationships between main ideas and supporting details.
                    </p>
                    
                    <!-- Outline Example -->
                    <div class="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Outline Structure Example</h4>
                      <div class="bg-white border border-gray-200 rounded p-4 font-mono text-sm">
                        <div class="space-y-2">
                          <div><strong>I. Photosynthesis Overview</strong></div>
                          <div class="ml-4">A. Definition: Process plants use to make food</div>
                          <div class="ml-4">B. Importance: Produces oxygen for all life</div>
                          <div class="ml-8">1. Animals depend on oxygen</div>
                          <div class="ml-8">2. Removes CO₂ from atmosphere</div>
                          
                          <div class="mt-4"><strong>II. Light-Dependent Reactions</strong></div>
                          <div class="ml-4">A. Location: Thylakoids in chloroplasts</div>
                          <div class="ml-4">B. Products: ATP and NADPH</div>
                          <div class="ml-8">1. ATP provides energy</div>
                          <div class="ml-8">2. NADPH provides electrons</div>
                          
                          <div class="mt-4"><strong>III. Calvin Cycle</strong></div>
                          <div class="ml-4">A. Location: Stroma of chloroplasts</div>
                          <div class="ml-4">B. Process: CO₂ → glucose</div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- When to Use Outline Method -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div class="bg-green-50 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-green-800 mb-3">✅ Best For</h4>
                        <ul class="text-green-700 text-sm space-y-2">
                          <li>• Well-structured lectures</li>
                          <li>• Textbook reading</li>
                          <li>• History and literature classes</li>
                          <li>• Science courses with clear topics</li>
                          <li>• Preparing presentations</li>
                        </ul>
                      </div>
                      
                      <div class="bg-red-50 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-red-800 mb-3">❌ Avoid For</h4>
                        <ul class="text-red-700 text-sm space-y-2">
                          <li>• Fast-paced, unstructured lectures</li>
                          <li>• Mathematics problem-solving</li>
                          <li>• Brainstorming sessions</li>
                          <li>• Discussions without clear hierarchy</li>
                          <li>• Lectures with lots of examples</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Digital Note-Taking Section -->
                <section id="digital-strategies" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Digital Note-Taking Strategies</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Digital note-taking can be incredibly effective, especially for Ghanaian students who 
                      primarily use mobile devices. However, it requires different strategies than traditional 
                      pen-and-paper methods.
                    </p>
                    
                    <!-- Digital vs Handwritten Comparison -->
                    <div class="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Digital vs Handwritten Notes</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-gray-900 mb-3">📱 Digital Advantages</h5>
                          <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Easy to search and organize</li>
                            <li>• Can include links and multimedia</li>
                            <li>• Automatic backup and sync</li>
                            <li>• Easy to share with classmates</li>
                            <li>• Faster typing for some students</li>
                            <li>• Works well offline on mobile</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-gray-900 mb-3">✍️ Handwritten Advantages</h5>
                          <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Better for memory and retention</li>
                            <li>• Easier to draw diagrams and equations</li>
                            <li>• No distractions from notifications</li>
                            <li>• No battery or tech issues</li>
                            <li>• More flexible layout options</li>
                            <li>• Works in any environment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Mobile Note-Taking Apps for Ghana -->
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Best Mobile Note-Taking Apps for Ghana</h3>
                    <div class="space-y-4 mb-8">
                      <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                          <h5 class="font-semibold text-gray-900">Google Keep</h5>
                          <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-2">
                          Perfect for quick notes and reminders. Works offline and syncs when connected.
                        </p>
                        <div class="text-xs text-gray-500">
                          ✓ Works offline • ✓ Voice notes • ✓ Image notes • ✓ Free
                        </div>
                      </div>
                      
                      <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                          <h5 class="font-semibold text-gray-900">Microsoft OneNote</h5>
                          <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Free</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-2">
                          Excellent for structured note-taking with notebooks and sections.
                        </p>
                        <div class="text-xs text-gray-500">
                          ✓ Cornell templates • ✓ Handwriting support • ✓ Cross-platform • ✓ Free
                        </div>
                      </div>
                      
                      <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-2">
                          <h5 class="font-semibold text-gray-900">Simple Notepad (Offline)</h5>
                          <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-2">
                          Basic but reliable offline note-taking for students with limited data.
                        </p>
                        <div class="text-xs text-gray-500">
                          ✓ Fully offline • ✓ No data usage • ✓ Fast and simple • ✓ Small app size
                        </div>
                      </div>
                    </div>
                    
                    <!-- Digital Note-Taking Tips -->
                    <div class="bg-secondary/10 rounded-lg p-6 mb-8">
                      <h4 class="text-lg font-semibold text-gray-900 mb-3">💡 Digital Note-Taking Tips</h4>
                      <ul class="space-y-2 text-gray-600">
                        <li class="flex items-start">
                          <span class="font-bold mr-2">•</span>
                          <span><strong>Turn off notifications</strong> during note-taking to avoid distractions</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-2">•</span>
                          <span><strong>Use consistent formatting</strong> (headings, bullet points) for easy review</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-2">•</span>
                          <span><strong>Create templates</strong> for different subjects to save time</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-2">•</span>
                          <span><strong>Use cloud storage</strong> but ensure offline access for poor connectivity</span>
                        </li>
                        <li class="flex items-start">
                          <span class="font-bold mr-2">•</span>
                          <span><strong>Regular backups</strong> to prevent losing important notes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <!-- Subject-Specific Strategies Section -->
                <section id="subject-specific" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Subject-Specific Note-Taking Strategies</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Different subjects require different note-taking approaches. Here's how to adapt your 
                      strategy for the subjects Ghanaian students commonly study:
                    </p>
                    
                    <div class="space-y-8">
                      <!-- Mathematics -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">🧮 Mathematics</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Best Practices</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Copy every step of problem solutions</li>
                              <li>• Use plenty of white space</li>
                              <li>• Highlight key formulas and theorems</li>
                              <li>• Include worked examples</li>
                              <li>• Note common mistakes to avoid</li>
                            </ul>
                          </div>
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Organization Tips</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• One problem per page</li>
                              <li>• Number each step clearly</li>
                              <li>• Box final answers</li>
                              <li>• Create a formula sheet</li>
                              <li>• Review and redo problems</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Science Subjects -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">🔬 Science Subjects</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Key Elements</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Draw detailed diagrams</li>
                              <li>• Label all parts clearly</li>
                              <li>• Include process steps</li>
                              <li>• Note cause-and-effect relationships</li>
                              <li>• Record experimental procedures</li>
                            </ul>
                          </div>
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Study Aids</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Create concept maps</li>
                              <li>• Use color coding for different topics</li>
                              <li>• Make vocabulary lists</li>
                              <li>• Include real-world examples</li>
                              <li>• Connect to previous knowledge</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Literature and Languages -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">📚 Literature & Languages</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Analysis Notes</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Track character development</li>
                              <li>• Note themes and symbols</li>
                              <li>• Record important quotes</li>
                              <li>• Analyze literary devices</li>
                              <li>• Connect to historical context</li>
                            </ul>
                          </div>
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Language Learning</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Organize vocabulary by theme</li>
                              <li>• Include pronunciation guides</li>
                              <li>• Note grammar rules with examples</li>
                              <li>• Practice sentence structures</li>
                              <li>• Record common phrases</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Social Studies -->
                      <div class="border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">🌍 Social Studies</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Historical Events</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Create timelines</li>
                              <li>• Note causes and consequences</li>
                              <li>• Include key figures and dates</li>
                              <li>• Connect events to present day</li>
                              <li>• Map geographical locations</li>
                            </ul>
                          </div>
                          <div>
                            <h5 class="font-medium text-gray-900 mb-2">Concepts</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                              <li>• Define key terms clearly</li>
                              <li>• Use examples from Ghana</li>
                              <li>• Compare different perspectives</li>
                              <li>• Note cultural significance</li>
                              <li>• Include statistical data</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- Common Mistakes Section -->
                <section id="common-mistakes" class="mb-12">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Common Note-Taking Mistakes</h2>
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 leading-relaxed mb-6">
                      Avoid these common mistakes that can make your notes less effective:
                    </p>
                    
                    <div class="space-y-6">
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Trying to Write Everything</h4>
                        <p class="text-red-700 mb-2">
                          Attempting to capture every word prevents you from understanding the big picture.
                        </p>
                        <p class="text-red-600 text-sm">
                          <strong>Solution:</strong> Focus on main ideas, key terms, and explanations. Use abbreviations and symbols.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Not Reviewing Notes</h4>
                        <p class="text-red-700 mb-2">
                          Taking notes but never looking at them again wastes the effort.
                        </p>
                        <p class="text-red-600 text-sm">
                          <strong>Solution:</strong> Review notes within 24 hours and revise weekly. Add missing information.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Poor Organization</h4>
                        <p class="text-red-700 mb-2">
                          Messy, unstructured notes are hard to review and understand later.
                        </p>
                        <p class="text-red-600 text-sm">
                          <strong>Solution:</strong> Use consistent formatting, clear headings, and logical structure.
                        </p>
                      </div>
                      
                      <div class="border-l-4 border-red-400 bg-red-50 p-6 rounded-r-lg">
                        <h4 class="text-lg font-semibold text-red-800 mb-2">❌ Not Personalizing Notes</h4>
                        <p class="text-red-700 mb-2">
                          Copying exactly what the teacher says without processing it yourself.
                        </p>
                        <p class="text-red-600 text-sm">
                          <strong>Solution:</strong> Rephrase concepts in your own words. Add your own examples and connections.
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
                      Effective note-taking is a skill that will serve you throughout your academic career and beyond. 
                      Whether you prefer the structured approach of Cornell notes, the hierarchical organization 
                      of outlines, or the flexibility of digital tools, the key is to find a system that works 
                      for you and stick with it.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                      For Ghanaian students, particularly those preparing for WASSCE and university entrance 
                      exams, good note-taking habits can make the difference between struggling to remember 
                      information and having a reliable, organized study resource at your fingertips.
                    </p>
                    
                    <div class="bg-gradient-to-r from-secondary-600 to-primary rounded-xl p-8 text-white">
                      <h3 class="text-xl font-semibold mb-4">Start Taking Better Notes Today</h3>
                      <p class="text-secondary-100 mb-6">
                        Choose one note-taking method from this article and try it in your next class. 
                        Remember, like any skill, note-taking improves with practice. Start simple, 
                        be consistent, and gradually refine your approach.
                      </p>
                      <button
                        @click="navigateToNoteTools"
                        class="inline-flex items-center px-6 py-3 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[48px]"
                      >
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Try StudyDock Note Templates
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
          
          <!-- Related Article 1: Mind Mapping -->
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

          <!-- Related Article 2: Active Recall -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 group overflow-hidden">
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
              
              <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-3 group-hover:text-secondary transition-colors duration-200">
                Active Recall: The Science of Effective Learning
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Discover why testing yourself is more effective than re-reading notes.
              </p>
              
              <button
                @click="navigateToBlogPost('blog2')"
                class="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-600 transition-colors duration-200"
              >
                Read Article
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>

          <!-- Related Article 3: Spaced Repetition -->
          <article class="bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 group overflow-hidden">
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
  { id: 'why-note-taking-matters', title: 'Why Note-Taking Matters' },
  { id: 'cornell-method', title: 'Cornell Method' },
  { id: 'outline-method', title: 'Outline Method' },
  { id: 'digital-strategies', title: 'Digital Strategies' },
  { id: 'subject-specific', title: 'Subject-Specific Tips' },
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
    blog4: '/blog/blog4'
  }
  
  const route = routes[blogId as keyof typeof routes]
  if (route) {
    router.push(route)
  }
}

/**
 * Navigate to StudyDock Note-Taking tools
 * Call-to-action to try the actual note templates and tools
 */
function navigateToNoteTools(): void {
  router.push('/tools/note-templates')
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
  - StudyDock color palette (secondary-primary gradient theme for this article)
  - Touch-optimized interactions (min-h-[48px] for buttons)
  - Ghana-specific optimizations (offline app recommendations, mobile-first layout)
  - Modern article typography (prose classes, proper line height)
  - Accessibility compliance (aria-labels, focus states, semantic HTML)
  - Performance optimization (smooth scrolling, efficient event handling)
  - Educational design (step-by-step tutorials, practical examples, subject-specific tips)
  - Professional blog layout (table of contents, related articles, visual elements)
-->