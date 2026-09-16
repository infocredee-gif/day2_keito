import React from 'react';

/** Wrapper over the two icon fonts the site ships: Material Icons (ligatures) and Font Awesome 6. */
export function Icon({name,set='material',size=24,color='currentColor',style,...rest}){
  if(set==='material'){
    return <span className="material-icons" aria-hidden="true" style={{fontSize:size,color,...style}} {...rest}>{name}</span>;
  }
  const cls=(set==='brands'?'fa-brands':'fa-solid')+' fa-'+name;
  return <span className={cls} aria-hidden="true" style={{fontSize:size,color,...style}} {...rest}></span>;
}
