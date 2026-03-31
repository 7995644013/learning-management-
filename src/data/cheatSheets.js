// Cheat sheets per module (topic) for quick reference after each topic

export const cheatSheetsByModule = {
  // Web Dev - HTML
  m1: {
    title: 'HTML Fundamentals',
    sections: [
      {
        heading: 'Document structure',
        points: [
          '<!DOCTYPE html> — must be first',
          '<html lang="en"> — root element',
          '<head> — metadata, title, links to CSS',
          '<body> — visible content',
        ],
        code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>Hello</h1>\n  </body>\n</html>',
      },
      {
        heading: 'Common tags',
        points: [
          'Headings: <h1> to <h6>',
          'Paragraph: <p>',
          'Link: <a href="url">text</a>',
          'Image: <img src="url" alt="description">',
          'Lists: <ul>/<ol> with <li> items',
          'Division: <div> (block), <span> (inline)',
        ],
      },
      {
        heading: 'Best practices',
        points: [
          'One <h1> per page',
          'Always use alt on images',
          'Use semantic tags: <header>, <main>, <footer>, <nav>, <article>, <section>',
        ],
      },
    ],
  },
  // Web Dev - CSS
  m2: {
    title: 'CSS Styling',
    sections: [
      {
        heading: 'Selectors',
        points: [
          'Element: p { }',
          'Class: .className { }',
          'ID: #idName { }',
          'Descendant: div p { }',
          'Multiple: .a, .b { }',
        ],
        code: '.card {\n  padding: 1rem;\n  border-radius: 8px;\n  background: #fff;\n}',
      },
      {
        heading: 'Box model',
        points: [
          'content → padding → border → margin',
          'box-sizing: border-box — width includes padding & border',
        ],
      },
      {
        heading: 'Flexbox quick ref',
        points: [
          'Container: display: flex',
          'Direction: flex-direction: row | column',
          'Wrap: flex-wrap: wrap',
          'Justify: justify-content: center | space-between | flex-start',
          'Align: align-items: center | stretch',
        ],
        code: '.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}',
      },
      {
        heading: 'Responsive',
        points: [
          'Viewport meta: <meta name="viewport" content="width=device-width">',
          'Media query: @media (max-width: 768px) { }',
          'Use rem/em and % for flexible layouts',
        ],
      },
    ],
  },
  // Web Dev - JavaScript
  m3: {
    title: 'JavaScript Basics',
    sections: [
      {
        heading: 'Variables',
        points: [
          'let — block scope, can reassign',
          'const — block scope, cannot reassign (use by default)',
          'var — avoid; function scope',
        ],
        code: 'const name = "Guru";\nlet count = 0;\ncount++;',
      },
      {
        heading: 'Data types',
        points: [
          'Primitives: string, number, boolean, null, undefined, symbol',
          'Object: {}, arrays [], functions',
          'Check: typeof x',
        ],
      },
      {
        heading: 'Functions',
        points: [
          'Declaration: function fn() { }',
          'Arrow: const fn = () => { }',
          'Return value with return',
        ],
        code: 'function add(a, b) {\n  return a + b;\n}\nconst double = (n) => n * 2;',
      },
      {
        heading: 'DOM basics',
        points: [
          'Select: document.querySelector(".class"), getElementById("id")',
          'Read: element.textContent, element.innerHTML',
          'Update: element.textContent = "new"',
          'Events: element.addEventListener("click", () => { })',
        ],
      },
    ],
  },
  // React - Setup & JSX
  r1: {
    title: 'React Setup & JSX',
    sections: [
      {
        heading: 'Create app',
        points: [
          'Vite: npm create vite@latest my-app -- --template react',
          'Run: npm run dev',
        ],
      },
      {
        heading: 'Component',
        points: [
          'Function that returns JSX',
          'PascalCase name',
          'Export default or named export',
        ],
        code: 'function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default Welcome;',
      },
      {
        heading: 'JSX rules',
        points: [
          'One root element (or Fragment <></>)',
          'className (not class), htmlFor (not for)',
          'JavaScript in { }',
          'Close all tags: <img />',
        ],
      },
      {
        heading: 'Props',
        points: [
          'Pass: <Welcome name="Guru" />',
          'Receive: function Welcome({ name }) { }',
          'Props are read-only',
        ],
      },
    ],
  },
  // React - State & Hooks
  r2: {
    title: 'State & Hooks',
    sections: [
      {
        heading: 'useState',
        points: [
          'const [value, setValue] = useState(initial)',
          'Updates trigger re-render',
          'Never mutate state directly; use setter',
        ],
        code: 'const [count, setCount] = useState(0);\nsetCount(c => c + 1);',
      },
      {
        heading: 'useEffect',
        points: [
          'Run side effects (fetch, subscribe)',
          'useEffect(() => { ... }, [deps])',
          'Empty deps [] = run once on mount',
        ],
        code: 'useEffect(() => {\n  fetch(url).then(r => r.json()).then(setData);\n}, [url]);',
      },
      {
        heading: 'Custom hook',
        points: [
          'Function name starts with use',
          'Can call other hooks inside',
          'Reuse stateful logic across components',
        ],
      },
    ],
  },
  // Python - Getting Started
  p1: {
    title: 'Python Getting Started',
    sections: [
      {
        heading: 'Variables & input',
        points: [
          'No declaration: name = "Guru"',
          'Input: name = input("Enter name: ")',
          'Types: int(), float(), str() for conversion',
        ],
        code: 'age = int(input("Age? "))\nprint(f"You are {age} years old")',
      },
      {
        heading: 'Conditionals',
        points: [
          'if / elif / else',
          'Indentation (4 spaces) defines blocks',
          'Comparisons: ==, !=, <, >, <=, >=',
        ],
        code: 'if score >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
      },
      {
        heading: 'Loops',
        points: [
          'for i in range(5): — 0 to 4',
          'for x in list: — iterate list',
          'while condition: — repeat while true',
        ],
        code: 'for i in range(1, 6):\n    print(i * i)',
      },
    ],
  },
  // Python - Functions & Data
  p2: {
    title: 'Python Functions & Data',
    sections: [
      {
        heading: 'Functions',
        points: [
          'def name(params): then indented body',
          'return value (or None)',
          'Default args: def fn(a, b=0):',
        ],
        code: 'def greet(name):\n    return f"Hello, {name}"',
      },
      {
        heading: 'Lists',
        points: [
          'nums = [1, 2, 3]',
          'Index: nums[0], nums[-1]',
          'Slice: nums[1:3], nums[:2]',
          'Append: nums.append(4)',
        ],
      },
      {
        heading: 'Dictionaries',
        points: [
          'd = {"name": "Guru", "age": 18}',
          'Access: d["name"] or d.get("name")',
          'Keys, values: d.keys(), d.values()',
        ],
        code: 'user = {"id": 1, "name": "Guru"}\nprint(user["name"])',
      },
    ],
  },
  // Git
  g1: {
    title: 'Git Basics',
    sections: [
      {
        heading: 'Setup & first commit',
        points: [
          'git init — create repo',
          'git status — see changes',
          'git add . or git add file',
          'git commit -m "message"',
        ],
        code: 'git init\ngit add .\ngit commit -m "Initial commit"',
      },
      {
        heading: 'Branching',
        points: [
          'git branch — list branches',
          'git branch feature — create branch',
          'git checkout feature — switch branch',
          'git checkout -b feature — create and switch',
        ],
      },
      {
        heading: 'Merging & remote',
        points: [
          'git merge branch — merge into current',
          'git remote add origin <url>',
          'git push -u origin main',
          'git pull — fetch and merge',
        ],
      },
    ],
  },
  // DSA - Arrays & Complexity
  d1: {
    title: 'Arrays & Time Complexity',
    sections: [
      {
        heading: 'Big-O refresher',
        points: [
          'O(1): constant time — work does not grow with input size.',
          'O(n): linear time — work grows in direct proportion to n.',
          'O(log n): logarithmic — halves the problem each step (binary search).',
          'O(n²): quadratic — nested loops over the same input.',
        ],
      },
      {
        heading: 'Array operations',
        points: [
          'Read by index: O(1).',
          'Scan / search linearly: O(n).',
          'Insert/remove at end (dynamic array): usually O(1) amortized.',
          'Insert/remove at front or middle: O(n) — shift many elements.',
        ],
        code: 'function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}',
      },
      {
        heading: 'Binary search idea',
        points: [
          'Works only on sorted arrays.',
          'Compare target with middle element.',
          'Discard half the array each step.',
          'Time complexity: O(log n).',
        ],
      },
    ],
  },
  // DSA - Linked Lists, Stacks & Queues
  d2: {
    title: 'Linked Lists, Stacks & Queues',
    sections: [
      {
        heading: 'Linked list vs array',
        points: [
          'Array: fast random access by index, but inserts in middle can be expensive.',
          'Linked list: each node points to the next; good for frequent inserts/removals in the middle.',
          'Singly linked list: next pointer only; doubly linked list: next + prev.',
        ],
      },
      {
        heading: 'Stack (LIFO)',
        points: [
          'Last In, First Out — like a stack of plates.',
          'Main operations: push (add on top), pop (remove top), peek (look at top).',
          'Used for function call stacks, undo/redo, DFS.',
        ],
        code: 'class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(x) {\n    this.items.push(x);\n  }\n  pop() {\n    return this.items.pop();\n  }\n}',
      },
      {
        heading: 'Queue (FIFO)',
        points: [
          'First In, First Out — like a line at a store.',
          'Main operations: enqueue (add at back), dequeue (remove from front).',
          'Used for task scheduling, BFS on graphs/trees.',
        ],
      },
    ],
  },
  // DSA - Recursion, Sorting & Searching
  d3: {
    title: 'Recursion, Sorting & Searching',
    sections: [
      {
        heading: 'Thinking recursively',
        points: [
          'Base case: a simple input you can answer directly.',
          'Recursive case: solve a smaller subproblem, then combine.',
          'Always make progress toward the base case to avoid infinite recursion.',
        ],
        code: 'function factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}',
      },
      {
        heading: 'Divide & conquer sorting',
        points: [
          'Merge sort: split array, sort halves, then merge — O(n log n).',
          'Quick sort: pick pivot, partition, recurse — average O(n log n).',
          'Both use recursion and the idea of “split, solve, combine”.',
        ],
      },
      {
        heading: 'Binary search pattern',
        points: [
          'Maintain low (lo) and high (hi) pointers into a sorted array.',
          'Compute mid = Math.floor((lo + hi) / 2).',
          'If arr[mid] < target, search right half; if > target, search left half.',
          'Stop when lo > hi (target not found).',
        ],
        code: 'function binarySearch(arr, target) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}',
      },
    ],
  },
  // SQL - Basics & SELECT
  s1: {
    title: 'SQL Basics & SELECT',
    sections: [
      {
        heading: 'Relational database concepts',
        points: [
          'Data is stored in tables (relations) with rows and columns.',
          'Each row represents a record; each column represents an attribute.',
          'A PRIMARY KEY uniquely identifies each row; FOREIGN KEY links to another table.',
        ],
      },
      {
        heading: 'SELECT template',
        points: [
          'SELECT column_list FROM table_name;',
          'Use * to select all columns: SELECT * FROM students;',
          'Use AS to rename columns in the result: SELECT name AS student_name;',
        ],
        code: 'SELECT id, name, grade\nFROM students\nORDER BY grade DESC;',
      },
      {
        heading: 'Creating a table (simplified)',
        points: [
          'Use CREATE TABLE to define columns and constraints.',
          'Choose appropriate data types: INT, VARCHAR, DATE, etc.',
          'Mark required columns with NOT NULL.',
        ],
        code: 'CREATE TABLE students (\n  id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  age INT,\n  grade INT\n);',
      },
    ],
  },
  // SQL - Filtering, sorting, functions
  s2: {
    title: 'SQL Filtering, Sorting & Functions',
    sections: [
      {
        heading: 'WHERE conditions',
        points: [
          'Use comparison operators: =, <>, >, <, >=, <=.',
          'Combine conditions with AND / OR.',
          'Use BETWEEN, IN, LIKE for ranges, sets, and patterns.',
        ],
        code: 'SELECT name, grade\nFROM students\nWHERE grade >= 80 AND age >= 18;',
      },
      {
        heading: 'Sorting & limiting',
        points: [
          'ORDER BY column ASC|DESC sorts the result set.',
          'LIMIT n (or TOP n depending on database) restricts the number of rows.',
          'You can sort by multiple columns: ORDER BY grade DESC, name ASC.',
        ],
      },
      {
        heading: 'Aggregate functions',
        points: [
          'COUNT(*), SUM(col), AVG(col), MIN(col), MAX(col).',
          'Aggregates usually go with GROUP BY.',
          'Use HAVING to filter groups after aggregation.',
        ],
        code: 'SELECT class_id, AVG(grade) AS avg_grade\nFROM students\nGROUP BY class_id\nHAVING AVG(grade) >= 75;',
      },
    ],
  },
  // SQL - Joins & grouping
  s3: {
    title: 'SQL Joins & Grouping',
    sections: [
      {
        heading: 'Types of joins',
        points: [
          'INNER JOIN: rows with matches in both tables.',
          'LEFT JOIN: all rows from left, matching rows from right (NULL if no match).',
          'RIGHT JOIN: all rows from right, matching rows from left.',
        ],
        code: 'SELECT s.name, c.title AS class_title\nFROM students AS s\nJOIN classes AS c ON s.class_id = c.id;',
      },
      {
        heading: 'Grouping joined data',
        points: [
          'You can GROUP BY columns from joined tables.',
          'Often used to compute per-category or per-class statistics.',
          'HAVING filters groups (e.g., only classes with avg grade above a threshold).',
        ],
        code: 'SELECT c.title, AVG(s.grade) AS avg_grade\nFROM students s\nJOIN classes c ON s.class_id = c.id\nGROUP BY c.title\nHAVING AVG(s.grade) >= 80;',
      },
      {
        heading: 'Good practices',
        points: [
          'Always specify join conditions explicitly to avoid accidental cross joins.',
          'Use clear aliases (s, c, o, etc.) in multi-table queries.',
          'Add appropriate indexes on columns used in JOIN and WHERE clauses.',
        ],
      },
    ],
  },
  // Prompt Engineering
  pe1: {
    title: 'Prompt Engineering (Ref: GeeksforGeeks)',
    sections: [
      {
        heading: 'Prompting Basics',
        points: [
          'Be structured and specific.',
          'Give the AI a persona: "Act as a senior software engineer".',
          'Use delimiters strictly: like triple quotes """ to separate instructions.'
        ]
      },
      {
        heading: 'Advanced Techniques (GFG Notes)',
        points: [
          'Zero-Shot: No examples provided.',
          'Few-Shot: Providing a few examples of input-output pairs.',
          `Chain-of-Thought (CoT): Adding "Let's think step by step" to the prompt.`
        ]
      }
    ]
  },
  // AI & ML
  ai1: {
    title: 'AI & ML Fundamentals (Ref: GeeksforGeeks)',
    sections: [
      {
        heading: 'Machine Learning Basics',
        points: [
          'Supervised Learning: Uses labeled datasets.',
          'Unsupervised Learning: Finds hidden patterns or intrinsic structures in input data.',
          'Reinforcement Learning: Learning by interacting with an environment to maximize rewards.'
        ]
      },
      {
        heading: 'Algorithms (GFG Guide)',
        points: [
          'Linear Regression: Predict a continuous value based on independent variables.',
          'Logistic Regression: Used for binary classification.',
          'Decision Trees: Tree-like model of decisions and their possible consequences.'
        ]
      }
    ]
  },
  // MongoDB
  mo1: {
    title: 'MongoDB (Ref: GeeksforGeeks)',
    sections: [
      {
        heading: 'MongoDB Characteristics',
        points: [
          'It is a NoSQL, document-oriented database.',
          'Stores data in flexible, JSON-like documents.',
          'High performance, high availability, and easy scalability.'
        ]
      },
      {
        heading: 'CRUD Operations (GFG Cheat Sheet)',
        points: [
          'Create: db.collection.insertOne({ item: "canvas" })',
          'Read: db.collection.find({ item: "canvas" })',
          'Update: db.collection.updateOne({ item: "canvas" }, { $set: { qty: 100 } })',
          'Delete: db.collection.deleteOne({ item: "canvas" })'
        ],
        code: 'db.users.find({ age: { $gt: 18 } })'
      }
    ]
  },
}

export function getCheatSheetForModule(moduleId) {
  return cheatSheetsByModule[moduleId] || null
}
