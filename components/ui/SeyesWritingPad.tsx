'use client';

import React, { useState } from 'react';
import { Edit3, CheckCircle, RotateCcw } from 'lucide-react';

interface SeyesWritingPadProps {
  initialContent?: string;
  onSave?: (text: string) => void;
  onChange?: (text: string) => void;
  placeholder?: string;
  className?: string;
}

export function SeyesWritingPad({
  initialContent = '',
  onSave,
  onChange,
  placeholder = "Rédigez votre démonstration ou développement ici comme sur votre copie d'examen...",
  className = '',
}: SeyesWritingPadProps) {
  const [content, setContent] = useState(initialContent);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setContent(val);
    if (onChange) onChange(val);
  };


  const handleSave = () => {
    if (onSave) onSave(content);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleClear = () => {
    if (confirm('Voulez-vous réinitialiser votre brouillon ?')) {
      setContent('');
    }
  };

  return (
    <div className={`border-2 border-outline-variant rounded-xl overflow-hidden paper-shadow bg-surface-container-lowest ${className}`}>
      {/* Top Header of the Copy */}
      <div className="bg-surface-container-low border-b border-outline-variant px-3 sm:px-4 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Edit3 className="w-4 h-4 text-primary shrink-0" />
          <span className="font-mono text-[11px] sm:text-xs font-bold text-primary tracking-wider uppercase">
            Copie d&apos;examen — Lignage Séyès
          </span>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={handleClear}
            className="text-xs font-mono text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 px-2 py-1 rounded"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Effacer</span>
          </button>
          <button
            onClick={handleSave}
            className="text-xs font-mono font-bold bg-primary text-on-primary hover:bg-primary-container transition-colors flex items-center gap-1 px-3 py-1 rounded-lg shadow-xs"
          >
            {isSaved ? <CheckCircle className="w-3.5 h-3.5 text-emerald-300" /> : null}
            <span>{isSaved ? 'Enregistré' : 'Enregistrer'}</span>
          </button>
        </div>
      </div>

      {/* Seyes Grid Textarea Area */}
      <div className="relative p-3 sm:p-6 pt-3 sm:pt-4 seyes-grid min-h-[320px] sm:min-h-[360px]">
        {/* Notebook Red Margin Line (Adaptive on Mobile) */}
        <div className="absolute top-0 bottom-0 left-[24px] sm:left-[60px] w-[2px] bg-error/70 pointer-events-none" />

        <textarea
          value={content}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-full min-h-[280px] sm:min-h-[320px] bg-transparent resize-y outline-none pl-8 sm:pl-16 font-body text-sm sm:text-base text-on-background leading-[28px] sm:leading-[32px] placeholder:text-outline-variant selection:bg-primary-fixed"
          style={{
            lineHeight: '28px',
          }}
        />
      </div>

      {/* Footer Info */}
      <div className="bg-surface-container-low border-t border-outline-variant px-3 sm:px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-on-surface-variant">
        <span>Marge rouge : réservée aux annotations</span>
        <span>{content.length} caractères rédigés</span>
      </div>
    </div>
  );
}
