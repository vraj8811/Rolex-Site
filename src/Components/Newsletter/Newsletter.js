import React from 'react'

const Newsletter = () => {
  return (
    <div className="Newsletter" style={{width: 1280, height: 435, position: 'relative', background: '#FCFCFC'}}>
  <div className="Group3" style={{width: 1024, height: 315, left: 128, top: 72, position: 'absolute'}} align="left">
    <div className="text1" style={{width: 1024, height: 315, left: 0, top: 0, position: 'absolute', background: '#FFB568'}} />
    <div className="text2" style={{left: 72, top: 72, position: 'absolute', color: '#2E2E2E', fontSize: 36, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Subscribe Our <br/>Newsletter</div>
    <div className="text3" style={{width: 395, left: 72, top: 180, position: 'absolute', color: '#595959', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.25, wordWrap: 'break-word'}}>Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more.</div>
    <div className="InputNewsletter" style={{width: 419, height: 59, left: 533, top: 129, position: 'absolute'}}>
      <div className="ButtonNewsletter" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 20, paddingBottom: 20, left: 264, top: 0, position: 'absolute', background: '#2B2B2B', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div className="Subscribe" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>SUBSCRIBE</div>
      </div>
      <div className="InputNewsletter" style={{width: 264, height: 59, left: 0, top: 0, position: 'absolute'}}>
        <div className="InputContentNewsletter" style={{width: 264, height: 59, left: 0, top: 0, position: 'absolute', background: '#F0F0F0'}} />
        <div className="EnterYourEmail" style={{left: 12, top: 22, position: 'absolute', textAlign: 'center', color: '#8C8C8C', fontSize: 13, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Enter your email</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Newsletter
