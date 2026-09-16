import React from 'react';
import {Button} from '../core/Button.jsx';

/** Image-over-copy block used for Technology / Evidence / Company on the homepage. */
export function FeatureCard({label,image,imageAlt='',title,body,ctaLabel,ctaHref,style}){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-20)',flex:1,minWidth:0,...style}}>
      {label?<p style={{fontFamily:'var(--font-mincho)',fontSize:'var(--text-section-label)',color:'var(--text-primary)',textAlign:'center',margin:0}}>{label}</p>:null}
      {image?<img src={image} alt={imageAlt} style={{width:'100%',height:260,objectFit:'cover',borderRadius:'var(--radius-none)'}} />:null}
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-12)',padding:'var(--space-4) 0 0'}}>
        {title?<p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-18)',fontWeight:'var(--fw-medium)',lineHeight:'var(--lh-tight)',color:'var(--text-primary)',margin:0}}>{title}</p>:null}
        {body?<p style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-13)',fontWeight:'var(--fw-regular)',lineHeight:'var(--lh-relaxed)',color:'var(--text-primary)',margin:0}}>{body}</p>:null}
      </div>
      {ctaLabel?<Button variant="tertiary" size="md" icon="arrow_forward" href={ctaHref} style={{marginTop:'var(--space-24)'}}>{ctaLabel}</Button>:null}
    </div>
  );
}
