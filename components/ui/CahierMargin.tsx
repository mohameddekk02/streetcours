import React from 'react';

interface CahierMarginProps {
  children: React.ReactNode;
  className?: string;
  showMarginLine?: boolean;
}

export function CahierMargin({
  children,
  className = '',
  showMarginLine = true,
}: CahierMarginProps) {
  return (
    <div className={`relative ${showMarginLine ? 'notebook-margin pl-8 md:pl-14' : ''} ${className}`}>
      {children}
    </div>
  );
}
