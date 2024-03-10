import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import * as ReactDOM from 'react-dom';
import './ManageDoctor.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkDown: '',
      contentHTML: '',
      selectedOption: null,
      description: '',
      listDoctors: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctors();
  }
  buildDataInputSelect(inputData) {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
       return  result.push(object);
      });
    }
    return result;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkDown: text,
      contentHTML: html,
    });
    console.log('handleEditorChange', html, text);
  };
  handleSaveContentMarkdown() {
    console.log(this.state);
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkDown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value,
    });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  handleOnChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  render() {
    
    return (
      <div className='manage-doctor-container'>
        <div className='manage-doctor-title'>Tạo thêm thông tin bác sĩ</div>
        <div className='more-info'>
          <div className='content-left form-group'>
            <label htmlFor=''>Chọn bác sĩ</label>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={this.state.listDoctors}
            />
          </div>
          <div className='content-right'>
            <label htmlFor=''>Thông tin giới thiệu</label>
            <textarea
              className='form-control'
              name=''
              id=''
              cols='30'
              rows='4'
              onChange={(event) => this.handleOnChangeDescription(event)}
              value={this.state.description}
            >
              adasdasd
            </textarea>
          </div>
        </div>
        <div className='manage-doctor-editor'>
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          className='save-content-doctor'
          onClick={() => this.handleSaveContentMarkdown()}
        >
          Lưu thông tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
    saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctorAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
