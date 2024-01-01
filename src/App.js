import React from 'react'
import { Product, Newsletter, New, Home, Testimonial, Story, Footer, Featured, Upload } from './Components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div align="center" >
      {/* <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/featured" element={<Featured/>} />
        <Route path="/story" element={<Story/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/new" element={<New />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Home id="home" />
            <Featured />
            <Story />
            <Product id="product" />
            <Testimonial />
            <New id="new" />
            <Newsletter />
            <Footer />
          </>} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
