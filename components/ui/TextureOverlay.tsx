import React from 'react';

export function TextureOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 opacity-[0.025] z-50 mix-blend-multiply"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #191c1e 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }}
    />
  );
}
