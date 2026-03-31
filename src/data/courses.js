// Course data with real YouTube video IDs (freeCodeCamp, Traversy Media, etc.)
export const courses = [
  {
    id: 'web-dev',
    title: 'Web Development Full Course',
    slug: 'web-development',
    description: 'Learn HTML, CSS, and JavaScript from scratch. Build responsive websites with curated YouTube tutorials.',
    thumbnail: 'https://img.youtube.com/vi/ysEN5RaKOlA/maxresdefault.jpg',
    category: 'Web Development',
    duration: '12h',
    lessonsCount: 12,
    level: 'Beginner',
    modules: [
      {
        id: 'm1',
        title: 'HTML Fundamentals',
        lessons: [
          { id: 'm1-l1', title: 'HTML Introduction & Setup', videoId: 'qz0aGYrrlhU', duration: '12:00' },
          { id: 'm1-l2', title: 'Headings, Paragraphs & Text', videoId: 'pQN-pnXPaVg', duration: '15:00' },
          { id: 'm1-l3', title: 'Links, Images & Lists', videoId: 'kUMe1FH4CHE', duration: '18:00' },
        ],
      },
      {
        id: 'm2',
        title: 'CSS Styling',
        lessons: [
          { id: 'm2-l1', title: 'CSS Basics & Selectors', videoId: '1Rs2ND1ryYc', duration: '8:00' },
          { id: 'm2-l2', title: 'Flexbox Layout', videoId: 'JJSoEo8JSnc', duration: '20:00' },
          { id: 'm2-l3', title: 'Responsive Design', videoId: 'srvUrASNj0s', duration: '22:00' },
        ],
      },
      {
        id: 'm3',
        title: 'JavaScript Basics',
        lessons: [
          { id: 'm3-l1', title: 'JavaScript Introduction', videoId: 'PkZNo7MFNFg', duration: '3:00' },
          { id: 'm3-l2', title: 'Variables & Data Types', videoId: 'W6NZfCO5SIk', duration: '35:00' },
          { id: 'm3-l3', title: 'Functions & DOM', videoId: 'hdI2bqOjy3c', duration: '33:00' },
        ],
      },
    ],
  },
  {
    id: 'react-course',
    title: 'React.js Full Course',
    slug: 'react-js',
    description: 'Master React from basics to hooks. Build modern UIs with components and state management.',
    thumbnail: 'https://img.youtube.com/vi/dGcsHMXbSOA/maxresdefault.jpg',
    category: 'Programming',
    duration: '8h',
    lessonsCount: 9,
    level: 'Intermediate',
    modules: [
      {
        id: 'r1',
        title: 'React Setup & JSX',
        lessons: [
          { id: 'r1-l1', title: 'React in 100 Seconds', videoId: 'Tn6-PIqc4UM', duration: '2:00' },
          { id: 'r1-l2', title: 'Create React App & First Component', videoId: 'dGcsHMXbSOA', duration: '5:00' },
          { id: 'r1-l3', title: 'JSX & Props', videoId: 'SqcY0GlETpg', duration: '15:00' },
        ],
      },
      {
        id: 'r2',
        title: 'State & Hooks',
        lessons: [
          { id: 'r2-l1', title: 'useState Hook', videoId: 'O6P86uwfdR0', duration: '18:00' },
          { id: 'r2-l2', title: 'useEffect & Data Fetching', videoId: 'dGcsHMXbSOA', duration: '10:00' },
          { id: 'r2-l3', title: 'Custom Hooks', videoId: '6ThXsUwLWvc', duration: '20:00' },
        ],
      },
    ],
  },
  {
    id: 'python-basics',
    title: 'Python for Beginners',
    slug: 'python-beginners',
    description: 'Learn Python programming with hands-on examples. Variables, loops, functions, and more.',
    thumbnail: 'https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg',
    category: 'Programming',
    duration: '6h',
    lessonsCount: 8,
    level: 'Beginner',
    modules: [
      {
        id: 'p1',
        title: 'Getting Started',
        lessons: [
          { id: 'p1-l1', title: 'Python Installation', videoId: '_uQrJ0TkZlc', duration: '5:00' },
          { id: 'p1-l2', title: 'Variables & Input', videoId: 'JeznW_7DlB0', duration: '25:00' },
          { id: 'p1-l3', title: 'Conditionals & Loops', videoId: 'JeznW_7DlB0', duration: '15:00' },
        ],
      },
      {
        id: 'p2',
        title: 'Functions & Data',
        lessons: [
          { id: 'p2-l1', title: 'Functions in Python', videoId: 'pQN-pnXPaVg', duration: '20:00' },
          { id: 'p2-l2', title: 'Lists and Dictionaries', videoId: 'Jn3Mh0pENRA', duration: '18:00' },
        ],
      },
    ],
  },
  {
    id: 'git-github',
    title: 'Git & GitHub Complete Guide',
    slug: 'git-github',
    description: 'Version control with Git. Commit, branch, merge, and collaborate on GitHub.',
    thumbnail: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg',
    category: 'Web Development',
    duration: '4h',
    lessonsCount: 6,
    level: 'Beginner',
    modules: [
      {
        id: 'g1',
        title: 'Git Basics',
        lessons: [
          { id: 'g1-l1', title: 'What is Git?', videoId: 'RGOj5yH7evk', duration: '2:00' },
          { id: 'g1-l2', title: 'Install & First Commit', videoId: 'HVsySz-h9r4', duration: '40:00' },
          { id: 'g1-l3', title: 'Branching & Merging', videoId: 'e2bL3VSWkGA', duration: '15:00' },
        ],
      },
    ],
  },
  {
    id: 'dsa-course',
    title: 'Data Structures & Algorithms',
    slug: 'data-structures-algorithms',
    description:
      'Master core data structures and algorithms for interviews: arrays, linked lists, recursion, sorting and searching.',
    thumbnail: 'https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg',
    category: 'Programming',
    duration: '5h 30m',
    lessonsCount: 9,
    level: 'Intermediate',
    modules: [
      {
        id: 'd1',
        title: 'Arrays & Complexity',
        lessons: [
          {
            id: 'd1-l1',
            title: 'Intro to Algorithms & Big-O',
            videoId: '8hly31xKli0',
            duration: '25:00',
          },
          {
            id: 'd1-l2',
            title: 'Arrays & Dynamic Arrays',
            videoId: '8hly31xKli0',
            duration: '35:00',
          },
          {
            id: 'd1-l3',
            title: 'Searching Arrays',
            videoId: '8hly31xKli0',
            duration: '30:00',
          },
        ],
      },
      {
        id: 'd2',
        title: 'Linked Lists, Stacks & Queues',
        lessons: [
          {
            id: 'd2-l1',
            title: 'Singly & Doubly Linked Lists',
            videoId: '8hly31xKli0',
            duration: '35:00',
          },
          {
            id: 'd2-l2',
            title: 'Stacks & Queues',
            videoId: '8hly31xKli0',
            duration: '25:00',
          },
          {
            id: 'd2-l3',
            title: 'Balanced Parentheses Problem',
            videoId: '8hly31xKli0',
            duration: '20:00',
          },
        ],
      },
      {
        id: 'd3',
        title: 'Recursion, Sorting & Searching',
        lessons: [
          {
            id: 'd3-l1',
            title: 'Recursion Basics',
            videoId: '8hly31xKli0',
            duration: '25:00',
          },
          {
            id: 'd3-l2',
            title: 'Merge Sort & Quick Sort',
            videoId: '8hly31xKli0',
            duration: '30:00',
          },
          {
            id: 'd3-l3',
            title: 'Binary Search Patterns',
            videoId: '8hly31xKli0',
            duration: '25:00',
          },
        ],
      },
    ],
  },
  {
    id: 'sql-course',
    title: 'SQL & Databases',
    slug: 'sql-databases',
    description:
      'Learn SQL from scratch: create tables, write queries, join tables, and aggregate data for real-world apps.',
    thumbnail: 'https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg',
    category: 'Databases',
    duration: '4h',
    lessonsCount: 9,
    level: 'Beginner to Intermediate',
    modules: [
      {
        id: 's1',
        title: 'SQL Basics & SELECT',
        lessons: [
          {
            id: 's1-l1',
            title: 'Intro to SQL & Installing a Database',
            videoId: 'HXV3zeQKqGY',
            duration: '20:00',
          },
          {
            id: 's1-l2',
            title: 'Creating Tables & Inserting Rows',
            videoId: 'HXV3zeQKqGY',
            duration: '25:00',
          },
          {
            id: 's1-l3',
            title: 'Basic SELECT Queries',
            videoId: 'HXV3zeQKqGY',
            duration: '25:00',
          },
        ],
      },
      {
        id: 's2',
        title: 'Filtering, Sorting & Functions',
        lessons: [
          {
            id: 's2-l1',
            title: 'Filtering Data with WHERE',
            videoId: 'HXV3zeQKqGY',
            duration: '30:00',
          },
          {
            id: 's2-l2',
            title: 'ORDER BY, LIMIT & Pagination',
            videoId: 'HXV3zeQKqGY',
            duration: '20:00',
          },
          {
            id: 's2-l3',
            title: 'Aggregate Functions (COUNT, SUM, AVG)',
            videoId: 'HXV3zeQKqGY',
            duration: '25:00',
          },
        ],
      },
      {
        id: 's3',
        title: 'Joins & Grouping',
        lessons: [
          {
            id: 's3-l1',
            title: 'INNER JOIN for Related Tables',
            videoId: 'HXV3zeQKqGY',
            duration: '25:00',
          },
          {
            id: 's3-l2',
            title: 'LEFT / RIGHT JOIN & NULL Handling',
            videoId: 'HXV3zeQKqGY',
            duration: '25:00',
          },
          {
            id: 's3-l3',
            title: 'GROUP BY, HAVING & Common Patterns',
            videoId: 'HXV3zeQKqGY',
            duration: '30:00',
          },
        ],
      },
    ],
  },
  {
    id: 'speaking-class',
    title: 'English Speaking Class',
    slug: 'speaking-class',
    description: 'Improve your English speaking and communication skills. Learn vocabulary, pronunciation, and fluency.',
    thumbnail: 'https://img.youtube.com/vi/eIho2S0ZahI/maxresdefault.jpg',
    category: 'Bonus',
    duration: '4h',
    lessonsCount: 3,
    level: 'All Levels',
    modules: [
      {
        id: 'sp1',
        title: 'Basic Communication',
        lessons: [
          { id: 'sp1-l1', title: 'Everyday Vocabulary', videoId: 'eIho2S0ZahI', duration: '45:00' },
          { id: 'sp1-l2', title: 'Pronunciation Rules', videoId: 'eIho2S0ZahI', duration: '35:00' },
          { id: 'sp1-l3', title: 'Public Speaking Tips', videoId: 'eIho2S0ZahI', duration: '50:00' },
        ],
      },
    ],
  },
  {
    id: 'writing-class',
    title: 'Professional Writing Class',
    slug: 'writing-class',
    description: 'Master the art of writing emails, essays, and professional documents with clarity.',
    thumbnail: 'https://img.youtube.com/vi/Nj-hdQMa3uA/maxresdefault.jpg',
    category: 'Bonus',
    duration: '3h',
    lessonsCount: 3,
    level: 'Beginner',
    modules: [
      {
        id: 'wr1',
        title: 'Writing Fundamentals',
        lessons: [
          { id: 'wr1-l1', title: 'Grammar Essentials', videoId: 'Nj-hdQMa3uA', duration: '30:00' },
          { id: 'wr1-l2', title: 'Structuring Essays', videoId: 'Nj-hdQMa3uA', duration: '40:00' },
          { id: 'wr1-l3', title: 'Business Emails', videoId: 'Nj-hdQMa3uA', duration: '25:00' },
        ],
      },
    ],
  },
  {
    id: 'aptitude-class',
    title: 'General Aptitude Class',
    slug: 'aptitude-class',
    description: 'Learn logical reasoning, quantitative basics, and problem-solving techniques for interviews.',
    thumbnail: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2000&auto=format&fit=crop',
    category: 'Bonus',
    duration: '15h',
    lessonsCount: 9,
    level: 'Intermediate',
    modules: [
      {
        id: 'ap1',
        title: 'Quantitative Aptitude 1',
        lessons: [
          { id: 'ap1-l1', title: 'Number System & Algebra', videoId: '5rT8-L5J5-o', duration: '40:00' },
          { id: 'ap1-l2', title: 'Percentages & Ratios', videoId: 'kYJvM7u-vE0', duration: '60:00' },
          { id: 'ap1-l3', title: 'Time, Distance & Work', videoId: '33K8mY22u60', duration: '45:00' },
        ],
      },
      {
        id: 'ap2',
        title: 'Quantitative Aptitude 2',
        lessons: [
          { id: 'ap2-l1', title: 'Simple & Compound Interest', videoId: 'lBv9yJ6Vf3g', duration: '50:00' },
          { id: 'ap2-l2', title: 'Profit, Loss & Discount', videoId: '5rT8-L5J5-o', duration: '55:00' },
          { id: 'ap2-l3', title: 'Permutation & Combination', videoId: '33K8mY22u60', duration: '40:00' },
        ],
      },
      {
        id: 'ap3',
        title: 'Logical Reasoning',
        lessons: [
          { id: 'ap3-l1', title: 'Syllogism', videoId: '33K8mY22u60', duration: '45:00' },
          { id: 'ap3-l2', title: 'Blood Relations', videoId: 'kYJvM7u-vE0', duration: '35:00' },
          { id: 'ap3-l3', title: 'Number Series', videoId: '5rT8-L5J5-o', duration: '40:00' },
        ],
      },
    ],
  },
  {
    id: 'qr-class',
    title: 'Quantitative Reasoning (QR) Class',
    slug: 'qr-class',
    description: 'Advanced quantitative reasoning, data interpretation, and speed math for competitive exams.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop',
    category: 'Bonus',
    duration: '6h',
    lessonsCount: 3,
    level: 'Advanced',
    modules: [
      {
        id: 'qr1',
        title: 'Advanced QR',
        lessons: [
          { id: 'qr1-l1', title: 'Data Interpretation', videoId: '5rT8-L5J5-o', duration: '55:00' },
          { id: 'qr1-l2', title: 'Probability & Combinatorics', videoId: '33K8mY22u60', duration: '40:00' },
          { id: 'qr1-l3', title: 'Speed Math Techniques', videoId: 'kYJvM7u-vE0', duration: '35:00' },
        ],
      },
    ],
  },
  {
    id: 'pe-course',
    title: 'Prompt Engineering Masterclass',
    slug: 'prompt-engineering',
    description: 'Learn how to write effective prompts for LLMs like ChatGPT and Claude.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    category: 'Artificial Intelligence',
    duration: '2h',
    lessonsCount: 3,
    level: 'All Levels',
    modules: [
      {
        id: 'pe1',
        title: 'Prompting Basics',
        lessons: [
          { id: 'pe1-l1', title: 'Introduction to LLMs', videoId: 'jC4v5AS4RIM', duration: '20:00' },
          { id: 'pe1-l2', title: 'Zero-shot and Few-shot', videoId: 'zjkBMFAmP-0', duration: '25:00' },
          { id: 'pe1-l3', title: 'Chain of Thought', videoId: 'zjkBMFAmP-0', duration: '30:00' },
        ],
      },
    ],
  },
  {
    id: 'ai-ml-course',
    title: 'Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
    description: 'Discover the fundamentals of AI, Neural Networks, and Machine Learning algorithms.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop',
    category: 'Artificial Intelligence',
    duration: '20h',
    lessonsCount: 9,
    level: 'Intermediate',
    modules: [
      {
        id: 'ai1',
        title: 'AI Foundations',
        lessons: [
          { id: 'ai1-l1', title: 'What is AI?', videoId: 'ad79nYk2keg', duration: '30:00' },
          { id: 'ai1-l2', title: 'Python for AI', videoId: 'cKxRvEZd3Kg', duration: '60:00' },
          { id: 'ai1-l3', title: 'Math Basics for ML', videoId: 'ad79nYk2keg', duration: '55:00' },
        ],
      },
      {
        id: 'ai2',
        title: 'Supervised Learning',
        lessons: [
          { id: 'ai2-l1', title: 'Linear Regression', videoId: 'cKxRvEZd3Kg', duration: '45:00' },
          { id: 'ai2-l2', title: 'Logistic Regression', videoId: 'cKxRvEZd3Kg', duration: '50:00' },
          { id: 'ai2-l3', title: 'Decision Trees', videoId: 'cKxRvEZd3Kg', duration: '55:00' },
        ],
      },
      {
        id: 'ai3',
        title: 'Unsupervised & Deep Learning',
        lessons: [
          { id: 'ai3-l1', title: 'Clustering', videoId: 'JcI5Vnw0b2c', duration: '40:00' },
          { id: 'ai3-l2', title: 'Neural Networks Intro', videoId: 'JcI5Vnw0b2c', duration: '60:00' },
          { id: 'ai3-l3', title: 'Deep Learning Frameworks', videoId: 'JcI5Vnw0b2c', duration: '60:00' },
        ],
      },
    ],
  },
  {
    id: 'mongodb-course',
    title: 'MongoDB Complete Course',
    slug: 'mongodb',
    description: 'Master NoSQL databases, CRUD operations, and aggregation pipelines with MongoDB.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    category: 'Databases',
    duration: '15h',
    lessonsCount: 9,
    level: 'Beginner',
    modules: [
      {
        id: 'mo1',
        title: 'MongoDB Basics',
        lessons: [
          { id: 'mo1-l1', title: 'Intro to NoSQL', videoId: 'ofme2o29ngU', duration: '30:00' },
          { id: 'mo1-l2', title: 'Installation & Setup', videoId: '-56x56UppqQ', duration: '25:00' },
          { id: 'mo1-l3', title: 'Document Data Model', videoId: 'ofme2o29ngU', duration: '40:00' },
        ],
      },
      {
        id: 'mo2',
        title: 'CRUD Operations',
        lessons: [
          { id: 'mo2-l1', title: 'Insert & Find', videoId: '-56x56UppqQ', duration: '45:00' },
          { id: 'mo2-l2', title: 'Update & Delete', videoId: '-56x56UppqQ', duration: '35:00' },
          { id: 'mo2-l3', title: 'Query Operators', videoId: 'ofme2o29ngU', duration: '50:00' },
        ],
      },
      {
        id: 'mo3',
        title: 'Advanced Topics',
        lessons: [
          { id: 'mo3-l1', title: 'Aggregation Pipeline', videoId: 'pWbMrx5rVBE', duration: '60:00' },
          { id: 'mo3-l2', title: 'Indexing for Performance', videoId: 'pWbMrx5rVBE', duration: '45:00' },
          { id: 'mo3-l3', title: 'Data Modeling Best Practices', videoId: 'pWbMrx5rVBE', duration: '55:00' },
        ],
      },
    ],
  },
]

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug)

export const getLessonFromCourse = (courseSlug, lessonId) => {
  const course = getCourseBySlug(courseSlug)
  if (!course) return null
  for (const mod of course.modules) {
    const lesson = mod.lessons.find((l) => l.id === lessonId)
    if (lesson) return { course, module: mod, lesson }
  }
  return null
}

export const getAllLessons = (course) => {
  const list = []
  course.modules.forEach((mod) => {
    mod.lessons.forEach((l) => list.push({ ...l, moduleTitle: mod.title }))
  })
  return list
}
