export const coursePracticeSets = {
  'web-dev': {
    title: 'Web Development Practice Set',
    tasks: [
      'Build a personal portfolio page using HTML and CSS with a hero, about, and projects section.',
      'Create a responsive navigation bar that collapses into a menu on small screens.',
      'Rebuild the homepage layout of your favorite website using Flexbox.',
      'Create a blog article page with semantic HTML5 tags and a related-articles sidebar.',
      'Convert a Figma or Dribbble landing page design into a responsive web page.',
    ],
  },
  'react-course': {
    title: 'React Practice Set',
    tasks: [
      'Create a todo app with add, toggle, and delete, storing todos in component state.',
      'Build a “counter with history” that shows the last 5 values using useState.',
      'Create a small fetch example that loads posts from a public API using useEffect.',
      'Build a multi-step form (like checkout) that preserves state between steps.',
      'Create a reusable modal component and use it in at least two different screens.',
    ],
  },
  'python-basics': {
    title: 'Python Practice Set (Beginner to Advanced)',
    tasks: [
      'Write a program that prints the sum of numbers from 1 to 100.',
      'Ask the user for a number and print whether it is even or odd.',
      'Create a simple calculator that supports +, -, *, and / using functions.',
      'Read a list of numbers and print the largest, smallest, and average.',
      'Write a function that checks if a string is a palindrome (same forwards and backwards).',
      'Given a list of integers, create a new list that contains only the even numbers.',
      'Write a program that counts how many times each word appears in a sentence (use a dictionary).',
      'Write a recursive function to compute the nth Fibonacci number.',
      'Read a text file and print how many lines and characters it contains.',
    ],
  },
  'dsa-course': {
    title: 'Data Structures & Algorithms Practice Set (Beginner to Advanced)',
    tasks: [
      'Implement linear search on an array and return the index of a target element.',
      'Implement binary search on a sorted array and count how many comparisons are made.',
      'Implement a stack using an array with push, pop, and peek operations.',
      'Implement a queue using two stacks and compare the time complexity to a normal queue.',
      'Implement merge sort and print the array after each merge step for visualization.',
      'Solve the classic “two-sum” problem using a hash map in O(n) time.',
      'Rotate an array by k positions to the right in-place (without using extra arrays of the same size).',
      'Reverse a singly linked list and print all of its elements.',
      'Given a string of brackets (), {}, [], check if it is balanced using a stack.',
      'Implement breadth-first search (BFS) on a graph represented as an adjacency list.',
      'Find the maximum depth (height) of a binary tree using recursion.',
    ],
  },
  'sql-course': {
    title: 'SQL Practice Set (Beginner to Advanced)',
    tasks: [
      'Create a table STUDENTS with columns id (primary key), name, age, and grade, and insert at least 5 sample rows.',
      'Write a SELECT query to fetch all students whose grade is greater than 80, ordered by grade descending.',
      'Write a query to return the number of students in each grade (use GROUP BY).',
      'Given tables STUDENTS(id, name, class_id) and CLASSES(id, title), write a query to list each student with their class title using an INNER JOIN.',
      'Modify the previous query to also show classes that currently have no students (use a LEFT JOIN).',
      'Write a query that returns only those grades where the average grade is above 75 (use GROUP BY and HAVING).',
      'Write a query to find the top 3 students by grade in each class (hint: use ORDER BY and LIMIT, or a window function if your database supports it).',
      'Write a query using a subquery to find students whose grade is above the overall average grade.',
      'Add an index on the grade column and explain in comments when an index helps a query.',
      'Design a simple normalized schema for a course enrollment system (tables for students, courses, enrollments) and write CREATE TABLE statements for each.',
    ],
  },
}

export function getPracticeForCourse(courseId) {
  return coursePracticeSets[courseId] || null
}

