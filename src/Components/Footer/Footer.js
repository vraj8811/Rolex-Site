import React from 'react'
import { facebook, twitter, instagaram, copyrightsvg } from '../../assets';

const Footer = () => {
  return (
    <div className="Footer" style={{ width: 1280, height: 406, position: 'relative', background: '#FCFCFC' }}>
      <div className="ContentFooter1" style={{ width: 142, height: 128, left: 140, top: 72, position: 'absolute' }}>
        <div className="OurInformation" style={{ left: 0, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Our information</div>
        <div className="Peru" style={{ left: 0, top: 47, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>1234 - Peru</div>
        <div className="LaLibertad43210" style={{ left: 0, top: 78, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>La Libertad 43210</div>
        <div className="456789" style={{ left: 0, top: 109, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>123-456-789</div>
      </div>
      <div className="ContentFooter3" style={{ width: 109, height: 159, left: 763, top: 72, position: 'absolute' }}>
        <div className="Product" style={{ left: 0, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Product</div>
        <div className="RoadBikes" style={{ left: 0, top: 47, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Road bikes</div>
        <div className="MountainBikes" style={{ left: 0, top: 78, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Mountain bikes</div>
        <div className="Electric" style={{ left: 0, top: 109, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Electric</div>
        <div className="Accesories" style={{ left: 0, top: 140, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Accesories</div>
      </div>
      <div className="ContentFooter2" style={{ width: 131, height: 159, left: 457, top: 72, position: 'absolute' }}>
        <div className="AboutUs" style={{ left: 0, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>About Us</div>
        <div className="SupportCenter" style={{ left: 0, top: 47, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Support Center</div>
        <div className="CustomerSupport" style={{ left: 0, top: 78, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Customer Support</div>
        <div className="AboutUs" style={{ left: 0, top: 109, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>About Us</div>
        <div className="CopyRight" style={{ left: 0, top: 140, position: 'absolute', color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Copy Right</div>
      </div>
      <div className="ContentFooter4" style={{ width: 92, height: 67, left: 1047, top: 72, position: 'absolute' }}>
        <div className="Social" style={{ left: 0, top: 0, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Social</div>
        <div className="FooterSocial" style={{ width: 92, height: 20, left: 0, top: 47, position: 'absolute' }}>
          <div className="BxlFacebookSvg" style={{ width: 20, height: 20, left: -2, top: 0, position: 'absolute' }}>
            <img src={facebook} alt='facebook' />
          </div>
          <div className="BxlTwitterSvg" style={{ width: 20, height: 20, left: 34, top: 0, position: 'absolute' }}>
            <img src={twitter} alt='twitter' />
          </div>
          <div className="BxlInstagramSvg" style={{ width: 20, height: 20, left: 70, top: 0, position: 'absolute' }}>
            <img src={instagaram} alt='instagarm' />
          </div>
        </div>
      </div>
      <div className="LineFooter" style={{ width: 1023, height: 0, left: 129, top: 295, position: 'absolute', border: '1px #F0F0F0 solid' }}></div>
      <div className="CopyFooter" style={{ width: 192, height: 15, left: 544, top: 343, position: 'absolute' }}>
        <div className="BxCopyrightSvg" style={{ width: 12, height: 12, left: 0, top: 2, position: 'absolute' }}>
          <img src={copyrightsvg} alt='copyright' />
        </div>
        <div className="BedimcodeAllRigthsReserved" style={{ left: 16, top: 0, position: 'absolute', color: '#8C8C8C', fontSize: 13, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Bedimcode. All rigths reserved</div>
      </div>
    </div>
  )
}

export default Footer
