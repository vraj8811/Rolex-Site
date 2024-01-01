import React from 'react';
import './Home.css';
import { home1} from '../../assets';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="social-links" style={{width: 15, height: 221, left: 128, top: 249, position: 'absolute'}}>
        <div className="social-link" style={{left:0 ,top: 221,transform: 'rotate(-90deg)', color: '#8C8C8C' }}>Facebook</div>
        <div className="social-link" style={{left:10 ,top: 132, transform: 'rotate(-90deg)', color: '#8C8C8C' }}>Twitter</div>
        <div className="social-link" style={{ left:0 ,top: 59,transform: 'rotate(-90deg)', color: '#8C8C8C' }}>Instagram</div>
      </div>
      <div className="watch-info" align="left">
        <div className="watch-title" style={{top:0,left:0}}>NEW WATCH <br />COLLECTIONS B720</div>
        <div className="watch-description" style={{left:0,top:128}}>Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.</div>
        <div className="watch-price" style={{left:0,top:196,marginTop:10}}>$1245</div>
        <div className="button-container">
        <div className="ButtonHome" style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, left: 0, top: 4, position: 'absolute', background: '#BFBFBF', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div className="Discover" style={{color: '#595959', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Discover</div>
      </div>
      <div className="ButtonActionHome" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 20, paddingBottom: 20, left: 107, top: 0, position: 'absolute', background: '#2B2B2B', boxShadow: '0px 12px 24px rgba(25.50, 25.50, 25.50, 0.20)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div className="AddToCart" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>ADD TO CART</div>
      </div>
        </div>
      </div>
      <div className="image-container">
        <div className="background"></div>
        <img className="watch-image" src={home1} alt="Watch" />
      </div>
      <div className="navbar">
        <Navbar/>
      </div>
    </div>
  );
};

export default Home;
