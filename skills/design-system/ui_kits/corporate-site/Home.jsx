const {SiteHeader,SiteFooter,MegaMenuPanel,Button,ArrowLink,Icon,SectionLabel,MinchoHeading,FeatureCard,NewsList}=window.CREDEEDesignSystem_2e31d6;
const A='../../assets/';

function Hero({onNav}){
  return (
    <div style={{position:'relative',background:'var(--gray-50)',overflow:'hidden'}}>
      <img src={A+'images/hero-silica-dissolve.webp'} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'relative',padding:'0 var(--page-gutter) var(--space-60)',minHeight:620,display:'flex',flexDirection:'column'}}>
        <div style={{maxWidth:760,paddingTop:'var(--space-40)',display:'flex',flexDirection:'column',gap:'var(--space-24)'}}>
          <MinchoHeading level={1} overImage>もみ殻からケイ素を抽出、<br/>世界で初めて溶液化しました。</MinchoHeading>
          <MinchoHeading level={2}>特許製法により純度98%以上。<br/>非晶質の水溶性植物ケイ素です。</MinchoHeading>
          <div style={{display:'flex',gap:'var(--space-20)',flexWrap:'wrap',paddingTop:'var(--space-16)'}}>
            <Button variant="primary" size="lg" onClick={()=>onNav('oem')}>原料・ＯＥＭのご相談</Button>
            <Button variant="secondary" size="lg" style={{border:'1px solid var(--border-hairline)'}}>販売代理店をお考えの方</Button>
          </div>
          <h3 style={{fontFamily:'var(--font-mincho)',fontSize:'var(--fs-18)',fontWeight:400,color:'var(--slate-500)',
            textShadow:'var(--text-shadow-over-image)',margin:'var(--space-30) 0 0'}}>研究40年 ／ 完全無農薬米 ／ 特許製法／OEM・ODM ／ 岐阜県美濃市</h3>
        </div>
        <p style={{marginTop:'auto',textAlign:'right',fontSize:'var(--fs-13)',color:'var(--text-muted)'}}>※シリカが溶けるイメージ図</p>
      </div>
    </div>
  );
}

function Message(){
  return (
    <section style={{padding:'var(--section-padding-y) var(--page-gutter)',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%'}}>
      <SectionLabel>Message</SectionLabel>
      <div style={{display:'flex',gap:'var(--space-60)',alignItems:'flex-start',paddingTop:'var(--space-40)'}}>
        <div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column',gap:'var(--space-24)'}}>
          <MinchoHeading level={2} rule={false} size="var(--fs-28)" color="var(--text-primary)">植物由来シリカ製品の、<br/>総発売元として。</MinchoHeading>
          <p style={{fontSize:'var(--fs-15)',lineHeight:'var(--lh-relaxed)',color:'var(--text-primary)',margin:0}}>
            株式会社クレディーは、水溶性もみ殻シリカ（ケイ素）の元祖です。<br/>40年余りにわたり、植物由来ケイ素の研究・開発を重ねてきました。<br/>
            現在は原料の供給から、健康食品・化粧品の受託製造まで、<br/>一貫してお応えできる体制を整えています。</p>
        </div>
        <img src={A+'images/message-1.webp'} alt="" style={{width:'50%',height:369,objectFit:'cover'}}/>
      </div>
    </section>
  );
}

function NewService(){
  return (
    <div style={{display:'flex',gap:'var(--space-24)',alignItems:'center',justifyContent:'center',flexWrap:'wrap',
      padding:'var(--space-24) var(--page-gutter)',background:'var(--surface-alt)'}}>
      <p style={{fontFamily:'var(--font-mincho)',fontSize:'var(--fs-20)',color:'var(--text-primary)',margin:0}}>NEW SERVICE</p>
      <p style={{fontSize:'var(--fs-16)',color:'var(--text-primary)',margin:0}}>2026.08 ｜ 水のOEM受託を開始しました。</p>
      <ArrowLink href="#">｜ 詳しく見る</ArrowLink>
    </div>
  );
}

function Initiatives({onNav}){
  const cards=[
    {label:'Technology',image:A+'images/technology.webp',title:'製造工程',body:'もみ殻を高温で二次燃焼させ、安全な非晶質のケイ素だけを取り出し、抽出から溶液化までを、自社の設備で行っています。',cta:'研究開発ストーリーへ'},
    {label:'Evidence',image:A+'images/evidence.webp',title:'信頼の裏付け',body:'非晶質であること、安全分析試験を重ねていること、研究機関と連携していること。主張の根拠を公開しています。',cta:'エビデンスへ'},
    {label:'Company',image:A+'images/company.webp',title:'製造工程',body:'岐阜県美濃市の自社設備で、植物由来シリカの製造から受託開発までを行っています。会社の概要と沿革をご覧いただけます。',cta:'会社概要へ',to:'about'}
  ];
  return (
    <section style={{padding:'var(--section-padding-y) var(--page-gutter)',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%'}}>
      <p style={{fontFamily:'var(--font-mincho)',fontSize:'var(--fs-22)',color:'var(--text-sub)',margin:'0 0 var(--space-40)'}}>CREDEEの取り組み</p>
      <div style={{display:'flex',gap:'var(--space-40)',alignItems:'stretch'}}>
        {cards.map(c=>(
          <FeatureCard key={c.label} label={c.label} image={c.image} title={c.title} body={c.body}
            ctaLabel={c.cta} ctaHref={undefined} style={c.to?{cursor:'pointer'}:undefined}/>
        ))}
      </div>
      <div style={{display:'flex',gap:'var(--space-40)',paddingTop:'var(--space-16)'}}>
        <span style={{flex:1}}></span><span style={{flex:1}}></span>
        <span style={{flex:1}}><ArrowLink href="#" onClick={e=>{e.preventDefault();onNav('about');}}>会社情報をひらく</ArrowLink></span>
      </div>
    </section>
  );
}

function News(){
  return (
    <section style={{padding:'var(--section-padding-y) var(--space-20)',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%',display:'flex',flexDirection:'column',gap:'var(--space-40)'}}>
      <a href="#" style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',
        borderBottom:'1px solid var(--border-hairline)',paddingBottom:'var(--space-16)',textDecoration:'none'}}>
        <span style={{fontSize:'var(--fs-16)',color:'var(--text-ink)'}}>News</span>
        <span style={{fontSize:'var(--fs-15)',color:'var(--text-sub)'}}>一覧を見る →</span>
      </a>
      <NewsList items={[
        {date:'2026.9.3',title:'機能性水OEM （混ぜ物水）のOEM受託を開始しました。',href:'#'},
        {date:'2026.9.3',title:'正規販売店に関するお知らせ',href:'#'},
        {date:'2026.9.3',title:'コーポレートサイトをリニューアルしました',href:'#'}]}/>
    </section>
  );
}

function Home({onNav}){
  return <><Hero onNav={onNav}/><Message/><NewService/><Initiatives onNav={onNav}/><News/></>;
}
Object.assign(window,{Home,Hero,Message,NewService,Initiatives,News});
