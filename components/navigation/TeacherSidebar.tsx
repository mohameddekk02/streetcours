'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  BarChart3,
  UserCheck,
  BookOpen,
  FileSignature,
  Settings,
  LogOut,
  ShieldCheck,
} from 'lucide-react';
import { useClassReport } from '@/lib/supabaseHooks';
import { useSession } from '@/lib/sessionContext';
import { useRouter } from 'next/navigation';

export function TeacherSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const classReport = useClassReport();
  const { logout } = useSession();

  const handleLogout = () => {
    logout();
    router.push('/');
  };


  const navItems = [
    {
      label: 'Rapport de Classe',
      href: '/enseignant/rapport-classe',
      icon: BarChart3,
    },
    {
      label: 'Gestion de Classe',
      href: '/enseignant/gestion-classe',
      icon: Users,
    },
    {
      label: 'Dossier Élève Détaillé',
      href: '/enseignant/eleve-detail',
      icon: UserCheck,
    },
  ];

  return (
    <aside className="w-64 bg-surface-container-low border-r-2 border-primary flex flex-col min-h-screen sticky top-0 h-screen z-30 shadow-[4px_0px_15px_rgba(21,30,51,0.05)]">
      {/* Teacher Profile Header */}
      <div className="p-6 pb-4 flex flex-col items-center text-center border-b border-outline-variant/40 bg-surface-container-lowest/50">
        <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary font-serif font-black text-2xl flex items-center justify-center mb-3 shadow-md">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="font-headline font-bold text-primary text-base leading-tight">
          Portail Enseignant
        </h2>
        <span className="font-mono text-[11px] text-secondary font-bold uppercase tracking-wider mt-0.5">
          {classReport.headTeacher}
        </span>
        <span className="font-mono text-[10px] text-on-surface-variant truncate max-w-[200px] mt-0.5">
          {classReport.className}
        </span>
      </div>


      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface-variant">
          Pilotage Pédagogique
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/enseignant/rapport-classe' && pathname?.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-body text-xs font-medium transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold shadow-sm translate-x-1'
                  : 'text-on-surface hover:bg-surface-container-high hover:translate-x-0.5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-on-primary' : 'text-primary'}`} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Exit to Student Portal */}
      <div className="p-3 border-t border-outline-variant/40 bg-surface-container-lowest/50 space-y-1">
        <Link
          href="/enseignant/connexion"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
        >
          <Users className="w-4 h-4 text-primary" />
          <span>Changer de Profil</span>
        </Link>
        <Link
          href="/eleve/dashboard"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-secondary hover:bg-secondary-container/20 transition-colors"
        >
          <BookOpen className="w-4 h-4 text-secondary" />
          <span>Vue Espace Élève</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-error hover:bg-error-container/20 transition-colors"
        >
          <LogOut className="w-4 h-4 text-error" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}

