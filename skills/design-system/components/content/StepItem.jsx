import React from 'react';

/** Numbered STEP row from the OEM・ODM 製造フロー. */
export function StepItem({n,title,body,style}){
  return (
    <div style={{display:'flex',gap:'var(--space-24)',alignItems:'flex-start',
      padding:'var(--space-24) 0',borderBottom:'var(--border-hairline-width) solid var(--border-hairline)',...style}}>
      <div style={{flex:'none',width:72,textAlign:'center'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-13)',fontWeight:'var(--fw-medium)',letterSpacing:'0.08em',color:'var(--text-muted)',margin:0}}>STEP</p>
        <p style={{fontFamily:'var(--font-mincho-display)',fontSize:'var(--fs-40)',color:'var(--orange-400)',lineHeight:1.1,margin:0}}>{n}</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)',minWidth:0}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-20)',fontWeight:'var(--fw-semibold)',color:'var(--text-primary)',margin:0}}>{title}</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>{body}</p>
      </div>
    </div>
  );
}
