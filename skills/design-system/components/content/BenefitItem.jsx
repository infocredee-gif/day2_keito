import React from 'react';

/** Illustration + title + one-line body, used for the OEM merit grid. */
export function BenefitItem({icon,title,body,style}){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--space-12)',
      textAlign:'center',padding:'var(--space-24) var(--space-16)',flex:1,minWidth:0,...style}}>
      {icon?<img src={icon} alt="" style={{width:80,height:80,objectFit:'contain'}} />:null}
      <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-16)',fontWeight:'var(--fw-semibold)',color:'var(--text-primary)',margin:0}}>{title}</p>
      {body?<p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-14)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>{body}</p>:null}
    </div>
  );
}
