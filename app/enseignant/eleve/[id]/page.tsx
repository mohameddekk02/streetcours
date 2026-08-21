import React from 'react';
import Link from 'next/link';
import { User, Award, CheckCircle2, AlertCircle, ArrowLeft, Send, BookOpen, Clock, FileCheck } from 'lucide-react';
import { Cachet } from '@/components/ui/Cachet';
import { getClassStudents } from '@/lib/supabaseQueries';

export async function generateStaticParams() {
  const students = await getClassStudents();
  return students.map((student) => ({
    id: student.id,
  }));
}

export default async function EleveDetailPage({ params }: { params: { id: string } }) {
  const students = await getClassStudents();
  const student = students.find((s) => s.id === params.id) || students[0];


  return (
    <div className="space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/enseignant/rapport-classe"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au Rapport de Classe</span>
        </Link>
      </div>

      {/* Student Dossier Header Card */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-5 sm:p-8 paper-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary text-on-primary font-headline font-black text-xl sm:text-2xl flex items-center justify-center shadow-md shrink-0">
            {student.fullName.substring(0, 2).toUpperCase()}
          </div>
          <div className="space-y-1 min-w-0">
            <span className="font-mono text-[10px] sm:text-xs font-bold text-secondary uppercase block">
              Matricule : {student.matricule} • {student.level}
            </span>
            <h1 className="font-headline text-xl sm:text-2xl lg:text-3xl font-black text-primary truncate">
              {student.fullName}
            </h1>
            <p className="font-body text-xs text-on-surface-variant">
              Lycée d&apos;État de Djibouti • {student.submittedCopiesCount} copies d&apos;examens blancs rendues
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <Cachet
            mention="DOSSIER ACADÉMIQUE"
            code={student.matricule}
            variant="primary"
            rotation="right"
            size="md"
          />
        </div>
      </div>

      {/* Analytics & Progression */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Moyenne Actuelle
          </span>
          <div className="font-headline font-black text-3xl text-primary">
            {student.averageScore.toFixed(1)} / 20
          </div>
          <span className="text-xs font-mono text-emerald-700 font-bold">
            Profil {student.status}
          </span>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Indicateur de Préparation Bac
          </span>
          <div className="font-headline font-black text-3xl text-secondary">
            {student.readinessScore}%
          </div>
          <span className="text-xs font-mono text-on-surface-variant">
            Objectif Mention Très Bien
          </span>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Dernière Activité
          </span>
          <div className="font-headline font-black text-2xl text-on-surface">
            {student.lastActivity}
          </div>
          <span className="text-xs font-mono text-emerald-700 font-bold">
            Entraînement régulier
          </span>
        </div>
      </div>

      {/* Strengths and Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow space-y-4">
          <h3 className="font-headline font-bold text-lg text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Points Forts & Matières Maîtrisées
          </h3>
          <ul className="space-y-2 font-body text-xs text-on-surface">
            {student.strongSubjects.map((sub, i) => (
              <li key={i} className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                <span>{sub}</span>
                <span className="font-mono font-bold text-emerald-800">Maîtrise &gt; 85%</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses & Intervention */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 paper-shadow space-y-4">
          <h3 className="font-headline font-bold text-lg text-error flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-error" />
            Points de Blocage & Lacunes Détectées
          </h3>
          <ul className="space-y-2 font-body text-xs text-on-surface">
            {student.weakAreas.map((area, i) => (
              <li key={i} className="p-3 bg-error-container/20 rounded-xl border border-error/30 flex items-center justify-between">
                <span>{area}</span>
                <span className="font-mono font-bold text-error">À consolider</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
