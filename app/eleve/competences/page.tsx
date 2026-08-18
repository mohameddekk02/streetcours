'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, CheckCircle2, Clock, AlertTriangle, ArrowRight, Filter } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { useCompetences, useSubjects } from '@/lib/supabaseHooks';

export default function CompetencesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const mockCompetences = useCompetences();
  const subjectsData = useSubjects();

  const filteredCompetences = selectedSubject === 'all'
    ? mockCompetences
    : mockCompetences.filter((c) => c.subjectId === selectedSubject);


  return (
    <CahierMargin className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Cartographie d&apos;apprentissage
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Compétences & Maîtrise par Matière
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Suivi précis de chaque notion du programme officiel pour cibler vos révisions prioritaires.
          </p>
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedSubject('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
            selectedSubject === 'all'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high border border-outline-variant'
          }`}
        >
          Toutes les matières ({mockCompetences.length})
        </button>
        {subjectsData.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setSelectedSubject(sub.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
              selectedSubject === sub.id
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high border border-outline-variant'
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Competencies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCompetences.map((comp) => {
          const statusBadge = {
            MAITRISE: {
              label: 'Maîtrisé',
              bg: 'bg-emerald-100 text-emerald-800',
              icon: CheckCircle2,
            },
            EN_COURS: {
              label: 'En cours d’acquisition',
              bg: 'bg-amber-100 text-amber-800',
              icon: Clock,
            },
            A_REVOIR: {
              label: 'À consolider',
              bg: 'bg-red-100 text-red-800',
              icon: AlertTriangle,
            },
          }[comp.status];

          const Icon = statusBadge.icon;

          return (
            <div
              key={comp.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                    {comp.subjectId.toUpperCase()}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${statusBadge.bg}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {statusBadge.label}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-base text-primary leading-snug">
                  {comp.title}
                </h3>
              </div>

              <div className="space-y-2 pt-2 border-t border-outline-variant/40">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">{comp.questionsCount} questions traitées</span>
                  <span className="font-bold text-primary">{comp.score}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      comp.score >= 80
                        ? 'bg-emerald-600'
                        : comp.score >= 60
                        ? 'bg-secondary'
                        : 'bg-error'
                    }`}
                    style={{ width: `${comp.score}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-mono text-on-surface-variant">
                    Dernière pratique : {comp.lastPracticed}
                  </span>
                  <Link
                    href="/eleve/exercice"
                    className="text-xs font-mono font-bold text-primary hover:text-primary-container flex items-center gap-1"
                  >
                    S&apos;entraîner →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CahierMargin>
  );
}
