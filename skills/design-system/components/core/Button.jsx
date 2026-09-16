import React from 'react';

const VARIANTS={
  primary:{background:'var(--button-primary-bg)',color:'var(--button-primary-fg)',border:'none'},
  secondary:{background:'var(--button-secondary-bg)',color:'var(--button-secondary-fg)',border:'none'},
  tertiary:{background:'var(--button-tertiary-bg)',color:'var(--button-tertiary-fg)',border:'none'},
  outline:{background:'transparent',color:'var(--navy-700)',border:'1px solid var(--border-strong)'}
};
const SIZES={
  lg:{minHeight:75,minWidth:317,fontSize:'var(--fs-18)',padding:'0 30px'},
  md:{minHeight:68,minWidth:280,fontSize:'var(--fs-20)',padding:'0 20px'},
  sm:{minHeight:48,minWidth:0,fontSize:'var(--fs-15)',padding:'0 20px'}
};

/** Square, full-bleed CTA button. The site never rounds its buttons. */
export function Button({variant='primary',size='lg',children,icon,href,disabled=false,fullWidth=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const Tag=href?'a':'button';
  const base={
    display:'inline-flex',alignItems:'center',justifyContent:icon?'space-between':'center',
    gap:'var(--space-12)',boxSizing:'border-box',width:fullWidth?'100%':'auto',
    fontFamily:'var(--font-sans)',fontWeight:'var(--fw-semibold)',lineHeight:'var(--lh-tight)',
    borderRadius:'var(--radius-none)',cursor:disabled?'default':'pointer',textDecoration:'none',
    opacity:disabled?0.45:1,transition:'var(--transition-hover)',
    boxShadow:hover&&!disabled?'var(--shadow-hover)':'var(--shadow-none)',
    ...SIZES[size],...VARIANTS[variant],...style
  };
  return (
    <Tag href={href} onClick={disabled?undefined:onClick} style={base} aria-disabled={disabled||undefined}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}>
      <span>{children}</span>
      {icon?<span className="material-icons" aria-hidden="true" style={{fontSize:'var(--fs-24)',padding:'0 0 0 var(--space-15)'}}>{icon}</span>:null}
    </Tag>
  );
}
