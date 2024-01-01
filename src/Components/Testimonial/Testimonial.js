import React from 'react'
import './Testimonial.css'
import { testimonial,testimonial1,leftquote,leftarrow,rightarrow } from '../../assets';


const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="ImgTestimonial">
        <div className="ContentImg" />
        <img className="TestimonialImage" src={testimonial} alt="Testimonial" />
      </div>
      <div className="Group2" align="left">
        <div className="Testimonial1">
          <div className="Group1">
            <div className="Quotes" />
            <div className="BxsQuoteAltLeftSvg">
              <img src={leftquote} alt='leftquote' />
            </div>
          </div>
          <div className="TestimonialContent">
            They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.
          </div>
          <div className="TestimonialDate">March 27. 2021</div>
          <div className="PerfilTestimonial">
            <img className="TestimonialImageProfile" src={testimonial1} alt="Profile" />
            <div className="DateTestimonial">
              <div className="LeeDoe">Lee Doe</div>
              <div className="DirectorOfACompany">Director of a company</div>
            </div>
          </div>
        </div>
        <div className="ArrowsTestimonial">
          <div className="ArrowLeftTestimonial">
            <div className="Rectangle4" />
            <div className="BxLeftArrowAltSvg">
            <img src={leftarrow} alt='leftaerrow' />
            </div>
          </div>
          <div className="ArrowRightTestimonial">
            <div className="Rectangle4" />
            <div className="BxRightArrowAltSvg">
            <img src={rightarrow} alt='rightaerrow' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;