'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, FileCheck, Filter, ArrowRight, Award, Search } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { useExams, useSubjects } from '@/lib/supabaseHooks';

export default function ExamCatalogPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const mockExamsList = useExams();
  const subjectsData = useSubjects();

  const filteredExams = mockExamsList.filter((exam) => {
    const matchesSubject = selectedSubject === 'all' || exam.subjectId === selectedSubject;
    const matchesLevel = selectedLevel === 'all' || exam.level === selectedLevel;
    const matchesSearch =
      searchQuery === '' ||
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesLevel && matchesSearch;
  });


  return (
    <CahierMargin className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Centre des Examens Officiels
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Sélection d&apos;Épreuves & Annales Djibouti
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Banque officielle des sujets du Baccalauréat et Brevet BEM (Sessions 2018 à 2024).
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Search */}
        <div className="sm:col-span-6 relative">
          <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par mot-clé, année (ex: 2024), ou code..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest font-body text-sm text-on-surface focus:border-primary outline-none transition-all"
          />
        </div>

        {/* Subject Filter */}
        <div className="sm:col-span-3">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest font-body text-xs font-mono text-on-surface focus:border-primary outline-none transition-all"
          >
            <option value="all">Toutes les matières</option>
            {subjectsData.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div className="sm:col-span-3">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest font-body text-xs font-mono text-on-surface focus:border-primary outline-none transition-all"
          >
            <option value="all">Tous les diplômes</option>
            <option value="BAC_S">Baccalauréat S</option>
            <option value="BAC_L">Baccalauréat L</option>
            <option value="BAC_ES">Baccalauréat ES</option>
            <option value="BEF_3EME">Brevet BEM</option>
          </select>
        </div>
      </div>

      {/* Exam List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExams.map((exam) => (
          <div
            key={exam.id}
            className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-primary/10 text-primary">
                  {exam.code}
                </span>
                <span className="font-mono text-xs text-on-surface-variant flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {exam.durationMinutes / 60}h 00
                </span>
              </div>

              <h3 className="font-headline font-bold text-lg text-primary leading-snug">
                {exam.title}
              </h3>

              <div className="flex items-center gap-3 text-xs font-mono text-on-surface-variant">
                <span>Session {exam.session} {exam.year}</span>
                <span>•</span>
                <span className="font-bold text-secondary">Coef. {exam.coefficient}</span>
                <span>•</span>
                <span>{exam.pagesCount} pages</span>
              </div>

              <p className="font-body text-xs text-on-surface-variant">
                {exam.sections.length} exercices indépendants notés sur 20 points avec barème détaillé.
              </p>
            </div>

            <div className="pt-4 border-t border-outline-variant flex items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                Sujet Officiel MENFOP
              </span>

              <Link
                href="/eleve/examens/copie"
                className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm hover:scale-[1.02]"
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Composer l&apos;Épreuve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </CahierMargin>
  );
}
