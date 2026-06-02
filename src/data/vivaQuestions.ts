import type { VivaProject } from '../types';

export const vivaProjectsData: VivaProject[] = [
  {
    id: 'anime_rec',
    title: 'Anime Recommendation System',
    questions: [
      {
        question: 'What recommendation algorithm did you implement, and why did you choose it?',
        answer: 'I implemented Collaborative Filtering combined with Content-Based Filtering (a hybrid system). For the content-based part, I used Cosine Similarity on TF-IDF vectors of anime genres, tags, and descriptions. For the collaborative filtering, I used Matrix Factorization (Singular Value Decomposition - SVD) on user ratings. This hybrid approach resolves the "cold-start" problem for new items using content similarity, while providing highly personalized suggestions using user ratings history.',
        followUps: [
          'How does Cosine Similarity calculate distance between vectors? (It measures the cosine of the angle between two multi-dimensional vectors: A·B / (||A|| ||B||), returning a value from 0 to 1).',
          'How do you handle user ratings scaling? (We normalize ratings by subtracting the user\'s average rating to account for user rating biases, where some users are strict and others are generous).'
        ],
        redFlags: [
          'Saying you used standard nested for-loops to calculate similarity for millions of records (inefficient; should mention vectorization or vector libraries).',
          'Not knowing how SVD works or what the dimensions of the factorized matrices represent.'
        ]
      },
      {
        question: 'How did you handle the cold-start problem in your recommendation engine?',
        answer: 'The cold-start problem occurs when a new user joins (no rating history) or a new anime is added (no user ratings). I resolved user cold-start by prompting the user for 3-5 favorite genres/animes during onboarding to establish a baseline. For item cold-start, I used Content-Based Filtering to compare the new anime\'s genres, description, and production studio with existing catalog items to place it in the similarity matrix, even with zero user ratings.',
        followUps: [
          'What is the difference between user-based and item-based collaborative filtering? (User-based finds similar users and recommends items they liked. Item-based finds similar items based on rating correlations, which is stabler because item sets change less frequently than user preferences).'
        ],
        redFlags: [
          'Claiming cold-start is resolved by doing nothing or showing random popular anime (lazy UX and poor system engineering).'
        ]
      }
    ]
  },
  {
    id: 'mern_apps',
    title: 'MERN Applications',
    questions: [
      {
        question: 'Explain how authentication is handled in your MERN application.',
        answer: 'Authentication is handled using JSON Web Tokens (JWT). When a user logs in, the Node/Express backend verifies their credentials against the hashed password stored in MongoDB (using bcrypt). If valid, it generates a JWT containing the user ID signed with a server secret. This token is sent to the client and stored in a secure, HTTP-only cookie to prevent Cross-Site Scripting (XSS). For subsequent requests, an Express middleware intercepts and decodes the cookie to authorize operations.',
        followUps: [
          'Why store JWT in HTTP-only cookies instead of LocalStorage? (LocalStorage is accessible by client-side Javascript, making it vulnerable to XSS token theft. HTTP-only cookies cannot be read by scripts).',
          'How does token invalidation work during logout? (Since JWT is stateless, we clear the HTTP-only cookie on the client side, and can optionally maintain a blacklist of invalidated tokens in Redis for immediate termination).'
        ],
        redFlags: [
          'Storing raw, unhashed passwords in the database (huge security violation).',
          'Storing JWT tokens in LocalStorage without addressing XSS mitigation.'
        ]
      },
      {
        question: 'How do you handle database relationships and transactions in MongoDB?',
        answer: 'For relationships, I use Mongoose schemas with Reference IDs (e.g. referencing User ID inside an Order schema) and use `.populate()` to join records during fetch. For critical transactions like checkout, I use MongoDB Multi-Document Transactions (Sessions). I start a session using `mongoose.startSession()`, execute the updates (deducting inventory and creating the order record), and commit. If any step fails, I abort the transaction, guaranteeing ACID properties.',
        followUps: [
          'When would you embed a document vs reference it in MongoDB? (Embed if data is static and belongs strictly to a single parent, like a user address. Reference if data grows dynamically or is shared, like orders made by users).'
        ],
        redFlags: [
          'Claiming MongoDB doesn\'t support transactions (transactions were introduced in MongoDB 4.0).',
          'Using relational joins everywhere in MongoDB, which indicates SQL-thinking in a NoSQL environment.'
        ]
      }
    ]
  },
  {
    id: 'spring_boot',
    title: 'Spring Boot Applications',
    questions: [
      {
        question: 'Explain the role of ApplicationContext and Dependency Injection in Spring.',
        answer: 'Dependency Injection (DI) is a pattern that implements Inversion of Control (IoC), transferring the object creation responsibility from the class to the framework. The ApplicationContext is the Spring IoC container. It is responsible for initializing, configuring, and assembling Spring Beans. Beans are defined using annotations (like @Component, @Service, @Repository) and are injected using @Autowired or Constructor Injection (which is preferred as it supports immutability and easier unit testing).',
        followUps: [
          'What is the difference between Bean Scopes Singleton and Prototype? (Singleton is the default; the container creates a single instance per Bean definition. Prototype creates a new instance every time the bean is requested).',
          'What is Spring Boot Auto-Configuration? (Spring Boot looks at the classpath dependencies (e.g., finding h2 on classpath) and automatically configures standard beans (like DataSource) so you don\'t write XML config).'
        ],
        redFlags: [
          'Creating instances manually using `new MyService()` inside controllers, which bypasses Dependency Injection and Spring lifecycle benefits.'
        ]
      },
      {
        question: 'How do you manage transactions in Spring Boot?',
        answer: 'I use declarative transaction management using the `@Transactional` annotation. When placed on a service method, Spring wraps the execution in a transaction proxy. It starts a transaction before the method runs and commits it upon successful execution. If a runtime exception occurs (inheriting from RuntimeException), Spring automatically rolls back the database changes. If a checked exception is thrown, it commits unless specified in rollbackFor.',
        followUps: [
          'What are transaction propagation levels? (Defines how transactions behave when a transactional method calls another. Common scopes are REQUIRED (join existing, or create one) and REQUIRES_NEW (always start a new transaction)).'
        ],
        redFlags: [
          'Not knowing that `@Transactional` only rolls back for Unchecked (Runtime) exceptions by default, and failing to specify `rollbackFor = Exception.class` for checked exceptions.'
        ]
      }
    ]
  },
  {
    id: 'react_projects',
    title: 'React Projects',
    questions: [
      {
        question: 'What is the Virtual DOM and how does React reconciliation work?',
        answer: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state changes, React builds a new virtual representation. It then compares this new tree with the previous one using a diffing algorithm (Reconciliation). React calculates the minimum number of updates needed to synchronize the real DOM and applies them in a batch. This optimizes DOM operations which are otherwise highly expensive.',
        followUps: [
          'Why are "keys" required in list rendering? (Keys provide a stable identity to list items, helping React identify which items have changed, been added, or removed, preventing unnecessary re-renders).',
          'How does useMemo differ from useCallback? (useMemo memoizes the computed value of a function, recalculating only when dependencies change. useCallback memoizes the function definition itself to prevent child re-renders due to reference changes).'
        ],
        redFlags: [
          'Saying that the Virtual DOM is faster because it resides in RAM (real DOM also resides in RAM; Virtual DOM is faster because it minimizes writes to the UI thread).'
        ]
      },
      {
        question: 'How do you manage complex application state in React?',
        answer: 'For simple state, I use `useState` and `useReducer`. For passing data across deeply nested components, I use the `useContext` API. For global state in complex apps, I use Redux Toolkit (RTK) or Zustand. Zustand is lightweight and uses hook-based stores without boilerplate. It separates global concerns like user authentication, cart states, and system configurations from UI rendering, while optimizing rendering by letting components select specific state slices.',
        followUps: [
          'What is prop drilling? (The anti-pattern of passing props through multiple levels of components that don\'t need the data, just to deliver it to a leaf component. Resolved using Context or State Managers).'
        ],
        redFlags: [
          'Using Context API for high-frequency state updates (like animations or form inputs) which can trigger global re-renders. Use local state or dedicated libraries for high-frequency updates.'
        ]
      }
    ]
  },
  {
    id: 'github_portfolio',
    title: 'GitHub Portfolio',
    questions: [
      {
        question: 'What version control workflow do you follow in your repositories?',
        answer: 'I follow a standard Feature Branch Workflow. I never commit directly to the `main` branch. I create descriptive feature branches (e.g. `feature/auth-middleware`), commit incrementally, and create Pull Requests (PRs). I run local checks (linting, tests) before merging. I write clean commit messages formatted as `feat: add bcrypt hashing` or `fix: resolve null pointer in user controller` to maintain a professional history.',
        followUps: [
          'What is the difference between git merge and git rebase? (git merge creates a new merge commit preserving branch history. git rebase rewrites project history by moving commits to the tip of target branch, yielding a clean linear log).',
          'How do you resolve merge conflicts? (I pull the target branch, merge it into my feature branch, open conflict files, manually choose the correct code blocks, commit the resolved merge, and push).'
        ],
        redFlags: [
          'Admitting to commit everything directly to the main branch with messages like "fixed bug", "update", "temp", "final final".'
        ]
      }
    ]
  }
];
