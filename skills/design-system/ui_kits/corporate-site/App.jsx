const {SiteHeader,SiteFooter,MegaMenuPanel}=window.CREDEEDesignSystem_2e31d6;
const LOGO='../../assets/logo/credee-logo.webp';

const MENUS={
  '植物由来ケイ素について':[{label:'シリカ(ケイ素)について'},{label:'シリカの有効性について'},{label:'シリカと人の深いかかわり'},{label:'シリカの摂取方法'}],
  '研究開発・製造':[{label:'研究開発ストーリー'},{label:'製造'},{label:'籾殻にこだわる理由'},{label:'エビデンス'}],
  '製造のご相談':[{label:'機能性水のOEM'},{label:'化粧品'},{label:'機能性表示食品'},{label:'濃縮液'}],
  '販売のご相談':[{label:'販売店パートナー'},{label:'植物由来シリカ商品'},{label:'原料販売'}],
  '会社情報':[{label:'代表挨拶'},{label:'企業理念'},{label:'会社概要'},{label:'サステナビリティ'}]
};

function App(){
  const [page,setPage]=React.useState('home');
  const [menu,setMenu]=React.useState(null);
  const [drawer,setDrawer]=React.useState(false);
  const go=p=>{setPage(p);setMenu(null);setDrawer(false);window.scrollTo(0,0)};
  const onSelect=item=>{
    if(item.label==='会社情報'){setMenu(menu===item.label?null:item.label);return}
    if(item.label==='ペット製品'){go('home');return}
    setMenu(menu===item.label?null:item.label);
  };
  return (
    <div style={{minHeight:'100vh',background:'var(--surface-page)',display:'flex',flexDirection:'column'}}>
      <div style={{position:'relative',zIndex:5}}>
        <SiteHeader logoSrc={LOGO} onSelect={onSelect} onMenu={()=>setDrawer(true)}
          activeLabel={page==='about'?'会社情報':page==='oem'?'製造のご相談':undefined}/>
        {menu?(
          <div style={{position:'absolute',right:'var(--page-gutter)',top:'100%',zIndex:10}}>
            <MegaMenuPanel title={menu} links={(MENUS[menu]||[]).map(l=>({...l,href:'#'}))} onClose={()=>setMenu(null)}/>
          </div>):null}
      </div>
      <nav style={{display:'flex',gap:'var(--space-16)',padding:'0 var(--page-gutter) var(--space-12)',
        fontFamily:'var(--font-sans)',fontSize:'var(--fs-13)',color:'var(--text-muted)'}}>
        {[['home','TOP'],['oem','OEM・ODM'],['about','会社情報']].map(([k,l])=>(
          <button key={k} type="button" onClick={()=>go(k)} style={{background:'transparent',border:'none',cursor:'pointer',
            padding:'0 0 4px',fontFamily:'inherit',fontSize:'inherit',
            color:page===k?'var(--orange-400)':'var(--text-muted)',
            borderBottom:page===k?'3px solid var(--rule-accent)':'3px solid transparent'}}>{l}</button>))}
      </nav>
      <main style={{flex:1}}>
        {page==='home'?<Home onNav={go}/>:page==='oem'?<OemPage/>:<AboutPage/>}
      </main>
      <SiteFooter logoSrc={LOGO}/>
      {drawer?(
        <div onClick={()=>setDrawer(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.16)',zIndex:50,
          display:'flex',justifyContent:'flex-end',padding:'var(--space-20)'}}>
          <div onClick={e=>e.stopPropagation()} style={{maxHeight:'100%',overflowY:'auto'}}>
            <MegaMenuPanel title="メニュー" onClose={()=>setDrawer(false)} links={[
              {label:'TOPページ'},{label:'会社案内'},{label:'シリカとは'},{label:'商品紹介'},
              {label:'研究開発・製造'},{label:'サステナビリティ'},{label:'法人パートナー向け'},
              {label:'ニュースリリース'},{label:'オンラインショップ'},{label:'tel：0575-36-4879'},{label:'お問合せ'}]}/>
          </div>
        </div>):null}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
