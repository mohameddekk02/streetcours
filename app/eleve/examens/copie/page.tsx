'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Clock, Send, BookOpen, AlertCircle, FileText, CheckCircle } from 'lucide-react';
import { ExamCountdown } from '@/components/ui/ExamCountdown';
import { SeyesWritingPad } from '@/components/ui/SeyesWritingPad';
import { Cachet } from '@/components/ui/Cachet';
import { MathText } from '@/components/ui/MathText';
import { useExams } from '@/lib/supabaseHooks';
import { submitExamCopy } from '@/lib/supabaseQueries';

export default function CopieExamenBlancPage() {
  const router = useRouter();
  const exams = useExams();
  const exam = exams[0]; // Bac S Mathématiques 2024
  const [textContent, setTextContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinishCopy = async () => {
    if (confirm("Êtes-vous certain de vouloir rendre votre copie pour correction officielle ?")) {
      setIsSubmitting(true);
      await submitExamCopy({
        examPaperId: exam?.id || 'dj-bac-2024-math-s',
        examTitle: exam?.title || 'Baccalauréat 2024 — Mathématiques (Série Scientifique)',
        answersText: textContent,
      });
      setIsSubmitting(false);
      router.push('/eleve/examens/correction');
    }
  };


  return (
    <div className="space-y-6">
      {/* Exam Control Top Bar */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-4 sm:p-6 paper-shadow flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-16 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-on-primary font-mono font-bold text-sm flex items-center justify-center">
            BAC
          </div>
          <div>
            <h1 className="font-headline font-bold text-base sm:text-lg text-primary leading-tight">
              {exam.title}
            </h1>
            <span className="font-mono text-xs text-on-surface-variant">
              Code Sujet : {exam.code} • Coef. {exam.coefficient}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ExamCountdown initialMinutes={exam.durationMinutes} onTimeUp={handleFinishCopy} />
          <button
            onClick={handleFinishCopy}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl bg-error text-on-error font-mono text-xs font-bold hover:bg-error-container hover:text-on-error-container transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? 'Enregistrement...' : 'Rendre la Copie'}</span>
          </button>
        </div>
      </div>


      {/* Main Split View: Question Paper + Seyes Writing Pad */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Official Subject Sheet */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow space-y-6">
            {/* Header of official exam */}
            <div className="text-center pb-4 border-b-2 border-outline-variant space-y-1">
              <span className="font-mono text-[10px] font-bold tracking-widest text-on-surface-variant uppercase block">
                RÉPUBLIQUE DE DJIBOUTI • PROGRAMME NATIONAL
              </span>
              <h2 className="font-headline font-black text-base text-primary uppercase">
                BACCALAURÉAT DE L&apos;ENSEIGNEMENT GÉNÉRAL
              </h2>
              <span className="font-mono text-xs text-secondary font-bold block">
                Session Normale Juin 2024 — Épreuve de Mathématiques (Série S)
              </span>
            </div>

            {/* Instructions */}
            <div className="p-3 bg-surface-container-low rounded-xl border-l-4 border-secondary text-xs font-body text-on-surface space-y-1">
              <span className="font-mono font-bold text-secondary uppercase block">
                Consignes Générales :
              </span>
              <ul className="list-disc pl-4 space-y-1">
                {exam.instructions.map((ins, i) => (
                  <li key={i}>{ins}</li>
                ))}
              </ul>
            </div>

            {/* Questions list */}
            <div className="space-y-6">
              {exam.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 pt-2 border-t border-outline-variant/40">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline font-bold text-sm text-primary">
                      {section.title}
                    </h3>
                  </div>
                  <MathText
                    content={section.description}
                    className="font-body text-xs text-on-surface-variant italic"
                    as="p"
                  />

                  <div className="space-y-3">
                    {section.questions.map((q) => (
                      <div key={q.id} className="p-3.5 bg-surface-container-low rounded-xl text-xs space-y-1.5">
                        <div className="flex justify-between font-mono font-bold text-primary">
                          <span>Question {q.number}</span>
                          <span className="text-secondary">{q.points} pt(s)</span>
                        </div>
                        <MathText
                          content={q.text}
                          className="font-body text-on-surface leading-relaxed"
                          as="p"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Right Column: Seyes Writing Pad */}
        <div className="lg:col-span-7 space-y-4">
          <SeyesWritingPad onChange={setTextContent} />
        </div>
      </div>
    </div>
  );
}

