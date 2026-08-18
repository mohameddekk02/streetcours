'use client';

import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, RotateCw, BookOpen, Lightbulb } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { useFlashcards, useSubjects } from '@/lib/supabaseHooks';

export default function FlashcardsPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const mockFlashcards = useFlashcards();
  const subjectsData = useSubjects();

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredCards = selectedSubject === 'all'
    ? mockFlashcards
    : mockFlashcards.filter((c) => c.subjectId === selectedSubject);


  return (
    <CahierMargin className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Révision Express & Formules Clés
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Fiches Mémo & Formulaires Bac
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Cliquez sur une carte pour la retourner et révéler les astuces méthodologiques et démonstrations.
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
          Toutes les fiches ({mockFlashcards.length})
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const isFlipped = !!flippedCards[card.id];

          return (
            <div
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow-hover cursor-pointer min-h-[280px] flex flex-col justify-between select-none transition-all group hover:border-primary"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3">
                <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-primary/10 text-primary">
                  {card.subjectId.toUpperCase()} • {card.chapter}
                </span>
                <span className="text-xs font-mono text-on-surface-variant flex items-center gap-1 group-hover:text-primary transition-colors">
                  <RotateCw className="w-3.5 h-3.5" />
                  {isFlipped ? 'Verso' : 'Recto'}
                </span>
              </div>

              {/* Main Content (Toggle between Front & Back) */}
              <div className="py-4 space-y-2 flex-1 flex flex-col justify-center">
                {!isFlipped ? (
                  <>
                    <h3 className="font-headline font-bold text-lg text-primary">
                      {card.title}
                    </h3>
                    <div className="p-3 bg-surface-container-low rounded-xl font-mono text-sm font-bold text-secondary text-center border border-outline-variant/60">
                      {card.formulaOrConcept}
                    </div>
                    <p className="text-[11px] font-mono text-on-surface-variant text-center pt-2">
                      (Cliquez pour voir l&apos;explication et les pièges)
                    </p>
                  </>
                ) : (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase text-primary block">
                        Explication & Méthode :
                      </span>
                      <p className="font-body text-xs text-on-surface leading-relaxed mt-0.5">
                        {card.explanation}
                      </p>
                    </div>

                    <div className="p-2.5 bg-amber-50 rounded-xl border border-secondary/30 space-y-0.5">
                      <span className="font-mono text-[10px] font-bold text-secondary flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5" />
                        Conseil / Piège d&apos;examen :
                      </span>
                      <p className="font-body text-xs text-on-surface">
                        {card.tips}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-mono text-on-surface-variant">
                <span>StreetCours Express</span>
                <span className="font-bold text-secondary">
                  {isFlipped ? 'Vue détaillée' : 'Cliquer pour retourner'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </CahierMargin>
  );
}
