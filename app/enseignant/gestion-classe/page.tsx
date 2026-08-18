'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Plus, Calendar, BookOpen, Send, CheckCircle2, Clock, FileCheck } from 'lucide-react';
import { useExams, useClassReport } from '@/lib/supabaseHooks';

export default function GestionClassePage() {
  const mockExamsList = useExams();
  const mockClassReport = useClassReport();
  const [selectedExam, setSelectedExam] = useState(mockExamsList[0]?.id || 'dj-bac-2024-math-s');
  const [dueDate, setDueDate] = useState('2025-05-20');
  const [targetGroup, setTargetGroup] = useState('all');
  const [isSuccess, setIsSuccess] = useState(false);


  const handleAssign = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const assignedTasks = [
    {
      id: 'task-1',
      title: 'Devoir Blanc : Bac 2024 Mathématiques Série S1',
      assignedDate: '10 Mai 2025',
      dueDate: '18 Mai 2025',
      submissionsCount: 28,
      totalStudents: 34,
      status: 'En cours de collecte',
    },
    {
      id: 'task-2',
      title: 'Devoir Maison : Équilibre Acido-Basique & Titrage pH',
      assignedDate: '02 Mai 2025',
      dueDate: '09 Mai 2025',
      submissionsCount: 34,
      totalStudents: 34,
      status: 'Clôturé & Corrigé',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
            Pilotage Pédagogique
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Gestion de Classe & Attribution des Devoirs
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">
            {mockClassReport.className} • Programmer des examens blancs et suivre les rendus.
          </p>
        </div>
      </div>

      {/* Assignment Creation Form */}
      <div className="bg-surface-container-lowest border-2 border-primary/30 rounded-2xl p-6 sm:p-8 paper-shadow space-y-6">
        <div className="flex items-center gap-2 border-b border-outline-variant pb-3">
          <Plus className="w-5 h-5 text-primary" />
          <h2 className="font-headline font-bold text-lg text-primary">
            Programmer une Nouvelle Épreuve pour la Classe
          </h2>
        </div>

        <form onSubmit={handleAssign} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                Choisir le Sujet d&apos;Annales
              </label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm text-on-surface focus:border-primary outline-none"
              >
                {mockExamsList.map((exam) => (
                  <option key={exam.id} value={exam.id}>
                    {exam.code} — {exam.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                Date Limite de Rendu
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm text-on-surface focus:border-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-on-surface mb-1">
                Destinataires
              </label>
              <select
                value={targetGroup}
                onChange={(e) => setTargetGroup(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low font-body text-sm text-on-surface focus:border-primary outline-none"
              >
                <option value="all">Toute la classe (34 élèves)</option>
                <option value="soutien">Groupe de soutien (Élèves &lt; 12/20)</option>
                <option value="excellence">Groupe d&apos;excellence (Élèves &gt; 15/20)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-xs text-on-surface-variant">
              Une notification sera envoyée sur le tableau de bord de chaque élève concerné.
            </span>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Assigner à la classe</span>
            </button>
          </div>
        </form>

        {isSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-mono font-bold text-emerald-800 flex items-center gap-2 animate-in fade-in duration-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            L&apos;épreuve a été assignée avec succès à la classe !
          </div>
        )}
      </div>

      {/* Active and Past Assignments */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl overflow-hidden paper-shadow">
        <div className="p-4 bg-surface-container-low border-b border-outline-variant">
          <h3 className="font-headline font-bold text-base text-primary">
            Devoirs et Épreuves en Cours
          </h3>
        </div>

        <div className="divide-y divide-outline-variant/40">
          {assignedTasks.map((task) => (
            <div
              key={task.id}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-container-low/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary/10 text-primary">
                    {task.status}
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">
                    Assigné le {task.assignedDate}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-base text-primary">
                  {task.title}
                </h4>
                <p className="font-body text-xs text-on-surface-variant">
                  Échéance : <strong>{task.dueDate}</strong>
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <span className="font-mono font-bold text-base text-primary block">
                    {task.submissionsCount} / {task.totalStudents} copies
                  </span>
                  <div className="w-32 h-2 rounded-full bg-surface-container-high overflow-hidden mt-1">
                    <div
                      className="h-full rounded-full bg-emerald-600"
                      style={{ width: `${(task.submissionsCount / task.totalStudents) * 100}%` }}
                    />
                  </div>
                </div>

                <Link
                  href="/enseignant/rapport-classe"
                  className="px-3.5 py-1.5 rounded-lg border border-outline-variant hover:border-primary text-xs font-mono font-bold text-primary transition-colors"
                >
                  Voir les rendus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
