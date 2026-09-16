import React from 'react';
import {Icon} from '../core/Icon.jsx';

const COLUMNS=[
  {title:'BUSINESS',links:['原料販売','機能性水OEM （混ぜ物水）','受託開発（OEM・ODM）','販売代理店募集','正規販売店検索','販売店様の声']},
  {title:'TECHNOLOGY',links:['植物由来ケイ素について','もみ殻シリカへのこだわり','研究開発・製造','エビデンス']},
  {title:'COMPANY',links:['会社概要','理念・ビジョン','サステナビリティ','お知らせ','プライバシーポリシー']}
];

function Col({title,links}){
  const [hover,setHover]=React.useState(null);
  return (
    <div style={{display:'flex',flexDirection:'column',flex:1,minWidth:160}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',fontWeight:'var(--fw-medium)',
        color:'var(--text-primary)',margin:'0 0 var(--space-16)'}}>{title}</p>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-12)'}}>
        {links.map((l,i)=>(
          <a key={i} href="#" onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
            style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',textDecoration:'none',
              color:hover===i?'var(--link-hover)':'var(--text-primary)',transition:'var(--transition-hover)'}}>{l}</a>
        ))}
      </div>
    </div>
  );
}

/** Four-column corporate footer on the #f5f6f7 surface. */
export function SiteFooter({logoSrc='assets/logo/credee-logo.webp',columns=COLUMNS,tel='0575-36-4879',hours='受付時間 平日 9:00〜17:00',company='株式会社クレディー',address='〒501-3788 岐阜県美濃市蕨生矢坪2306番地6',copyright='© 2026 株式会社クレディー',style}){
  return (
    <footer style={{display:'flex',flexDirection:'column',alignItems:'center',
      background:'var(--surface-alt)',padding:'var(--space-60) var(--space-20) var(--space-20)',...style}}>
      <div style={{width:'93.75%',maxWidth:'var(--content-max)',display:'flex',flexDirection:'column',gap:'var(--space-40)'}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-40)',alignItems:'flex-start'}}>
          {columns.map((c,i)=><Col key={i} {...c} />)}
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-12)',flex:1,minWidth:200}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',fontWeight:'var(--fw-medium)',color:'var(--text-primary)',margin:0}}>CONTACT</p>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-8)'}}>
              <Icon set="solid" name="phone-flip" size={16} color="var(--text-primary)" />
              <span style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-24)',color:'var(--text-primary)'}}>{tel}</span>
            </div>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-15)',color:'var(--text-primary)',margin:0}}>{hours}</p>
            <a href="/inquiry" style={{marginTop:'var(--space-8)',display:'inline-flex',alignItems:'center',justifyContent:'center',
              height:56,padding:'0 var(--space-24)',background:'var(--button-primary-bg)',color:'var(--button-primary-fg)',
              fontFamily:'var(--font-sans)',fontSize:'var(--fs-16)',fontWeight:'var(--fw-semibold)',textDecoration:'none'}}>お問い合わせ</a>
          </div>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-24)',alignItems:'flex-end',justifyContent:'space-between',
          paddingTop:'var(--space-24)',borderTop:'var(--border-hairline-width) solid var(--border-hairline)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
            <img src={logoSrc} alt="CREDEE" style={{height:56,width:'auto',objectFit:'contain'}} />
            <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-14)',color:'var(--text-primary)',margin:0}}>{company}</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-14)',color:'var(--text-primary)',margin:0}}>{address}</p>
          </div>
          <div style={{display:'flex',gap:'var(--space-20)',alignItems:'center',color:'var(--gray-700)'}}>
            {['instagram','square-youtube','x-twitter','tiktok'].map(n=>(
              <a key={n} href="#" style={{color:'var(--gray-700)'}}><Icon set="brands" name={n} size={32} /></a>
            ))}
          </div>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-13)',color:'var(--text-primary)',textAlign:'center',margin:0}}>{copyright}</p>
      </div>
    </footer>
  );
}
