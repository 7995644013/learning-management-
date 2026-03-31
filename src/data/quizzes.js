export const courseQuizzes = {
  'web-dev': {
    title: 'Web Development Basics Quiz',
    questions: [
      {
        id: 'q1',
        text: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Text Machine Language',
          'Hyperlinks and Text Making Language',
          'Home Tool Markup Language',
        ],
        correctIndex: 0,
        explanation: 'HTML stands for Hyper Text Markup Language – it defines the structure of web pages.',
      },
      {
        id: 'q2',
        text: 'Which CSS property is used to make a flex container?',
        options: ['display', 'flex-direction', 'position', 'justify-content'],
        correctIndex: 0,
        explanation: 'You use display: flex on a container to turn it into a flex container.',
      },
      {
        id: 'q3',
        text: 'Which JavaScript method is used to run a function after a delay?',
        options: ['setInterval', 'setTimeout', 'delay', 'wait'],
        correctIndex: 1,
        explanation: 'setTimeout(fn, ms) runs a function once after the given delay in milliseconds.',
      },
    ],
  },
  'react-course': {
    title: 'React Fundamentals Quiz',
    questions: [
      {
        id: 'rq1',
        text: 'JSX is…',
        options: [
          'A CSS framework',
          'A syntax extension that lets you write HTML-like code in JavaScript',
          'A database query language',
          'A testing library',
        ],
        correctIndex: 1,
        explanation: 'JSX lets you describe UI using HTML-like syntax inside JavaScript/TypeScript.',
      },
      {
        id: 'rq2',
        text: 'Which hook is used to manage state in a function component?',
        options: ['useState', 'useEffect', 'useContext', 'useRef'],
        correctIndex: 0,
        explanation: 'useState gives you a state value and a setter inside function components.',
      },
    ],
  },
  'python-basics': {
    title: 'Python Basics Quiz (Beginner to Intermediate)',
    questions: [
      {
        id: 'pq1',
        text: 'Which of these is the correct way to declare a variable in Python?',
        options: [
          'var age = 18',
          'let age = 18',
          'age := 18',
          'age = 18',
        ],
        correctIndex: 3,
        explanation: 'In Python you assign with = and do not use var/let keywords.',
      },
      {
        id: 'pq2',
        text: 'What is the output of: print(len([1, 2, 3, 4])) ?',
        options: ['3', '4', '5', 'Error'],
        correctIndex: 1,
        explanation: 'The list has four elements so len returns 4.',
      },
      {
        id: 'pq3',
        text: 'Which keyword is used to define a function in Python?',
        options: ['func', 'define', 'def', 'function'],
        correctIndex: 2,
        explanation: 'Functions in Python are defined with the def keyword.',
      },
      {
        id: 'pq4',
        text: 'What is the output of: bool([]) in Python?',
        options: ['True', 'False', '0', 'Raises an error'],
        correctIndex: 1,
        explanation: 'Empty containers (lists, tuples, dicts, sets, strings) are considered False in boolean context.',
      },
      {
        id: 'pq5',
        text: 'Which of these is the correct list comprehension to create a list of squares from 0 to 4?',
        options: [
          '[i * i for i in range(5)]',
          'for i in range(5): i * i',
          'list(i**2, i in range(5))',
          '[i^2 in range(5)]',
        ],
        correctIndex: 0,
        explanation: 'List comprehension syntax is [expression for item in iterable].',
      },
      {
        id: 'pq6',
        text: 'Which statement is used to handle an exception in Python?',
        options: ['catch', 'except', 'handle', 'error'],
        correctIndex: 1,
        explanation: 'Exceptions are handled with try/except blocks.',
      },
    ],
  },
  'dsa-course': {
    title: 'Data Structures & Algorithms Quiz (Core Concepts)',
    questions: [
      {
        id: 'dq1',
        text: 'What is the time complexity of binary search on a sorted array?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
        correctIndex: 2,
        explanation: 'Binary search halves the search space each step, giving O(log n).',
      },
      {
        id: 'dq2',
        text: 'Which data structure works on a First In, First Out (FIFO) principle?',
        options: ['Stack', 'Queue', 'Binary tree', 'Hash map'],
        correctIndex: 1,
        explanation: 'Queues remove elements in the same order they were inserted (FIFO).',
      },
      {
        id: 'dq3',
        text: 'Which sorting algorithm is typically O(n log n) in the average case?',
        options: ['Bubble sort', 'Selection sort', 'Insertion sort', 'Merge sort'],
        correctIndex: 3,
        explanation: 'Merge sort consistently runs in O(n log n) time.',
      },
      {
        id: 'dq4',
        text: 'What is the time complexity of inserting at the end of a dynamic array (amortized)?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctIndex: 0,
        explanation: 'Most appends are O(1); occasional resizes make it O(1) amortized.',
      },
      {
        id: 'dq5',
        text: 'Which data structure is most suitable for implementing a browser back/forward history?',
        options: ['Two stacks', 'Queue', 'Priority queue', 'Hash table'],
        correctIndex: 0,
        explanation: 'One stack for back history and one for forward history is a common pattern.',
      },
      {
        id: 'dq6',
        text: 'In a binary tree, how many children can each node have at most?',
        options: ['1', '2', '3', 'Unlimited'],
        correctIndex: 1,
        explanation: 'By definition, each node in a binary tree has at most two children.',
      },
    ],
  },
  'sql-course': {
    title: 'SQL & Databases Quiz (Core Topics)',
    questions: [
      {
        id: 'sq1',
        text: 'Which SQL statement is used to retrieve data from a table?',
        options: ['GET', 'FETCH', 'SELECT', 'SHOW'],
        correctIndex: 2,
        explanation: 'SELECT is used to query and retrieve data from one or more tables.',
      },
      {
        id: 'sq2',
        text: 'Which constraint ensures that a column (or set of columns) uniquely identifies each row?',
        options: ['FOREIGN KEY', 'PRIMARY KEY', 'CHECK', 'DEFAULT'],
        correctIndex: 1,
        explanation: 'A PRIMARY KEY uniquely identifies each row and cannot be NULL.',
      },
      {
        id: 'sq3',
        text: 'What does an INNER JOIN return?',
        options: [
          'All rows from both tables',
          'Rows that do not match between tables',
          'Only rows that have matching values in both tables',
          'Only the first row from each table',
        ],
        correctIndex: 2,
        explanation: 'INNER JOIN returns rows where the join condition matches in both tables.',
      },
      {
        id: 'sq4',
        text: 'Which clause is used to group rows that have the same values in specified columns?',
        options: ['ORDER BY', 'GROUP BY', 'HAVING', 'WHERE'],
        correctIndex: 1,
        explanation: 'GROUP BY groups rows so you can apply aggregate functions like COUNT, SUM, AVG on each group.',
      },
      {
        id: 'sq5',
        text: 'Which clause is evaluated after GROUP BY to filter aggregated groups?',
        options: ['WHERE', 'HAVING', 'LIMIT', 'DISTINCT'],
        correctIndex: 1,
        explanation: 'HAVING filters groups after aggregation; WHERE filters rows before grouping.',
      },
      {
        id: 'sq6',
        text: 'Which normal form focuses on removing partial dependencies on a composite primary key?',
        options: ['First Normal Form (1NF)', 'Second Normal Form (2NF)', 'Third Normal Form (3NF)', 'Boyce-Codd Normal Form (BCNF)'],
        correctIndex: 1,
        explanation: 'Second Normal Form (2NF) eliminates partial dependencies on a composite primary key.',
      },
    ],
  },
  'pe-course': {
    title: 'Prompt Engineering Quiz',
    questions: [
      {
        id: 'peq1',
        text: 'What is "Zero-shot prompting"?',
        options: [
          'Providing a prompt with zero words.',
          'Asking the model a question without providing any examples.',
          'A prompt that generates errors.',
          'Fine-tuning a model with zero data.'
        ],
        correctIndex: 1,
        explanation: 'Zero-shot prompting involves asking a question without giving the model prior examples of the desired output.'
      },
      {
        id: 'peq2',
        text: 'Which technique asks the model to explain its reasoning step-by-step?',
        options: ['Few-shot', 'Zero-shot', 'Chain of Thought', 'Fine-tuning'],
        correctIndex: 2,
        explanation: 'Chain of Thought (CoT) prompting explicitly asks the model to think step-by-step.'
      }
    ]
  },
  'ai-ml-course': {
    title: 'AI & ML Fundamentals Quiz',
    questions: [
      {
        id: 'aimq1',
        text: 'Which type of Machine Learning relies on labeled training data?',
        options: ['Unsupervised Learning', 'Supervised Learning', 'Reinforcement Learning', 'Generative Learning'],
        correctIndex: 1,
        explanation: 'Supervised learning uses labeled inputs to train models to predict outcomes.'
      },
      {
        id: 'aimq2',
        text: 'What is a neural network conceptually based on?',
        options: ['Database tables', 'The human brain structure', 'Quantum physics', 'Linear regression only'],
        correctIndex: 1,
        explanation: 'Neural networks are vaguely inspired by the biological neural networks in animal brains.'
      },
      {
        id: 'aimq3',
        text: 'Which algorithm is best suited for binary classification?',
        options: ['Linear Regression', 'K-Means Clustering', 'Logistic Regression', 'PCA'],
        correctIndex: 2,
        explanation: 'Logistic Regression outputs probabilities mapped between 0 and 1, making it perfect for binary classification.'
      },
      {
        id: 'aimq4',
        text: 'What does Unsupervised Learning aim to discover?',
        options: ['Accurate categorical labels', 'Hidden patterns and structures', 'Optimal reward policies', 'Regression slopes'],
        correctIndex: 1,
        explanation: 'Unsupervised learning finds hidden structures or patterns in unlabelled datasets.'
      },
      {
        id: 'aimq5',
        text: 'Which approach learns through trial and error to maximize a reward?',
        options: ['Reinforcement Learning', 'Transfer Learning', 'Supervised Learning', 'Clustering'],
        correctIndex: 0,
        explanation: 'Reinforcement Learning trains agents to make sequences of decisions to maximize cumulative reward.'
      },
      {
        id: 'aimq6',
        text: 'What is overfitting in Machine Learning?',
        options: ['Model performs poorly on both training and test data', 'Model memorizes training data but fails to generalize to new data', 'Model stops training early', 'Model is too simple to capture patterns'],
        correctIndex: 1,
        explanation: 'Overfitting occurs when a model learns the detail and noise in the training data to the extent that it negatively impacts performance on new, unseen data.'
      }
    ]
  },
  'mongodb-course': {
    title: 'MongoDB Mastery Quiz',
    questions: [
      {
        id: 'moq1',
        text: 'What format does MongoDB primarily use to store data internally?',
        options: ['XML', 'CSV', 'BSON', 'SQL Tables'],
        correctIndex: 2,
        explanation: 'MongoDB stores data in BSON (Binary JSON) format which extends JSON with additional data types.'
      },
      {
        id: 'moq2',
        text: 'Which command is used to insert a document in MongoDB?',
        options: ['db.collection.insert()', 'INSERT INTO collection', 'db.add()', 'UPDATE collection'],
        correctIndex: 0,
        explanation: 'Using db.collection.insertOne() or db.collection.insertMany() adds documents to a collection.'
      },
      {
        id: 'moq3',
        text: 'Which of the following is NOT a MongoDB NoSQL characteristic?',
        options: ['Schema-less at the database level', 'Document-oriented', 'Strict relational table schemas', 'Uses JSON/BSON structures'],
        correctIndex: 2,
        explanation: 'MongoDB is fundamentally schema-less (or uses flexible schemas) and does not force strict relational table architectures.'
      },
      {
        id: 'moq4',
        text: 'What is the MongoDB aggregate pipeline used for?',
        options: ['Routing traffic', 'Processing data records and returning computed results', 'Deleting databases entirely', 'Creating user accounts'],
        correctIndex: 1,
        explanation: 'The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines.'
      },
      {
        id: 'moq5',
        text: 'Which operator allows you to match values greater than a specified value?',
        options: ['$lt', '$gt', '$eq', '$in'],
        correctIndex: 1,
        explanation: 'The $gt operator selects those documents where the value of the field is greater than the specified value.'
      },
      {
        id: 'moq6',
        text: 'How do you create an index on a field named "score" in descending order?',
        options: ['db.collection.createIndex( { score: -1 } )', 'db.collection.index( { score: DESC } )', 'CREATE INDEX score_idx', 'db.collection.createIndex( { "score": 1 } )'],
        correctIndex: 0,
        explanation: 'In MongoDB, specifying -1 creates a descending index, while 1 creates an ascending index.'
      }
    ]
  },
  'aptitude-class': {
    title: 'General Aptitude & Reasoning Quiz',
    questions: [
      {
        id: 'apq1',
        text: 'If the cost price of an article is Rs. 80 and the selling price is Rs. 100, what is the profit percentage?',
        options: ['20%', '25%', '30%', '15%'],
        correctIndex: 1,
        explanation: 'Profit = 100 - 80 = 20. Profit % = (20/80) * 100 = 25%.'
      },
      {
        id: 'apq2',
        text: 'What is the next number in the series: 2, 6, 12, 20, 30, ...?',
        options: ['40', '42', '44', '38'],
        correctIndex: 1,
        explanation: 'The differences are 4, 6, 8, 10. The next difference is 12, so 30 + 12 = 42.'
      },
      {
        id: 'apq3',
        text: 'A train 150m long moving at 90 km/hr crosses a tree. How much time will it take?',
        options: ['6 seconds', '8 seconds', '5 seconds', '10 seconds'],
        correctIndex: 0,
        explanation: 'Speed = 90 * (5/18) = 25 m/s. Time = Distance / Speed = 150 / 25 = 6 seconds.'
      },
      {
        id: 'apq4',
        text: 'Which logical relationship specifies: "All A are B, some B are C"?',
        options: ['Syllogism', 'Blood Relation', 'Direction Sense', 'Seating Arrangement'],
        correctIndex: 0,
        explanation: 'This is a standard premise format for a Syllogism problem.'
      },
      {
        id: 'apq5',
        text: `A man points to a photograph and says, "The lady in the photograph is my nephew's maternal grandmother." How is the lady related to the man's sister who has no other sister?`,
        options: ['Mother', 'Aunt', 'Sister', 'Cannot be determined'],
        correctIndex: 0,
        explanation: `The man's nephew's maternal grandmother is the mother of the nephew's mother. The nephew's mother is the man's sister. So the lady is the mother of the man's sister.`
      },
      {
        id: 'apq6',
        text: 'Find the simple interest on Rs. 1000 at 5% per annum for 2 years.',
        options: ['Rs. 50', 'Rs. 100', 'Rs. 150', 'Rs. 200'],
        correctIndex: 1,
        explanation: 'SI = (P * R * T) / 100 = (1000 * 5 * 2) / 100 = Rs. 100.'
      }
    ]
  },
}

export function getQuizForCourse(courseId) {
  return courseQuizzes[courseId] || null
}

