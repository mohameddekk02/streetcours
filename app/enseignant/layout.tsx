import React from 'react';
import { TeacherSidebar } from '@/components/navigation/TeacherSidebar';
import { TopAppBar } from '@/components/navigation/TopAppBar';
import { TextureOverlay } from '@/components/ui/TextureOverlay';

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative">
      <TextureOverlay />
      <TeacherSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar
          title="Portail Enseignant & Suivi Pédagogique"
          subtitle="Suivi des Classes de Terminale & 3ème"
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
