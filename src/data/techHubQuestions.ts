import type { TechHubCategory } from '../types';

export const techHubData: TechHubCategory[] = [
  {
    id: 'java',
    name: 'Java',
    topics: [
      {
        id: 'java_oop',
        title: 'OOP (Object Oriented Programming)',
        explanation: 'Object-Oriented Programming is a paradigm centered around objects rather than logic/functions. In Java, this is built on 4 pillars: Abstraction (hiding implementation details), Encapsulation (binding data and methods together), Inheritance (reusing class properties), and Polymorphism (methods performing different tasks based on runtime or compile-time context).',
        questions: [
          {
            question: 'What is the difference between Method Overloading and Method Overriding?',
            answer: 'Method Overloading is Compile-Time Polymorphism. It occurs within the same class when multiple methods have the same name but different signatures (different number, type, or order of parameters). Method Overriding is Runtime Polymorphism. It occurs when a subclass provides a specific implementation for a method already defined in its parent class, using the exact same signature and return type. In overridden methods, the JVM resolves the call at runtime based on the actual object type, not the reference type.',
            followUps: [
              'Can we override static or private methods? (No, static methods are bound at compile-time and private methods are not inherited).',
              'Can overriding methods throw broader exceptions? (No, they can only throw subclass exceptions or fewer exceptions to maintain contract compatibility).'
            ]
          },
          {
            question: 'Explain Abstract Classes vs Interfaces in Java 8 and beyond.',
            answer: 'An abstract class can have state (instance variables) and constructors, and can define default behaviors with non-abstract methods. Interfaces represent a pure contract; they cannot hold state (only public static final constants) and cannot have constructors. However, Java 8 introduced "default" and "static" methods in interfaces to support backwards compatibility, and Java 9 added "private" interface methods. A class can extend only one abstract class but can implement multiple interfaces, making interfaces ideal for decoupling API contracts.',
            followUps: [
              'Why did Java 8 introduce default methods? (To allow API designers to add new methods to interfaces without breaking existing implementations, like adding stream() to Collection).',
              'What is a Functional Interface? (An interface with exactly one abstract method, decorated with @FunctionalInterface, which enables lambda expressions).'
            ]
          }
        ]
      },
      {
        id: 'java_collections',
        title: 'Collections Framework',
        explanation: 'The Java Collections framework provides a set of interfaces and classes for storing and manipulating groups of data. Main interfaces include List (ordered list with duplicates), Set (unordered unique elements), Queue (FIFO elements), and Map (key-value mapping, which does not inherit from Collection). Common implementations include ArrayList, LinkedList, HashSet, TreeSet, HashMap, and TreeMap.',
        questions: [
          {
            question: 'How does HashMap work internally in Java?',
            answer: 'HashMap works on the principles of hashing, Map.Entry, and bucket storage. It uses an array of Nodes. When put(key, value) is called, HashMap computes the key hash, maps it to an index in the array, and stores the Entry. If a collision occurs (two keys hashing to the same bucket index), entries are stored in a singly linked list. Since Java 8, if the bucket size exceeds 8 and total capacity is at least 64, the linked list is converted (balanced) into a Red-Black Tree (TreeMap node) to improve worst-case search complexity from O(N) to O(log N).',
            followUps: [
              'What is the default initial capacity and load factor of HashMap? (16 nodes initial capacity, 0.75 load factor before resizing/rehashing).',
              'What happens if key objects do not override hashCode() and equals()? (The Map will not find entries correctly, as it relies on equals() to find matches inside buckets during collisions).'
            ]
          },
          {
            question: 'What is the difference between ArrayList and LinkedList?',
            answer: 'ArrayList is backed by a dynamically resizing array, meaning it provides O(1) random access but inserting/deleting elements in the middle takes O(N) time due to element shifting. LinkedList is backed by a doubly linked list, meaning access by index is O(N) because we must traverse nodes, but insertion/deletion at a known iterator position is O(1) as it only updates pointers. ArrayList has lower memory overhead since LinkedList must store prev and next node pointers.',
            followUps: [
              'When would you prefer LinkedList over ArrayList? (When we have a write-heavy application with frequent insertions/deletions at the start or end, and minimal random indexing).',
              'Is ArrayList thread-safe? (No. To make it thread-safe, use Collections.synchronizedList() or CopyOnWriteArrayList for read-heavy thread access).'
            ]
          }
        ]
      },
      {
        id: 'java_exceptions',
        title: 'Exception Handling',
        explanation: 'Exception Handling in Java allows handling runtime errors without crashing the program. Java exceptions form a hierarchy under Throwable. The two main subclasses are Error (serious conditions that applications should not catch, e.g., OutOfMemoryError) and Exception. Exceptions are split into Checked Exceptions (must be declared/caught at compile time) and Unchecked/Runtime Exceptions (occur at runtime, inheriting from RuntimeException).',
        questions: [
          {
            question: 'What is the difference between Checked and Unchecked Exceptions?',
            answer: 'Checked Exceptions (e.g. IOException, SQLException) represent conditions outside the program control that are recoverable. The Java compiler forces you to handle them using try-catch or declare them using "throws" in the method signature. Unchecked Exceptions (e.g. NullPointerException, ArithmeticException) represent programming errors. They inherit from RuntimeException, and the compiler does not force you to declare or handle them, as they should be fixed by updating the code logic.',
            followUps: [
              'Can we throw checked exceptions from static blocks? (No, static blocks cannot declare throws, they must catch check exceptions internally or throw a RuntimeException).',
              'What is the purpose of try-with-resources? (Introduced in Java 7, it automatically closes resources that implement AutoCloseable, eliminating the need for verbose finally blocks).'
            ]
          }
        ]
      },
      {
        id: 'java_multithreading',
        title: 'Multithreading & Concurrency',
        explanation: 'Multithreading is the concurrent execution of two or more threads to maximize CPU utilization. In Java, threads are managed using the Thread class or Runnable interface. Advanced concurrency uses ExecutorService, Callable, Future, locks, and synchronized blocks to prevent thread interference (race conditions) and coordinate thread communication.',
        questions: [
          {
            question: 'What is the difference between synchronized block and ReentrantLock?',
            answer: 'Synchronized block is a keyword-based implicit lock mechanism built into the JVM. It automatically releases locks when execution exits the block, even under exceptions. ReentrantLock is an API-based explicit lock class from java.util.concurrent.locks. It offers advanced capabilities like lock polling (tryLock), lock interrupts, fairness policies (giving lock to longest-waiting thread), and multiple condition variables. However, it must be manually unlocked in a finally block to prevent deadlock.',
            followUps: [
              'What is a deadlock and how do you prevent it? (Deadlock occurs when thread A holds resource 1 and waits for resource 2, while thread B holds resource 2 and waits for resource 1. Prevent by acquiring locks in a strict global order or using tryLock() with timeout).',
              'Explain volatile keyword in Java. (Ensures that thread writes to a variable are immediately flushed to main memory, making modifications visible to all other threads, bypassing CPU registries/cache).'
            ]
          }
        ]
      },
      {
        id: 'java_streams',
        title: 'Streams API',
        explanation: 'Java 8 Streams API is a functional paradigm for processing collections of objects. Streams do not store data; they act as pipelines that convey elements from sources (collections, arrays) through intermediate operations (filter, map, sorted - which return another Stream and are lazy) and terminate with terminal operations (collect, forEach, reduce - which trigger processing and close the stream).',
        questions: [
          {
            question: 'How do intermediate operations work in Java Streams?',
            answer: 'Intermediate operations (like filter, map, flatMap) are lazy. They do not perform any processing when called; instead, they construct a execution pipeline. The elements are processed only when a terminal operation (like collect, count, findFirst) is invoked. The Stream pipeline processes elements in a single pass—each element goes through the intermediate steps one-by-one, which minimizes overhead and avoids creating temporary collections.',
            followUps: [
              'What is the difference between map() and flatMap()? (map() transforms each element into another element 1:1, whereas flatMap() transforms each element into a Stream of elements and flattens them, resulting in a 1:N mapping).',
              'When should we use parallelStream()? (Use when we have massive collections and CPU-bound operations that can be split across multiple cores. Avoid if operations are blocking or modifying shared state, due to ForkJoinPool synchronization overhead).'
            ]
          }
        ]
      },
      {
        id: 'java_jvm',
        title: 'JVM Memory Architecture',
        explanation: 'The JVM (Java Virtual Machine) executes Java bytecode. Its memory architecture consists of Runtime Data Areas: Method Area (class metadata, static variables), Heap (objects and instances, managed by Garbage Collector), Stack (local variables, frame states for each thread), PC Registers (current instruction address), and Native Method Stack. Memory is partitioned into Young Generation (Eden, S0, S1) and Old Generation to optimize GC execution.',
        questions: [
          {
            question: 'Explain how Garbage Collection works in the JVM.',
            answer: 'Garbage Collection (GC) in Java is an automatic memory management process that frees Heap space by removing unreachable objects. The JVM uses generational collection based on the premise that most objects die young. Fresh objects are allocated in the Eden space. During Minor GC, survivors are moved to Survivor spaces (S0/S1) and aged. After passing an age threshold (e.g. 15), they are promoted to the Old Generation. Major GC (Full GC) cleans the Old Generation. Modern GCs like G1 and ZGC perform GC concurrently with user threads to minimize "Stop-the-World" pauses.',
            followUps: [
              'What causes a java.lang.OutOfMemoryError: Java heap space? (Occurs when the heap is full and the GC cannot free space because all existing large objects are still reachable/referenced).',
              'What is the difference between Strong, Weak, and Soft References? (Strong references are never collected; Soft references are collected only when memory is low; Weak references are collected during the next GC pass).'
            ]
          }
        ]
      },
      {
        id: 'java_jdk_jre',
        title: 'JDK vs JRE vs JVM',
        explanation: 'These represent the core tiers of Java platform runtime. JVM (Java Virtual Machine) is the abstract engine that executes bytecode. JRE (Java Runtime Environment) bundles the JVM along with Java core libraries to allow running compiled applications. JDK (Java Development Kit) is the complete toolkit containing JRE and development tools (compiler javac, debugger jdb, javadoc) to write and build Java applications.',
        questions: [
          {
            question: 'Detail the execution pipeline from .java file to machine code.',
            answer: 'First, the developer writes a `.java` file. The Java Compiler (`javac`) compiles this source code into platform-independent `.class` files containing JVM bytecode. When executing, the JVM classloader loads the bytecode. The JVM Interpreter executes bytecode instruction-by-instruction. To optimize performance, the Just-In-Time (JIT) compiler compiles frequently executed blocks (hot spots) directly into native machine code. Finally, the CPU executes the native machine code.',
            followUps: [
              'What is JIT compilation? (Just-In-Time compiler compiles bytecode to native machine code at runtime, allowing Java programs to execute near-native speeds).',
              'Is JVM platform independent? (No, the JVM itself is platform-dependent; there are separate JVM implementations for Windows, macOS, and Linux. However, the bytecode it executes is completely platform-independent).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'dbms',
    name: 'DBMS',
    topics: [
      {
        id: 'dbms_normalization',
        title: 'Normalization',
        explanation: 'Normalization is the process of structuring relational databases to reduce data redundancy and eliminate anomalies (Insertion, Deletion, Update anomalies). It involves organizing fields and tables to ensure dependencies are enforced logically. Normalized forms range from 1NF to 5NF/BCNF.',
        questions: [
          {
            question: 'Explain 1NF, 2NF, 3NF, and BCNF with conditions.',
            answer: '1NF (First Normal Form) requires that all columns contain atomic (indivisible) values and keys are unique. 2NF requires 1NF and that no non-key attribute is partially dependent on any candidate key (eliminates partial dependency; all non-key columns must depend on the full primary key). 3NF requires 2NF and that no non-key attribute is transitively dependent on the primary key (every non-key attribute must depend directly on the primary key, not via another non-key). BCNF (Boyce-Codd Normal Form) is a stronger version of 3NF where for every dependency X -> Y, X must be a super key.',
            followUps: [
              'What is a partial dependency? (Occurs when a non-prime attribute depends on only a part of a composite primary key).',
              'When is denormalization preferred? (In read-heavy applications like data warehousing, where joining multiple tables degrades read performance. Denormalization adds controlled redundancy to speed up select queries).'
            ]
          }
        ]
      },
      {
        id: 'dbms_acid',
        title: 'ACID Properties',
        explanation: 'ACID properties guarantee that database transactions are processed reliably. Atomicity ensures all operations of a transaction succeed, or none do (All or Nothing). Consistency guarantees the DB transitions from one valid state to another, upholding all schemas and constraints. Isolation ensures concurrent transactions do not interfere, executing as if they were sequential. Durability guarantees committed transaction changes survive crashes or power failures.',
        questions: [
          {
            question: 'What are the database isolation levels and what concurrency phenomena do they prevent?',
            answer: 'There are four standard SQL isolation levels: 1. Read Uncommitted: Lowest isolation, permits Dirty Reads (reading uncommitted changes of another transaction). 2. Read Committed: Prevents Dirty Reads but allows Non-Repeatable Reads (reading the same row twice yields different values if another transaction updates and commits). 3. Repeatable Read: Prevents Dirty and Non-Repeatable Reads but allows Phantom Reads (queries yield different sets of rows due to another transaction inserting new rows). 4. Serializable: Highest isolation, prevents all anomalies by acquiring range locks, executing transactions sequentially.',
            followUps: [
              'How does DBMS implement isolation? (Through locking protocols like Two-Phase Locking (2PL) or lock-free concurrency like Multi-Version Concurrency Control (MVCC) which creates snapshot versions of rows).',
              'What is a Write-Ahead Log (WAL)? (A mechanism where database changes are written to a persistent log file before modifying actual database pages, ensuring Durability and Crash Recovery).'
            ]
          }
        ]
      },
      {
        id: 'dbms_keys',
        title: 'Database Keys',
        explanation: 'Keys are attributes or sets of attributes used to identify rows in a table, establish relationships, and enforce constraints. Key types include Super Key, Candidate Key, Primary Key, Foreign Key, Alternate Key, and Composite Key.',
        questions: [
          {
            question: 'Differentiate between Super Key, Candidate Key, and Primary Key.',
            answer: 'A Super Key is any set of one or more columns that can uniquely identify a row in a table. A Candidate Key is a minimal super key—a super key from which no attribute can be removed without losing the uniqueness property. A table can have multiple candidate keys. The Primary Key is the specific candidate key selected by the database architect to uniquely identify rows, and it cannot contain NULL values.',
            followUps: [
              'What is a Foreign Key? (An attribute in a table that references the primary key of another table, enforcing referential integrity).',
              'What is a Composite Key? (A primary key consisting of two or more columns, used when no single column can uniquely identify a record).'
            ]
          }
        ]
      },
      {
        id: 'dbms_indexes',
        title: 'Indexes',
        explanation: 'An Index is a performance optimization structure that speeds up retrieval of rows from a table. Instead of scanning the entire table (O(N)), the database searches the index structure (typically a B+ Tree, which is logarithmic O(log N)) to locate the record pointers.',
        questions: [
          {
            question: 'Compare Clustered and Non-Clustered Indexes.',
            answer: 'A Clustered Index determines the physical storage order of the actual rows in the table. Because physical data can only be sorted in one way, a table can have only ONE clustered index (typically on the Primary Key). The leaf nodes of a clustered index contain the actual data rows. A Non-Clustered Index is a separate structure from the table rows. It holds key values and pointers to the physical rows (the clustered index key). A table can have multiple non-clustered indexes.',
            followUps: [
              'Why are B+ Trees preferred over Binary Search Trees or Hash Tables for indexing? (Hash tables do not support range queries. B+ Trees have massive branching factors (high fan-out), minimizing disk I/O reads. Also, leaf nodes are linked, allowing sequential traversal).',
              'What is a Covering Index? (A non-clustered index that contains all the columns requested in the SELECT query, allowing the engine to return results directly from the index without reading the actual table).'
            ]
          }
        ]
      },
      {
        id: 'dbms_transactions',
        title: 'Transactions & Concurrency Control',
        explanation: 'Transactions are sequences of database operations executed as a single logical unit. Concurrency control manages simultaneous transaction execution to prevent conflicts, using locks (shared/exclusive), protocols (2PL), or timestamps.',
        questions: [
          {
            question: 'Explain the Two-Phase Locking (2PL) protocol.',
            answer: 'Two-Phase Locking is a concurrency control protocol that guarantees serializability. It divides transaction execution into two phases: 1. Growing Phase: The transaction can acquire locks but cannot release any lock. 2. Shrinking Phase: The transaction can release locks but cannot acquire new ones. In Strict 2PL, all exclusive locks held by a transaction are retained until the transaction commits or aborts, which prevents cascading rollbacks.',
            followUps: [
              'What is the difference between Shared (S) and Exclusive (X) locks? (Shared locks are acquired for read operations and are compatible with other shared locks. Exclusive locks are acquired for write operations and block all other lock types).',
              'How is a deadlock detected in DBMS? (Through Wait-For Graphs (WFG), where cycles represent deadlock loops, prompting the database engine to abort one of the transactions).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    topics: [
      {
        id: 'sql_joins',
        title: 'Joins',
        explanation: 'Joins are clauses used to combine records from two or more tables based on a related column. Joins include Inner Join, Left (Outer) Join, Right (Outer) Join, Full (Outer) Join, and Self Join.',
        questions: [
          {
            question: 'Explain the difference between Inner, Left, Right, Full, and Self Joins.',
            answer: '1. INNER JOIN returns rows that have matching values in both tables. 2. LEFT JOIN returns all rows from the left table and matching rows from the right table; non-matching right columns are filled with NULLs. 3. RIGHT JOIN returns all rows from the right table and matching rows from the left. 4. FULL JOIN returns rows when there is a match in either table, filling non-matching fields with NULLs. 5. SELF JOIN is a regular join where a table is joined with itself (requires table aliases), useful for hierarchical relationships like Manager-Employee queries.',
            followUps: [
              'What is a Cross Join? (Returns the Cartesian product of the two tables—every row in the first table matched with every row in the second).',
              'How does database engine optimize joins? (Using algorithms like Nested Loop Join for small tables, Hash Join for unsorted large tables, and Merge Join for pre-sorted tables).'
            ]
          }
        ]
      },
      {
        id: 'sql_group_by',
        title: 'Group By & Aggregations',
        explanation: 'The GROUP BY statement groups rows that have the same values into summary rows (like finding the count of customers in each country). It is used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to produce reports.',
        questions: [
          {
            question: 'What is the execution order of an SQL query?',
            answer: 'The logical execution sequence of an SQL query is: 1. FROM (select tables/joins), 2. WHERE (filter rows), 3. GROUP BY (group records), 4. HAVING (filter groups), 5. SELECT (extract columns & run aggregations), 6. DISTINCT (remove duplicate rows), 7. ORDER BY (sort output), 8. LIMIT / OFFSET (restrict rows returned). Note that SELECT runs AFTER HAVING, which is why you cannot use SELECT aliases in the HAVING clause.',
            followUps: [
              'What is the difference between WHERE and HAVING? (WHERE filters individual rows before grouping, and cannot contain aggregate functions. HAVING filters grouped rows after GROUP BY, and can evaluate aggregates).',
              'Can we use GROUP BY without aggregate functions? (Yes, it groups rows and behaves similarly to DISTINCT, but DISTINCT is preferred for removing duplicates without summary intents).'
            ]
          }
        ]
      },
      {
        id: 'sql_subqueries',
        title: 'Subqueries & CTEs',
        explanation: 'A Subquery is a query nested inside another query (SELECT, INSERT, UPDATE, or DELETE). CTEs (Common Table Expressions) are temporary result sets defined using the WITH clause, improving query readability and supporting recursive operations.',
        questions: [
          {
            question: 'What is a Correlated Subquery and how does it differ from a Nested Subquery?',
            answer: 'A Nested Subquery is independent of the outer query. It runs once, returns a result set, and the outer query executes using that result. A Correlated Subquery depends on values from the outer query. The database engine must execute the subquery repeatedly—once for every row evaluated by the outer query—which can be performance-heavy. Correlated subqueries are often used with EXISTS or NOT EXISTS clauses.',
            followUps: [
              'What is a CTE (Common Table Expression)? (A temporary named result set defined with the "WITH" clause, making queries cleaner compared to nested subqueries).',
              'What is a Recursive CTE? (A CTE that references its own output, commonly used to traverse hierarchical data structures like organizational charts or bill-of-materials trees).'
            ]
          }
        ]
      },
      {
        id: 'sql_window_functions',
        title: 'Window Functions',
        explanation: 'Window functions perform calculations across a set of table rows that are related to the current row, without grouping rows into a single summary row. They use the OVER() clause, along with PARTITION BY and ORDER BY, to compute rankings, running sums, or fetch adjacent values.',
        questions: [
          {
            question: 'Explain ROW_NUMBER(), RANK(), and DENSE_RANK() with examples.',
            answer: 'These window functions assign sequential numbers to rows within a partition. 1. ROW_NUMBER() assigns a unique, continuous integer to each row regardless of duplicates (e.g. 1, 2, 3, 4). 2. RANK() assigns the same rank to identical values, but skips subsequent numbers to account for duplicates (e.g. 1, 2, 2, 4 - skips rank 3). 3. DENSE_RANK() assigns identical ranks to duplicate values but maintains a continuous sequence (e.g. 1, 2, 2, 3 - does not skip ranks).',
            followUps: [
              'What are LEAD() and LAG() functions? (LAG fetches value from a previous row at a specified offset, and LEAD fetches value from a subsequent row, highly useful for calculating period-over-period differences).',
              'How does PARTITION BY differ from GROUP BY? (GROUP BY collapses rows into a single summary row, whereas PARTITION BY divides rows into window partitions for calculation while keeping the detail rows intact).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems',
    topics: [
      {
        id: 'os_processes',
        title: 'Processes & Threads',
        explanation: 'A Process is a program in execution, containing its own memory space (code, data, heap, stack). A Thread is the smallest unit of CPU execution inside a process, sharing the parent process\'s code, data, and heap resources, but maintaining its own registers and stack. Processes are isolated; threads share memory.',
        questions: [
          {
            question: 'What is Context Switching and why is thread context switching faster than process context switching?',
            answer: 'Context Switching is the process of storing the state (context) of a running process or thread so that CPU execution can be paused and resumed later. Process context switching is slower because it requires switching virtual memory address spaces (updating page table directories, flushing Translation Lookaside Buffers (TLB)). Thread context switching is faster because threads of the same process share the same virtual memory space; only registers, PC, and stack pointers need to be swapped.',
            followUps: [
              'What is a Thread Control Block (TCB) vs Process Control Block (PCB)? (PCB stores process ID, page tables, open files; TCB stores thread ID, thread state, CPU registers, and stack pointers).',
              'Explain the difference between user-level threads and kernel-level threads. (User-level threads are managed by user library without kernel awareness, very fast but if one blocks, the entire process blocks. Kernel-level threads are managed directly by the OS, scheduling threads independently).'
            ]
          }
        ]
      },
      {
        id: 'os_deadlocks',
        title: 'Deadlocks',
        explanation: 'A Deadlock is a state where a set of processes are blocked because each holds a resource and waits for another resource held by another process in the set. Deadlocks are analyzed using Resource Allocation Graphs.',
        questions: [
          {
            question: 'What are the four Coffman conditions required for a deadlock to occur?',
            answer: 'A deadlock can occur if and only if all four conditions hold simultaneously: 1. Mutual Exclusion: At least one resource must be held in a non-shareable mode (only one process can use it at a time). 2. Hold and Wait: A process must hold at least one resource and wait to acquire additional resources held by other processes. 3. No Preemption: Resources cannot be forcibly taken from a process; they can only be released voluntarily. 4. Circular Wait: A closed loop of processes must exist, where each process waits for a resource held by the next process in the loop.',
            followUps: [
              'What is the Banker\'s Algorithm? (A deadlock avoidance algorithm that checks if allocating a resource will keep the system in a "safe state" by simulating allocations and verifying a sequence exists where all processes can finish).',
              'How do modern OS handle deadlocks? (Mostly by ignoring it, known as the "Ostrich algorithm", assuming deadlocks are rare, as active avoidance/detection carries massive runtime overhead).'
            ]
          }
        ]
      },
      {
        id: 'os_scheduling',
        title: 'CPU Scheduling',
        explanation: 'CPU Scheduling determines which process in the ready queue receives the CPU. Schedulers can be Preemptive (can interrupt running processes, e.g. Round Robin, Shortest Remaining Time First) or Non-Preemptive (runs till completion/block, e.g. First Come First Served, Shortest Job First).',
        questions: [
          {
            question: 'Explain Round Robin Scheduling and the impact of time quantum selection.',
            answer: 'Round Robin (RR) is a preemptive scheduling algorithm that assigns each process a fixed execution slot (time quantum) in a circular ready queue. If a process does not complete within its time quantum, it is preempted and put at the back of the queue. If the time quantum is extremely large, RR behaves like First Come First Served (FCFS). If the time quantum is extremely small, RR creates massive context-switching overhead, degrading CPU throughput.',
            followUps: [
              'What is Starvation in scheduling and how is it resolved? (Starvation occurs when low-priority processes wait indefinitely because high-priority processes keep arriving. Resolved using "Aging", which increases process priority over time).',
              'Difference between Turnaround Time and Response Time? (Turnaround Time is the total time from process submission to completion. Response Time is the time from submission to the first CPU response/execution slot).'
            ]
          }
        ]
      },
      {
        id: 'os_paging',
        title: 'Paging & Virtual Memory',
        explanation: 'Virtual Memory is a memory management technique that allows executing processes requiring more memory than the physical RAM. It maps virtual addresses to physical addresses. Paging is the implementation where memory is split into fixed-size blocks: Virtual Memory is split into Pages, and Physical Memory is split into Frames.',
        questions: [
          {
            question: 'What is a Page Fault and how does the OS handle it?',
            answer: 'A Page Fault occurs when a process attempts to access a virtual address mapped to a page that is not currently loaded in the physical RAM (valid bit is set to 0 in Page Table). The hardware triggers a trap to the OS. The OS handles it by: 1. Locating the page on disk (swap space), 2. Finding a free frame in RAM (running page replacement if no free frame exists), 3. Copying the page from disk to the frame, 4. Updating the Page Table (valid bit to 1), 5. Restarting the instruction that caused the fault.',
            followUps: [
              'What is Thrashing? (A state where the OS spends more time swapping pages in and out of disk than executing instructions, caused when active processes do not have enough physical frames to hold their working sets).',
              'Explain the LRU (Least Recently Used) Page Replacement policy. (Replaces the page that has not been referenced for the longest period of time, exploiting temporal locality).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    topics: [
      {
        id: 'cn_osi',
        title: 'OSI Model vs TCP/IP',
        explanation: 'The OSI (Open Systems Interconnection) is a conceptual 7-layer model standardizing network communication. The TCP/IP model is a practical 4-layer model used in the modern Internet. They map structural responsibilities from physical transmission to application payload formatting.',
        questions: [
          {
            question: 'List the 7 layers of the OSI model and their primary responsibilities.',
            answer: '1. Physical: Bit transmission over cables/wireless. 2. Data Link: Node-to-node framing, MAC addressing, error checking. 3. Network: End-to-end packet routing, IP addressing. 4. Transport: Process-to-process segmentation, flow control, error recovery (TCP/UDP). 5. Session: Establish and manage connections. 6. Presentation: Data encryption, compression, formatting (e.g. JSON, SSL/TLS). 7. Application: User-network software interface (HTTP, FTP, DNS).',
            followUps: [
              'At which layers do Routers and Switches operate? (Routers operate at Layer 3 (Network) using IP addresses. Switches operate at Layer 2 (Data Link) using MAC addresses).',
              'What is encapsulation and decapsulation? (Encapsulation is adding protocol headers at each descending layer on sending node. Decapsulation is stripping headers at ascending layers on receiving node).'
            ]
          }
        ]
      },
      {
        id: 'cn_tcp_ip',
        title: 'TCP vs UDP',
        explanation: 'TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the main protocols at the Transport Layer. TCP is connection-oriented, reliable, and byte-stream-based. UDP is connectionless, lightweight, and datagram-based, prioritizing speed over reliability.',
        questions: [
          {
            question: 'Detail the TCP 3-Way Handshake and 4-Way Connection Teardown.',
            answer: 'The TCP 3-way handshake establishes a connection: 1. Client sends SYN (Synchronize) packet with initial sequence number X. 2. Server responds with SYN-ACK, acknowledging with X+1 and sending sequence Y. 3. Client responds with ACK packet containing Y+1. The 4-way teardown terminates connection: 1. Active party sends FIN. 2. Passive party responds with ACK and enters CLOSE_WAIT. 3. Passive party completes processing and sends FIN. 4. Active party responds with ACK and enters TIME_WAIT (waiting 2MSL to clear stale packets) before closing.',
            followUps: [
              'How does TCP perform flow control and congestion control? (Flow control uses a "Sliding Window" based on receiver buffer size. Congestion control uses algorithms like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery).',
              'Why would you use UDP over TCP? (For real-time streaming, online gaming, DNS lookup, or VoIP where packet drop is acceptable but latency delays from handshakes and retransmissions are not).'
            ]
          }
        ]
      },
      {
        id: 'cn_dns',
        title: 'DNS (Domain Name System)',
        explanation: 'DNS is the directory service of the Internet, translating human-readable domain names (e.g., google.com) into machine-routable IP addresses (e.g., 142.250.190.46). It operates on a hierarchical server tree.',
        questions: [
          {
            question: 'Explain Recursive vs Iterative DNS Queries.',
            answer: 'In a Recursive Query, the client (your machine) asks the local DNS resolver to fetch the IP address. The local resolver is responsible for finding the answer and returning it, doing all the work behind the scenes. In an Iterative Query, the resolver contacts servers step-by-step. It asks the Root server, which says "I don\'t know, ask the .com TLD server". The resolver then asks the TLD server, which directs it to the Authoritative server. The authoritative server returns the final IP to the resolver.',
            followUps: [
              'What is a DNS cache? (Local storage in browser, OS, and routers that saves recent domain translations to avoid querying external DNS servers).',
              'What are DNS record types A, AAAA, CNAME, and MX? (A maps domain to IPv4; AAAA maps to IPv6; CNAME maps a subdomain alias to canonical domain; MX records define mail exchange servers).'
            ]
          }
        ]
      },
      {
        id: 'cn_http',
        title: 'HTTP vs HTTPS',
        explanation: 'HTTP (Hypertext Transfer Protocol) is the foundation of web data exchange, sending data in plain text. HTTPS (HTTP Secure) encrypts the communication channel using SSL/TLS, preventing snooping or tampering.',
        questions: [
          {
            question: 'How does HTTPS secure a connection using SSL/TLS handshake?',
            answer: 'HTTPS encrypts data using a combination of asymmetric (public key) and symmetric encryption: 1. Client connects to server and requests secure session. 2. Server sends its SSL Certificate containing its Public Key. 3. Client validates the certificate with a trusted Certificate Authority. 4. Client generates a random Session Key (symmetric), encrypts it with the server\'s Public Key, and sends it to the server. 5. Server decrypts it using its Private Key. 6. Both parties now encrypt all traffic using this symmetric Session Key.',
            followUps: [
              'What is the difference between Symmetric and Asymmetric Encryption? (Symmetric uses the same key for encryption/decryption, very fast. Asymmetric uses a public-private key pair, slower, used only to establish the secure session).',
              'What is HTTP/2 multiplexing? (Allows sending multiple request/response messages concurrently over a single TCP connection, eliminating the head-of-line blocking issue of HTTP/1.1).'
            ]
          }
        ]
      }
    ]
  }
];
