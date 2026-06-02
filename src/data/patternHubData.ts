import type { PatternHubTopic } from '../types';

export const patternHubData: PatternHubTopic[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    visualExplanation: `
[Element 0] -> [Element 1] -> [Element 2] -> [Element 3] ... -> [Element N-1]
▲                                                                 ▲
Index 0                                                           Index N-1
Memory: Contiguous blocks of memory. Random access is O(1).
    `,
    patternGuide: 'Use Arrays when you have linear data that requires fast access by index. Often combined with hashing or pointer-based manipulation.',
    triggerWords: ['contiguous', 'contiguous subarray', 'sorted', 'indexed', 'in-place manipulation', 'maximum/minimum element'],
    interviewHints: [
      'If the array is sorted, think of Binary Search or Two Pointers immediately.',
      'To save space, see if you can modify the array in-place by treating values as indices (useful for finding duplicates/missing elements).',
      'Pre-computing prefix sums can optimize range sum queries from O(N) to O(1).'
    ],
    commonTraps: [
      'Index out of bounds errors (always check boundaries when indexing `i-1` or `i+1`).',
      'Integer overflow when computing middle index or running sums.',
      'Modifying elements while iterating without adjusting loop counters.'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Access by index',
      average: 'O(N) - Search / Insertion / Deletion',
      worst: 'O(N) - Search / Insertion / Deletion',
      space: 'O(1) auxiliary (if modified in-place)'
    }
  },
  {
    id: 'hashmap',
    name: 'HashMap',
    visualExplanation: `
Key (Hash Function) ---> Hash Value (Index) ---> [ Bucket (Key: Value) ]
Example: "Apple" ----> 1042 --------------------> [ 1042: { "Apple", 5 } ]
Provides average O(1) time complexity for lookup, insert, and delete.
    `,
    patternGuide: 'Use HashMaps when you need to store key-value relationships, keep track of frequencies, or check for element existence in O(1) average time.',
    triggerWords: ['frequency', 'lookup', 'unique', 'first occurrence', 'pairs summing to X', 'subarray sum equals K'],
    interviewHints: [
      'When asked to find pairs (like Two Sum), use a HashMap to store the complement (target - current).',
      'Keep track of frequencies of elements to solve anagrams, top K frequent items, or subarray problems.',
      'Double check if you can use a fixed-size array instead of a HashMap if the character set is limited (e.g., lowercase English alphabets).'
    ],
    commonTraps: [
      'Assuming O(1) worst-case time complexity; bad hash functions or collisions can degrade performance to O(N).',
      'Concurrent modification exceptions when editing the map while iterating over its keySet.',
      'Using mutable objects as keys. If key values change, their hashcode changes, making them unretrievable.'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Lookup / Insertion',
      average: 'O(1) - Lookup / Insertion',
      worst: 'O(N) - Under extreme collision scenario',
      space: 'O(N) - Stores N key-value pairs'
    }
  },
  {
    id: 'sliding_window',
    name: 'Sliding Window',
    visualExplanation: `
[ 1,  3, -1, -3,  5,  3,  6,  7 ]  (Window size K = 3)
 [1,  3, -1]                     --> Sum = 3
     [3, -1, -3]                 --> Sum = -1
         [-1, -3,  5]             --> Sum = 1
Move window by dropping left element and adding right element.
    `,
    patternGuide: 'Used to perform operations on a contiguous subarray or substring of a linear data structure, avoiding redundant computations.',
    triggerWords: ['contiguous subarray/substring', 'maximum/minimum sum of size K', 'longest substring without repeating', 'shortest subarray sum at least K'],
    interviewHints: [
      'Identify if the window size is fixed (e.g. size K) or dynamic (based on a condition).',
      'Use two pointers: `right` expands the window, `left` contracts the window when the constraint is violated.',
      'Use a helper variables (sum, count, hashmap) to maintain the state of the current window in O(1) transition.'
    ],
    commonTraps: [
      'Not updating the left pointer correctly, leading to infinite loops.',
      'Off-by-one errors when computing the window length (`right - left + 1` vs `right - left`).',
      'Failing to handle empty inputs or inputs smaller than the window size K.'
    ],
    complexityCheatsheet: {
      best: 'O(N) - Single pass',
      average: 'O(N) - Each element is visited at most twice',
      worst: 'O(N)',
      space: 'O(1) or O(K) if map/frequency array is used'
    }
  },
  {
    id: 'two_pointers',
    name: 'Two Pointers',
    visualExplanation: `
[ 1,  2,  3,  4,  6,  8,  9 ] (Target Sum = 10)
 L ----------------------- R   --> Sum = 1 + 9 = 10 (Found!)
If sum too small: L++ | If sum too large: R--
Pointers can move from opposite ends (L & R) or at different speeds (Fast & Slow).
    `,
    patternGuide: 'Use two pointers to scan an array or linked list concurrently. Helpful for sorted arrays, partitioning, and cycle detection.',
    triggerWords: ['sorted array', 'pair sum', 'reverse in-place', 'remove duplicates', 'cycle detection', 'palindrome checking'],
    interviewHints: [
      'For opposite-end pointers, move them towards each other based on comparison (e.g. target sum in sorted array).',
      'For fast and slow pointers, move slow by 1 step and fast by 2 steps to find cycles, middle element, or K-th from end.',
      'Ensure the array is sorted before applying the target-sum Two Pointer approach!'
    ],
    commonTraps: [
      'Dereferencing null pointer in Linked Lists (e.g., check `fast` and `fast.next` are not null before moving).',
      'Incorrect termination conditions (e.g. `left < right` vs `left <= right`), which can cause infinite loops or miss middle elements.',
      'Applying two pointers to unsorted arrays where sorting is not allowed or changes index requirements.'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Best case target match',
      average: 'O(N) - Linear scan',
      worst: 'O(N) - Scans entire collection',
      space: 'O(1) - Uses only two pointers'
    }
  },
  {
    id: 'binary_search',
    name: 'Binary Search',
    visualExplanation: `
Target = 7
[ 1,  3,  5,  7,  9,  11,  15 ]
  L -------- M ---------- R   --> mid element = 7. Found!
If target < mid: R = M-1 | If target > mid: L = M+1
    `,
    patternGuide: 'Search technique that divides the search space in half each step. Works on sorted arrays or monotonic functions.',
    triggerWords: ['sorted array', 'logarithmic time O(log N)', 'find minimum in rotated sorted', 'peak element', 'search space optimization', 'minimum capacity to ship in D days'],
    interviewHints: [
      'Always calculate mid as `left + (right - left) / 2` to prevent integer overflow.',
      'Can be applied to "Search Space" (Binary Search on Answer). If you can write an `isPossible(x)` function that is monotonic (True/True/False/False), you can binary search the boundary.',
      'For rotated sorted arrays, one half is always sorted. Determine which half is sorted first, then check if target lies within its boundaries.'
    ],
    commonTraps: [
      'Infinite loops due to incorrect updating: `left = mid` or `right = mid` instead of `mid + 1` or `mid - 1`.',
      'Setting search boundaries incorrectly (e.g., `right = N` instead of `N-1`).',
      'Applying binary search on unsorted structures.'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Middle element is target',
      average: 'O(log N) - Halves search space each step',
      worst: 'O(log N)',
      space: 'O(1) - Iterative search'
    }
  },
  {
    id: 'linked_list',
    name: 'Linked List',
    visualExplanation: `
[ Head ] -> [ Val: 1, Next ] -> [ Val: 2, Next ] -> [ Val: 3, Next: Null ]
Elements are scattered in memory, linked via pointers. No random access.
    `,
    patternGuide: 'Linear collection of data elements where order is given by pointers. Excellent for O(1) insertions/deletions at known positions.',
    triggerWords: ['reverse list', 'merge lists', 'cycle detection', 'detect intersection', 'remove N-th node from end', 'reorder list'],
    interviewHints: [
      'Use a "Dummy Node" (or sentinel node) to simplify code when modifying head pointers or building a new list.',
      'To find cycles or middle nodes, use the Fast and Slow pointer (Tortoise and Hare) algorithm.',
      'Always update pointers carefully: temp pointer = `curr.next` before swapping pointers, to avoid losing the rest of the list.'
    ],
    commonTraps: [
      'Null Pointer Dereference: Accessing `node.next` when `node` is null.',
      'Losing the head of the list during reversals or updates.',
      'Creating accidental cycles, resulting in infinite loops during traversal.'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Insertion/Deletion at head',
      average: 'O(N) - Search or access by index',
      worst: 'O(N)',
      space: 'O(1) auxiliary (if modified in-place)'
    }
  },
  {
    id: 'stack',
    name: 'Stack',
    visualExplanation: `
  |  3  |  <- Push / Pop (Top)
  |  2  |
  |  1  |
  +-----+
Last-In, First-Out (LIFO) order.
    `,
    patternGuide: 'Use a Stack when you need to retrieve elements in reverse order of insertion (LIFO) or when matching paired items.',
    triggerWords: ['balanced parentheses', 'reverse polish notation', 'undo/redo', 'next greater element', 'monotonic stack', 'histogram area'],
    interviewHints: [
      'Use a Monotonic Stack (increasing or decreasing order of elements) to find the nearest smaller or larger element in O(N) time.',
      'Use stacks for evaluating mathematical expressions or keeping track of nested structures (like HTML tags or brackets).',
      'Many recursion problems can be solved iteratively using an explicit stack.'
    ],
    commonTraps: [
      'Empty Stack Exception: Popping or calling `peek()` when the stack is empty (always check `!stack.isEmpty()` first).',
      'High memory overhead compared to recursive calls if large datasets are pushed onto stack objects.',
      'Using the wrong stack type (e.g. Vector-based Stack in Java which is synchronized and slower).'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Push / Pop / Peek',
      average: 'O(1)',
      worst: 'O(1)',
      space: 'O(N) - Stores up to N elements'
    }
  },
  {
    id: 'queue',
    name: 'Queue',
    visualExplanation: `
Inflow (Enqueue) ---> [ 3,  2,  1 ] ---> Outflow (Dequeue)
                       Rear      Front
First-In, First-Out (FIFO) order.
    `,
    patternGuide: 'Use a Queue when you need to process elements in the exact order they arrive (FIFO), such as in breadth-first traversals or buffer managers.',
    triggerWords: ['first come first served', 'level order traversal', 'shortest path in unweighted graph', 'sliding window maximum (Deque)', 'rate limiter'],
    interviewHints: [
      'For Breadth-First Search (BFS), use a queue to store nodes of the current level before expanding to the next.',
      'A Double-Ended Queue (Deque) allows insertion/deletion from both ends in O(1), highly useful for sliding window maximums.',
      'Queue is vital in producer-consumer problems (using BlockingQueue in multithreading).'
    ],
    commonTraps: [
      'Infinite BFS loop: Forgetting to mark visited nodes in graphs, causing them to be queued repeatedly.',
      'Off-by-one errors when processing levels in BFS (always capture size of queue at the start of each level loop).',
      'Inefficient list-based queues in Python (use `collections.deque` instead of `list` since `list.pop(0)` is O(N)).'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Enqueue / Dequeue',
      average: 'O(1)',
      worst: 'O(1)',
      space: 'O(N) - Stores up to N elements'
    }
  },
  {
    id: 'heap',
    name: 'Heap (Priority Queue)',
    visualExplanation: `
       [ 10 ]  (Max Heap)
      /      \\
    [ 8 ]    [ 7 ]
   /    \\
  [ 5 ]  [ 4 ]
Root is always the extreme element (Max or Min). Complete Binary Tree.
    `,
    patternGuide: 'Use a Heap when you need to repeatedly access the minimum or maximum element in dynamic datasets.',
    triggerWords: ['k-th largest/smallest', 'top K frequent', 'merge K sorted lists', 'median in a stream', 'priority-based scheduling'],
    interviewHints: [
      'If you need the K-th largest element, use a Min-Heap of size K. The root will contain the K-th largest.',
      'For merging K sorted lists, insert the first element of each list into a Min-Heap. Extract min, and insert the next element from that list.',
      'Maintain two heaps (a max-heap for the lower half and a min-heap for the upper half) to find the median of a stream in O(1) time.'
    ],
    commonTraps: [
      'Assuming search is O(1); finding an arbitrary element in a heap is O(N). Only top element retrieval is O(1).',
      'Forgetting that heapify on an array takes O(N), but building it by inserting N elements one-by-one takes O(N log N).',
      'Using the wrong comparison function, leading to incorrect ordering in custom objects.'
    ],
    complexityCheatsheet: {
      best: 'O(1) - Peek min/max',
      average: 'O(log N) - Push / Pop',
      worst: 'O(log N)',
      space: 'O(N) - Stores N elements'
    }
  },
  {
    id: 'trees',
    name: 'Trees',
    visualExplanation: `
         [ Root ]
        /        \\
    [ Left ]    [ Right ]
    /      \\
 [Leaf]   [Leaf]
Hierarchical structure. No cycles. N nodes, N-1 edges.
    `,
    patternGuide: 'Hierarchical representation of data. Often solved recursively. Key types include Binary Trees, BSTs, and Trie structures.',
    triggerWords: ['binary tree', 'lowest common ancestor', 'path sum', 'depth-first search', 'binary search tree', 'autocomplete (Trie)', 'level order'],
    interviewHints: [
      'For Binary Search Tree (BST) problems, remember that in-order traversal yields elements in sorted ascending order.',
      'Recursion is the default for tree problems. Define base cases (usually `root == null`) and how to combine left and right subtree results.',
      'Use a Trie (Prefix Tree) for prefix search or autocomplete requirements.'
    ],
    commonTraps: [
      'Forgetting to check if subtrees are null before accessing their properties (e.g., `root.left.val` without checking `root.left`).',
      'Stack overflow due to deep recursion in highly skewed trees (worst-case depth = O(N)).',
      'Assuming BST nodes are automatically balanced.'
    ],
    complexityCheatsheet: {
      best: 'O(log N) - Search/Insert in balanced BST',
      average: 'O(log N) - Balanced BST operations',
      worst: 'O(N) - Operations in a skewed tree / full traversal',
      space: 'O(H) recursion stack where H is tree height'
    }
  },
  {
    id: 'graphs',
    name: 'Graphs',
    visualExplanation: `
    ( A ) -------- ( B )
      |          /   |
      |        /     |
      |      /       |
    ( C ) -------- ( D )
Nodes (Vertices) connected by Edges. Can be directed/undirected, weighted/unweighted. Can contain cycles.
    `,
    patternGuide: 'Use Graphs to model networks, relationships, maps, and social connections. Solved using BFS, DFS, Dijkstra, Union-Find, etc.',
    triggerWords: ['connected components', 'shortest path', 'cycles', 'topological sort', 'bipartite graph', 'islands count', 'course schedule'],
    interviewHints: [
      'BFS is ideal for finding shortest path in unweighted graphs. DFS is better for exploring paths, cycles, and connectivity.',
      'If dependencies exist (e.g. course prerequisites), think Topological Sort (Kahn\'s BFS or DFS cycle check).',
      'Use Union-Find (Disjoint Set Union) for cycle detection or counting connected components efficiently.'
    ],
    commonTraps: [
      'Not keeping track of visited nodes, leading to infinite recursion or loops in graphs with cycles.',
      'Confusing vertices count (V) and edges count (E) in complexity analysis (e.g., Dijkstra is O((V + E) log V)).',
      'Incorrect initialization of adjacency lists leading to missing directed edges.'
    ],
    complexityCheatsheet: {
      best: 'O(V + E) - BFS / DFS traversal',
      average: 'O(V + E) - BFS / DFS traversal',
      worst: 'O(V^2) - BFS/DFS with matrix representation',
      space: 'O(V + E) - Adjacency list storage / O(V) visited set'
    }
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    visualExplanation: `
Fibonacci (Fib(4)):
          Fib(4)
         /      \\
     Fib(3)    Fib(2)
     /    \\     /   \\
  Fib(2) Fib(1)Fib(1)Fib(0)
  (Redundant computations solved by Memoization / Tabulation)
    `,
    patternGuide: 'Optimizes recursive solutions by storing results of subproblems. Applied when problems exhibit Overlapping Subproblems and Optimal Substructure.',
    triggerWords: ['maximum profit', 'minimum cost', 'number of ways', 'longest common subsequence', 'knapsack', 'partition array', 'climbing stairs'],
    interviewHints: [
      'Start with a Top-Down recursive solution, then add a memoization map/array (cache) to store computed subproblem results.',
      'Convert to Bottom-Up (Tabulation) to avoid call stack limits and save space by only storing the last few state variables.',
      'Define the DP state (what do parameters represent?) and the state transition equation clearly before writing code.'
    ],
    commonTraps: [
      'Incorrect base cases leading to index out of bounds or wrong calculations.',
      'Failing to identify the correct dimensions for the DP table (e.g. 1D vs 2D table).',
      'Not checking if space complexity can be optimized from O(N^2) or O(N) to O(1) by using rolling variables.'
    ],
    complexityCheatsheet: {
      best: 'O(State count * Transition cost)',
      average: 'O(State count * Transition cost)',
      worst: 'O(State count * Transition cost)',
      space: 'O(States) for table or O(Recursion Depth) for stack'
    }
  },
  {
    id: 'greedy',
    name: 'Greedy',
    visualExplanation: `
Coin Change (Greedy for standard denominations):
Target: 36. Coins: [25, 10, 5, 1]
1. Take 25 (Remaining: 11)
2. Take 10 (Remaining: 1)
3. Take 1  (Remaining: 0)
Result: [25, 10, 1] -> Always chooses local optimum at each step.
    `,
    patternGuide: 'An algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.',
    triggerWords: ['maximum intervals', 'non-overlapping', 'activity selection', 'huffman coding', 'minimum platforms', 'fractional knapsack'],
    interviewHints: [
      'Sort the input array first (e.g., sort intervals by end time to maximize non-overlapping intervals).',
      'Prove greedy choice property: show that making a local optimal choice leads to a global optimal solution.',
      'Greedy is often faster than DP, but it does NOT work for all optimal substructure problems (e.g., 0/1 Knapsack).'
    ],
    commonTraps: [
      'Assuming Greedy works without dry-running on edge cases (e.g., Coin Change with coins [1, 3, 4] for amount 6 fails under greedy: 4+1+1=3 coins, but 3+3=2 coins is optimal).',
      'Sorting in descending order when ascending was needed, or sorting by start time instead of end time for interval scheduling.'
    ],
    complexityCheatsheet: {
      best: 'O(N log N) - Sorting overhead',
      average: 'O(N log N) - Sorting overhead',
      worst: 'O(N log N)',
      space: 'O(1) or O(N) depending on sorting implementation'
    }
  },
  {
    id: 'recursion',
    name: 'Recursion',
    visualExplanation: `
Call Stack:
| Solve(1) | -> Base Case (returns 1)
| Solve(2) | -> Wait for Solve(1)
| Solve(3) | -> Wait for Solve(2)
Recursion breaks a problem down into smaller self-similar subproblems.
    `,
    patternGuide: 'Solve problems by defining functions that call themselves. Vital for Trees, Graphs, DP, and Divide & Conquer (e.g., Merge Sort).',
    triggerWords: ['divide and conquer', 'towers of hanoi', 'fibonacci', 'merge sort', 'tree traversals', 'generate permutations'],
    interviewHints: [
      'Always start with the Base Case(s) to stop execution and prevent StackOverflow errors.',
      'Draw the recursion tree on paper to visualize stack frames and recognize overlapping subproblems.',
      'Ensure parameters change in each recursive call to progress towards the base case.'
    ],
    commonTraps: [
      'Missing base cases, causing infinite recursion and stack overflow.',
      'Redundant recursive calls without caching (memoization), leading to exponential O(2^N) time complexity.',
      'Incorrect return logic when combining results of multiple recursive pathways.'
    ],
    complexityCheatsheet: {
      best: 'Depends on branching factor & depth',
      average: 'Often O(Branching^Depth)',
      worst: 'Stack Overflow if depth is too deep',
      space: 'O(D) where D is max recursion tree depth (stack memory)'
    }
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    visualExplanation: `
Decision Tree (N-Queens or Permutations):
               [ Root ]
              /   |    \\
            [1]  [2]   [3]
           /  \\   |    /  \\
         [1,2]x [2,1] [3,1]x
   (x = Pruned Path: Undo decision and backtrack)
    `,
    patternGuide: 'Systematic trial-and-error search of all configurations. We make a decision, explore recursively, and if we hit a dead end, we UNDO the decision and try another path.',
    triggerWords: ['all combinations', 'all permutations', 'subsets', 'n-queens', 'sudoku solver', 'word search', 'generate parenthese'],
    interviewHints: [
      'The blueprint: 1. Add choice to state, 2. Recursively explore, 3. Remove choice from state (backtrack).',
      'Implement smart pruning: if a partial solution violates conditions, return early to save exponential work.',
      'Use boolean return values if you only need ONE valid path (e.g., Sudoku) rather than ALL paths (e.g., Subsets).'
    ],
    commonTraps: [
      'Forgetting to UNDO the state change before returning, which corrupts other decision paths.',
      'Passing mutable objects (like lists) to recursive calls without copying them, causing updates in one branch to affect others.',
      'Not sorting inputs if duplicates are present and we want unique subsets/permutations.'
    ],
    complexityCheatsheet: {
      best: 'O(Pruned paths)',
      average: 'O(N! * N) or O(2^N * N) - Exponential search space',
      worst: 'O(N! * N) / O(2^N * N)',
      space: 'O(N) - Recursion stack + decision path array'
    }
  }
];
