'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Clock,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { Cachet } from '@/components/ui/Cachet';
import { useStudent, useSubjects, useExams, useCompetences } from '@/lib/supabaseHooks';


export default function StudentDashboardPage() {
  const mockStudent = useStudent();
  const subjectsData = useSubjects();
  const mockExamsList = useExams();
  const mockCompetences = useCompetences();

  return (
    <CahierMargin className="space-y-8">
      {/* Top Welcome Banner */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
        {/* Background Stamp */}
        <div className="absolute top-2 right-4 opacity-25 hidden sm:block pointer-events-none">
          <Cachet
            mention="PRÉPA BAC 2025"
            code="DJ-EXCELLENCE"
            variant="primary"
            rotation="right"
            size="lg"
          />
        </div>

        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/30 text-secondary text-xs font-mono font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            SÉRIE EN COURS : {mockStudent.streakDays} JOURS CONSÉCUTIFS
          </div>
          <h1 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-primary">
            Bonjour, {mockStudent.fullName} !
          </h1>

          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Votre préparation pour le <strong>Baccalauréat Scientifique 2025</strong> progresse avec régularité. Aujourd&apos;hui, consolidez l&apos;intégration par parties et les lois de Newton.
          </p>
        </div>

        {/* Readiness Circular Meter */}
        <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5 flex items-center gap-5 shrink-0">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-surface-container-high"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-primary"
                strokeDasharray={`${mockStudent.readinessScore}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-headline font-black text-xl text-primary">
              {mockStudent.readinessScore}%
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant block">
              Indicateur de Préparation
            </span>
            <span className="font-headline font-bold text-base text-primary block">
              Mention {mockStudent.targetMention}
            </span>
            <span className="font-mono text-xs text-emerald-700 font-bold block mt-0.5">
              +4.2% cette semaine
            </span>
          </div>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Daily Recommended Task */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-secondary tracking-wider">
                Action du jour
              </span>
              <span className="px-2 py-0.5 rounded bg-secondary-container/40 text-secondary text-[10px] font-mono font-bold">
                15 min
              </span>
            </div>
            <h3 className="font-headline font-bold text-lg text-primary">
              Exercice Guidé : Nombres Complexes
            </h3>
            <p className="font-body text-xs text-on-surface-variant">
              Résolution pas-à-pas avec validation immédiate sur les équations du 2nd degré dans ℂ.
            </p>
          </div>
          <Link
            href="/eleve/exercice"
            className="w-full py-2.5 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Démarrer l&apos;exercice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Card 2: AI Socratic Tutor */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-primary tracking-wider">
                Assistance IA
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                Disponible 24/7
              </span>
            </div>
            <h3 className="font-headline font-bold text-lg text-primary">
              Tuteur Socratique IA
            </h3>
            <p className="font-body text-xs text-on-surface-variant">
              Posez vos questions sur un calcul d&apos;intégrale, une règle d&apos;optique ou un plan de dissertation.
            </p>
          </div>
          <Link
            href="/eleve/tuteur"
            className="w-full py-2.5 rounded-xl bg-secondary text-on-secondary font-mono text-xs font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ouvrir une session</span>
          </Link>
        </div>

        {/* Card 3: Exam Simulator */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow-hover flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-error tracking-wider">
                Simulation Réelle
              </span>
              <span className="px-2 py-0.5 rounded bg-error-container/30 text-error text-[10px] font-mono font-bold">
                Chronométré
              </span>
            </div>
            <h3 className="font-headline font-bold text-lg text-primary">
              Copie d&apos;Examen Blanc
            </h3>
            <p className="font-body text-xs text-on-surface-variant">
              Mettez-vous en conditions réelles avec minuteur officiel et lignage Séyès interactif.
            </p>
          </div>
          <Link
            href="/eleve/examens/copie"
            className="w-full py-2.5 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary text-primary font-mono text-xs font-bold hover:bg-surface-container-high transition-colors text-center flex items-center justify-center gap-1.5"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Lancer l&apos;épreuve blanche</span>
          </Link>
        </div>
      </div>

      {/* Main Grid: Subjects Progress + Recommended Annales */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Subjects & Mastery Matrix */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline font-bold text-xl text-primary">
                Maîtrise par Matière
              </h2>
              <p className="font-body text-xs text-on-surface-variant">
                Coefficients officiels du Baccalauréat Série S
              </p>
            </div>
            <Link
              href="/eleve/competences"
              className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1"
            >
              Matrice détaillée →
            </Link>
          </div>

          <div className="space-y-3">
            {subjectsData.slice(0, 5).map((subject) => (
              <div
                key={subject.id}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 paper-shadow flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: subject.color }}
                  >
                    <span className="material-symbols-outlined text-xl">{subject.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-on-surface">
                      {subject.name}
                    </h4>
                    <span className="font-mono text-[11px] text-on-surface-variant">
                      Coef. {subject.coefficient} • {subject.totalChapters} chapitres
                    </span>
                  </div>
                </div>

                <div className="w-36 space-y-1 text-right">
                  <span className="font-mono text-xs font-bold text-primary">
                    {subject.masteryPercentage}%
                  </span>
                  <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${subject.masteryPercentage}%`,
                        backgroundColor: subject.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recommended Past Papers & Recent Reports */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline font-bold text-xl text-primary">
                Annales Officielles
              </h2>
              <p className="font-body text-xs text-on-surface-variant">
                Sessions MENFOP récentes
              </p>
            </div>
            <Link
              href="/eleve/examens"
              className="text-xs font-mono font-bold text-primary hover:underline"
            >
              Tout voir →
            </Link>
          </div>

          <div className="space-y-3">
            {mockExamsList.slice(0, 3).map((exam) => (
              <div
                key={exam.id}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 paper-shadow space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {exam.code}
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">
                    Durée : {exam.durationMinutes / 60}h
                  </span>
                </div>
                <h4 className="font-headline font-bold text-sm text-primary leading-snug">
                  {exam.title}
                </h4>
                <div className="flex items-center justify-between pt-1 border-t border-outline-variant/40">
                  <span className="text-xs font-mono text-secondary font-bold">
                    Coef. {exam.coefficient} • {exam.difficulty}
                  </span>
                  <Link
                    href={`/eleve/examens/copie`}
                    className="text-xs font-mono font-bold text-primary hover:text-primary-container flex items-center gap-1"
                  >
                    Composer →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CahierMargin>
  );
}
