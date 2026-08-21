'use client';

import React, { useState } from 'react';
import { TeacherSidebar } from '@/components/navigation/TeacherSidebar';
import { TopAppBar } from '@/components/navigation/TopAppBar';
import { TextureOverlay } from '@/components/ui/TextureOverlay';

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative">
      <TextureOverlay />
      <TeacherSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpen={() => setMobileMenuOpen(true)}
      />

      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <TopAppBar
          title="Portail Enseignant & Suivi Pédagogique"
          subtitle="Suivi des Classes de Terminale & 3ème"
          onMenuClick={() => setMobileMenuOpen(true)}
        />
        <main className="flex-1 p-3.5 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
