'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, School, Target, Check, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { TextureOverlay } from '@/components/ui/TextureOverlay';
import { Cachet } from '@/components/ui/Cachet';
import { useStudent, useSubjects } from '@/lib/supabaseHooks';

export default function ProfileConfigPage() {
  const router = useRouter();
  const student = useStudent();
  const subjectsData = useSubjects();

  const [fullName, setFullName] = useState(student.fullName);
  const [schoolName, setSchoolName] = useState(student.schoolName);
  const [level, setLevel] = useState(student.level);
  const [targetMention, setTargetMention] = useState(student.targetMention);
  const [selectedWeakSubjects, setSelectedWeakSubjects] = useState<string[]>(student.weakSubjects);


  const toggleSubject = (id: string) => {
    setSelectedWeakSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/eleve/dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-on-background py-10 px-4 sm:px-6 relative">
      <TextureOverlay />

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="StreetCours" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-headline font-bold text-primary text-lg">StreetCours</span>
          </Link>
          <Link
            href="/eleve/dashboard"
            className="text-xs font-mono font-bold text-primary hover:underline"
          >
            Aller au Dashboard →
          </Link>
        </div>

        {/* Configuration Card */}
        <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 sm:p-10 paper-shadow relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
            <div>
              <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
                Étape 1 sur 1 • Diagnostic & Personnalisation
              </span>
              <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
                Configuration de votre Profil d&apos;Examen
              </h1>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
                Ajustez vos objectifs afin que le tuteur et les recommandations s&apos;adaptent précisément à vos besoins.
              </p>
            </div>
            <div className="shrink-0 hidden sm:block">
              <Cachet
                mention="FICHE CANDIDAT"
                code="LED-2025"
                variant="primary"
                rotation="right"
                size="sm"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            {/* Full Name & School */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                  Nom et Prénom du Candidat
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm text-on-surface focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                  Établissement Scolaire (Lycée / Collège)
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    required
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm text-on-surface focus:border-primary outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Level & Target Mention */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                  Série du Baccalauréat ou Brevet
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm text-on-surface focus:border-primary outline-none"
                >
                  <option value="BAC_S">Terminale Scientifique (Série S1 / S2)</option>
                  <option value="BAC_L">Terminale Littéraire (Série L1 / L2)</option>
                  <option value="BAC_ES">Terminale Économique & Social (Série ES)</option>
                  <option value="BAC_STG">Terminale Sciences & Technologies de Gestion (STG)</option>
                  <option value="BEF_3EME">Classe de Troisième — Brevet BEM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                  Mention Visée au Diplôme
                </label>
                <div className="relative">
                  <Target className="w-4 h-4 text-secondary absolute left-3.5 top-3" />
                  <select
                    value={targetMention}
                    onChange={(e) => setTargetMention(e.target.value as any)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm font-bold text-secondary focus:border-secondary outline-none"
                  >
                    <option value="Passable">Passable (Moyenne &gt; 10/20)</option>
                    <option value="Assez Bien">Assez Bien (Moyenne &gt; 12/20)</option>
                    <option value="Bien">Bien (Moyenne &gt; 14/20)</option>
                    <option value="Très Bien">Très Bien (Moyenne &gt; 16/20)</option>
                    <option value="Félicitations">Félicitations du Jury (Moyenne &gt; 18/20)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Weak Areas Selection */}
            <div>
              <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                Matières prioritaires à renforcer (Sélectionnez vos lacunes actuelles)
              </label>
              <p className="font-body text-xs text-on-surface-variant mb-3">
                Le parcours générera en priorité des exercices guidés et des fiches mémos pour ces disciplines.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {subjectsData.map((subject) => {
                  const isSelected = selectedWeakSubjects.includes(subject.id);
                  return (
                    <button
                      key={subject.id}
                      type="button"
                      onClick={() => toggleSubject(subject.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'border-error bg-error-container/20 text-error'
                          : 'border-outline-variant bg-surface-container-low hover:border-primary text-on-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase">
                          Coef. {subject.coefficient}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-error" />}
                      </div>
                      <span className="font-headline font-bold text-xs leading-tight">
                        {subject.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-outline-variant flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-primary text-on-primary font-mono text-sm font-bold hover:bg-primary-container transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Enregistrer & Ouvrir mon Tableau de Bord</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
