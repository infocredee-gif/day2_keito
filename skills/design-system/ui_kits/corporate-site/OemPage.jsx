const {Button,ArrowLink,Icon,SectionLabel,MinchoHeading,BenefitItem,StepItem,PersonCard}=window.CREDEEDesignSystem_2e31d6;
const AO='../../assets/';

function OemPage(){
  const merits=[
    ['icon-cost','ローコストで新商品が完成','一貫製造によりクライアント様には仕入しやすい価格で提供します。'],
    ['icon-speed','開発の手間が省け短期間で商品化','研究開発、製造との連携で最短で商品化が叶います。'],
    ['icon-branding','独自のブランディング・ポジショニングが叶う','OEM、ODM、コラボ商品の展開により商品のブランディングができます。'],
    ['icon-advantage','競合優位性が増す','他社との比較で販売優位性が高まります。'],
    ['icon-advantage','新たな顧客獲得へとつながる','シリカを通じて新規顧客の獲得が叶います。'],
    ['icon-cost','新たな売上の機会が叶う','継続的に販売して頂く事で、売上の拡大が叶います。']
  ];
  const collab=[
    ['oem-supplement','サプリメントにシリカを配合','カプセル、打錠、液体などに'],
    ['oem-cosmetics','美容用品にシリカを配合','基礎化粧品やヘアケア用品に配合'],
    ['oem-sweets','お菓子に配合','グミやクッキーやケーキに配合'],
    ['oem-water','飲料水や炭酸水に配合','お水や炭酸水に配合することで身近にシリカを摂取できます。'],
    ['oem-brand','OEM商品への展開','OEM商品にすることで、商品のブランディングが叶います。']
  ];
  const steps=[
    ['お問い合わせ','お問い合わせはWEBサイトまたは、電話にて直接お問い合わせください。'],
    ['お打ち合わせ','OEM、ODM事業の計画や販売戦略、製造数量など貴社のご希望をお伺いさせていただきます。'],
    ['ご提案・お見積り','お打ち合わせで確定した内容をもとにお見積りを作成致します。'],
    ['デザイン作成～資材発注','ラベル、パッケージのデザインの決定後、資材のご準備を致します。'],
    ['製造・加工','資材がそろいましたら、製造にとりかかります。'],
    ['商品納品','商品納品後には、商品に関する基礎知識のレクチャーや販売促進のご協力も行っております。']
  ];
  const wrap={padding:'var(--section-padding-y) var(--page-gutter)',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%'};
  return (
    <>
      <section style={{...wrap,paddingBottom:0}}>
        <SectionLabel align="left">OEM・ODM</SectionLabel>
        <MinchoHeading level={2} style={{marginTop:'var(--space-24)'}}>シリカのある生活はOEM、ODM、コラボ商品で<br/>「売れそう」ではなく「売れる」商品を提供します。</MinchoHeading>
        <div style={{display:'flex',gap:'var(--space-40)',paddingTop:'var(--space-40)'}}>
          {[['ワンストップ製造によりコストダウンを実現','もみ殻の調達～シリカ原料の製造、シリカ濃縮液の製造、製品化を自社で行うことで「高品質でローコスト」を実現。'],
            ['専門家によるアドバイス','ドクター、管理薬剤師など技術的、専門的な見地から、商品開発に関するアドバイスを行います。'],
            ['商品販売のバックアップ','商品販売開始後も、商品に関する基礎知識のレクチャーや販促方法に関するご提案・アドバイスを行います。']]
            .map(([t,b])=>(
            <div key={t} style={{flex:1,display:'flex',gap:'var(--space-16)',alignItems:'flex-start'}}>
              <img src={AO+'illustrations/rule-vertical.svg'} alt="" style={{height:56,flex:'none'}}/>
              <div>
                <p style={{fontSize:'var(--fs-18)',fontWeight:'var(--fw-semibold)',color:'var(--text-primary)',margin:'0 0 var(--space-8)'}}>{t}</p>
                <p style={{fontSize:'var(--fs-14)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>{b}</p>
              </div>
            </div>))}
        </div>
      </section>

      <section style={wrap}>
        <SectionLabel>OEM、ODM、コラボのメリット</SectionLabel>
        <div style={{display:'flex',flexWrap:'wrap',paddingTop:'var(--space-24)'}}>
          {merits.map(([ic,t,b])=><BenefitItem key={t} style={{flex:'1 1 30%',minWidth:220}} icon={AO+'illustrations/'+ic+'.svg'} title={t} body={b}/>)}
        </div>
      </section>

      <section style={{...wrap,background:'var(--surface-alt)',maxWidth:'none'}}>
        <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
          <MinchoHeading level={2} rule={false} align="center" size="var(--fs-28)" color="var(--text-primary)">シリカと御社の既存商品をコラボしませんか？</MinchoHeading>
          <div style={{display:'flex',gap:'var(--space-24)',flexWrap:'wrap',paddingTop:'var(--space-40)'}}>
            {collab.map(([img,t,b])=>(
              <div key={t} style={{flex:'1 1 18%',minWidth:180,display:'flex',flexDirection:'column',gap:'var(--space-12)'}}>
                <img src={AO+'images/'+img+'.webp'} alt="" style={{width:'100%',aspectRatio:'1 / 1',objectFit:'cover'}}/>
                <p style={{fontSize:'var(--fs-16)',fontWeight:'var(--fw-medium)',color:'var(--text-primary)',margin:0}}>{t}</p>
                <p style={{fontSize:'var(--fs-13)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>{b}</p>
              </div>))}
          </div>
        </div>
      </section>

      <section style={wrap}>
        <SectionLabel>OEM・ODM 製造フロー</SectionLabel>
        <div style={{paddingTop:'var(--space-24)'}}>
          {steps.map(([t,b],i)=><StepItem key={t} n={i+1} title={t} body={b}/>)}
        </div>
      </section>

      <section style={wrap}>
        <MinchoHeading level={2}>研究開発についてのメッセージ</MinchoHeading>
        <div style={{display:'flex',gap:'var(--space-60)',paddingTop:'var(--space-40)',flexWrap:'wrap'}}>
          <PersonCard photo={AO+'images/person-nakazaki.webp'} role={<>工学博士<br/>元 大阪府立高専 教授</>} name="中崎 義明"/>
          <PersonCard photo={AO+'images/person-mori.webp'} role={<>東京予防医療クリニック 院長<br/>獨協大学 名誉教授</>} name="森 吉臣"/>
          <div style={{flex:1,minWidth:260,display:'flex',flexDirection:'column',gap:'var(--space-20)'}}>
            <p style={{fontSize:'var(--fs-15)',lineHeight:'var(--lh-relaxed)',color:'var(--text-sub)',margin:0}}>
              ドクター、管理薬剤師をはじめとする専門家が、技術的・専門的な見地から商品開発に関するアドバイスを行います。</p>
            <Button variant="primary" size="md" icon="arrow_forward">サンプル依頼・お問い合わせ</Button>
          </div>
        </div>
      </section>
    </>
  );
}
Object.assign(window,{OemPage});
