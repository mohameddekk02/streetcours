'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GraduationCap, ShieldCheck, Sparkles, ArrowRight, User } from 'lucide-react';
import { Cachet } from '@/components/ui/Cachet';
import { TextureOverlay } from '@/components/ui/TextureOverlay';
import { useSession, DEMO_PROFILES, DemoProfile } from '@/lib/sessionContext';

export default function ConnexionPage() {
  const router = useRouter();
  const { switchProfile, profileId } = useSession();

  const studentProfiles = DEMO_PROFILES.filter((p) => p.role === 'eleve');

  const handleSelect = (profile: DemoProfile) => {
    switchProfile(profile);
    router.push('/eleve/dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col justify-between relative selection:bg-primary-fixed">
      <TextureOverlay />

      {/* Top Simple Header */}
      <header className="p-6 border-b border-outline-variant/60 bg-surface/80 backdrop-blur-md flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="StreetCours"
            className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-headline font-bold text-xl text-primary block leading-none">
            StreetCours
          </span>
        </Link>

        <Link
          href="/enseignant/connexion"
          className="text-xs font-mono font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
        >
          <ShieldCheck className="w-4 h-4 text-secondary" />
          Accès Enseignant →
        </Link>
      </header>

      {/* Center: Profile Selector */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-lg bg-surface-container-lowest border-2 border-outline-variant rounded-2xl p-6 sm:p-8 paper-shadow relative">
          {/* Decorative Stamp */}
          <div className="absolute -top-6 -right-6 hidden sm:block">
            <Cachet
              mention="ACCÈS ÉLÈVE"
              code="DJ-2025"
              variant="primary"
              rotation="right"
              size="sm"
            />
          </div>

          <div className="text-center space-y-1 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
              <GraduationCap className="w-4 h-4" />
              Sélecteur de Profil — Démo
            </div>
            <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary">
              Choisissez un Élève
            </h1>
            <p className="font-body text-xs text-on-surface-variant">
              Sélectionnez un profil de démonstration pour explorer l&apos;espace élève avec ses données réelles.
            </p>
          </div>

          {/* Demo notice */}
          <div className="mb-5 p-3 bg-secondary-container/20 border border-secondary/30 rounded-xl">
            <div className="text-xs font-mono text-on-surface-variant">
              <strong className="text-secondary">Mode Démo</strong> — Aucun mot de passe requis. L&apos;authentification Supabase sera implémentée après le concours.
            </div>
          </div>

          {/* Profile Cards */}
          <div className="space-y-2.5">
            {studentProfiles.map((profile) => {
              const isActive = profileId === profile.id;
              return (
                <button
                  key={profile.id}
                  onClick={() => handleSelect(profile)}
                  className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl border-2 transition-all text-left hover:scale-[1.01] ${
                    isActive
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-outline-variant hover:border-primary/50 hover:bg-surface-container-low'
                  }`}
                >
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-headline font-bold text-sm text-white ${
                    isActive ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`} style={{
                    backgroundColor: profile.id === 'stu-dj-0982' ? '#1a6b3c'
                      : profile.id === 'cls-2' ? '#7c3aed'
                      : profile.id === 'cls-3' ? '#0369a1'
                      : profile.id === 'cls-4' ? '#c2410c'
                      : profile.id === 'cls-5' ? '#6d28d9'
                      : '#059669',
                  }}>
                    {profile.fullName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>

                  {/* Name & subtitle */}
                  <div className="flex-1 min-w-0">
                    <div className="font-headline font-bold text-sm text-on-surface truncate">
                      {profile.fullName}
                    </div>
                    <div className="font-mono text-[10px] text-on-surface-variant truncate">
                      {profile.subtitle}
                    </div>
                  </div>

                  {/* Arrow / Active indicator */}
                  <div className="shrink-0">
                    {isActive ? (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-primary text-on-primary">
                        ACTIF
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-on-surface-variant" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/60 text-center text-xs font-body text-on-surface-variant">
            Profil enseignant ?{' '}
            <Link href="/enseignant/connexion" className="font-mono font-bold text-primary hover:underline">
              Accès Portail Pédagogique
            </Link>
          </div>
        </div>
      </main>

      <footer className="p-4 text-center font-mono text-[11px] text-on-surface-variant border-t border-outline-variant/60">
        StreetCours • Mode démo — Authentification reportée après concours
      </footer>
    </div>
  );
}
