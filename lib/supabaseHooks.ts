'use client';

import { useState, useEffect } from 'react';
import {
  Subject,
  CompetenceItem,
  ExamPaper,
  StudentProfile,
  ClassStudent,
  Flashcard,
  SocraticStep,
} from '@/types';
import {
  subjectsData as defaultSubjects,
  mockCompetences as defaultCompetences,
  mockExamsList as defaultExams,
  mockStudent as defaultStudent,
  mockClassReport as defaultClassReport,
  mockClassStudents as defaultClassStudents,
  mockFlashcards as defaultFlashcards,
  mockSocraticSteps as defaultSocraticSteps,
} from '@/data/mockData';
import {
  getSubjects,
  getCompetences,
  getExamPapers,
  getStudentProfile,
  getClassReport,
  getClassStudents,
  getFlashcards,
  getSocraticSteps,
  getExamSubmissions,
  ExamSubmissionItem,
} from './supabaseQueries';
import { useSession } from './sessionContext';

export function useSubjects(): Subject[] {
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);

  useEffect(() => {
    getSubjects().then(setSubjects);
  }, []);

  return subjects;
}

export function useCompetences(): CompetenceItem[] {
  const [competences, setCompetences] = useState<CompetenceItem[]>(defaultCompetences);

  useEffect(() => {
    getCompetences().then(setCompetences);
  }, []);

  return competences;
}

export function useExams(): ExamPaper[] {
  const [exams, setExams] = useState<ExamPaper[]>(defaultExams);

  useEffect(() => {
    getExamPapers().then(setExams);
  }, []);

  return exams;
}

/**
 * Returns the student profile for the currently active demo session.
 * Falls back to a provided studentId override, then to the session profileId.
 */
export function useStudent(studentIdOverride?: string): StudentProfile {
  const { profileId } = useSession();
  const [student, setStudent] = useState<StudentProfile>(defaultStudent);

  const resolvedId = studentIdOverride || profileId;

  useEffect(() => {
    getStudentProfile(resolvedId).then(setStudent);
  }, [resolvedId]);

  return student;
}

export function useClassReport() {
  const [report, setReport] = useState(defaultClassReport);

  useEffect(() => {
    getClassReport().then(setReport);
  }, []);

  return report;
}

export function useClassStudents(): ClassStudent[] {
  const [students, setStudents] = useState<ClassStudent[]>(defaultClassStudents);

  useEffect(() => {
    getClassStudents().then(setStudents);
  }, []);

  return students;
}

export function useFlashcards(): Flashcard[] {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(defaultFlashcards);

  useEffect(() => {
    getFlashcards().then(setFlashcards);
  }, []);

  return flashcards;
}

export function useSocraticSteps(): SocraticStep[] {
  const [steps, setSteps] = useState<SocraticStep[]>(defaultSocraticSteps);

  useEffect(() => {
    getSocraticSteps().then(setSteps);
  }, []);

  return steps;
}

/**
 * Returns exam submissions for the currently active demo student.
 * Falls back to session profileId.
 */
export function useExamSubmissions(studentIdOverride?: string): {
  submissions: ExamSubmissionItem[];
  refetch: () => void;
} {
  const { profileId } = useSession();
  const [submissions, setSubmissions] = useState<ExamSubmissionItem[]>([]);

  const resolvedId = studentIdOverride || profileId;

  const fetchSubmissions = () => {
    getExamSubmissions(resolvedId).then(setSubmissions);
  };

  useEffect(() => {
    fetchSubmissions();
  }, [resolvedId]);

  return { submissions, refetch: fetchSubmissions };
}
