export const lessonSnippets = {
  'm1-l1': {
    language: 'html',
    code: `<h1>Welcome to Guru Gyaan Path</h1>
<p>This is my first HTML page!</p>`,
  },
  'm1-l2': {
    language: 'html',
    code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>Paragraph text goes here.</p>`,
  },
  'm2-l1': {
    language: 'css',
    code: `body {
  font-family: system-ui, sans-serif;
}

.btn-primary {
  background: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 999px;
}`,
  },
  'm3-l2': {
    language: 'js',
    code: `const name = 'Guru';
const age = 18;

console.log('Hello ' + name + ', age:', age);`,
  },
  'r1-l3': {
    language: 'jsx',
    code: `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;`,
  },
  // Python course snippets (display-only, not run in JS playground)
  'p1-l1': {
    language: 'python',
    code: `name = input("Enter your name: ")
print(f"Hello, {name}!")`,
  },
  'p1-l2': {
    language: 'python',
    code: `age = int(input("Age? "))
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`,
  },
  'p2-l1': {
    language: 'python',
    code: `def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))`,
  },
  // DSA course snippets in JavaScript so they can run in the playground
  'd1-l1': {
    language: 'js',
    code: `// Big-O example: linear time
function hasValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

console.log(hasValue([1, 3, 5, 7], 5));`,
  },
  'd1-l2': {
    language: 'js',
    code: `// Linear search - return index or -1
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30));`,
  },
  'd2-l1': {
    language: 'js',
    code: `// Singly linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(JSON.stringify(list));`,
  },
  'd2-l2': {
    language: 'js',
    code: `// Stack using array
class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const s = new Stack();
s.push(10);
s.push(20);
console.log(s.pop()); // 20`,
  },
  'd3-l1': {
    language: 'js',
    code: `// Simple recursion: factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));`,
  },
  'd3-l2': {
    language: 'js',
    code: `// Merge sort
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([5, 3, 8, 4, 2]));`,
  },
  'd3-l3': {
    language: 'js',
    code: `// Binary search (sorted array)
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));`,
  },
  // SQL course snippets (display-only, not executed in playground)
  's1-l2': {
    language: 'sql',
    code: `-- Create a simple STUDENTS table
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT,
  grade INT
);

INSERT INTO students (id, name, age, grade) VALUES
  (1, 'Amit', 18, 82),
  (2, 'Sara', 19, 91),
  (3, 'Rahul', 17, 76);`,
  },
  's1-l3': {
    language: 'sql',
    code: `-- Basic SELECT query
SELECT id, name, grade
FROM students
ORDER BY grade DESC;`,
  },
  's2-l1': {
    language: 'sql',
    code: `-- Filtering rows with WHERE
SELECT name, grade
FROM students
WHERE grade >= 80
  AND age >= 18;`,
  },
  's2-l3': {
    language: 'sql',
    code: `-- Aggregate functions with GROUP BY
SELECT class_id, AVG(grade) AS avg_grade, COUNT(*) AS student_count
FROM students
GROUP BY class_id
HAVING AVG(grade) >= 75;`,
  },
  's3-l1': {
    language: 'sql',
    code: `-- INNER JOIN between students and classes
SELECT s.name, c.title AS class_title, s.grade
FROM students AS s
JOIN classes AS c ON s.class_id = c.id;`,
  },
  's3-l3': {
    language: 'sql',
    code: `-- GROUP BY with HAVING on joined tables
SELECT c.title AS class_title, AVG(s.grade) AS avg_grade
FROM students AS s
JOIN classes AS c ON s.class_id = c.id
GROUP BY c.title
HAVING AVG(s.grade) >= 80;`,
  },
}

export function getSnippetForLesson(lessonId) {
  return lessonSnippets[lessonId] || null
}

