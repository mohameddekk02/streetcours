'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Cachet } from '@/components/ui/Cachet';
import { TextureOverlay } from '@/components/ui/TextureOverlay';
import { useSession, DEMO_PROFILES, DemoProfile } from '@/lib/sessionContext';

export default function ConnexionEnseignantPage() {
  const router = useRouter();
  const { switchProfile, profileId } = useSession();

  const teacherProfiles = DEMO_PROFILES.filter((p) => p.role === 'enseignant');

  const handleSelect = (profile: DemoProfile) => {
    switchProfile(profile);
    router.push('/enseignant/rapport-classe');
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col justify-between relative selection:bg-primary-fixed">
      <TextureOverlay />

      <header className="p-6 border-b border-outline-variant/60 bg-surface/80 backdrop-blur-md flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary text-on-primary font-serif font-bold text-xl flex items-center justify-center">
            S
          </div>
          <div>
            <span className="font-headline font-bold text-lg text-primary block leading-none">
              StreetCours
            </span>
            <span className="font-mono text-[9px] text-secondary font-bold tracking-widest uppercase">
              Portail Enseignant
            </span>
          </div>
        </Link>

        <Link
          href="/connexion"
          className="text-xs font-mono font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
        >
          <BookOpen className="w-4 h-4 text-primary" />
          Espace Élève →
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-md bg-surface-container-lowest border-2 border-primary/40 rounded-2xl p-6 sm:p-8 paper-shadow relative">
          <div className="absolute -top-6 -right-6 hidden sm:block">
            <Cachet
              mention="CORPS ENSEIGNANT"
              code="INSPECTION-DJ"
              variant="secondary"
              rotation="left"
              size="sm"
            />
          </div>

          <div className="text-center space-y-1 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4" />
              Sélecteur de Profil — Démo
            </div>
            <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary">
              Portail Pédagogique
            </h1>
            <p className="font-body text-xs text-on-surface-variant">
              Sélectionnez un profil enseignant pour accéder au suivi de classe et à l&apos;analyse pédagogique.
            </p>
          </div>

          {/* Demo notice */}
          <div className="mb-5 p-3 bg-primary/10 border border-primary/20 rounded-xl">
            <div className="text-xs font-mono text-on-surface-variant">
              <strong className="text-primary">Mode Démo</strong> — Aucun mot de passe requis. L&apos;authentification sera implémentée après le concours.
            </div>
          </div>

          {/* Teacher Profile Card(s) */}
          <div className="space-y-2.5">
            {teacherProfiles.map((profile) => {
              const isActive = profileId === profile.id;
              return (
                <button
                  key={profile.id}
                  onClick={() => handleSelect(profile)}
                  className={`w-full flex items-center gap-3.5 p-4 rounded-xl border-2 transition-all text-left hover:scale-[1.01] ${
                    isActive
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-outline-variant hover:border-primary/50 hover:bg-surface-container-low'
                  }`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary font-serif font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-7 h-7" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="font-headline font-bold text-sm text-on-surface truncate">
                      {profile.fullName}
                    </div>
                    <div className="font-mono text-[10px] text-on-surface-variant truncate">
                      {profile.subtitle}
                    </div>
                  </div>

                  {/* Active indicator */}
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
            Vous êtes élève ?{' '}
            <Link href="/connexion" className="font-mono font-bold text-primary hover:underline">
              Espace Élève
            </Link>
          </div>
        </div>
      </main>

      <footer className="p-4 text-center font-mono text-[11px] text-on-surface-variant border-t border-outline-variant/60">
        Ministère de l&apos;Éducation Nationale et de la Formation Professionnelle • République de Djibouti
      </footer>
    </div>
  );
}
