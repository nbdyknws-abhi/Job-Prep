import type { Difficulty } from '../types';

export interface AssessmentQuestion {
  id: string;
  title: string;
  statement: string;
  difficulty: Difficulty;
  pythonSolution: string;
  cppSolution: string;
  testCases: {
    input: string;
    expected: string;
  }[];
}

export interface AssessmentConfig {
  id: string;
  title: string;
  difficulty: Difficulty;
  durationMinutes: number;
  questions: AssessmentQuestion[];
}

export const assessmentData: AssessmentConfig[] = [
  {
    id: 'easy_test',
    title: 'Infosys SP/SE Easy Coding Assessment',
    difficulty: 'Easy',
    durationMinutes: 180,
    questions: [
      {
        id: 'eq_1',
        title: 'Merge Sorted Array',
        statement: 'You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. Merge `nums2` into `nums1` as one sorted array in-place.',
        difficulty: 'Easy',
        pythonSolution: 'def merge(nums1, m, nums2, n):\n    p1, p2, p = m - 1, n - 1, m + n - 1\n    while p1 >= 0 and p2 >= 0:\n        if nums1[p1] > nums2[p2]:\n            nums1[p] = nums1[p1]\n            p1 -= 1\n        else:\n            nums1[p] = nums2[p2]\n            p2 -= 1\n        p -= 1\n    nums1[:p2 + 1] = nums2[:p2 + 1]',
        cppSolution: 'void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n    int p1 = m - 1, p2 = n - 1, p = m + n - 1;\n    while (p1 >= 0 && p2 >= 0) {\n        if (nums1[p1] > nums2[p2]) {\n            nums1[p--] = nums1[p1--];\n        } else {\n            nums1[p--] = nums2[p2--];\n        }\n    }\n    while (p2 >= 0) {\n        nums1[p--] = nums2[p2--];\n    }\n}',
        testCases: [
          { input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', expected: '[1,2,2,3,5,6]' },
          { input: 'nums1 = [1], m = 1, nums2 = [], n = 0', expected: '[1]' }
        ]
      },
      {
        id: 'eq_2',
        title: 'Single Number',
        statement: 'Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.',
        difficulty: 'Easy',
        pythonSolution: 'def singleNumber(nums):\n    res = 0\n    for n in nums:\n        res ^= n\n    return res',
        cppSolution: 'int singleNumber(vector<int>& nums) {\n    int res = 0;\n    for(int n : nums) res ^= n;\n    return res;\n}',
        testCases: [
          { input: 'nums = [2,2,1]', expected: '1' },
          { input: 'nums = [4,1,2,1,2]', expected: '4' }
        ]
      },
      {
        id: 'eq_3',
        title: 'Valid Parentheses',
        statement: 'Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.',
        difficulty: 'Easy',
        pythonSolution: 'def isValid(s):\n    m = {")": "(", "}": "{", "]": "["}\n    st = []\n    for c in s:\n        if c in m:\n            if not st or st.pop() != m[c]: return False\n        else: st.append(c)\n    return not st',
        cppSolution: 'bool isValid(string s) {\n    stack<char> st;\n    for(char c : s) {\n        if(c==\'(\'||c==\'{\'||c==\'[\') st.push(c);\n        else {\n            if(st.empty()) return false;\n            if(c==\')\' && st.top()!=\'(\') return false;\n            if(c==\'}\' && st.top()!=\'{\') return false;\n            if(c==\']\' && st.top()!=\'[\') return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}',
        testCases: [
          { input: 's = "()"', expected: 'true' },
          { input: 's = "()[]{}"', expected: 'true' },
          { input: 's = "(]"', expected: 'false' }
        ]
      }
    ]
  },
  {
    id: 'medium_test',
    title: 'Infosys Specialist Programmer Mock Assessment',
    difficulty: 'Medium',
    durationMinutes: 180,
    questions: [
      {
        id: 'mq_1',
        title: 'Longest Substring Without Repeating Characters',
        statement: 'Given a string `s`, find the length of the longest substring without repeating characters.',
        difficulty: 'Medium',
        pythonSolution: 'def lengthOfLongestSubstring(s):\n    seen = {}\n    l = res = 0\n    for r, c in enumerate(s):\n        if c in seen and seen[c] >= l:\n            l = seen[c] + 1\n        seen[c] = r\n        res = max(res, r - l + 1)\n    return res',
        cppSolution: 'int lengthOfLongestSubstring(string s) {\n    vector<int> seen(256, -1);\n    int l = 0, res = 0;\n    for(int r = 0; r < s.size(); ++r) {\n        if(seen[s[r]] >= l) {\n            l = seen[s[r]] + 1;\n        }\n        seen[s[r]] = r;\n        res = max(res, r - l + 1);\n    }\n    return res;\n}',
        testCases: [
          { input: 's = "abcabcbb"', expected: '3' },
          { input: 's = "bbbbb"', expected: '1' }
        ]
      },
      {
        id: 'mq_2',
        title: 'Container With Most Water',
        statement: 'You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water.',
        difficulty: 'Medium',
        pythonSolution: 'def maxArea(height):\n    l, r = 0, len(height) - 1\n    res = 0\n    while l < r:\n        w = r - l\n        h = min(height[l], height[r])\n        res = max(res, w * h)\n        if height[l] < height[r]: l += 1\n        else: r -= 1\n    return res',
        cppSolution: 'int maxArea(vector<int>& height) {\n    int l = 0, r = height.size() - 1, res = 0;\n    while(l < r) {\n        res = max(res, (r - l) * min(height[l], height[r]));\n        if(height[l] < height[r]) l++;\n        else r--;\n    }\n    return res;\n}',
        testCases: [
          { input: 'height = [1,8,6,2,5,4,8,3,7]', expected: '49' },
          { input: 'height = [1,1]', expected: '1' }
        ]
      },
      {
        id: 'mq_3',
        title: 'Number of Islands',
        statement: 'Given an `m x n` 2D binary grid `grid` which represents a map of `1`s (land) and `0`s (water), return the number of islands.',
        difficulty: 'Medium',
        pythonSolution: 'def numIslands(grid):\n    if not grid: return 0\n    r, c = len(grid), len(grid[0])\n    count = 0\n    def dfs(i, j):\n        if i < 0 or i >= r or j < 0 or j >= c or grid[i][j] == "0": return\n        grid[i][j] = "0"\n        dfs(i+1, j); dfs(i-1, j); dfs(i, j+1); dfs(i, j-1)\n    for i in range(r):\n        for j in range(c):\n            if grid[i][j] == "1":\n                count += 1\n                dfs(i, j)\n    return count',
        cppSolution: 'void dfs(vector<vector<char>>& grid, int i, int j) {\n    int r = grid.size(), c = grid[0].size();\n    if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] == \'0\') return;\n    grid[i][j] = \'0\';\n    dfs(grid, i+1, j); dfs(grid, i-1, j); dfs(grid, i, j+1); dfs(grid, i, j-1);\n}\nint numIslands(vector<vector<char>>& grid) {\n    if (grid.empty()) return 0;\n    int count = 0;\n    for(int i=0; i<grid.size(); ++i) {\n        for(int j=0; j<grid[0].size(); ++j) {\n            if (grid[i][j] == \'1\') {\n                count++; dfs(grid, i, j);\n            }\n        }\n    }\n    return count;\n}',
        testCases: [
          { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expected: '3' }
        ]
      }
    ]
  },
  {
    id: 'hard_test',
    title: 'Infosys Power Programmer Advanced Assessment',
    difficulty: 'Hard',
    durationMinutes: 180,
    questions: [
      {
        id: 'hq_1',
        title: 'Trapping Rain Water',
        statement: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
        difficulty: 'Hard',
        pythonSolution: 'def trap(height):\n    if not height: return 0\n    l, r = 0, len(height) - 1\n    l_max, r_max = height[l], height[r]\n    res = 0\n    while l < r:\n        if l_max < r_max:\n            l += 1\n            l_max = max(l_max, height[l])\n            res += l_max - height[l]\n        else:\n            r -= 1\n            r_max = max(r_max, height[r])\n            res += r_max - height[r]\n    return res',
        cppSolution: 'int trap(vector<int>& height) {\n    if(height.empty()) return 0;\n    int l = 0, r = height.size()-1;\n    int l_max = height[l], r_max = height[r];\n    int res = 0;\n    while(l < r) {\n        if(l_max < r_max) {\n            l++;\n            l_max = max(l_max, height[l]);\n            res += l_max - height[l];\n        } else {\n            r--;\n            r_max = max(r_max, height[r]);\n            res += r_max - height[r];\n        }\n    }\n    return res;\n}',
        testCases: [
          { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', expected: '6' },
          { input: 'height = [4,2,0,3,2,5]', expected: '9' }
        ]
      },
      {
        id: 'hq_2',
        title: 'N-Queens',
        statement: 'The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return the number of distinct solutions.',
        difficulty: 'Hard',
        pythonSolution: 'def totalNQueens(n):\n    cols = set(); pos_diag = set(); neg_diag = set()\n    def backtrack(r):\n        if r == n: return 1\n        res = 0\n        for c in range(n):\n            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag: continue\n            cols.add(c); pos_diag.add(r + c); neg_diag.add(r - c)\n            res += backtrack(r + 1)\n            cols.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)\n        return res\n    return backtrack(0)',
        cppSolution: 'int totalNQueens(int n) {\n    unordered_set<int> cols, pos, neg;\n    auto backtrack = [&](auto& self, int r) -> int {\n        if (r == n) return 1;\n        int res = 0;\n        for (int c = 0; c < n; ++c) {\n            if (cols.count(c) || pos.count(r + c) || neg.count(r - c)) continue;\n            cols.insert(c); pos.insert(r + c); neg.insert(r - c);\n            res += self(self, r + 1);\n            cols.erase(c); pos.erase(r + c); neg.erase(r - c);\n        }\n        return res;\n    };\n    return backtrack(backtrack, 0);\n}',
        testCases: [
          { input: 'n = 4', expected: '2' },
          { input: 'n = 1', expected: '1' }
        ]
      },
      {
        id: 'hq_3',
        title: 'Edit Distance',
        statement: 'Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert, Delete, or Replace a character.',
        difficulty: 'Hard',
        pythonSolution: 'def minDistance(word1, word2):\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]\n            else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    return dp[m][n]',
        cppSolution: 'int minDistance(string word1, string word2) {\n    int m = word1.size(), n = word2.size();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 0; i <= m; ++i) dp[i][0] = i;\n    for (int j = 0; j <= n; ++j) dp[0][j] = j;\n    for (int i = 1; i <= m; ++i) {\n        for (int j = 1; j <= n; ++j) {\n            if (word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1];\n            else dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});\n        }\n    }\n    return dp[m][n];\n}',
        testCases: [
          { input: 'word1 = "horse", word2 = "ros"', expected: '3' },
          { input: 'word1 = "intention", word2 = "execution"', expected: '5' }
        ]
      }
    ]
  }
];
