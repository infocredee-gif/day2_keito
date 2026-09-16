import React from 'react';

/** Portrait plus role/name, used for the president's letter and the advisory researchers. */
export function PersonCard({photo,role,name,align='left',width=280,style}){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-12)',width,alignItems:align==='center'?'center':'flex-start',...style}}>
      {photo?<img src={photo} alt={name||''} style={{width:'100%',aspectRatio:'3 / 4',objectFit:'cover'}} />:null}
      {role?<p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-13)',lineHeight:'var(--lh-relaxed)',color:'var(--text-muted)',margin:0,textAlign:align}}>{role}</p>:null}
      {name?<p style={{fontFamily:'var(--font-mincho)',fontSize:'var(--fs-22)',color:'var(--text-primary)',margin:0,textAlign:align}}>{name}</p>:null}
    </div>
  );
}
