const {SectionLabel,MinchoHeading,PersonCard,SpecTable,ArrowLink}=window.CREDEEDesignSystem_2e31d6;
const AB='../../assets/';

function AboutPage(){
  const wrap={padding:'var(--section-padding-y) var(--page-gutter)',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%'};
  return (
    <>
      <section style={wrap}>
        <SectionLabel align="left">Company</SectionLabel>
        <MinchoHeading level={2} style={{marginTop:'var(--space-20)'}}>会社情報</MinchoHeading>
        <div style={{display:'flex',gap:'var(--space-60)',paddingTop:'var(--space-40)',alignItems:'flex-start',flexWrap:'wrap'}}>
          <PersonCard photo={AB+'images/person-president.webp'} width={300} role={<>株式会社クレディー<br/>代表取締役</>} name="前原 洋子"/>
          <div style={{flex:1,minWidth:320,display:'flex',flexDirection:'column',gap:'var(--space-24)'}}>
            <MinchoHeading level={2} rule={false} size="var(--fs-28)" color="var(--text-primary)">
              皆さまへお届けする<br/>すべての製品にこだわりを。<br/>全社員一同、 真心をこめてつくり続けます。</MinchoHeading>
            <p style={{fontSize:'var(--fs-15)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>
              はじめまして。株式会社クレディーの代表、前原洋子です。当社は、人の健康にかかわる企業として、「安心・安全なシリカを広く届けたい。」という想いで設立しました。
              当社が提供するシリカは、従来の鉱物由来のシリカではなく、植物（もみ殻）から抽出製造したシリカで、液体化により体内吸収率を抜群に高めることに成功しました。</p>
            <p style={{fontSize:'var(--fs-15)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>
              2024年2月、当グループは、もみ殻シリカの製造工程である「白色系籾殻灰の製造方法」の特許権を承継しました。私たちは、特許とともに開発メンバーの夢と希望をも受け継ぐことを自らの使命ととらえ、
              植物由来のシリカを国内のみにとどまらず、全世界に広めていきたいと考えております。</p>
            <ArrowLink href="#">サステナビリティの取り組み</ArrowLink>
          </div>
        </div>
      </section>

      <section style={{...wrap,background:'var(--surface-alt)',maxWidth:'none'}}>
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <SectionLabel>Vision</SectionLabel>
          <div style={{display:'flex',gap:'var(--space-60)',paddingTop:'var(--space-40)',flexWrap:'wrap'}}>
            <div style={{flex:1,minWidth:280}}>
              <p style={{fontSize:'var(--fs-14)',color:'var(--text-muted)',margin:'0 0 var(--space-12)'}}>ビジョン</p>
              <p style={{fontFamily:'var(--font-mincho)',fontSize:'var(--fs-20)',lineHeight:'var(--lh-relaxed)',color:'var(--text-primary)',margin:0}}>
                日本の人口の１％（120万人）の人の生活に植物由来シリカを届け、圧倒的に健康で若々しい人生を後押しします。</p>
            </div>
            <div style={{flex:1,minWidth:280}}>
              <p style={{fontSize:'var(--fs-14)',color:'var(--text-muted)',margin:'0 0 var(--space-12)'}}>ミッション</p>
              <p style={{fontFamily:'var(--font-mincho)',fontSize:'var(--fs-20)',lineHeight:'var(--lh-relaxed)',color:'var(--text-primary)',margin:0}}>
                私たちは植物由来シリカという、生命に不可欠な価値を届けます。その幸せの循環は、まず自分自身や家族、それから親しい友人、そして事業を通してご縁を頂いた方へとつながり、その先の人たちへまるで波紋のように広がっていく未来を実現します。</p>
            </div>
          </div>
        </div>
      </section>

      <section style={wrap}>
        <SectionLabel>Profile</SectionLabel>
        <div style={{display:'flex',gap:'var(--space-60)',paddingTop:'var(--space-40)',alignItems:'flex-start',flexWrap:'wrap'}}>
          <SpecTable style={{flex:2,minWidth:420}} rows={[
            {label:'法人名',value:'株式会社クレディー'},
            {label:'代表者',value:'代表取締役 前原 洋子'},
            {label:'設立年月日',value:'2015年 7月 17日'},
            {label:'資本金',value:'10,000,000円'},
            {label:'事業内容',value:<>・100%植物由来シリカ濃縮液を活用したサプリメント・ヘルスケア・ヘアケア・スキンケア・食品のOEM、ODM受託製造<br/>・100%植物由来シリカを活用した新商品開発<br/>・100%植物由来シリカ濃縮液、植物性シリカ粉末「原料」販売<br/>・100%植物由来シリカ「ライスシリカ」を活用した健康食品・化粧品・衛生商品の卸及び小売販売。</>},
            {label:'グループ企業',value:'シリカのある生活株式会社'},
            {label:'TEL / FAX',value:<>TEL：0575-36-4879<br/>FAX：0575-36-2961</>},
            {label:'所在地',value:'〒501-3788 岐阜県美濃市蕨生矢坪2603番地6'}]}/>
          <img src={AB+'images/factory.webp'} alt="" style={{flex:1,minWidth:260,height:420,objectFit:'cover'}}/>
        </div>
      </section>
    </>
  );
}
Object.assign(window,{AboutPage});
