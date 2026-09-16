import React from 'react';

/** Editorial heading in mincho. level 1 = hero (heavy display face), level 2 = subhead with the 3px orange rule. */
export function MinchoHeading({level=2,children,rule=level===2,overImage=false,color,size,align='left',style}){
  const Tag=level===1?'h1':level===2?'h2':'h3';
  const isHero=level===1;
  return (
    <Tag style={{
      fontFamily:isHero?'var(--font-mincho-display)':'var(--font-mincho)',
      fontSize:size||(isHero?'var(--text-hero)':'var(--text-h2)'),
      fontWeight:isHero?'var(--fw-bold)':'var(--fw-regular)',
      lineHeight:'var(--lh-tight)',
      color:color||(isHero?'var(--navy-700)':'var(--text-sub)'),
      textAlign:align,margin:0,
      padding:rule?'20px 30px 30px':0,
      borderLeft:rule?'var(--rule-accent-width) solid var(--rule-accent)':'none',
      textShadow:overImage?'var(--text-shadow-over-image)':'none',
      ...style}}>{children}</Tag>
  );
}
