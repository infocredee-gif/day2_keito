import React from 'react';

/** 会社概要-style definition rows: label column, value column, hairline between. */
export function SpecTable({rows=[],labelWidth=200,style}){
  return (
    <dl style={{margin:0,width:'100%',...style}}>
      {rows.map((r,i)=>(
        <div key={i} style={{display:'flex',gap:'var(--space-32)',alignItems:'flex-start',
          padding:'var(--space-24) 0',borderBottom:'var(--border-hairline-width) solid var(--border-hairline)'}}>
          <dt style={{flex:'none',width:labelWidth,fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',
            fontWeight:'var(--fw-medium)',color:'var(--text-primary)'}}>{r.label}</dt>
          <dd style={{margin:0,fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',
            lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',minWidth:0}}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
