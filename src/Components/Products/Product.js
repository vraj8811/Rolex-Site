import React, { useEffect, useState } from 'react';
import { whitebag } from '../../assets';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [rows, setRows] = useState(1);

  useEffect(() => {
    // Fetch your product data here
    // Replace the placeholder URL with your actual API endpoint
    fetch('http://localhost:5000/api/all-watches')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleLoadMore = () => {
    setRows((prevRows) => prevRows + 1);
  };

  const handleShowLess = () => {
    setRows(1);
  };

  const allDataDisplayed = rows * visibleCards >= products.length;

  return (
    <div id='product' className="Products" style={{ width: 1280, position: 'relative', background: 'white', padding: '20px' }}>
      <div className="Title" style={{ width: 108, height: 39, left: '50%', transform: 'translateX(-50%)', top: 72, position: 'absolute' }}>
        <div className="Products" style={{ left: 0, top: 16, position: 'absolute', color: '#2E2E2E', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 0.80, wordWrap: 'break-word' }}>PRODUCTS</div>
        <div className="Line1" style={{ width: 67, height: 0, left: '50%', transform: 'translateX(-50%)', top: 0, position: 'absolute', border: '1px #FFB568 solid' }}></div>
      </div>
      <table className="product-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '120px' }}>
        <tbody>
          {Array.from({ length: rows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {products.slice(rowIndex * visibleCards, (rowIndex + 1) * visibleCards).map((product, index) => (
                <td key={product.id} style={{ width: `${100 / visibleCards}%`, padding: '0 10px' }}>
                  <div className="product-card" style={{ marginTop:20,width: '100%', height: 325, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
                    <div className="Rectangle5" style={{ width: '100%', background: 'white', border: '1px #F0F0F0 solid' }} />
                    <img className="product-image" style={{ width: 145, height: 204,marginLeft:75,marginTop:20, borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} src={`http://localhost:5000/uploads/${product.image}`} alt={`product-${index}`} />
                    <div className="card-title-y-price" style={{ width: '100%', position: 'absolute', bottom: 0, padding: '10px', boxSizing: 'border-box' }}>
                      <div className="product-name" align="center" style={{ color: '#2E2E2E', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>{product.name}</div>
                      <div className="product-price" align="center" style={{ marginTop:5,color: '#FFB568', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>{`$${product.price}`}</div>
                      <div className="button-product" style={{ width: 20, height: 20, padding: 8, position: 'absolute', top: 17, right: 0, background: '#2B2B2B', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div className="bx-shopping-bag-svg" style={{ width: 16, height: 16, position: 'relative' }}>
                          <img src={whitebag} alt='whitebag' />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!allDataDisplayed && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="load-more-button" onClick={handleLoadMore} style={{ padding: '10px 20px', borderRadius: '4px', background: '#2B2B2B', color: 'white', cursor: 'pointer', border: 'none' }}>Load More</button>
        </div>
      )}
      {rows > 1 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="show-less-button" onClick={handleShowLess} style={{ padding: '10px 20px', borderRadius: '4px', background: '#2B2B2B', color: 'white', cursor: 'pointer', border: 'none' }}>Show Less</button>
        </div>
      )}
    </div>
  );
};

export default Product;
