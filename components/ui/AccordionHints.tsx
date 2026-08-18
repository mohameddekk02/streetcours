'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SocraticStep } from '@/types';
import { MathText } from '@/components/ui/MathText';

interface AccordionHintsProps {
  steps: SocraticStep[];
}

export function AccordionHints({ steps }: AccordionHintsProps) {
  const [openSteps, setOpenSteps] = useState<{ [key: number]: boolean }>({
    1: true,
  });
  const [unlockedLevels, setUnlockedLevels] = useState<{ [key: number]: number }>({
    1: 1,
  });

  const toggleStep = (stepNumber: number) => {
    setOpenSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const unlockNextHint = (stepNumber: number) => {
    setUnlockedLevels((prev) => ({
      ...prev,
      [stepNumber]: Math.min((prev[stepNumber] || 1) + 1, 3),
    }));
  };

  return (
    <div className="space-y-4">
      {steps.map((step) => {
        const isOpen = !!openSteps[step.stepNumber];
        const currentLevel = unlockedLevels[step.stepNumber] || 1;

        return (
          <div
            key={step.stepNumber}
            className="border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden paper-shadow transition-all"
          >
            <button
              onClick={() => toggleStep(step.stepNumber)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-mono text-sm font-bold flex items-center justify-center">
                  0{step.stepNumber}
                </span>
                <div>
                  <h4 className="font-headline font-semibold text-on-surface text-base md:text-lg">
                    {step.title}
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant">
                    {currentLevel === 3 ? 'Indice complet débloqué' : `Niveau d'indice : ${currentLevel}/3`}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-on-surface-variant transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="p-4 pt-0 space-y-3 border-t border-outline-variant/40 bg-surface-container-lowest">
                {/* Hint Level 1 */}
                <div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-primary mt-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary mb-1">
                    <Lightbulb className="w-4 h-4" />
                    <span>INDICE 1 — Questionnement Socratique</span>
                  </div>
                  <MathText
                    content={step.hintLevel1}
                    className="font-body text-sm text-on-surface leading-relaxed"
                    as="p"
                  />
                </div>

                {/* Hint Level 2 */}
                {currentLevel >= 2 ? (
                  <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-secondary">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-secondary mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>INDICE 2 — Piste Méthodologique</span>
                    </div>
                    <MathText
                      content={step.hintLevel2}
                      className="font-body text-sm text-on-surface leading-relaxed"
                      as="p"
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => unlockNextHint(step.stepNumber)}
                    className="w-full py-2 px-3 border border-dashed border-secondary text-secondary rounded-lg text-xs font-mono font-semibold hover:bg-secondary-container/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Débloquer l&apos;Indice 2 (Piste Méthodologique)
                  </button>
                )}

                {/* Hint Level 3 */}
                {currentLevel >= 3 ? (
                  <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-600">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>INDICE 3 — Décomposition Pas-à-Pas</span>
                    </div>
                    <MathText
                      content={step.hintLevel3}
                      className="font-body text-sm text-on-surface leading-relaxed"
                      as="p"
                    />
                  </div>

                ) : currentLevel === 2 ? (
                  <button
                    onClick={() => unlockNextHint(step.stepNumber)}
                    className="w-full py-2 px-3 border border-dashed border-emerald-600 text-emerald-700 rounded-lg text-xs font-mono font-semibold hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Débloquer l&apos;Indice 3 (Décomposition complète)
                  </button>
                ) : null}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
