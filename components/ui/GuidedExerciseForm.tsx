'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { Cachet } from './Cachet';
import { MathText } from './MathText';
import { completeGuidedExercise } from '@/lib/supabaseQueries';

interface GuidedExerciseFormProps {
  competenceId?: string;
  expectedAnswer?: string;
  solutionExplanation?: string;
  onSuccess?: (newScore?: number) => void;
}

export function GuidedExerciseForm({
  competenceId = 'comp-1',
  expectedAnswer = '2 e^(iπ/6)',
  solutionExplanation = '$\\Delta = -4 = (2i)^2$. Les racines sont $z_1 = \\frac{2\\sqrt{3} - 2i}{2} = \\sqrt{3} - i$ et $z_2 = \\sqrt{3} + i = 2 e^{i\\pi/6}$.',
  onSuccess,
}: GuidedExerciseFormProps) {

  const [userAnswer, setUserAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [updatedScore, setUpdatedScore] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    // Flexible answer check
    const normalizedInput = userAnswer.replace(/\s+/g, '').toLowerCase();
    const isCorrect =
      normalizedInput.includes('2e') ||
      normalizedInput.includes('pi/6') ||
      normalizedInput.includes('exp') ||
      normalizedInput.includes('sqrt(3)');

    if (isCorrect) {
      setStatus('success');
      // Enregistrement réel dans Supabase et mise à jour de la maîtrise
      const res = await completeGuidedExercise({ competenceId });
      if (res.success && res.newScore) {
        setUpdatedScore(res.newScore);
      }
      if (onSuccess) onSuccess(res.newScore);
    } else {
      setStatus('error');
    }
  };


  const handleReset = () => {
    setUserAnswer('');
    setStatus('idle');
  };

  return (
    <div className="border border-outline-variant rounded-xl p-5 bg-surface-container-lowest paper-shadow">
      <h4 className="font-headline font-bold text-primary text-base mb-2">
        Votre réponse rédigée :
      </h4>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Écrivez votre résultat ou étape de calcul (ex: z1 = √3 - i, z2 = 2 e^(iπ/6))..."
            rows={3}
            className="w-full p-3 rounded-lg border border-outline-variant bg-surface-container-low font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-mono text-on-surface-variant">
            Format mathématique simplifié accepté
          </div>
          <div className="flex items-center gap-2">
            {status !== 'idle' && (
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 rounded-lg border border-outline-variant text-xs font-mono font-medium hover:bg-surface-container-low transition-colors flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Recommencer
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              Soumettre pour correction
            </button>
          </div>
        </div>
      </form>

      {status === 'success' && (
        <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-300 flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-800 font-bold font-headline text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Démonstration Validée !
              {updatedScore && (
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 ml-2">
                  Maîtrise : {updatedScore}%
                </span>
              )}
            </div>
            <MathText
              content={solutionExplanation}
              className="font-body text-xs text-emerald-900 leading-relaxed"
              as="p"
            />
          </div>

          <div className="shrink-0">
            <Cachet
              mention="MENTION TRÈS BIEN"
              variant="success"
              rotation="right"
              size="sm"
              label="STREETCOURS DJIBOUTI"
            />
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-5 p-4 rounded-xl bg-error-container/20 border border-error/40 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-headline font-bold text-error text-sm">
              Réponse incomplète ou erreur de calcul
            </div>
            <p className="font-body text-xs text-on-surface leading-relaxed">
              Vérifiez le calcul du discriminant et la conversion en coordonnées polaires / forme exponentielle. Vous pouvez consulter les indices ci-dessus pour vous guider !
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
