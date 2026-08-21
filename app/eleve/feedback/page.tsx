import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Award, ArrowRight, BookOpen, RefreshCw, Sparkles, TrendingUp } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { Cachet } from '@/components/ui/Cachet';

export default function FeedbackImmediatPage() {
  return (
    <CahierMargin className="space-y-8">
      {/* Success Banner Card */}
      <div className="bg-surface-container-lowest border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ÉVALUATION IMMÉDIATE COMPLÉTÉE
          </div>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary">
            Excellent travail ! Démonstration Validée
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Vous avez résolu l&apos;exercice sur les <strong>Nombres Complexes</strong> en respectant l&apos;ensemble des critères du barème national.
          </p>
        </div>

        {/* Official Cachet Stamp */}
        <div className="shrink-0">
          <Cachet
            label="PROGRAMME NATIONAL"
            mention="MENTION TRÈS BIEN"
            code="NOTE: 19.5/20"
            date="EXCELLENCE"
            variant="success"
            rotation="right"
            size="md"
          />
        </div>
      </div>

      {/* Detailed Feedback Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-2">
          <span className="font-mono text-[10px] uppercase font-bold text-secondary">
            Précision du Calcul
          </span>
          <div className="font-headline font-black text-2xl text-primary">
            100%
          </div>
          <p className="font-body text-xs text-on-surface-variant">
            Discriminant Δ = -4 et racines complexes parfaitement simplifiées sous forme exponentielle.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-2">
          <span className="font-mono text-[10px] uppercase font-bold text-secondary">
            Rigueur de la Rédaction
          </span>
          <div className="font-headline font-black text-2xl text-emerald-700">
            Conforme Jury
          </div>
          <p className="font-body text-xs text-on-surface-variant">
            Mention explicite du module |z| et de l&apos;argument principal θ ∈ ]-π, π].
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-2">
          <span className="font-mono text-[10px] uppercase font-bold text-secondary">
            Progression Bac
          </span>
          <div className="font-headline font-black text-2xl text-primary">
            +2.5 pts
          </div>
          <p className="font-body text-xs text-on-surface-variant">
            Votre score de préparation en Mathématiques passe de 84% à 86.5%.
          </p>
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-headline font-bold text-base text-primary">
            Prêt pour la question suivante ?
          </h3>
          <p className="font-body text-xs text-on-surface-variant">
            Poursuivez avec la Question 1.b (Interprétation géométrique du triangle OAB).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/eleve/exercice"
            className="px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-high text-xs font-mono font-bold text-on-surface transition-colors"
          >
            Refaire l&apos;exercice
          </Link>
          <Link
            href="/eleve/examens/correction"
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-mono font-bold hover:bg-primary-container transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Voir le Rapport de Correction Détaillé</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </CahierMargin>
  );
}
