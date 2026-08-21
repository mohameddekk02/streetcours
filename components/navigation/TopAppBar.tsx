'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Flame, Calendar, Bell, Sparkles } from 'lucide-react';
import { useStudent } from '@/lib/supabaseHooks';

interface TopAppBarProps {
  title?: string;
  subtitle?: string;
}

export function TopAppBar({
  title = 'Tableau de Bord',
  subtitle = 'Session 2025 • Programme National',
}: TopAppBarProps) {
  const student = useStudent();
  return (
    <header className="h-16 border-b border-outline-variant/60 bg-surface/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Title & context */}
      <div>
        <h1 className="font-headline font-bold text-primary text-lg md:text-xl leading-tight">
          {title}
        </h1>
        <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">
          {subtitle}
        </span>
      </div>

      {/* Center / Right widgets */}
      <div className="flex items-center gap-4">
        {/* Countdown pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant font-mono text-xs text-primary">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span>Bac National : <strong>J-92</strong></span>
        </div>

        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-secondary/30 font-mono text-xs text-secondary font-bold">
          <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>{student.streakDays} Jours</span>
        </div>


        {/* AI Tutor fast access */}
        <Link
          href="/eleve/tuteur"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary-container/50 border border-secondary/30 text-on-secondary-container font-mono text-xs font-bold hover:bg-secondary-container transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary" />
          Poser une question
        </Link>
      </div>
    </header>
  );
}
