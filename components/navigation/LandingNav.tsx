import React from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, Sparkles, UserCheck } from 'lucide-react';

export function LandingNav() {
  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant/60 paper-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-1">
          <img
            src="/logo.png"
            alt="StreetCours"
            className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-body text-sm font-medium text-on-surface">
          <Link href="/#piliers" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-primary" />
            Piliers Pédagogiques
          </Link>
          <Link href="/#parcours" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-secondary">explore</span>
            Parcours Recommandé
          </Link>
          <Link href="/#series" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-primary" />
            Séries & Brevet
          </Link>
          <Link href="/#tuteur" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-secondary" />
            Tuteur IA
          </Link>
        </nav>


        {/* Auth CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/enseignant/connexion"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-outline-variant text-xs font-mono font-bold text-on-surface hover:bg-surface-container-low transition-all"
          >
            <UserCheck className="w-4 h-4 text-secondary" />
            Espace Enseignant
          </Link>
          <Link
            href="/connexion"
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container text-xs md:text-sm font-mono font-bold transition-all shadow-sm flex items-center gap-2 hover:scale-[1.02]"
          >
            Connexion Élève
          </Link>
        </div>
      </div>
    </header>
  );
}
