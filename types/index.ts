export type SubjectId = 
  | 'maths' 
  | 'physique-chimie' 
  | 'svt' 
  | 'philosophie' 
  | 'francais' 
  | 'histoire-geo' 
  | 'anglais' 
  | 'arabe' 
  | 'ses';

export type ExamLevel = 'BAC_S' | 'BAC_L' | 'BAC_ES' | 'BAC_STG' | 'BEF_3EME';

export interface Subject {
  id: SubjectId;
  name: string;
  code: string;
  coefficient: number;
  icon: string;
  color: string;
  totalChapters: number;
  masteryPercentage: number;
}

export interface CompetenceItem {
  id: string;
  title: string;
  subjectId: SubjectId;
  status: 'MAITRISE' | 'EN_COURS' | 'A_REVOIR';
  score: number; // 0 to 100
  questionsCount: number;
  lastPracticed?: string;
}

export interface ExamPaper {
  id: string;
  title: string;
  code: string; // e.g. "DJ-BAC-2024-MATH-S1"
  subjectId: SubjectId;
  level: ExamLevel;
  year: number;
  session: 'Normale' | 'Rattrapage';
  durationMinutes: number;
  coefficient: number;
  pagesCount: number;
  difficulty: 'Standard' | 'Approfondi' | 'Excellence';
  instructions: string[];
  sections: {
    title: string;
    points: number;
    description: string;
    questions: {
      id: string;
      number: string;
      text: string;
      points: number;
      hints?: string[];
      modelAnswer?: string;
    }[];
  }[];
}

export interface StudentProfile {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  level: ExamLevel;
  schoolName: string;
  targetMention: 'Passable' | 'Assez Bien' | 'Bien' | 'Très Bien' | 'Félicitations';
  readinessScore: number; // 0 - 100
  streakDays: number;
  completedExamsCount: number;
  hoursStudied: number;
  weakSubjects: SubjectId[];
  strongSubjects: SubjectId[];
}

export interface ClassStudent {
  id: string;
  fullName: string;
  matricule: string;
  level: ExamLevel;
  averageScore: number; // /20
  readinessScore: number; // %
  lastActivity: string;
  status: 'Excellence' | 'Régulier' | 'Besoin de soutien' | 'En difficulté';
  strongSubjects: string[];
  weakAreas: string[];
  submittedCopiesCount: number;
}

export interface Flashcard {
  id: string;
  subjectId: SubjectId;
  chapter: string;
  title: string;
  formulaOrConcept: string;
  explanation: string;
  tips: string;
  isMastered?: boolean;
}

export interface SocraticStep {
  stepNumber: number;
  title: string;
  hintLevel1: string; // Subtle guiding question
  hintLevel2: string; // Methodological clarification
  hintLevel3: string; // Step breakdown without giving direct final answer
}
