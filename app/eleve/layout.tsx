'use client';

import React, { useState } from 'react';
import { StudentSidebar } from '@/components/navigation/StudentSidebar';
import { TopAppBar } from '@/components/navigation/TopAppBar';
import { TextureOverlay } from '@/components/ui/TextureOverlay';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative">
      <TextureOverlay />
      {/* Sidebar with notebook red margin line */}
      <StudentSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpen={() => setMobileMenuOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <TopAppBar onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 p-3.5 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
