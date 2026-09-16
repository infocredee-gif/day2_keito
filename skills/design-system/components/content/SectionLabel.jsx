import React from 'react';

/** The English one-word section label ("Message", "Technology", "Evidence", "Company"). */
export function SectionLabel({children,align='center',size='var(--text-section-label)',color='var(--text-primary)',style}){
  return (
    <p style={{fontFamily:'var(--font-mincho)',fontSize:size,fontWeight:'var(--fw-regular)',
      lineHeight:'var(--lh-tight)',color,textAlign:align,margin:0,...style}}>{children}</p>
  );
}
