import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      roleArr: [],
      positionArr: [],
      previewImgURL: '',
      isOpen: false,
    };
  }
  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    //this.props.dispatch(actions.fetchGenderStart());
    //this.props.dispatch(actions.fetchGenderStart());

    // try {
    //   const res = await getAllcodesService('gender');
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    //   console.log('check all code response: ', res);
    // } catch (error) {}
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.rolesRedux !== this.props.rolesRedux) {
      this.setState({
        roleArr: this.props.rolesRedux,
      });
    }
    if (prevProps.positionsRedux !== this.props.positionsRedux) {
      this.setState({
        positionArr: this.props.positionsRedux,
      });
    }
  }
  handleOnChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objURL = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objURL,
      });
    }
  };
  openPreviewImage = () => {
    if (!this.state.previewImgURL) return;
    this.setState({
      isOpen: true,
    });
  };
  render() {
    const genders = this.state.genderArr;
    const roles = this.state.roleArr;
    const positions = this.state.positionArr;

    const language = this.props.language;
    const isLoadingGender = this.props.isLoadingGender;
    console.log('baoan check state from redux: ', this.state);
    return (
      <div className='user-redux-container'>
        <div className='title'>Learn User Redux An Bao</div>

        <div className='user-redux-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 my-3'>
                <FormattedMessage id={'manage-user.add'} />
              </div>
              <div className='col-12 my-3'>
                {isLoadingGender === true ? 'Loading Genders' : ''}
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.email'} />
                </label>
                <input className='form-control' type='email' />
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  {' '}
                  <FormattedMessage id={'manage-user.password'} />
                </label>
                <input className='form-control' type='password' />
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.first-name'} />
                </label>
                <input className='form-control' type='text' />
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  {' '}
                  <FormattedMessage id={'manage-user.last-name'} />
                </label>
                <input className='form-control' type='text' />
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.phone-number'} />
                </label>
                <input className='form-control' type='text' />
              </div>
              <div className='col-9'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.address'} />
                </label>
                <input className='form-control' type='text' />
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.gender'} />
                </label>
                <select className='form-control'>
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.position'} />
                </label>
                <select className='form-control'>
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.role'} />
                </label>
                <select className='form-control'>
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className='col-3'>
                <label htmlFor=''>
                  <FormattedMessage id={'manage-user.image'} />
                </label>
                <div className='preview-img-container'>
                  <input
                    type='file'
                    id='previewImg'
                    hidden
                    onChange={(event) => this.handleOnChangeImage(event)}
                  />
                  <label htmlFor='previewImg' className='label-upload'>
                    Tải ảnh <i class='fas fa-upload'></i>
                  </label>

                  <div
                    className='preview-image'
                    style={{
                      backgroundImage: `url(${this.state.previewImgURL})`,
                    }}
                    onClick={() => this.openPreviewImage()}
                  ></div>
                </div>
              </div>
              <div className='col-12 mt-3'>
                <button className='btn btn-primary'>
                  <FormattedMessage id={'manage-user.save'} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    rolesRedux: state.admin.roles,
    positionsRedux: state.admin.positions,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) => {
    //   dispatch(actions.changeLanguageApp(language));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
