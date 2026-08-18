'use client';

import React from 'react';
import Link from 'next/link';
import { History, TrendingUp, Calendar, FileText, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { Cachet } from '@/components/ui/Cachet';
import { useStudent, useExamSubmissions } from '@/lib/supabaseHooks';

export default function HistoriquePage() {
  const student = useStudent();
  const { submissions } = useExamSubmissions();


  return (
    <CahierMargin className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Suivi Long Terme
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Historique & Courbe de Progression
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Revue de l&apos;ensemble des épreuves blanches et exercices soumis pour analyse.
          </p>
        </div>
      </div>

      {/* Progress Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Moyenne Générale Simulée
          </span>
          <div className="font-headline font-black text-3xl text-primary mt-1">
            16.2 / 20
          </div>
          <span className="text-xs font-mono text-emerald-700 font-bold">
            Admissible Mention Très Bien
          </span>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Épreuves Blanches Rédigées
          </span>
          <div className="font-headline font-black text-3xl text-secondary mt-1">
            {student.completedExamsCount} Copies
          </div>
          <span className="text-xs font-mono text-on-surface-variant">
            {student.hoursStudied} heures d&apos;examen cumulées
          </span>
        </div>


        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Taux de Progression Hebdomadaire
          </span>
          <div className="font-headline font-black text-3xl text-emerald-700 mt-1">
            +4.2%
          </div>
          <span className="text-xs font-mono text-on-surface-variant">
            En hausse continue sur 4 semaines
          </span>
        </div>
      </div>

      {/* Copies Archive Table */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl overflow-hidden paper-shadow">
        <div className="p-4 bg-surface-container-low border-b border-outline-variant">
          <h3 className="font-headline font-bold text-base text-primary">
            Copies d&apos;Examen Archivées
          </h3>
        </div>

        <div className="divide-y divide-outline-variant/40">
          {submissions.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-container-low/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-on-surface-variant">
                    {item.date}
                  </span>
                  <span className="text-on-surface-variant">•</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary/10 text-primary">
                    {item.type}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-sm sm:text-base text-on-surface">
                  {item.title}
                </h4>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <span className="font-mono font-bold text-base text-primary block">
                    {typeof item.score === 'number' ? `${item.score.toFixed(1)}/20` : item.score}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 block">
                    {item.mention} ({item.delta})
                  </span>
                </div>


                <Link
                  href="/eleve/examens/correction"
                  className="px-3.5 py-1.5 rounded-lg border border-outline-variant hover:border-primary text-xs font-mono font-bold text-primary transition-colors flex items-center gap-1"
                >
                  Voir la copie
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CahierMargin>
  );
}
