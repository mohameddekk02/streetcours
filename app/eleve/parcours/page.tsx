import React from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, Circle, ArrowRight, Sparkles, BookOpen, Clock, Target } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { Cachet } from '@/components/ui/Cachet';

export default function ParcoursRecommandePage() {
  const steps = [
    {
      id: 1,
      day: "Aujourd'hui",
      subject: 'Mathématiques',
      title: 'Module 1 : Résolution des équations dans ℂ et trigonométrie',
      type: 'Exercice Guidé',
      duration: '20 min',
      isCompleted: true,
      status: 'Validé avec Mention',
    },
    {
      id: 2,
      day: "Aujourd'hui",
      subject: 'Physique-Chimie',
      title: 'Module 2 : Deuxième loi de Newton et mouvement des satellites',
      type: 'Fiche Express + Quiz',
      duration: '15 min',
      isCompleted: false,
      isCurrent: true,
    },
    {
      id: 3,
      day: 'Demain',
      subject: 'Philosophie',
      title: 'Module 3 : Plan de dissertation sur la notion de Liberté et Devoir',
      type: 'Session Tuteur IA',
      duration: '25 min',
      isCompleted: false,
    },
    {
      id: 4,
      day: 'Samedi',
      subject: 'Mathématiques',
      title: 'Épreuve Blanche : Baccalauréat 2024 Mathématiques Session Normale',
      type: 'Examen Blanc Complet',
      duration: '4h 00',
      isCompleted: false,
    },
  ];

  return (
    <CahierMargin className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/40 text-secondary text-xs font-mono font-bold">
            <Compass className="w-4 h-4" />
            Parcours Adaptatif Intelligent
          </div>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Votre Feuille de Route d&apos;Excellence
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Un programme journalier calibré sur vos points faibles pour maximiser vos chances de mention au Bac 2025.
          </p>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative rounded-2xl border p-6 transition-all paper-shadow ${
              step.isCurrent
                ? 'bg-surface-container-lowest border-2 border-primary shadow-md'
                : step.isCompleted
                ? 'bg-surface-container-low/70 border-emerald-300'
                : 'bg-surface-container-lowest border-outline-variant opacity-85'
            }`}
          >
            {/* Timeline Indicator Dot */}
            <div
              className={`absolute -left-[30px] sm:-left-[39px] top-6 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 ${
                step.isCompleted
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : step.isCurrent
                  ? 'bg-primary border-primary text-on-primary ring-4 ring-primary/20'
                  : 'bg-surface-container-lowest border-outline-variant text-on-surface-variant'
              }`}
            >
              {step.isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.id}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-secondary">
                    {step.day}
                  </span>
                  <span className="text-on-surface-variant">•</span>
                  <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                    {step.subject}
                  </span>
                  <span className="text-xs font-mono text-on-surface-variant flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant">
                  Format pédagogique : <strong>{step.type}</strong>
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                {step.isCompleted ? (
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {step.status}
                  </span>
                ) : (
                  <Link
                    href={step.id === 2 ? '/eleve/fiches' : step.id === 3 ? '/eleve/tuteur' : '/eleve/examens/copie'}
                    className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${
                      step.isCurrent
                        ? 'bg-primary text-on-primary hover:bg-primary-container'
                        : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                    }`}
                  >
                    <span>{step.isCurrent ? 'Continuer' : 'Aperçu'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CahierMargin>
  );
}
