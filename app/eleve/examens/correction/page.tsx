'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, AlertTriangle, ArrowRight, Printer, BookOpen, Share2, ChevronDown, Sparkles } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { Cachet } from '@/components/ui/Cachet';
import { MathText } from '@/components/ui/MathText';
import { useExams } from '@/lib/supabaseHooks';

export default function RapportCorrectionPage() {
  const exams = useExams();
  const exam = exams[0];
  const [showModelAnswers, setShowModelAnswers] = useState(true);


  const criteriaList = [
    {
      section: 'Exercice 1 : Nombres Complexes (4 pts)',
      pointsObtained: 4.0,
      totalPoints: 4,
      status: 'Parfait',
      comment: 'Calcul du discriminant rigoureux et formes exponentielles exactes.',
    },
    {
      section: 'Exercice 2 : Probabilités (4 pts)',
      pointsObtained: 3.5,
      totalPoints: 4,
      status: 'Très Bien',
      comment: "L'événement contraire est bien posé. Attention à l'arrondi au millième près.",
    },
    {
      section: 'Exercice 3 : Équations Différentielles (5 pts)',
      pointsObtained: 4.5,
      totalPoints: 5,
      status: 'Très Bien',
      comment: 'Identification de la solution particulière propre et méthode de dérivation correcte.',
    },
    {
      section: 'Problème : Étude de Fonction Logarithme (7 pts)',
      pointsObtained: 6.5,
      totalPoints: 7,
      status: 'Excellent',
      comment: 'Limites et asymptotes parfaitement argumentées avec croissances comparées.',
    },
  ];

  return (
    <CahierMargin className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Relevé Officiel d&apos;Évaluation
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Rapport de Correction Détaillé
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            {exam.title} • Session Normale 2024
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-high font-mono text-xs font-bold text-on-surface transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer le Relevé</span>
          </button>
          <Link
            href="/eleve/dashboard"
            className="px-5 py-2 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-colors flex items-center gap-1.5"
          >
            <span>Retour au Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Grade Card with Official Stamp */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            Barème National /20
          </span>
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="font-headline font-black text-4xl sm:text-5xl text-primary">
              18.5
            </span>
            <span className="font-headline text-2xl text-on-surface-variant">/ 20</span>
          </div>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-md">
            Félicitations ! Votre copie démontre une maîtrise de niveau <strong>Mention Très Bien</strong>. Vos démonstrations analytiques sont conformes aux attendus du jury.
          </p>
        </div>

        <div className="shrink-0">
          <Cachet
            label="EXAMEN NATIONAL DJIBOUTI"
            mention="TRÈS BIEN • 18.5/20"
            code="BAC-2024-NATIONAL"
            variant="primary"
            rotation="right"
            size="lg"
          />
        </div>
      </div>

      {/* Criteria Breakdown Table */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl overflow-hidden paper-shadow">
        <div className="p-4 bg-surface-container-low border-b border-outline-variant">
          <h3 className="font-headline font-bold text-base text-primary">
            Détail des Points par Exercice
          </h3>
        </div>

        <div className="divide-y divide-outline-variant/40">
          {criteriaList.map((crit, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/50 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MathText
                    content={crit.section}
                    className="font-headline font-bold text-sm text-on-surface"
                    as="h4"
                  />
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                    {crit.status}
                  </span>
                </div>
                <MathText
                  content={crit.comment}
                  className="font-body text-xs text-on-surface-variant"
                  as="p"
                />
              </div>

              <div className="font-mono font-bold text-base text-primary shrink-0">
                {crit.pointsObtained.toFixed(1)} / {crit.totalPoints} pts
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between font-mono font-bold text-sm text-primary">
          <span>Total Général des Points :</span>
          <span>18.5 / 20.0 (92.5%)</span>
        </div>
      </div>

      {/* Official Solutions & Mathematical Proofs Section */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl overflow-hidden paper-shadow">
        <button
          onClick={() => setShowModelAnswers(!showModelAnswers)}
          className="w-full p-4 bg-surface-container-low border-b border-outline-variant flex items-center justify-between hover:bg-surface-container transition-colors text-left"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            <h3 className="font-headline font-bold text-base text-primary">
              Corrigé Type Détaillé & Barème National
            </h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-on-surface-variant transition-transform duration-200 ${
              showModelAnswers ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showModelAnswers && (
          <div className="p-6 space-y-6">
            {exam.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3 pb-5 border-b border-outline-variant/50 last:border-b-0 last:pb-0">
                <h4 className="font-headline font-bold text-sm text-primary">
                  {section.title}
                </h4>
                <div className="space-y-4">
                  {section.questions.map((q) => (
                    <div key={q.id} className="p-4 bg-surface-container-low rounded-xl space-y-2 border border-outline-variant/40">
                      <div className="flex justify-between items-center font-mono text-xs font-bold text-primary">
                        <span>Question {q.number}</span>
                        <span className="text-secondary">{q.points} pt(s)</span>
                      </div>
                      <MathText
                        content={q.text}
                        className="font-body text-xs text-on-surface"
                        as="p"
                      />
                      {q.modelAnswer && (
                        <div className="pt-2 mt-2 border-t border-outline-variant/30 space-y-1">
                          <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                            Solution Modèle & Démonstration :
                          </span>
                          <div className="p-2.5 bg-emerald-50 rounded-lg border-l-4 border-emerald-600 text-xs text-emerald-950 font-body leading-relaxed">
                            <MathText content={q.modelAnswer} as="div" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </CahierMargin>
  );
}

