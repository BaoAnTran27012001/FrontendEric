import React, { Component } from 'react';
import { connect } from 'react-redux';
import outStandingDoctor from '../../../assets/outstanding-doctor/anh-dai-dien-bs.jpg';
import Slider from 'react-slick';
class OutStandingDoctor extends Component {
  render() {
    return (
      <div className='section-share section-outstanding-doctor'>
        <div className='section-content'>
          <div className='section-header'>
            <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
            <button className='btn-section'>Xem thêm</button>
          </div>
          <div className='section-body'>
            <Slider {...this.props.settings}>
              <div className='img-custom img-outstanding'>
                <img src={outStandingDoctor} alt='section' />
                <div className='position text-center'>
                  <div>Giáo sư, Tiến sĩ Trần Minh Bạch</div>
                  <div>Cơ xương khớp</div>
                </div>
              </div>
              <div className='img-custom img-outstanding'>
                <img src={outStandingDoctor} alt='section' />
                <div className='position text-center'>
                  <div>Giáo sư, Tiến sĩ Trần Minh Bạch</div>
                  <div>Cơ xương khớp</div>
                </div>
              </div>
              <div className='img-custom img-outstanding'>
                <img src={outStandingDoctor} alt='section' />
                <div className='position text-center'>
                  <div>Giáo sư, Tiến sĩ Trần Minh Bạch</div>
                  <div>Cơ xương khớp</div>
                </div>
              </div>
              <div className='img-custom img-outstanding'>
                <img src={outStandingDoctor} alt='section' />
                <div className='position text-center'>
                  <div>Giáo sư, Tiến sĩ Trần Minh Bạch</div>
                  <div>Cơ xương khớp</div>
                </div>
              </div>
              <div className='img-custom img-outstanding'>
                <img src={outStandingDoctor} alt='section' />
                <div className='position text-center'>
                  <div>Giáo sư, Tiến sĩ Trần Minh Bạch</div>
                  <div>Cơ xương khớp</div>
                </div>
              </div>
              <div className='img-custom img-outstanding'>
                <img src={outStandingDoctor} alt='section' />
                <div className='position text-center'>
                  <div>Giáo sư, Tiến sĩ Trần Minh Bạch</div>
                  <div>Cơ xương khớp</div>
                </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
