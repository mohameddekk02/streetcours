'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Target,
  Compass,
  FileCheck2,
  Bot,
  Layers,
  BookOpen,
  Award,
  History,
  User,
  LogOut,
  PenTool,
  RefreshCw,
} from 'lucide-react';
import { useStudent } from '@/lib/supabaseHooks';
import { useSession } from '@/lib/sessionContext';

export function StudentSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const student = useStudent();
  const { profileName, logout } = useSession();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const initials = student.fullName
    ? student.fullName
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'AY';

  const navItems = [
    {
      label: 'Tableau de bord',
      href: '/eleve/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'Compétences Matière',
      href: '/eleve/competences',
      icon: Target,
    },
    {
      label: 'Parcours Recommandé',
      href: '/eleve/parcours',
      icon: Compass,
    },
    {
      label: 'Exercice Guidé',
      href: '/eleve/exercice',
      icon: PenTool,
    },
    {
      label: 'Tuteur Socratique IA',
      href: '/eleve/tuteur',
      icon: Bot,
      badge: 'IA',
    },
    {
      label: 'Sélection d\u2019Épreuves',
      href: '/eleve/examens',
      icon: BookOpen,
    },
    {
      label: 'Copie Examen Blanc',
      href: '/eleve/examens/copie',
      icon: FileCheck2,
    },
    {
      label: 'Rapport de Correction',
      href: '/eleve/examens/correction',
      icon: Award,
    },
    {
      label: 'Fiches Express',
      href: '/eleve/fiches',
      icon: Layers,
    },
    {
      label: 'Historique & Progrès',
      href: '/eleve/historique',
      icon: History,
    },
  ];

  return (
    <aside className="w-64 bg-surface-container-low border-r-2 border-error/70 flex flex-col min-h-screen sticky top-0 h-screen z-30 shadow-[4px_0px_15px_rgba(21,30,51,0.05)]">
      {/* Student Profile Header in Sidebar with Initials Avatar */}
      <div className="p-6 pb-4 flex flex-col items-center text-center border-b border-outline-variant/40 bg-surface-container-lowest/50">
        <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary font-headline font-black text-xl flex items-center justify-center mb-3 shadow-md border-2 border-primary/20">
          {initials}
        </div>
        <h2 className="font-headline font-bold text-primary text-base leading-tight">
          {student.fullName}
        </h2>
        <span className="font-mono text-[11px] text-secondary font-bold uppercase tracking-wider mt-0.5">
          Terminale S1 • Bac 2025
        </span>
        <span className="font-mono text-[10px] text-on-surface-variant truncate max-w-[200px] mt-0.5">
          {student.schoolName}
        </span>
      </div>



      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/eleve/dashboard' && pathname?.startsWith(item.href));
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
              {item.badge && (
                <span
                  className={`text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-secondary-container text-on-secondary-container'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile / Logout action */}
      <div className="p-3 border-t border-outline-variant/40 bg-surface-container-lowest/50 space-y-1">
        <Link
          href="/connexion"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-secondary hover:bg-secondary-container/20 transition-colors"
        >
          <RefreshCw className="w-4 h-4 text-secondary" />
          <span>Changer de Profil</span>
        </Link>
        <Link
          href="/profil/config"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <User className="w-4 h-4 text-on-surface-variant" />
          <span>Modifier mon Profil</span>
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


