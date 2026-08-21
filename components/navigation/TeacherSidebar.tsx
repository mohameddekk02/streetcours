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
  X,
  Menu,
} from 'lucide-react';
import { useClassReport } from '@/lib/supabaseHooks';
import { useSession } from '@/lib/sessionContext';
import { useRouter } from 'next/navigation';

interface TeacherSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export function TeacherSidebar({ isOpen = false, onClose, onOpen }: TeacherSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const classReport = useClassReport();
  const { logout } = useSession();

  const handleLogout = () => {
    logout();
    if (onClose) onClose();
    router.push('/');
  };

  const handleNavClick = () => {
    if (onClose) onClose();
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

  const sidebarContent = (
    <div className="flex flex-col h-full bg-surface-container-low">
      {/* Teacher Profile Header */}
      <div className="p-5 sm:p-6 pb-4 flex flex-col items-center text-center border-b border-outline-variant/40 bg-surface-container-lowest/50 relative">
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Fermer le menu"
            className="md:hidden absolute top-3 right-3 p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-primary text-on-primary font-serif font-black text-2xl flex items-center justify-center mb-2.5 shadow-md">
          <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h2 className="font-headline font-bold text-primary text-sm sm:text-base leading-tight">
          Portail Enseignant
        </h2>
        <span className="font-mono text-[10px] sm:text-[11px] text-secondary font-bold uppercase tracking-wider mt-0.5">
          {classReport.headTeacher}
        </span>
        <span className="font-mono text-[10px] text-on-surface-variant truncate max-w-[200px] mt-0.5">
          {classReport.className}
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
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
              onClick={handleNavClick}
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
          onClick={handleNavClick}
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
        >
          <Users className="w-4 h-4 text-primary" />
          <span>Changer de Profil</span>
        </Link>
        <Link
          href="/eleve/dashboard"
          onClick={handleNavClick}
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
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden md:flex w-64 bg-surface-container-low border-r-2 border-primary flex-col min-h-screen sticky top-0 h-screen z-30 shadow-[4px_0px_15px_rgba(21,30,51,0.05)]">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (Slide-out Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-4/5 max-w-xs h-full bg-surface-container-low border-r-2 border-primary z-10 shadow-2xl flex flex-col">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-outline-variant/80 px-3 py-1.5 flex items-center justify-around text-xs shadow-lg">
        <Link
          href="/enseignant/rapport-classe"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
            pathname === '/enseignant/rapport-classe' ? 'text-primary font-bold' : 'text-on-surface-variant'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span className="text-[10px] font-mono">Rapport</span>
        </Link>

        <Link
          href="/enseignant/gestion-classe"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
            pathname === '/enseignant/gestion-classe' ? 'text-primary font-bold' : 'text-on-surface-variant'
          }`}
        >
          <Users className="w-4 h-4" />
          <span className="text-[10px] font-mono">Gestion</span>
        </Link>

        <Link
          href="/enseignant/eleve-detail"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
            pathname?.startsWith('/enseignant/eleve') ? 'text-primary font-bold' : 'text-on-surface-variant'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span className="text-[10px] font-mono">Dossiers</span>
        </Link>

        <button
          onClick={onOpen || onClose}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-on-surface-variant hover:text-primary transition-colors"
        >
          <Menu className="w-4 h-4" />
          <span className="text-[10px] font-mono">Menu</span>
        </button>
      </nav>
    </>
  );
}

