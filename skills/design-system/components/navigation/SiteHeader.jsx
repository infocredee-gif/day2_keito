import React from 'react';
import {Icon} from '../core/Icon.jsx';

const NAV=[
  {label:'植物由来ケイ素について',menu:true},
  {label:'研究開発・製造',menu:true},
  {label:'製造のご相談',menu:true},
  {label:'販売のご相談',menu:true},
  {label:'ペット製品',href:'/evidence'},
  {label:'会社情報',menu:true}
];

/** Transparent site header: CREDEE mark, caret-down nav, shop link, hamburger below 1024. */
export function SiteHeader({logoSrc='assets/logo/credee-logo.webp',items=NAV,activeLabel,onSelect,onMenu,compact=false,style}){
  const [hover,setHover]=React.useState(null);
  return (
    <header style={{display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',
      width:'100%',padding:compact?'var(--space-12)':'var(--space-20) var(--page-gutter)',
      background:'transparent',...style}}>
      <a href="/" style={{flex:'none',display:'block'}}>
        <img src={logoSrc} alt="CREDEE 株式会社クレディー" style={{height:compact?56:80,width:'auto',objectFit:'contain'}} />
      </a>
      <nav style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'var(--space-24)',flexWrap:'wrap',justifyContent:'flex-end'}}>
        {items.map((it,i)=>{
          const on=hover===i||activeLabel===it.label;
          return (
            <button key={i} type="button" onClick={()=>onSelect&&onSelect(it)}
              onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
              style={{display:'inline-flex',alignItems:'center',gap:'var(--space-4)',background:'transparent',
                border:'none',cursor:'pointer',padding:0,fontFamily:'var(--font-sans)',fontSize:'var(--text-nav)',
                fontWeight:'var(--fw-regular)',lineHeight:'var(--lh-tight)',
                color:on?'var(--link-hover)':'var(--text-primary)',transition:'var(--transition-hover)'}}>
              {it.label}
              {it.menu?<Icon set="solid" name="caret-down" size={13} />:null}
            </button>
          );
        })}
        <a href="https://silicanoaruseikatsu.com/" target="_blank" rel="noreferrer"
          style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-nav)',color:'var(--gray-700)',textDecoration:'none'}}>オンラインショップ ↗</a>
        <button type="button" onClick={onMenu} aria-label="メニュー"
          style={{background:'transparent',border:'none',cursor:'pointer',color:'var(--text-primary)',padding:0}}>
          <Icon set="solid" name="bars" size={24} />
        </button>
      </nav>
    </header>
  );
}
