import React from 'react';
import {Icon} from './Icon.jsx';

/** Inline text link with a trailing Material glyph — the site's standard "read on" affordance. */
export function ArrowLink({children,href,glyph='arrow_forward',color='var(--text-primary)',size='var(--fs-16)',style,...rest}){
  const [hover,setHover]=React.useState(false);
  return (
    <a href={href} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'inline-flex',alignItems:'center',gap:'var(--space-8)',fontFamily:'var(--font-sans)',
        fontSize:size,fontWeight:'var(--fw-medium)',lineHeight:'var(--lh-tight)',textDecoration:'none',
        color:hover?'var(--link-hover)':color,transition:'var(--transition-hover)',...style}} {...rest}>
      {children}<Icon name={glyph} size="1.2em" />
    </a>
  );
}
