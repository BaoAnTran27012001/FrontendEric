import React, { Component } from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './Specialty.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import specialty from '../../../assets/specialty/co-xuong-khop.jpg';
class Specialty extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <div className='section-specialty'>
        <div className='specialty-content'>
          <div className='specialty-header'>
            <span className='title-section'>Chuyên khoa phổ biến</span>
            <button className='btn-section'>Xem thêm</button>
          </div>
          <div className='specialty-body'>
          <Slider {...settings}>
            <div className='img-custom'>
              <img src={specialty} alt='specialty' />
              <div>Cơ xương khớp 1</div>
            </div>
            <div className='img-custom'>
              <img src={specialty} alt='specialty' />
              <div>Cơ xương khớp 1</div>
            </div>
            <div className='img-custom'>
              <img src={specialty} alt='specialty' />
              <div>Cơ xương khớp 1</div>
            </div>
            <div className='img-custom'>
              <img src={specialty} alt='specialty' />
              <div>Cơ xương khớp 1</div>
            </div>
            <div className='img-custom'>
              <img src={specialty} alt='specialty' />
              <div>Cơ xương khớp 1</div>
            </div>
            <div className='img-custom'>
              <img src={specialty} alt='specialty' />
              <div>Cơ xương khớp 1</div>
            </div>
          </Slider>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
