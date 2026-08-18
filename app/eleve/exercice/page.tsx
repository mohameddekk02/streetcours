'use client';

import React from 'react';
import Link from 'next/link';
import { PenTool, Sparkles, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { AccordionHints } from '@/components/ui/AccordionHints';
import { GuidedExerciseForm } from '@/components/ui/GuidedExerciseForm';
import { InlineMath, BlockMath } from '@/components/ui/MathText';
import { useSocraticSteps } from '@/lib/supabaseHooks';

export default function ExerciceGuidePage() {
  const steps = useSocraticSteps();

  return (
    <CahierMargin className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">
              DJ-BAC-2024-M-S1
            </span>
            <span className="font-mono text-xs text-on-surface-variant">•</span>
            <span className="font-mono text-xs font-bold text-secondary">
              Exercice 1 (4 points)
            </span>
          </div>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Exercice Guidé : Nombres Complexes & Trigonométrie
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Résolvez la question étape par étape avec le soutien socratique pour valider votre méthode.
          </p>
        </div>

        <Link
          href="/eleve/feedback"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant text-primary font-mono text-xs font-bold hover:bg-surface-container-high transition-colors self-start sm:self-auto"
        >
          <span>Voir le Bilan de l&apos;Exercice</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Official Exam Problem Box */}
      <div className="bg-surface-container-lowest border-2 border-primary/30 rounded-2xl p-6 paper-shadow relative">
        <div className="flex items-center justify-between border-b border-outline-variant pb-3 mb-4">
          <span className="font-mono text-xs font-bold text-primary uppercase">
            Énoncé officiel — Session Normale 2024
          </span>
          <span className="text-xs font-mono font-bold text-secondary">
            Barème : 2 points
          </span>
        </div>

        <div className="space-y-3 font-body text-sm text-on-surface leading-relaxed">
          <p className="font-semibold text-primary">
            Dans l&apos;ensemble des nombres complexes <InlineMath math="\mathbb{C}" />, on considère l&apos;équation polynomiale suivante :
          </p>
          <div className="p-4 bg-surface-container-low rounded-xl text-center font-bold text-primary border border-outline-variant/60 overflow-x-auto">
            <BlockMath math="(E) : z^2 - 2\sqrt{3} z + 4 = 0" />
          </div>
          <p>
            <strong>Question 1.a :</strong> Calculer le discriminant <InlineMath math="\Delta" /> de cette équation, déterminer les deux solutions complexes conjuguées <InlineMath math="z_1" /> et <InlineMath math="z_2" />, puis exprimer chacune d&apos;elles sous forme exponentielle <InlineMath math="r \cdot e^{i\theta}" />.
          </p>
        </div>
      </div>


      {/* Socratic Hint Accordions */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-headline font-bold text-lg text-primary flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            Indices & Démarche Socratique
          </h3>
          <span className="font-mono text-xs text-on-surface-variant">
            3 niveaux d&apos;aide disponibles
          </span>
        </div>

        <AccordionHints steps={steps} />
      </div>

      {/* Answer Form with Validation */}
      <GuidedExerciseForm />
    </CahierMargin>
  );
}
