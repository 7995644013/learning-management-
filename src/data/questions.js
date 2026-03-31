export const questions = [
  {
    id: 'buy-a-book',
    title: 'Buy a Book',
    difficulty: 'Easy',
    xp: 20,
    status: 'SOLVED',
    description: 'Write a function `buyBook(budget, price)` that returns `true` if you can afford the book (budget >= price), and `false` otherwise.',
    functionName: 'buyBook',
    testCases: [
      { input: '10, 5', expectedOutput: 'true' },
      { input: '5, 10', expectedOutput: 'false' },
      { input: '20, 20', expectedOutput: 'true' }
    ],
    defaultCode: {
      javascript: 'function buyBook(budget, price) {\n  // Your code here\n  return false;\n}',
      python: 'def buyBook(budget, price):\n    # Your code here\n    return False',
      java: 'public class Main {\n    public static boolean buyBook(int budget, int price) {\n        // Your code here\n        return false;\n    }\n}'
    }
  },
  {
    id: 'pair-of-numbers',
    title: 'Pair of Numbers',
    difficulty: 'Easy',
    xp: 20,
    status: 'SOLVED',
    description: 'Write a function `sumPair(a, b)` to find the sum of two numbers.',
    functionName: 'sumPair',
    testCases: [
      { input: '2, 3', expectedOutput: '5' },
      { input: '-1, 5', expectedOutput: '4' },
      { input: '0, 0', expectedOutput: '0' }
    ],
    defaultCode: {
      javascript: 'function sumPair(a, b) {\n  // Your code here\n  return 0;\n}',
      python: 'def sumPair(a, b):\n    # Your code here\n    return 0',
      java: 'public class Main {\n    public static int sumPair(int a, int b) {\n        // Your code here\n        return 0;\n    }\n}'
    }
  },
  {
    id: 'team-up',
    title: 'Team Up',
    difficulty: 'Easy',
    xp: 20,
    status: 'SOLVED',
    description: 'Write a function `teamUp(n)` that returns the number of pairs you can form with `n` people (formula: `n * (n - 1) / 2`).',
    functionName: 'teamUp',
    testCases: [
      { input: '4', expectedOutput: '6' },
      { input: '2', expectedOutput: '1' },
      { input: '5', expectedOutput: '10' }
    ],
    defaultCode: {
      javascript: 'function teamUp(n) {\n  // Your code here\n  return 0;\n}',
      python: 'def teamUp(n):\n    # Your code here\n    return 0',
      java: 'public class Main {\n    public static int teamUp(int n) {\n        // Your code here\n        return 0;\n    }\n}'
    }
  },
  {
    id: 'zero-or-positive',
    title: 'Zero or Positive',
    difficulty: 'Easy',
    xp: 20,
    status: 'SOLVED',
    description: 'Write a function `checkNum(n)` that returns `"Positive"` if `n > 0`, and `"Zero"` if `n == 0`. For `n < 0` return `"Negative"`.',
    functionName: 'checkNum',
    testCases: [
      { input: '5', expectedOutput: 'Positive' },
      { input: '0', expectedOutput: 'Zero' },
      { input: '-3', expectedOutput: 'Negative' }
    ],
    defaultCode: {
      javascript: 'function checkNum(n) {\n  // Your code here\n  return "";\n}',
      python: 'def checkNum(n):\n    # Your code here\n    return ""',
      java: 'public class Main {\n    public static String checkNum(int n) {\n        // Your code here\n        return "";\n    }\n}'
    }
  },
  {
    id: 'increment-number',
    title: 'Increment the number',
    difficulty: 'Easy',
    xp: 20,
    status: 'UNSOLVED',
    description: 'Write a function `increment(n)` that returns `n + 1`.',
    functionName: 'increment',
    testCases: [
      { input: '5', expectedOutput: '6' },
      { input: '0', expectedOutput: '1' },
      { input: '-3', expectedOutput: '-2' }
    ],
    defaultCode: {
      javascript: 'function increment(n) {\n  // Your code here\n  return 0;\n}',
      python: 'def increment(n):\n    # Your code here\n    return 0',
      java: 'public class Main {\n    public static int increment(int n) {\n        // Your code here\n        return 0;\n    }\n}'
    }
  }
];

export function getQuestionById(id) {
  return questions.find(q => q.id === id) || null;
}
