import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import * as ReactDOM from 'react-dom';
import './ManageDoctor.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
const mdParser = new MarkdownIt(/* Markdown-it options */);

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkDown: '',
      contentHTML: '',
      selectedOption: null,
      description: '',
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkDown: text,
      contentHTML: html,
    });
    console.log('handleEditorChange', html, text);
  };
  handleSaveContentMarkdown() {
    console.log('hoidanit check state: ', this.state);
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
              options={options}
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
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
