'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

interface MathTextProps {
  content: string;
  className?: string;
  as?: React.ElementType;
}

export function MathText({ content, className = '', as: Component = 'span' }: MathTextProps) {
  if (!content) return null;

  // Split by $$...$$ for block math and $...$ for inline math
  const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
  const parts = content.split(regex);

  return (
    <Component className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2).trim();
          return <BlockMath key={index} math={math} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1).trim();
          return <InlineMath key={index} math={math} />;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </Component>
  );
}

export { InlineMath, BlockMath };
