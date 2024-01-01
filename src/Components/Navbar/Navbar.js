import React from 'react'
import { moon, shopingbag, watch } from '../../assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Header" style={{ width: 1280, height: 72, position: 'relative' }}>
      <div className="NavMenu" style={{ width: 312, height: 18, left: 266, top: 27, position: 'absolute' }}>
        <div className="Home" style={{ left: 0, top: 0, position: 'absolute', color: '#FFB568', fontSize: 15, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>
        <a href="/#home " >Home</a>
        </div>
        <div className="Upload" style={{ left: 81, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 15, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>
        <a href="/upload">Upload</a>
        </div>
        <div className="Products" style={{ left: 181, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 15, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>
        <a href="/#product" >Products</a>
        </div>
        <div className="New" style={{ left: 282, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 15, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>
          <a href="/#new">New</a>
        </div>
      </div>
      <div className="LogoHeader" style={{ width: 76, height: 20, left: 128, top: 26, position: 'absolute' }}>
        <div className="Rolex" style={{ left: 24, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.64, wordWrap: 'break-word' }}>ROLEX</div>
        <div className="BxsWatchSvg" style={{ width: 20, height: 20, left: 0, top: 0, position: 'absolute' }}>
          <img src={watch} alt='watch' />
        </div>
      </div>
      <div className="BxShoppingBagSvg" style={{ width: 20, height: 20, left: 1108, top: 26, position: 'absolute' }}>
        <img src={shopingbag} alt='shopingbag' />
      </div>
      <div className="BxMoonSvg" style={{ width: 20, height: 20, left: 1072, top: 26, position: 'absolute' }}>
        <img src={moon} alt='moon' />
      </div>
    </div>
  )
}

export default Navbar
