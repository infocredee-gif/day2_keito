import React from 'react';

/** Dated news rows separated by 20%-navy hairlines. */
export function NewsList({items=[],style}){
  return (
    <ul style={{listStyle:'none',margin:0,padding:0,width:'100%',...style}}>
      {items.map((it,i)=>(
        <li key={i} style={{borderBottom:'var(--border-hairline-width) solid var(--border-hairline)'}}>
          <a href={it.href} style={{display:'flex',gap:'0 var(--news-row-gap)',alignItems:'baseline',
            padding:'var(--news-row-padding) 0',textDecoration:'none'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-14)',color:'var(--text-sub)',flex:'none'}}>{it.date}</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-16)',color:'var(--text-ink)'}}>{it.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
