export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface CodeExplanation {
  line: string;
  explanation: string;
}

export interface Question {
  id: string;
  title: string;
  statement: string;
  difficulty: Difficulty;
  companies: string[];
  pattern: string;
  bruteForce: {
    description: string;
    timeComplexity: string;
    spaceComplexity: string;
  };
  optimized: {
    description: string;
    timeComplexity: string;
    spaceComplexity: string;
  };
  pythonCode: string;
  cppCode: string;
  pythonExplanation: CodeExplanation[];
  cppExplanation: CodeExplanation[];
  timeComplexity: string;
  spaceComplexity: string;
  dryRun: string[];
  edgeCases: string[];
  followUps: string[];
  relatedProblems: string[];
  visualization: string; // ASCII or textual diagram explaining the logic/flow
  commonMistakes: string[];
  whenNotToUse: string;
}

export interface PatternHubTopic {
  id: string;
  name: string;
  visualExplanation: string;
  patternGuide: string;
  triggerWords: string[];
  interviewHints: string[];
  commonTraps: string[];
  complexityCheatsheet: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
}

export interface TrainerQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Assessment {
  id: string;
  title: string;
  difficulty: Difficulty;
  durationMinutes: number;
  questions: Question[];
}

export interface SubTopicQuestions {
  question: string;
  answer: string;
  followUps: string[];
}

export interface TechHubTopic {
  id: string;
  title: string; // e.g. OOP, Normalization
  explanation: string;
  questions: SubTopicQuestions[];
}

export interface TechHubCategory {
  id: string; // JAVA, DBMS, SQL, OS, CN
  name: string;
  topics: TechHubTopic[];
}

export interface HRQuestion {
  id: string;
  question: string;
  weak: string;
  average: string;
  strong: string;
  faang: string;
}

export interface VivaProject {
  id: string;
  title: string;
  questions: {
    question: string;
    answer: string;
    followUps: string[];
    redFlags: string[];
  }[];
}

export interface CheatsheetSection {
  title: string;
  content: string; // Markdown formatted text or structured table representation
}

export interface Cheatsheet {
  id: string;
  title: string;
  sections: CheatsheetSection[];
}
