'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ── Types ──────────────────────────────────────────────────────────
export type SessionRole = 'eleve' | 'enseignant';

export interface DemoProfile {
  id: string;
  fullName: string;
  role: SessionRole;
  subtitle: string; // e.g. "Terminale S1 • Bac 2025" or "Inspecteur MENFOP"
  avatarUrl?: string;
}

export interface SessionState {
  role: SessionRole;
  profileId: string;       // e.g. 'stu-dj-0982' or 'cls-2'
  profileName: string;
  isReady: boolean;        // true once hydrated from localStorage
}

interface SessionContextValue extends SessionState {
  /** Switch to a profile. Persists to localStorage. */
  switchProfile: (profile: DemoProfile) => void;
  /** Clear session and return to landing */
  logout: () => void;
}

// ── Available demo profiles (must match Supabase seed data) ────────
export const DEMO_PROFILES: DemoProfile[] = [
  {
    id: 'stu-dj-0982',
    fullName: 'Ali Youssouf Farah',
    role: 'eleve',
    subtitle: 'Terminale S1 • Excellence',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=AYF&backgroundColor=1a6b3c',
  },
  {
    id: 'cls-2',
    fullName: 'Fatouma Hassan Gouled',
    role: 'eleve',
    subtitle: 'Terminale S1 • Excellence',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=FHG&backgroundColor=7c3aed',
  },
  {
    id: 'cls-3',
    fullName: 'Mohamed Omar Moussa',
    role: 'eleve',
    subtitle: 'Terminale S1 • Régulier',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=MOM&backgroundColor=0369a1',
  },
  {
    id: 'cls-4',
    fullName: 'Ayan Daher Barkhad',
    role: 'eleve',
    subtitle: 'Terminale S1 • Besoin de soutien',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=ADB&backgroundColor=c2410c',
  },
  {
    id: 'cls-5',
    fullName: 'Ibrahim Warsama Aden',
    role: 'eleve',
    subtitle: 'Terminale S1 • En difficulté',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=IWA&backgroundColor=6d28d9',
  },
  {
    id: 'cls-6',
    fullName: 'Kaltoun Farah Rayaleh',
    role: 'eleve',
    subtitle: 'Terminale S1 • Régulier',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=KFR&backgroundColor=059669',
  },
  {
    id: 'teacher-1',
    fullName: 'Prof. Idriss Farah',
    role: 'enseignant',
    subtitle: 'Professeur Référent • Mathématiques',
  },
];


// ── Storage key ────────────────────────────────────────────────────
const STORAGE_KEY = 'streetcours_demo_session';

// ── Default state ──────────────────────────────────────────────────
const DEFAULT_STATE: SessionState = {
  role: 'eleve',
  profileId: 'stu-dj-0982',
  profileName: 'Ali Youssouf Farah',
  isReady: false,
};

// ── Context ────────────────────────────────────────────────────────
const SessionContext = createContext<SessionContextValue>({
  ...DEFAULT_STATE,
  switchProfile: () => {},
  logout: () => {},
});

// ── Provider ───────────────────────────────────────────────────────
export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SessionState>(DEFAULT_STATE);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SessionState>;
        setState({
          role: parsed.role || DEFAULT_STATE.role,
          profileId: parsed.profileId || DEFAULT_STATE.profileId,
          profileName: parsed.profileName || DEFAULT_STATE.profileName,
          isReady: true,
        });
      } else {
        setState((s) => ({ ...s, isReady: true }));
      }
    } catch {
      setState((s) => ({ ...s, isReady: true }));
    }
  }, []);

  const switchProfile = useCallback((profile: DemoProfile) => {
    const next: SessionState = {
      role: profile.role,
      profileId: profile.id,
      profileName: profile.fullName,
      isReady: true,
    };
    setState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const logout = useCallback(() => {
    setState({ ...DEFAULT_STATE, isReady: true });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return (
    <SessionContext.Provider value={{ ...state, switchProfile, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

// ── Hook ───────────────────────────────────────────────────────────
export function useSession() {
  return useContext(SessionContext);
}
