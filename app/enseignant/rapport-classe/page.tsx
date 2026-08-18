'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3, Users, Award, AlertTriangle, ArrowRight, Printer, Sparkles, BookOpen } from 'lucide-react';
import { Cachet } from '@/components/ui/Cachet';
import { StudentTableRow } from '@/components/ui/StudentTableRow';
import { useClassReport, useClassStudents } from '@/lib/supabaseHooks';

export default function RapportClassePage() {
  const mockClassReport = useClassReport();
  const mockClassStudents = useClassStudents();

  const totalStudents = mockClassStudents.length > 0 ? mockClassStudents.length : mockClassReport.totalStudents;
  const classAvg = mockClassStudents.length > 0
    ? (mockClassStudents.reduce((acc, s) => acc + Number(s.averageScore || 0), 0) / totalStudents).toFixed(1)
    : mockClassReport.classAverage;
  const readinessRate = mockClassStudents.length > 0
    ? Math.round((mockClassStudents.filter((s) => s.readinessScore >= 70).length / totalStudents) * 100)
    : mockClassReport.readinessRate;
  const honorsCount = mockClassStudents.filter((s) => s.averageScore >= 14).length;
  const honorsRate = mockClassStudents.length > 0
    ? Math.round((honorsCount / totalStudents) * 100)
    : 70;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Tableau de Bord Enseignant
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Rapport de Classe : {mockClassReport.className}
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            Professeur référent : {mockClassReport.headTeacher} • Année {mockClassReport.academicYear}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link
            href="/enseignant/gestion-classe"
            className="px-4 py-2.5 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Gestion des Devoirs</span>
          </Link>
        </div>
      </div>

      {/* Class KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Effectif Total
          </span>
          <div className="font-headline font-black text-3xl text-primary">
            {totalStudents} Élèves
          </div>
          <span className="text-xs font-mono text-emerald-700 font-bold">100% Inscrits au Bac</span>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Moyenne de Classe
          </span>
          <div className="font-headline font-black text-3xl text-primary">
            {classAvg} / 20
          </div>
          <span className="text-xs font-mono text-emerald-700 font-bold">+0.9 pt vs trimestre 1</span>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Taux de Préparation Bac
          </span>
          <div className="font-headline font-black text-3xl text-secondary">
            {readinessRate}%
          </div>
          <span className="text-xs font-mono text-secondary font-bold">En progression continue</span>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 paper-shadow space-y-1">
          <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
            Projection Mention TB & B
          </span>
          <div className="font-headline font-black text-3xl text-emerald-700">
            {honorsRate}%
          </div>
          <span className="text-xs font-mono text-on-surface-variant">{honorsCount} élèves éligibles</span>
        </div>
      </div>


      {/* Identified Collective Lacunes */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 paper-shadow space-y-4">
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-error" />
            <h3 className="font-headline font-bold text-base text-primary">
              Lacunes Collectives Identifiées par l&apos;IA StreetCours
            </h3>
          </div>
          <span className="font-mono text-xs text-on-surface-variant">
            Analyse diagnostique ({totalStudents} élèves)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockClassReport.identifiedMisconceptions.map((item, idx) => (
            <div key={idx} className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-error/10 text-error">
                  {Math.min(totalStudents, item.impactedStudentsCount || (idx === 0 ? 4 : 3))} élèves sur {totalStudents}
                </span>
                <span className="text-[10px] font-mono text-on-surface-variant font-bold">
                  Priorité {item.severity}
                </span>
              </div>

              <h4 className="font-headline font-bold text-xs text-primary leading-snug">
                {item.topic}
              </h4>
              <p className="font-body text-[11px] text-on-surface-variant leading-relaxed">
                <strong>Remédiation :</strong> {item.suggestedRemediation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Student List Table */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl overflow-hidden paper-shadow">
        <div className="p-4 sm:p-6 bg-surface-container-low border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-headline font-bold text-lg text-primary">
              Liste des Élèves de la Classe ({mockClassStudents.length})
            </h3>
            <p className="font-body text-xs text-on-surface-variant">
              Cliquez sur un élève pour ouvrir son dossier individuel et son plan de remédiation.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/60 border-b border-outline-variant text-[11px] font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                <th className="py-3 px-4">Matricule</th>
                <th className="py-3 px-4">Nom et Prénom</th>
                <th className="py-3 px-4 text-center">Moyenne /20</th>
                <th className="py-3 px-4 text-center">Préparation Bac</th>
                <th className="py-3 px-4 text-center">Statut Pédagogique</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockClassStudents.map((student) => (
                <StudentTableRow key={student.id} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
