import type { Cheatsheet } from '../types';

export const cheatsheetsData: Cheatsheet[] = [
  {
    id: 'arrays_sheet',
    title: 'Arrays Cheatsheet',
    sections: [
      {
        title: 'Time Complexities',
        content: `
| Operation | Time Complexity | Details |
|---|---|---|
| Access | O(1) | Direct index retrieval |
| Search | O(N) | Linear scan (unsorted) |
| Insert (End) | O(1) | amortized |
| Insert (Middle) | O(N) | Elements must shift right |
| Delete (Middle) | O(N) | Elements must shift left |
        `
      },
      {
        title: 'Core Patterns & Algorithms',
        content: `
- **Prefix Sum**: Pre-compute cumulative sums to answer range sum queries in O(1) time: \`P[i] = P[i-1] + A[i]\`.
- **Kadane's Algorithm**: Find maximum subarray sum in O(N) time and O(1) space. Maintain \`currentMax\` and \`globalMax\`.
- **Dutch National Flag**: Partition arrays with three distinct values (like 0, 1, 2) in O(N) time using three pointers (\`low\`, \`mid\`, \`high\`).
- **Two Pointers**: Used in sorted arrays. Adjust pointers from left and right towards center based on sum comparisons.
        `
      },
      {
        title: 'Cheat Code Snippet (Python & C++)',
        content: `
\`\`\`python
# Prefix Sum
def get_range_sum(arr, L, R):
    pref = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        pref[i+1] = pref[i] + arr[i]
    return pref[R+1] - pref[L]
\`\`\`

\`\`\`cpp
// Kadane's Algorithm
int maxSubArray(vector<int>& nums) {
    int curMax = 0, globMax = INT_MIN;
    for(int x : nums) {
        curMax = max(x, curMax + x);
        globMax = max(globMax, curMax);
    }
    return globMax;
}
\`\`\`
        `
      }
    ]
  },
  {
    id: 'binary_search_sheet',
    title: 'Binary Search Cheatsheet',
    sections: [
      {
        title: 'Templates & Boundary Handling',
        content: `
- **Midpoint Calculation**: Always use \`mid = low + (high - low) / 2\` to avoid integer overflow.
- **Template 1 (Exact Search)**:
  - Loop: \`while (low <= high)\`
  - Adjust: \`low = mid + 1\`, \`high = mid - 1\`
- **Template 2 (Boundary Search - e.g., First True)**:
  - Loop: \`while (low < high)\`
  - Adjust: \`if (isPossible(mid)) high = mid\` else \`low = mid + 1\`
        `
      },
      {
        title: 'Binary Search on Answer (Monotonic Function)',
        content: `
Useful when asked to find the "minimum maximum" or "maximum minimum" (e.g. Allocate Books, Split Array Largest Sum).
1. Define search range \`[low, high]\` based on inputs.
2. Binary search the candidate value.
3. Write a helper \`isValid(value)\` returning True/False.
4. Adjust boundary based on feasibility.
        `
      },
      {
        title: 'Code Template',
        content: `
\`\`\`python
# Binary Search on Answer Template
def is_possible(mid, arr, constraint):
    # returns True if feasible
    pass

def binary_search(arr, constraint):
    low, high = min_possible_ans, max_possible_ans
    ans = -1
    while low <= high:
        mid = low + (high - low) // 2
        if is_possible(mid, arr, constraint):
            ans = mid
            high = mid - 1 # or low = mid + 1 if maximizing
        else:
            low = mid + 1
    return ans
\`\`\`
        `
      }
    ]
  },
  {
    id: 'dp_sheet',
    title: 'Dynamic Programming Cheatsheet',
    sections: [
      {
        title: 'DP Checklist & Dimensions',
        content: `
1. **Identify**: Problem exhibits overlapping subproblems (e.g., recursive tree has duplicate nodes) and optimal substructure.
2. **Define State**: What do the parameters of the DP table represent? (e.g. \`dp[i][w]\` = max profit using first \`i\` items with remaining capacity \`w\`).
3. **Formulate Transition**: Write the recurrence relation.
4. **Choose Approach**: Top-Down (Memoization) or Bottom-Up (Tabulation).
        `
      },
      {
        title: 'Common DP Subtypes',
        content: `
- **0/1 Knapsack**: Choose or skip. \`dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w-wt[i]])\`.
- **Unbounded Knapsack**: Multiple choices of same item. \`dp[w] = max(dp[w], val[i] + dp[w-wt[i]])\`.
- **LCS (Longest Common Subsequence)**:
  - If \`S1[i] == S2[j]\`: \`dp[i][j] = 1 + dp[i-1][j-1]\`
  - Else: \`dp[i][j] = max(dp[i-1][j], dp[i][j-1])\`
- **LIS (Longest Increasing Subsequence)**: \`dp[i] = max(1 + dp[j])\` for all \`j < i\` where \`arr[j] < arr[i]\` (O(N^2) or O(N log N) using binary search).
        `
      }
    ]
  },
  {
    id: 'trees_sheet',
    title: 'Trees Cheatsheet',
    sections: [
      {
        title: 'Traversals',
        content: `
- **Pre-Order**: Root -> Left -> Right (Useful for copying tree)
- **In-Order**: Left -> Root -> Right (Yields sorted order in Binary Search Tree)
- **Post-Order**: Left -> Right -> Root (Useful for bottom-up computation, like max path sum or height)
- **Level-Order (BFS)**: Iterative traversal level-by-level using a Queue.
        `
      },
      {
        title: 'Binary Search Tree (BST) Properties',
        content: `
- For any node, all left subtree values are \`< node.val\` and all right subtree values are \`> node.val\`.
- Search, insertion, and deletion are \`O(log N)\` in a balanced BST, and \`O(N)\` in a skewed tree.
        `
      },
      {
        title: 'Iterative DFS (using Stack)',
        content: `
\`\`\`cpp
// Iterative In-Order Traversal
vector<int> inorderTraversal(TreeNode* root) {
    vector<int> res;
    stack<TreeNode*> st;
    TreeNode* curr = root;
    while (curr != NULL || !st.empty()) {
        while (curr != NULL) {
            st.push(curr);
            curr = curr->left;
        }
        curr = st.top(); st.pop();
        res.push_back(curr->val);
        curr = curr->right;
    }
    return res;
}
\`\`\`
        `
      }
    ]
  },
  {
    id: 'graphs_sheet',
    title: 'Graphs Cheatsheet',
    sections: [
      {
        title: 'Representation & Traversals',
        content: `
- **Adjacency List**: \`vector<vector<int>> adj\` or \`map<int, vector<int>>\`. O(V + E) space.
- **BFS (Queue)**: Guarantees shortest path in unweighted graphs.
- **DFS (Stack/Recursion)**: Excellent for checking path existence, detecting cycles, and backtracking.
        `
      },
      {
        title: 'Algorithms Cheat Sheet',
        content: `
- **Dijkstra**: Shortest path in weighted graph (no negative weights). Time: \`O((V + E) log V)\` using a Min-Heap.
- **Topological Sort**: Linear ordering of DAG vertices. Requires cycle check. Solved via Kahn's BFS (in-degrees) or DFS post-order reversal.
- **Disjoint Set Union (Union-Find)**: Check connectivity and detect cycles in O(alpha(N)) using Path Compression and Rank-Union.
        `
      },
      {
        title: 'Disjoint Set Union (DSU) Boilerplate',
        content: `
\`\`\`cpp
class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n); iota(parent.begin(), parent.end(), 0);
        rank.resize(n, 0);
    }
    int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]); // Path compression
    }
    void unite(int i, int j) {
        int root_i = find(i), root_j = find(j);
        if (root_i != root_j) {
            if (rank[root_i] < rank[root_j]) swap(root_i, root_j);
            parent[root_j] = root_i;
            if (rank[root_i] == rank[root_j]) rank[root_i]++;
        }
    }
};
\`\`\`
        `
      }
    ]
  },
  {
    id: 'java_sheet',
    title: 'Java Cheatsheet',
    sections: [
      {
        title: 'Java Keywords & Modifiers',
        content: `
- **static**: Belongs to the class, rather than instances.
- **final**: Class cannot be inherited, method cannot be overridden, variable value cannot be modified.
- **finally**: Code block that always executes after try-catch, unless System.exit() is invoked.
- **transient**: Prevents serialization of variables.
- **volatile**: Reads/writes bypass CPU caching, communicating state changes across threads.
        `
      },
      {
        title: 'Collections API Cheat Sheet',
        content: `
- **List**: \`ArrayList\` (contiguous dynamic array), \`LinkedList\` (pointer-based nodes).
- **Set**: \`HashSet\` (O(1) lookups, unordered), \`TreeSet\` (O(log N) operations, sorted order, backed by Red-Black Tree).
- **Map**: \`HashMap\` (O(1) average lookup), \`TreeMap\` (O(log N) lookup, sorted keys).
- **Queue/Deque**: \`ArrayDeque\` (faster than Stack/LinkedList for stack/queue usage), \`PriorityQueue\` (Min-Heap by default).
        `
      },
      {
        title: 'Streams API Snippets',
        content: `
\`\`\`java
// Filter even numbers, square them, and collect to list
List<Integer> result = list.stream()
                           .filter(x -> x % 2 == 0)
                           .map(x -> x * x)
                           .collect(Collectors.toList());

// Group names by length
Map<Integer, List<String>> groups = names.stream()
                                         .collect(Collectors.groupingBy(String::length));
\`\`\`
        `
      }
    ]
  },
  {
    id: 'sql_sheet',
    title: 'SQL Cheatsheet',
    sections: [
      {
        title: 'Joins Visualized',
        content: `
- **Inner Join**: Matched keys in both tables.
- **Left Join**: All left table rows + matching right table rows.
- **Right Join**: All right table rows + matching left table rows.
- **Full Join**: All rows from both tables, filling blanks with NULL.
        `
      },
      {
        title: 'Window Functions Reference',
        content: `
\`\`\`sql
-- Ranking products inside categories by price
SELECT name, category, price,
       ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rn,
       RANK() OVER (PARTITION BY category ORDER BY price DESC) as rk,
       DENSE_RANK() OVER (PARTITION BY category ORDER BY price DESC) as drk
FROM products;

-- Running sum of sales
SELECT sale_date, amount,
       SUM(amount) OVER (ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_sum
FROM sales;
\`\`\`
        `
      },
      {
        title: 'Core Aggregations & Joins',
        content: `
\`\`\`sql
-- Grouping with filters
SELECT department_id, COUNT(*) as emp_count, AVG(salary) as avg_sal
FROM employees
WHERE hire_date > '2020-01-01'
GROUP BY department_id
HAVING AVG(salary) > 50000;
\`\`\`
        `
      }
    ]
  },
  {
    id: 'os_sheet',
    title: 'Operating Systems Cheatsheet',
    sections: [
      {
        title: 'Process vs Thread',
        content: `
- **Process**: Active program execution. Holds isolated PCB, memory space, file handles. Slow context switch.
- **Thread**: Sub-unit of process. Shares memory space (code, heap). Has isolated registers, stack, and TCB. Fast context switch.
        `
      },
      {
        title: 'Deadlock Conditions & Prevention',
        content: `
Must meet all 4 Coffman conditions to deadlock:
1. **Mutual Exclusion**: Non-shareable resources. (Prevent by using virtualized/shareable resources).
2. **Hold and Wait**: Hold one, wait for another. (Prevent by requiring processes to request all resources at once).
3. **No Preemption**: Cannot seize resources. (Prevent by seizing resources if new requests are blocked).
4. **Circular Wait**: Loop of dependencies. (Prevent by ordering resources globally).
        `
      },
      {
        title: 'Virtual Memory & Page Replacement',
        content: `
- **Page Fault**: Requested page not in RAM. Traps to OS to fetch from disk.
- **LRU Policy**: Replace page unused for the longest time.
- **Belady's Anomaly**: For FIFO page replacement, adding physical frames can increase page faults.
- **Thrashing**: Heavy swapping of pages due to insufficient frame allocations.
        `
      }
    ]
  },
  {
    id: 'cn_sheet',
    title: 'Computer Networks Cheatsheet',
    sections: [
      {
        title: 'OSI 7 Layers vs TCP/IP',
        content: `
| OSI Layer | TCP/IP Layer | Protocols | Unit |
|---|---|---|---|
| 7. Application | Application | HTTP, DNS, SMTP, FTP | Data |
| 6. Presentation | Application | SSL/TLS, JPEG, ASCII | Data |
| 5. Session | Application | NetBIOS, RPC | Data |
| 4. Transport | Transport | TCP, UDP | Segment |
| 3. Network | Internet | IP, ICMP, OSPF | Packet |
| 2. Data Link | Network Access | Ethernet, Wi-Fi (MAC) | Frame |
| 1. Physical | Network Access | Cables, Fiber, RF | Bits |
        `
      },
      {
        title: 'TCP vs UDP',
        content: `
- **TCP**: Connection-oriented (SYN, SYN-ACK, ACK). Reliable, handles congestion (sliding window, slow start), ordered byte stream.
- **UDP**: Connectionless. Lightweight, no acknowledgements, unordered packets, used in low-latency video streaming & DNS.
        `
      },
      {
        title: 'HTTPS SSL/TLS Handshake',
        content: `
1. **Client Hello**: List of encryption suites.
2. **Server Hello**: Selection of suite + SSL Certificate (contains Server Public Key).
3. **Verify**: Client validates certificate with root CA.
4. **Key Exchange**: Client creates Pre-Master Secret key, encrypts it with Server Public Key, sends to server.
5. **Decryption**: Server decrypts Pre-Master Secret using Server Private Key.
6. **Session Key**: Both derive the symmetric Session Key, encrypting all subsequent transmissions.
        `
      }
    ]
  }
];
