import React from 'react'
import './Story.css';

import { story1 } from '../../assets';

const Story = () => {
  return (
    <div className="Story">
      <div className="ImgStory">
        <div className="ContentImg" />
        <img className="Story1" src={story1} alt="Story 1" />
      </div>
      <div className="DataStory" align="left">
        {/* <div className="Title">
          <div className="OurStory">OUR STORY</div>
          <div className="Line1"></div>
        </div> */}
        <div className="Text1">Inspirational Watch of<br />this year</div>
        <div className="Text2">The latest and modern watches of this year are available in various presentations in this store, discover them now.</div>
        <div className="ButtonStory" style={{ width: 65, height: 23, paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, left: 0, top: 284, position: 'absolute', background: '#2B2B2B', boxShadow: '0px 12px 24px rgba(25.50, 25.50, 25.50, 0.20)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div className="Discover" style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Discover</div>
        </div>
        <div className="Title" style={{ width: 113, height: 39, left: 0, top: 0, position: 'absolute' }}>
          <div className="OurStory" style={{ left: 0, top: 16, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 0.80, wordWrap: 'break-word' }}>OUR STORY</div>
          <div className="Line1" style={{ width: 67, height: 0, left: 0, top: 0, position: 'absolute', border: '1px #FFB568 solid' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
