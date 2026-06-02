import type { TrainerQuestion } from '../types';

export const trainerQuestions: TrainerQuestion[] = [
  {
    id: 't_1',
    question: 'Given an array of integers and a target sum, find the length of the shortest contiguous subarray whose sum is greater than or equal to the target.',
    options: ['Binary Search', 'Sliding Window', 'Dynamic Programming', 'Two Pointers'],
    correctAnswer: 'Sliding Window',
    explanation: 'The keywords "contiguous subarray" and "sum greater than or equal to" indicate a dynamic-size Sliding Window. You expand the window (right pointer) to increase the sum and contract it (left pointer) to minimize the length once the target is met.'
  },
  {
    id: 't_2',
    question: 'Given a sorted array, find if there exist two elements such that their sum equals a target value.',
    options: ['Two Pointers', 'HashMap', 'Sliding Window', 'Binary Search'],
    correctAnswer: 'Two Pointers',
    explanation: 'Since the array is "sorted", we can place one pointer at the start (left) and one at the end (right). We sum their values; if the sum is too small, we increment left, and if the sum is too large, we decrement right. This takes O(N) time and O(1) space.'
  },
  {
    id: 't_3',
    question: 'Determine the maximum weight of items you can fit in a knapsack of capacity W, given the weights and values of N items. Each item can only be taken once.',
    options: ['Greedy', 'Dynamic Programming', 'Backtracking', 'Heap'],
    correctAnswer: 'Dynamic Programming',
    explanation: 'This is the classic 0/1 Knapsack problem. It exhibits overlapping subproblems and optimal substructure. Greedy does not work because we cannot take fractional items. Backtracking is too slow (O(2^N)). DP optimizes it to O(N * W).'
  },
  {
    id: 't_4',
    question: 'Find the shortest path from a starting node to all other nodes in a weighted graph with non-negative edge weights.',
    options: ['Breadth-First Search (BFS)', 'Dijkstra\'s Algorithm', 'Bellman-Ford Algorithm', 'Depth-First Search (DFS)'],
    correctAnswer: 'Dijkstra\'s Algorithm',
    explanation: 'Dijkstra\'s algorithm is specifically designed to find the shortest path in a weighted graph with non-negative edge weights, utilizing a min-heap (Priority Queue) to greedily select the closest node.'
  },
  {
    id: 't_5',
    question: 'Given a list of course prerequisites (e.g. course A must be taken before course B), output a valid ordering in which you can take all the courses.',
    options: ['Topological Sort', 'Depth-First Search (DFS)', 'Union-Find', 'Kruskal\'s Algorithm'],
    correctAnswer: 'Topological Sort',
    explanation: 'This is a dependency resolution problem modeled as a Directed Acyclic Graph (DAG). Topological Sort (using Kahn\'s BFS or DFS cycle detection) outputs a linear ordering of vertices representing the dependency constraints.'
  },
  {
    id: 't_6',
    question: 'Given a set of non-overlapping intervals, insert a new interval into the correct position and merge any overlapping intervals that result.',
    options: ['Greedy', 'Two Pointers', 'Arrays & Sorting', 'Interval Trees'],
    correctAnswer: 'Arrays & Sorting',
    explanation: 'Interval merging problems are solved by analyzing the start and end coordinates of intervals. Since they are sorted, we can iterate through and merge overlapping bounds in a single linear pass.'
  },
  {
    id: 't_7',
    question: 'Given a binary tree, find the maximum path sum between any two nodes. The path does not need to pass through the root.',
    options: ['Depth-First Search (DFS) / Recursion', 'Breadth-First Search (BFS)', 'Dynamic Programming', 'Trie'],
    correctAnswer: 'Depth-First Search (DFS) / Recursion',
    explanation: 'Tree properties are naturally recursive. By running a post-order DFS, each node can calculate the maximum path sum contributions of its left and right subtrees, and update a global maximum path sum.'
  },
  {
    id: 't_8',
    question: 'Given a stream of numbers, design a data structure that supports adding numbers dynamically and returning the median of all numbers added so far in O(1) time.',
    options: ['Heap (Two Heaps)', 'Segment Tree', 'HashMap', 'Binary Search Tree (BST)'],
    correctAnswer: 'Heap (Two Heaps)',
    explanation: 'By maintaining a Max-Heap for the lower half of the numbers and a Min-Heap for the upper half, we can keep the numbers balanced. The median will always be the top of one of the heaps or the average of both.'
  },
  {
    id: 't_9',
    question: 'Given an array of strings, group anagrams together.',
    options: ['HashMap', 'Trie', 'Sorting', 'Linked List'],
    correctAnswer: 'HashMap',
    explanation: 'Anagrams share the exact same character frequencies. By sorting each string or counting its characters, we can create a unique key and use a HashMap to group strings matching that key.'
  },
  {
    id: 't_10',
    question: 'Find the peak element in an array where each element is strictly greater than its neighbors. An element is a peak if it is greater than its left and right neighbors.',
    options: ['Binary Search', 'Two Pointers', 'Stack', 'Greedy'],
    correctAnswer: 'Binary Search',
    explanation: 'Although the array is not fully sorted, we can use Binary Search. If `mid` is less than `mid+1`, a peak must lie on the right side. If `mid` is less than `mid-1`, a peak lies on the left. This allows O(log N) peak detection.'
  },
  {
    id: 't_11',
    question: 'Given a sequence of characters, find the length of the longest palindromic subsequence.',
    options: ['Dynamic Programming', 'Sliding Window', 'Two Pointers', 'Recursion with Backtracking'],
    correctAnswer: 'Dynamic Programming',
    explanation: 'Subsequence problems often have overlapping subproblems. This is solved by using 2D DP where `dp[i][j]` represents the longest palindromic subsequence in substring `s[i..j]`. The transition checks if `s[i] == s[j]`.'
  },
  {
    id: 't_12',
    question: 'Generate all valid combinations of N pairs of balanced parentheses.',
    options: ['Backtracking', 'Stack', 'Queue', 'Greedy'],
    correctAnswer: 'Backtracking',
    explanation: 'Generating "all combinations/permutations" indicates Backtracking. We build the string recursively, keeping track of the count of open and close parentheses, and pruning paths that violate brackets rules.'
  },
  {
    id: 't_13',
    question: 'Given a linked list, detect if it contains a cycle.',
    options: ['Two Pointers (Fast & Slow)', 'Stack', 'HashMap', 'Linked List Reversal'],
    correctAnswer: 'Two Pointers (Fast & Slow)',
    explanation: 'Floyd\'s Cycle Detection (Tortoise and Hare) uses a slow pointer moving 1 step and a fast pointer moving 2 steps. If there is a cycle, the fast pointer will eventually meet the slow pointer, avoiding auxiliary memory.'
  },
  {
    id: 't_14',
    question: 'Find the next greater element for each element in an array. The next greater element is the first greater element to its right.',
    options: ['Monotonic Stack', 'Heap', 'Sliding Window', 'Two Pointers'],
    correctAnswer: 'Monotonic Stack',
    explanation: 'Finding the nearest greater/smaller element is the signature of a Monotonic Stack. We push elements or indices onto the stack and pop them when we find an element greater than the top, resolving it in O(N).'
  },
  {
    id: 't_15',
    question: 'Given a set of intervals representing meeting times, find the minimum number of conference rooms required to schedule all meetings.',
    options: ['Heap / Priority Queue', 'Two Pointers', 'Dynamic Programming', 'Union-Find'],
    correctAnswer: 'Heap / Priority Queue',
    explanation: 'This is the Interval Partitioning / Minimum Platforms problem. We sort meetings by start time, and maintain a Min-Heap of end times of active meetings. If a meeting starts after the heap root, we reuse the room (pop and push), otherwise we allocate a new room (push).'
  }
];
