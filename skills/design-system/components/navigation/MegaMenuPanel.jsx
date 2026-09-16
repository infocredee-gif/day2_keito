import React from 'react';
import {Icon} from '../core/Icon.jsx';

/** Dropdown/drawer panel opened from a header nav item: title row plus chevron links. */
export function MegaMenuPanel({title,links=[],accent='var(--orange-400)',onClose,style}){
  const [hover,setHover]=React.useState(null);
  return (
    <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-modal)',
      padding:'var(--space-24)',minWidth:320,maxWidth:420,...style}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-16)',paddingBottom:'var(--space-16)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-16)',fontWeight:'var(--fw-medium)',color:'var(--text-ink)',margin:0}}>{title}</p>
        {onClose?<button type="button" onClick={onClose} aria-label="閉じる"
          style={{background:'transparent',border:'none',cursor:'pointer',color:'var(--slate-500)',padding:0}}>
          <Icon set="solid" name="circle-xmark" size={24} /></button>:null}
      </div>
      <div style={{height:2,background:accent,width:40}}></div>
      <div style={{display:'flex',flexDirection:'column'}}>
        {links.map((l,i)=>(
          <a key={i} href={l.href} onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
            style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-16)',
              padding:'var(--space-16) 0',textDecoration:'none',
              borderBottom:'var(--border-hairline-width) solid var(--border-sky)',
              color:hover===i?accent:'var(--gray-800)',transition:'var(--transition-hover)'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-16)',fontWeight:'var(--fw-medium)'}}>{l.label}</span>
            <Icon name="chevron_right" size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
