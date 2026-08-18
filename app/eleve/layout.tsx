import React from 'react';
import { StudentSidebar } from '@/components/navigation/StudentSidebar';
import { TopAppBar } from '@/components/navigation/TopAppBar';
import { TextureOverlay } from '@/components/ui/TextureOverlay';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative">
      <TextureOverlay />
      {/* Sidebar with notebook red margin line */}
      <StudentSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
