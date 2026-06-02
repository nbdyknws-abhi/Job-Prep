import type { HRQuestion } from '../types';

export const hrQuestions: HRQuestion[] = [
  {
    id: 'hr_1',
    question: 'Tell me about yourself.',
    weak: 'My name is John. I am a B.Tech CSE student. I like coding, playing video games, and hanging out with friends. I want a job so I can start my career.',
    average: 'I am a computer science student from ABC College. I have a 7.8 CGPA. I have done projects in Java and React. I am looking forward to working in a reputed company like Infosys.',
    strong: 'I am a final-year B.Tech CSE student specializing in software engineering. Over the past four years, I have built a strong foundation in DSA, Java, and web development. I developed an Anime Recommendation System that handles user preferences using cosine similarity, which received a 90% positive feedback rate from peers. I also led our college coding club where I mentored 50+ juniors. I am passionate about writing clean, scalable code and solving real-world problems.',
    faang: 'I am a software engineer at heart, driven by the challenge of translating complex problems into elegant systems. As a B.Tech CSE candidate, I focused on deep pattern recognition in DSA and modern application architecture. I designed and deployed a microservices-based Anime Recommendation engine, implementing a collaborative filtering system that reduced query response times by 35% through Redis caching. Outside of academics, I lead competitive coding initiatives, ranking in the top 5% on LeetCode. I thrive in collaborative environments where I can leverage technology to scale solutions, which aligns perfectly with Infosys’s global scale.'
  },
  {
    id: 'hr_2',
    question: 'Why do you want to join Infosys?',
    weak: 'Infosys is a big company with a nice office and good salary. It is a good place to start my career.',
    average: 'Infosys is a leading IT multinational. It offers great training through the Global Education Center in Mysore, which is famous. I want to join to improve my technical skills.',
    strong: 'I want to join Infosys because of its legendary focus on continuous learning, best exemplified by the Mysore Training Academy and the Lex platform. Infosys handles complex digital transformation projects for Fortune 500 companies, which offers an unparalleled scale of exposure for a fresh graduate. I am excited to contribute to your cloud services division and grow alongside industry leaders.',
    faang: 'I see Infosys as a global scale accelerator. Your work in generative AI integration and cloud infrastructure transitions represents the cutting edge of enterprise software. What draws me most is the structured training ecosystem, which guarantees that engineering talent is aligned with future tech stacks. I want to build systems that impact millions of users globally, and Infosys provides the massive scale, enterprise infrastructure, and research support to make that happen.'
  },
  {
    id: 'hr_3',
    question: 'Where do you see yourself in 5 years?',
    weak: 'I see myself as a manager or team lead, earning a very high salary and sitting in a big cabin.',
    average: 'In five years, I hope to become a senior developer in Infosys, leading a team of developers and working on foreign client projects.',
    strong: 'In five years, I aim to transition into a Tech Lead or Technical Architect role. I plan to spend the first two years mastering my domain (like Full Stack Java or Cloud Architecture) and obtaining relevant certifications. By year three, I want to lead module development, and by year five, take ownership of end-to-end system design and mentor junior developers.',
    faang: 'In five years, I visualize myself as a Principal Engineer or System Architect. I want to be the go-to technical authority for a core product line or platform service at Infosys. My path involves mastering deep system design, driving open-source contributions, and engineering high-throughput, low-latency architectures. I also see myself actively mentoring the next generation of engineers to foster a culture of technical excellence.'
  },
  {
    id: 'hr_4',
    question: 'What is your greatest strength?',
    weak: 'I am very hardworking, honest, and I never give up on any task given to me.',
    average: 'My greatest strength is my problem-solving ability. I am very good at Java coding and I can adapt to any programming language quickly.',
    strong: 'My greatest strength is my structured approach to problem-solving and rapid learning. During my React project, we needed to implement real-time notifications. I had never used WebSockets before, but I researched the documentation, built a small proof of concept within 48 hours, and successfully integrated it, which reduced notification delay from 5 seconds to sub-second levels.',
    faang: 'My key strength is systemic adaptability—the ability to decompose complex, unfamiliar domains into structured learning pathways. When building our Spring Boot microservices app, I ran into critical thread-synchronization latency issues. Rather than relying on trial-and-error, I profiled JVM thread dumps, diagnosed monitor lock contention, and refactored the resource management using lock-free concurrent queues. I apply this analytical, root-cause-driven mindset to every technical challenge.'
  },
  {
    id: 'hr_5',
    question: 'What is your greatest weakness?',
    weak: 'I work too hard and I am a perfectionist, which sometimes makes me skip meals or sleep.',
    average: 'I find it hard to say no to people when they ask for help, which sometimes increases my workload and causes me to submit my own assignments late.',
    strong: 'My greatest weakness is that I sometimes get too detail-oriented and spend extra time perfecting secondary features. In my MERN application, I spent three days optimizing an admin dashboard analytics graph that was rarely used. To overcome this, I now practice strict prioritization, creating a MoSCoW (Must, Should, Could, Won\'t) matrix for features before starting any project.',
    faang: 'My developmental area is cognitive load over-engineering. Early on, when designing API schemas, I would attempt to build generic, highly abstract interfaces designed to handle hypothetical future requirements, which added unnecessary complexity. I have corrected this by adopting the YAGNI (You Aren\'t Gonna Need It) principle—focusing on clean, extensible code that solves the current problem, while exposing well-defined boundaries for future scaling.'
  },
  {
    id: 'hr_6',
    question: 'Describe a time you faced a conflict in a team and how you resolved it.',
    weak: 'I fought with my team member because he was not writing code. I complained to the teacher and he was removed.',
    average: 'In our final year project, one member wanted to use Node.js and another wanted to use Python. We had an argument. Eventually, we voted and chose Node.js because the majority agreed.',
    strong: 'In our web development project, a teammate wanted to use MongoDB while I wanted PostgreSQL because of strict schema relationships. Instead of arguing, I scheduled a technical review meeting. I created a comparison matrix based on data consistency, relational queries, and team familiarity. We agreed PostgreSQL was better suited for our transactions table, and we used MongoDB for storing unstructured user logs. This compromise pleased everyone.',
    faang: 'Conflict resolution for me is about moving from emotional stances to data-driven architectural tradeoffs. In our Spring Boot project, there was a disagreement regarding synchronous REST vs. asynchronous message queues for order processing. I facilitated a design spike where we prototyped both approaches. I presented latency profiles showing a 40% reduction in client wait-time when decoupling processes with RabbitMQ. The team embraced the async model, and I documented the decision in an Architecture Decision Record (ADR).'
  },
  {
    id: 'hr_7',
    question: 'Why should we hire you over other candidates?',
    weak: 'I am better than others, and I have worked very hard in my college. I will work for long hours.',
    average: 'I have a good academic record, I know Java, DBMS, and DSA, and I am very loyal. I will do whatever task you assign me efficiently.',
    strong: 'You should hire me because I combine academic excellence (8.5 CGPA) with practical execution. I have already built and deployed three full-stack projects, including a React recommendation engine. Additionally, I have solved 350+ DSA problems, proving my analytical capability. I can hit the ground running with minimal hand-holding during the Infosys onboarding process.',
    faang: 'What sets me apart is my ability to bridge theoretical computer science with pragmatic engineering. I don\'t just write code; I understand system constraints, complexity tradeoffs, and architectural design patterns. My experience in leading projects and optimizing systems—such as reducing search latencies by 30%—means I can immediately add value. I am eager to apply this engineering rigor to solve complex enterprise problems for Infosys\'s clients.'
  },
  {
    id: 'hr_8',
    question: 'How do you handle stress or pressure?',
    weak: 'I drink coffee, watch anime, or sleep until the stress is gone, then I work.',
    average: 'When I am under pressure, I work long hours, sleep less, and focus completely on the task until it is completed.',
    strong: 'I handle pressure by breaking down complex, overwhelming tasks into small, manageable action items. During my exams, our project code crashed due to database corruption. I didn\'t panic. I listed the recovery steps, restored the DB from the last backup, manually ran the migration scripts, and got the system back up in 4 hours. Staying organized keeps me calm.',
    faang: 'I treat high-pressure scenarios as optimization problems. I decouple stress from execution by applying triage principles: assessing the issue, identifying critical dependencies, and communicating transparently with stakeholders about timelines. When our deployment failed 2 hours before a college demo, I established a rollback path, isolated the faulty git commit, deployed the stable branch, and then debugged the main branch in an isolated environment. Methodical action eliminates panic.'
  },
  {
    id: 'hr_9',
    question: 'Are you willing to relocate or work in shifts?',
    weak: 'I would prefer to stay in my hometown. Working night shifts is not good for my health.',
    average: 'Yes, I am ready to relocate anywhere in India and I can work in shifts as per the project requirements.',
    strong: 'Yes, I am fully open to relocation. I look forward to exploring new cities and working in a diverse team environment. Similarly, I understand that clients operate globally across different time zones, and I am completely willing to work in shifts to support our team and client deliveries.',
    faang: 'Absolutely. Relocation is an opportunity to expand my professional network and adapt to new collaborative cultures. Regarding shifts, I recognize that supporting international enterprise clients requires dynamic, round-the-clock availability. I am highly flexible and prepared to align my work schedule with project demands to ensure seamless delivery.'
  },
  {
    id: 'hr_10',
    question: 'Tell me about a time you failed and what you learned from it.',
    weak: 'I failed in my second-year chemistry test because the paper was out of syllabus, but I cleared it in the re-exam.',
    average: 'In a coding hackathon, we could not complete our app on time because the database integration took too long. I learned that we should start database work early.',
    strong: 'In my third year, I led a hackathon team to build an e-commerce prototype. I spent too much time designing a complex payment system mockup, leaving only 2 hours for the core cart functionality. As a result, we couldn\'t demo a working flow and lost. I learned the importance of focusing on a Minimum Viable Product (MVP) first, ensuring the core loop works before refining auxiliary details.',
    faang: 'Failure is a valuable source of feedback. During our Spring Boot microservices project, I designed a custom caching layer to speed up catalog queries. However, I didn\'t implement a proper cache invalidation policy, resulting in stale data being served during catalog updates. This broke the checkout flow during testing. I took full responsibility, rolled back the cache, implemented a write-through invalidation strategy, and set up regression tests. This taught me that cache consistency is as vital as read performance.'
  },
  {
    id: 'hr_11',
    question: 'What are your hobbies or interests outside of coding?',
    weak: 'I just watch TV or browse social media when I am free. I do not have active hobbies.',
    average: 'My hobbies are reading books, listening to music, and playing mobile games in my free time.',
    strong: 'Outside of coding, I am an avid Chess player and run a local chess group. Playing chess helps me improve my foresight and strategic thinking, which I find transfers well to programming. I also enjoy running, which keeps me physically active and helps clear my mind after long coding sessions.',
    faang: 'Outside of professional engineering, I train in long-distance cycling and play competitive strategy games. Cycling develops my endurance and self-discipline, while strategy games hone my decision-making under incomplete information. Both activities provide a cognitive reset that keeps my problem-solving faculties sharp for core engineering tasks.'
  },
  {
    id: 'hr_12',
    question: 'What is your favorite programming language and why?',
    weak: 'I like Python because it has no semicolons and is very short to write.',
    average: 'My favorite language is Java because it is object-oriented, very secure, and widely used in my college courses.',
    strong: 'My favorite programming language is Java. I appreciate its strong static typing, which catches errors compile-time rather than runtime. Its object-oriented features make designing scalable systems logical and clean. Java\'s robust Collections framework also makes implementing algorithms efficient.',
    faang: 'I favor TypeScript. It combines the rapid developer velocity and rich ecosystem of JavaScript with the type safety, compile-time error checks, and interface definitions of standard static languages. This makes it highly effective for building modular, maintainable client-side applications and microservices while keeping runtime bugs to a minimum.'
  },
  {
    id: 'hr_13',
    question: 'Tell me about a time you went above and beyond for a project.',
    weak: 'I worked past 10 PM once to complete a PPT because my teammate fell sick, and I submitted it on time.',
    average: 'In my database project, I created 5 extra tables to make the reporting features more comprehensive than what was asked in the assignment guidelines.',
    strong: 'During our college department website project, the developer responsible for the admin dashboard dropped out. I volunteered to take over his module on top of my database design work. I spent 40+ hours over the weekend learning TailwindCSS and charting libraries to build a complete dashboard, delivering the project 2 days ahead of schedule.',
    faang: 'In my Spring Boot microservice project, I noticed our API latency was spiking at 2.4s. Though my core task was only implementing the logic, I initiated a profiling spike. I identified N+1 database query issues in JPA, refactored them to use join fetches, and added a Redis cache for static lookups. This reduced peak latency by 85% to 350ms, greatly improving the overall system performance.'
  },
  {
    id: 'hr_14',
    question: 'How do you handle feedback or constructive criticism?',
    weak: 'I get upset because I work very hard, but I try to change it if they force me.',
    average: 'I listen to it carefully and I modify my work to match what they want so that there are no complaints.',
    strong: 'I treat feedback as a learning opportunity. In my first React project, my mentor pointed out that my components were monolithic and had hardcoded API urls. I didn\'t take it personally. I refactored the project, extracting reusable components and configuring environment variables, which made the app clean and configurable.',
    faang: 'I view criticism as a system feedback loop. During code reviews, if my logic is flagged for complexity, I separate my ego from the code and analyze the reviewer\'s architectural concerns. I discuss the trade-offs, document the resolutions, and update my mental models to prevent the same class of architectural anti-pattern from recurring.'
  },
  {
    id: 'hr_15',
    question: 'Do you prefer working alone or in a team?',
    weak: 'I prefer working alone because team members are lazy and I end up doing all the work anyway.',
    average: 'I like working in a team because the work gets divided, and we can complete projects faster and have fun.',
    strong: 'I enjoy both. Working alone allows me to focus deeply and solve core algorithmic tasks. However, I prefer working in a team for major projects because brainstorming with others introduces new technical perspectives, leading to better architected solutions.',
    faang: 'I thrive in team environments. Software development is a team sport. While I can execute individual engineering tasks independently with high focus, collaborating in a team allows for peer code reviews, systemic design feedback, and leveraging specialized skill sets, which results in higher-quality system design.'
  },
  {
    id: 'hr_16',
    question: 'Tell me about a time you had to learn a new technology quickly.',
    weak: 'I had to learn HTML in 2 days for an assignment. I copy-pasted templates online and it worked.',
    average: 'I had to use PostgreSQL instead of MySQL for a project. I watched a 5-hour video tutorial on YouTube and learned the syntax in 3 days.',
    strong: 'In our hackathon, we decided to build a mobile app, but none of us knew Flutter. I volunteered to learn it. I read the documentation, built basic layouts, and within 3 days, successfully coded the UI frontend and API integration, allowing our team to win 2nd place.',
    faang: 'For our MERN app, we decided to switch from REST to GraphQL for dynamic data querying. I had never used GraphQL. I spent 48 hours reading official specs, building a small Apollo server spike, understanding resolver logic, and tracing schema types. I then successfully migrated our profile microservice, reducing payload sizes by 40%.'
  },
  {
    id: 'hr_17',
    question: 'What do you know about Infosys\'s core values (C-LIFE)?',
    weak: 'Infosys values are good behavior, honesty, and treating clients nicely to earn money.',
    average: 'Infosys values are C-LIFE which stands for Customer Focus, Leadership, Integrity, Fairness, and Excellence.',
    strong: 'Infosys operates on the C-LIFE values. Client Focus means prioritizing client success; Leadership means leading by example; Integrity means doing the right thing even when no one is watching; Fairness is equity in action; and Excellence is continuously raising the bar. I align with Integrity most, as it is key for developer accountability.',
    faang: 'Infosys\'s C-LIFE framework is the foundation of its global delivery model. To me, Integrity and Excellence are directly tied to clean software craftsmanship—ensuring high code coverage, documenting design decisions honestly, and striving for optimal performance. Fairness and Customer Focus translate to building accessible, high-availability software that solves users\' problems.'
  },
  {
    id: 'hr_18',
    question: 'How do you handle a team member who is not performing or delivering their tasks?',
    weak: 'I complain to the manager or professor immediately so that they can replace him or cut his marks.',
    average: 'I talk to him and ask him to do his work. If he still doesn\'t do it, I write his part of the code myself to avoid delay.',
    strong: 'I schedule a one-on-one conversation to understand if he is facing blocker issues. If it is a technical struggle, I pair program with him to resolve it. If it is a personal issue, I help adjust timelines. If he remains uncooperative, I escalate to the lead with documented facts.',
    faang: 'I address underperformance through empathy, clear boundaries, and peer support. I schedule a sync to run a diagnostic on his blockages—often it is a lack of training or unclear requirements. I offer technical mentoring and pair-programming sessions. However, I also establish clear deliverables and commit logs. If performance fails to improve, I raise it with management with objective git commit history.'
  },
  {
    id: 'hr_19',
    question: 'If you are given a task you don\'t know how to solve, what will you do?',
    weak: 'I will wait for my senior to tell me how to do it, or I will ask someone else to do it for me.',
    average: 'I will search on Google, StackOverflow, or ChatGPT. I will copy a working code block and paste it into the project.',
    strong: 'I will first read the documentation to understand the fundamentals. I will break down the problem into smaller, solvable components. If I remain blocked after 3-4 hours of research, I will document my findings and approach, and consult a senior developer for guidance.',
    faang: 'I apply a structured research protocol: 1. Deconstruct the problem constraints, 2. Consult technical specs, RFCs, and API docs, 3. Create a isolated sandbox prototype. If blocked, I synthesize my current trials, logs, and potential solutions, then present this context to my team lead. This minimizes time-wasting while showing active problem-solving.'
  },
  {
    id: 'hr_20',
    question: 'What is your opinion on working overtime or on weekends?',
    weak: 'I will not work overtime because it is bad for my health and against labor laws.',
    average: 'If my boss tells me to work, I will work overnight and on weekends because I want to show that I am a hard worker.',
    strong: 'I believe in planning and time management to avoid overtime. However, I understand that critical situations like production bugs, system deployments, or urgent client updates require extra hours. In such cases, I am completely willing to work late or on weekends to support the team.',
    faang: 'Continuous overtime is a symptom of poor sprint planning. However, during system rollouts, high-priority incidents, or zero-day vulnerability hotfixes, working late or on weekends is necessary. I am fully committed to stepping up during these critical events while focusing on building system reliability to minimize their occurrence.'
  },
  {
    id: 'hr_21',
    question: 'Explain a complex technical concept (like Recursion) to a non-technical person.',
    weak: 'Recursion is a function calling itself in a programming language until a base condition matches.',
    average: 'Imagine looking into two parallel mirrors. You will see infinite reflections of yourself inside each other. That is recursion.',
    strong: 'Imagine you have a Russian nesting doll. Inside the big doll, there is a smaller doll, and inside that, an even smaller doll. You keep opening dolls (recursive steps) until you reach the smallest, solid doll (base case) which cannot be opened. You then close them back up to finish.',
    faang: 'Imagine you want to count the number of rows in a massive cinema hall, but you can only see the person in front of you. You ask them, "Which row are you in?" They don\'t know, so they ask the person in front of them. This question propagates to the very first row (base case), who says, "I am in row 1". That answer flows back, each adding 1, until it reaches you.'
  },
  {
    id: 'hr_22',
    question: 'What motivates you to work in this industry?',
    weak: 'The high salaries, foreign travel opportunities, and sitting in air-conditioned offices.',
    average: 'I am motivated by building apps and seeing people use them. Tech changes fast and I want to stay updated.',
    strong: 'My motivation is the impact of software. Writing code that can be deployed to cloud servers and immediately used by thousands of users to make their lives easier is incredibly rewarding. I love the loop of finding bugs, optimizing logic, and deploying working systems.',
    faang: 'I am motivated by the leverage of software engineering—the fact that a single line of code can optimize a transaction for millions of users. The challenges of system design, performance profiling, and building fault-tolerant services motivate me to continuously learn and push technical limits.'
  },
  {
    id: 'hr_23',
    question: 'How do you manage your time when dealing with multiple deadlines?',
    weak: 'I just work on whatever is closest to the deadline, even if it means working without sleep.',
    average: 'I write a list of tasks in a notebook and work on them one by one. If I run out of time, I ask for extensions.',
    strong: 'I prioritize tasks using the Eisenhower Matrix, dividing them into urgent and important categories. I break down large deliverables into micro-tasks, set individual daily goals, and use focus blocks (like Pomodoro) to minimize distractions, updating my manager on progress regularly.',
    faang: 'I apply agile backlog prioritization. I estimate task complexities, identify critical path items and blockages, and schedule them based on resource dependencies. I protect my high-focus blocks for core programming and delegate/align meetings during low-energy hours, updating tracking tools (like Jira) to ensure transparency.'
  },
  {
    id: 'hr_24',
    question: 'Tell me about a difficult decision you had to make during a project.',
    weak: 'I decided to drop a teammate who was not responding to messages, because we were going to lose marks.',
    average: 'We had to choose between React and Angular for our project. We chose React because it was easier to learn in a short time.',
    strong: 'In our final year project, we realized 2 weeks before submission that our database query delays were too high due to bad schema design. The decision was to either patch it with cache or redesign the DB. I decided to redesign the database schema. It was risky and meant working 14-hour days, but it resolved the issue permanently, reducing query latency by 80%.',
    faang: 'During our Spring Boot project, we faced a major architectural choice: rebuild our auth module using standard OAuth2 or patch our custom session tracker. Redesigning was clean but risked the release date. I did a risk-benefit analysis, chose the redesign, but scoped a fallback mock auth. The refactoring succeeded, making the API secure, modular, and ready for scaling.'
  },
  {
    id: 'hr_25',
    question: 'What will you do if your ideas or designs are rejected by your team or manager?',
    weak: 'I will stop sharing ideas and just do what they tell me to do, since they don\'t value my input.',
    average: 'I will feel bad, but I will accept their decision and work on the alternative design they suggest.',
    strong: 'I will ask for feedback to understand why the design was rejected. If there are valid technical flaws, I will learn from them. If it was a misunderstanding, I will try to explain it using diagrams. If the team still decides otherwise, I will fully support the chosen direction.',
    faang: 'I follow the "disagree and commit" philosophy. If my design is rejected, I analyze the critique objectively. I seek data-driven reasons (e.g., memory overhead, deployment complexity, or compatibility). If the team decides on a different path, I document the decision and put 100% of my energy into making the selected design succeed.'
  },
  {
    id: 'hr_26',
    question: 'What are your salary expectations?',
    weak: 'I want at least 8 LPA, because my friends are getting that in other companies.',
    average: 'I expect a salary matching the market standards for a fresh engineering graduate at Infosys.',
    strong: 'My salary expectations are in line with Infosys\'s standards for this technical role (Systems Engineer or Specialist Programmer). I am more focused on the opportunity to work on large-scale projects and receive structured technical training.',
    faang: 'I expect compensation that is competitive for this role and reflects my technical capabilities, including full-stack development experience and strong DSA fundamentals. I am open to discussing a package that aligns with Infosys\'s grading structure for specialist entry-level positions.'
  },
  {
    id: 'hr_27',
    question: 'Why did you choose Computer Science engineering?',
    weak: 'My parents told me that CS has the best placements, highest salaries, and clean office jobs.',
    average: 'I chose CS because I like computers, surfing the web, and I wanted to learn how video games are made.',
    strong: 'I chose Computer Science because it gives me the power to build things out of nothing. In school, when I wrote my first C++ program that solved a math puzzle, I was hooked. The immediate feedback loop of write-compile-run is what drew me to this field, and it still excites me.',
    faang: 'I chose Computer Science because it is the ultimate combination of mathematical logic and creative engineering. It offers the unique leverage of solving complex, high-scale human problems with minimal physical resources. The ability to model abstract systems and optimize algorithms to achieve maximum efficiency is why I am passionate about CS.'
  },
  {
    id: 'hr_28',
    question: 'What is your biggest achievement so far?',
    weak: 'I passed all my college subjects without any backlogs and managed to get a 7.5 CGPA.',
    average: 'My biggest achievement was winning a coding competition in our college cultural festival and getting a certificate.',
    strong: 'My biggest achievement was developing and deploying an Anime Recommendation engine. I built the recommendation logic using python and deployed the frontend in React. It was used by 200+ students in our college, and it helped me understand the complete lifecycle of software deployment.',
    faang: 'My most significant achievement was scaling a real-time collaborative code editor during our college hackathon. I implemented Operational Transformation (OT) in WebSockets, handling sync issues for up to 15 concurrent users. Winning 1st place out of 80 teams was rewarding, but optimizing the system and preventing race conditions was the true accomplishment.'
  },
  {
    id: 'hr_29',
    question: 'How do you stay updated with the latest trends in technology?',
    weak: 'I watch tech videos on YouTube and follow tech news on Instagram.',
    average: 'I read tech articles on Medium, follow industry leaders on LinkedIn, and check updates on GitHub.',
    strong: 'I stay updated by reading technical blogs (like Engineering blogs of Netflix, Uber), checking Hacker News weekly, and building side projects with new frameworks (like Next.js or Tailwind v4) to understand how they work in practice.',
    faang: 'I follow a structured tech-absorption routine: reading engineering blogs of scale-focused companies (like Meta, Stripe), subscribing to newsletters like ByteByteGo, tracking GitHub trends, and building test spikes for new library releases to understand their underlying architecture and trade-offs.'
  },
  {
    id: 'hr_30',
    question: 'What will you do if you are not selected in this interview?',
    weak: 'I will be depressed and lose confidence. I don\'t know what I will do next.',
    average: 'I will be disappointed, but I will apply to other companies and keep trying until I get a job.',
    strong: 'If I am not selected, I will request feedback from the recruiter to understand where I fell short—whether in DSA, system design, or communication. I will work on those weak areas, solve more coding questions, and apply to Infosys again in the next cycle.',
    faang: 'I treat interview outcomes as data points. If I fail, it means my current technical or behavioral models have gaps. I will perform a post-mortem on the questions asked, identify concepts I struggled with (like specific graph algorithms or JVM internals), debug my understanding, and continue preparation for future opportunities.'
  },
  {
    id: 'hr_31',
    question: 'Tell me about a time you solved a bug that took a long time to debug.',
    weak: 'I had a red error in my React code. I searched StackOverflow and clicked on random fixes until the error went away.',
    average: 'In my Java project, I was getting a NullPointerException. I added print statements everywhere and finally found that a variable was not initialized.',
    strong: 'In my database project, we had a bug where certain orders were not showing up. It took me 2 days of tracing. I eventually realized it was a timezone mismatch issue—dates were stored in UTC but fetched in local time, filtering out recent records. I resolved it by normalizing database storage to UTC.',
    faang: 'I diagnosed a race condition in our concurrent chat app where messages occasionally arrived out of order. I simulated the packet delivery under network latency spikes, analyzed the websocket thread trace, and realized we lacked a client-side sequence-index verification. I implemented a logical clock (Lamport timestamp) to order messages on arrival.'
  },
  {
    id: 'hr_32',
    question: 'How do you handle boring, repetitive, or tedious tasks?',
    weak: 'I try to delay them, or do them quickly while listening to music to get them over with.',
    average: 'I accept them as part of my job, sit down, and do them patiently until they are completed.',
    strong: 'I try to automate repetitive tasks. For example, during a project, we had to format 100 CSV data rows. Instead of doing it manually, I wrote a Python script using pandas that parsed and formatted the file in seconds. Automation saves time and prevents errors.',
    faang: 'I treat repetitive tasks as candidates for scripting. In our testing phase, manually setting up user states in the database took 20 minutes daily. I wrote a bash script using Docker-compose and SQL seed files to automate the state setup, reducing a tedious 20-minute chore to a single-second command.'
  },
  {
    id: 'hr_33',
    question: 'What qualities make a good team leader?',
    weak: 'A leader should be strict, give orders to everyone, and ensure no one wastes time.',
    average: 'A good leader is friendly, divides the work equally, helps team members, and submits the project on time.',
    strong: 'A great leader leads by example and is an active listener. They recognize individual strengths and assign modules accordingly. They encourage open discussions, protect the team from external pressure, and take responsibility when things go wrong.',
    faang: 'An effective engineering leader excels in setting architectural vision, clearing blockers, and fostering psychological safety. They delegate ownership, not just tasks, allowing team members to grow. They facilitate consensus during disagreements and maintain accountability through objective, data-driven feedback.'
  },
  {
    id: 'hr_34',
    question: 'How do you handle unethical behavior if you notice it in your team?',
    weak: 'I will ignore it because I don\'t want to create enemies or get involved in office politics.',
    average: 'I will talk to the team member privately and ask them to stop, otherwise I will complain to our manager.',
    strong: 'Unethical behavior is unacceptable. If I notice a teammate plagiarizing code or sharing confidential project data, I will speak to them first to check if it was accidental. If it is intentional, I will immediately report it to the project coordinator or HR as per company guidelines.',
    faang: 'I maintain a zero-tolerance policy for ethical violations. Code plagiarism or data leaks damage team integrity and company credibility. If I observe such actions, I will document the evidence and escalate it via the official whistleblowing or management channels immediately, prioritizing compliance and integrity.'
  },
  {
    id: 'hr_35',
    question: 'If a client changes requirements at the last minute, what will you do?',
    weak: 'I will tell the client that it is not possible to change code now as our design is already complete.',
    average: 'I will work double-shift to make the changes and make sure the client is happy, even if we have to skip testing.',
    strong: 'I will analyze the impact of the changes on the existing architecture and timelines. I will discuss the trade-offs with my team and manager. We will then present the client with options: implement it now with a delayed release, or phase it in the next update.',
    faang: 'I treat requirement changes as scope management issues. I run an impact analysis on the codebase, assessing regression risks and database schema migrations. I document the architectural changes, estimate the sprint velocity impact, and work with the product owner to adjust the release scope, prioritizing delivery stability.'
  },
  {
    id: 'hr_36',
    question: 'What is your strategy for preparing for technical coding assessments?',
    weak: 'I memorize standard solution code blocks from online blogs a night before the test.',
    average: 'I solve coding questions on LeetCode, focus on arrays and strings, and try to pass test cases.',
    strong: 'My strategy centers on pattern recognition. I categorize questions by patterns—like sliding window or backtracking. I practice writing clean code on whiteboards first to build muscle memory, and focus on dry-running code with edge cases like empty inputs or single elements.',
    faang: 'I practice structured problem deconstruction. I study core time-space complexities, classify questions into 15 fundamental DSA patterns, solve them under timed conditions, and review optimized solutions. I also study runtime constraints, ensuring I can translate recursive approaches to iterative ones.'
  },
  {
    id: 'hr_37',
    question: 'Describe a situation where you had to lead a project under tight constraints.',
    weak: 'I was made group leader in a college project. I did all the work myself to make sure we didn\'t fail.',
    average: 'In our 3rd-year database project, we had only 1 week. I distributed the work and we met daily to merge the code.',
    strong: 'For our DBMS assignment, our API developer fell ill. I stepped up as coordinator. I simplified our schema to reduce API surface area, focused on core CRUD endpoints, and pair programmed with the frontend developer. We completed the project on time with all core features working.',
    faang: 'During a 48-hour hackathon, we lost access to our primary cloud database. As team lead, I pivoted our design—we swapped PostgreSQL with a local SQLite file system wrapper for local demos, and stubbed out high-latency services. We delivered a functional dashboard, securing 3rd place under extreme constraints.'
  },
  {
    id: 'hr_38',
    question: 'What are the three most important things in a job for you?',
    weak: 'A high starting salary, global travel opportunities, and getting promotions fast.',
    average: 'A supportive manager, a good workspace, and opportunities to learn new programming languages.',
    strong: 'The three most important things for me are: 1. Continuous learning (working on complex projects), 2. A collaborative team culture (mentorship and reviews), and 3. Meaningful work that directly solves real user problems.',
    faang: 'My key criteria are: 1. Technical leverage (the ability to work on scale-challenged systems), 2. High-integrity engineering culture (peer reviews, ADRs, clean code values), and 3. Strong mentorship pathways that accelerate architectural competence.'
  },
  {
    id: 'hr_39',
    question: 'Tell me about a time you had to deal with an unhappy user or stakeholder.',
    weak: 'An admin complained that our college event portal was slow. I told him it was a server issue, not my fault.',
    average: 'A user complained that they could not upload images in our app. I looked at the code, fixed the upload size bug, and told them it is working now.',
    strong: 'During our college project demo, the professor was unhappy that the search returned no results for typo inputs. I apologized, noted the feedback, and overnight integrated a simple fuzzy matching logic using Levenshtein distance. He was highly impressed with the quick turnaround.',
    faang: 'A stakeholder complained about a 3-second lag in our analytics dashboard. I scheduled a call to understand their workflow. I profiled the page rendering, identified massive DOM re-renders in React, and optimized it using virtualized lists. Latency dropped to 150ms, resolving their frustration.'
  },
  {
    id: 'hr_40',
    question: 'What do you do when your computer or IDE crashes right before a deadline?',
    weak: 'I start crying or panic. I call my friend to see if they can send me their code.',
    average: 'I restart the computer, open the IDE, and pray that the files are saved. If not, I try to write the code again quickly.',
    strong: 'I prevent this by committing my code to GitHub regularly (at least 3-4 times a day). If my IDE crashes, I can pull the latest commit onto another machine or terminal, compile, and run the project immediately. Having a remote backup eliminates deadline anxiety.',
    faang: 'I treat local environments as ephemeral. I maintain a strict git flow, pushing commits to remote branch tracking daily. If my system suffers a hardware failure, I can spin up a cloud-based development environment (like GitHub Codespaces) or pull the repo onto another node in minutes, resuming build.'
  },
  {
    id: 'hr_41',
    question: 'How do you decide which project or technology to work on?',
    weak: 'I just pick whatever is trending on YouTube or whatever my friends are doing.',
    average: 'I choose projects that are easy to build and technologies that have plenty of copy-paste codes online.',
    strong: 'I pick projects based on the problem they solve. I choose technologies based on system requirements—for example, Node.js for I/O heavy apps, and Java for enterprise systems with rich relational schemas.',
    faang: 'I select technologies based on system trade-offs: developer velocity, runtime efficiency, memory footprints, and ecosystem maturity. I choose side projects that challenge my current architectural limits, like building databases from scratch to understand OS IO.'
  },
  {
    id: 'hr_42',
    question: 'Describe your dream project.',
    weak: 'My dream project is to build a massive multiplayer game like GTA or a global social network like Facebook.',
    average: 'My dream project is to create an e-commerce platform like Amazon with millions of items and direct payment systems.',
    strong: 'My dream project is to build a high-throughput real-time collaboration tool (like Figma). It requires deep knowledge of websockets, operational transformation algorithms to handle concurrency, and high-performance frontend rendering.',
    faang: 'My dream project is to build a distributed key-value store from scratch. It requires engineering TCP protocols, designing custom LSM-Trees for storage, implementing Raft consensus for replication, and optimizing file I/O to handle 100k+ operations per second.'
  },
  {
    id: 'hr_43',
    question: 'What is your take on the AI vs Job security debate for developers?',
    weak: 'I think AI will write all code and developers will lose their jobs in 5 years, so I am scared.',
    average: 'AI can write simple HTML/CSS but it cannot write complex backend code. Developers are safe for now.',
    strong: 'AI is a productivity multiplier, not a replacement. It excels at generating boilerplate code, but designing systems, translating business requirements, debugging complex runtime issues, and ensuring security still require human engineers.',
    faang: 'AI commoditizes syntax representation. The value of a software engineer has never been syntax—it is systemic thinking, API boundary design, trade-off analysis, and operations. Engineers who leverage AI as a coprocessor will write more reliable, better-documented code faster.'
  },
  {
    id: 'hr_44',
    question: 'How do you handle working with someone whose personality clashes with yours?',
    weak: 'I ignore them, avoid talking to them, and do my work separately to prevent fights.',
    average: 'I maintain a professional relationship. I only talk to them about work-related topics during team meetings.',
    strong: 'I focus on the common goal. I try to understand their working style—some prefer direct communication, others like detailed emails. I separate personal differences from team deliverables and maintain respect and clarity.',
    faang: 'I address personality clashes by establishing operational protocols. We define clear task boundaries, pull request expectations, and API schemas. I practice active listening to find the core engineering merit in their proposals, maintaining professional respect.'
  },
  {
    id: 'hr_45',
    question: 'Tell me about a time you had to adapt to a sudden change in project scope.',
    weak: 'Our college changed the project topic halfway. I complained to the head of department, but eventually did it.',
    average: 'Our team decided to change our website from a book store to an anime database. I rewritten all the HTML files.',
    strong: 'In our web design class, the requirements changed to add mobile support 3 days before submission. I refactored our styling layout to use CSS Grid and Flexbox with responsive breakpoints, delivering a mobile-friendly layout on time.',
    faang: 'During a hackathon, our auth provider went down. We had to pivot from OAuth to an email-token login model. I refactored the login middleware, decoupling the authentication handler. This modular architecture allowed us to swap providers in 4 hours.'
  },
  {
    id: 'hr_46',
    question: 'What is the most challenging course you took in college and why?',
    weak: 'Chemistry, because I had to memorize formulas which I didn\'t like.',
    average: 'Operating Systems, because understanding scheduling algorithms and semaphores was hard to memorize.',
    strong: 'Operating Systems was the most challenging. Concepts like page replacement, process synchronization, and deadlock prevention are highly abstract. I overcame this by writing simulators in C++ for scheduling algorithms.',
    faang: 'Distributed Systems. Reasoning about concurrency, network partitions, and eventual consistency is complex. I read the original MapReduce and Raft papers, and built a replicated log in Go, which helped bridge the theoretical complexity.'
  },
  {
    id: 'hr_47',
    question: 'How do you maintain a healthy work-life balance?',
    weak: 'I just work all day and sleep on Sundays. I do not have a balance.',
    average: 'I stop working at 6 PM, watch movies, hang out with family, and do not open my laptop on weekends.',
    strong: 'I set clear boundaries. I dedicate specific hours for deep focused coding. Outside of work, I disconnect from slack/emails, engage in hobbies like chess and running, which keeps me physically and mentally fit.',
    faang: 'I manage cognitive energy, not just hours. I schedule my high-focus engineering blocks during my peak mental hours, and use off-hours for reading and recovery. Staying active ensures I approach technical problems with a clear mind.'
  },
  {
    id: 'hr_48',
    question: 'What will you do if you find a critical bug in production right after deployment?',
    weak: 'I will delete the code, hide it, and hope that no user notices it before the next release.',
    average: 'I will try to write a quick patch and push it directly to production without testing, to fix it immediately.',
    strong: 'I will first trigger a rollback to the last stable deployment. Once the system is healthy, I will isolate the bug in a local test environment, write a regression test to replicate it, fix the bug, run unit tests, and redeploy.',
    faang: 'I follow a standard incident response: 1. Mitigate (rollback to stable tag), 2. Communicate (incident logs), 3. Root Cause Analysis (RCA in staging), 4. Deploy hotfix with test coverage, 5. Write a post-mortem to prevent future occurrences.'
  },
  {
    id: 'hr_49',
    question: 'What does success mean to you?',
    weak: 'Success is getting a high paying job, buying a luxury car, and having a big house.',
    average: 'Success means completing my tasks on time, keeping my manager happy, and getting a promotion.',
    strong: 'Success is a continuous loop of improvement. It is about tackling challenging problems, building reliable systems, and mentoring others. If the code I write makes a user\'s life easier, that is success.',
    faang: 'Success is systemic impact—architecting software that scales efficiently, reducing operations overhead, and cultivating a high-performing engineering culture where my team can build and ship reliable software rapidly.'
  },
  {
    id: 'hr_50',
    question: 'Do you have any questions for us?',
    weak: 'No, I don\'t have any questions. Thank you.',
    average: 'What is the salary structure, and will I get a chance to go onsite to the US or Europe?',
    strong: 'What technologies will the new recruits work on, and what does the onboarding and training process look like at the Mysore campus?',
    faang: 'What are the current scaling challenges your team is facing (e.g. database migrations or cloud latency)? And how does Infosys measure engineering excellence and foster architectural innovation within entry-level teams?'
  }
];
