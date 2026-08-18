'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Award, AlertCircle } from 'lucide-react';
import { ClassStudent } from '@/types';

interface StudentTableRowProps {
  student: ClassStudent;
}

export function StudentTableRow({ student }: StudentTableRowProps) {
  const getStatusBadge = (status: ClassStudent['status']) => {
    switch (status) {
      case 'Excellence':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800">
            <Award className="w-3 h-3" />
            Excellence
          </span>
        );
      case 'Régulier':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-100 text-blue-800">
            Régulier
          </span>
        );
      case 'Besoin de soutien':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800">
            <AlertCircle className="w-3 h-3" />
            Soutien Requis
          </span>
        );
      case 'En difficulté':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3" />
            Urgent
          </span>
        );
    }
  };

  return (
    <tr className="border-b border-outline-variant/40 hover:bg-surface-container-low transition-colors group">
      <td className="py-3.5 px-4 font-mono text-xs text-on-surface-variant font-medium">
        {student.matricule}
      </td>
      <td className="py-3.5 px-4">
        <Link
          href={`/enseignant/eleve/${student.id}`}
          className="font-headline font-semibold text-primary hover:text-primary-container transition-colors flex items-center gap-2"
        >
          {student.fullName}
        </Link>
        <div className="text-xs font-body text-on-surface-variant">
          Points forts : {student.strongSubjects.join(', ')}
        </div>
      </td>
      <td className="py-3.5 px-4 text-center">
        <span className="font-mono text-sm font-bold text-on-surface">
          {student.averageScore.toFixed(1)}/20
        </span>
      </td>
      <td className="py-3.5 px-4 text-center">
        <div className="inline-flex items-center gap-1.5">
          <div className="w-16 h-2 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className={`h-full rounded-full ${
                student.readinessScore >= 75
                  ? 'bg-emerald-600'
                  : student.readinessScore >= 50
                  ? 'bg-secondary'
                  : 'bg-error'
              }`}
              style={{ width: `${student.readinessScore}%` }}
            />
          </div>
          <span className="font-mono text-xs font-bold text-on-surface">
            {student.readinessScore}%
          </span>
        </div>
      </td>
      <td className="py-3.5 px-4 text-center">
        {getStatusBadge(student.status)}
      </td>
      <td className="py-3.5 px-4 text-right">
        <Link
          href={`/enseignant/eleve/${student.id}`}
          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary hover:text-primary-container px-3 py-1.5 rounded-lg border border-outline-variant hover:border-primary transition-all group-hover:translate-x-0.5"
        >
          Dossier
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </td>
    </tr>
  );
}
