'use client';

import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, Pause, Play } from 'lucide-react';

interface ExamCountdownProps {
  initialMinutes?: number;
  onTimeUp?: () => void;
  className?: string;
}

export function ExamCountdown({
  initialMinutes = 240, // 4h default for Bac Maths
  onTimeUp,
  className = '',
}: ExamCountdownProps) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      if (onTimeUp) onTimeUp();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft, onTimeUp]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const isLowTime = secondsLeft < 1800; // < 30 min

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl border ${
        isLowTime
          ? 'bg-error-container/20 border-error text-error animate-pulse'
          : 'bg-surface-container-low border-outline-variant text-primary'
      } ${className}`}
    >
      <Clock className={`w-5 h-5 ${isLowTime ? 'text-error' : 'text-primary'}`} />
      <div className="flex flex-col">
        <span className="font-mono text-[10px] uppercase font-bold text-on-surface-variant leading-none">
          Temps Restant
        </span>
        <span className="font-mono text-lg font-bold tracking-wider leading-tight">
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}
        </span>
      </div>

      <button
        onClick={() => setIsActive(!isActive)}
        title={isActive ? 'Mettre en pause' : 'Reprendre'}
        className="ml-2 p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors"
      >
        {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {isLowTime && (
        <span className="flex items-center text-xs font-mono font-bold">
          <AlertTriangle className="w-3.5 h-3.5 mr-1" />
          Fin imminente !
        </span>
      )}
    </div>
  );
}
