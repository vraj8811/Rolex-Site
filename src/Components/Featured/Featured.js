import React, { useEffect, useState } from 'react';
// import './Featured.css';

const Featured = () => {
  const [featuredWatches, setFeaturedWatches] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [rows, setRows] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/api/featured-watches')
      .then((response) => response.json())
      .then((data) => {
        setFeaturedWatches(data);
      })
      .catch((error) => {
        console.error('Error fetching featured watches:', error);
      });
  }, []);

  const handleLoadMore = () => {
    setRows((prevRows) => prevRows + 1);
  };

  const handleShowLess = () => {
    setRows(1);
  };

  const allDataDisplayed = rows * visibleCards >= featuredWatches.length;

  return (
    <div className="Featured" style={{ width: 1280, position: 'relative', background: '#FCFCFC' }}>
      <div className="Line1" style={{ left: 589, position: 'absolute', width: 67, height: 0, top: 30, position: 'absolute', border: '1px #FFB568 solid' }}></div>
      <div className="Featured1" style={{ left: 573, position: 'absolute', top: 40, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 0.80, wordWrap: 'break-word' }}>FEATURED</div>
      <table className="featured-table" style={{ borderCollapse: 'collapse', width: '100%', lineHeight: 1 }}>
        {[...Array(rows)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(visibleCards)].map((_, cardIndex) => {
              const index = rowIndex * visibleCards + cardIndex;
              const watch = featuredWatches[index];
              return (
                <td key={watch?.id} style={{ padding: '10px', textAlign: 'center' }}>
                  {watch && (
                    <div className="featured-card" style={{ marginTop: 50, marginLeft: 50, width: 300, height: 400, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
                      {watch.issale === 1 && (
                        <div className="sale-tag" style={{ fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word', transform: 'rotate(-90deg)', transformOrigin: '0 0', display: 'inline-block', padding: '6px 12px', background: '#FFB568', color: 'white', position: 'absolute', marginLeft: -80, marginTop: 90 }}>SALE</div>
                      )}
                      <img className="featured-image" style={{ paddingTop: 20, width: 140, height: 214.20, borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} src={`http://localhost:5000/uploads/${watch.image}`} alt={watch.name} />
                      <div className="featured-content" style={{ padding: '16px', background: 'white', height: '30%' }}>
                        <div className="watch-name" style={{ color: '#2E2E2E', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{watch.name}</div>
                        <div className="price" style={{ color: '#FFB568', fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>${watch.price}</div>
                        <button className="add-to-cart" style={{ background: '#2B2B2B', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>ADD TO CART</button>
                      </div>
                    </div>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
        {!allDataDisplayed && (
          <tr>
            <td colSpan={visibleCards} style={{ textAlign: 'center' }}>
              <button className="load-more-button" onClick={handleLoadMore} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '4px', background: '#2B2B2B', color: 'white', cursor: 'pointer', border: 'none' }}>Load More</button>
            </td>
          </tr>
        )}
        {rows > 1 && (
          <tr>
            <td colSpan={visibleCards} style={{ textAlign: 'center' }}>
              <button className="show-less-button" onClick={handleShowLess} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '4px', background: '#2B2B2B', color: 'white', cursor: 'pointer', border: 'none' }}>Show Less</button>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Featured;
