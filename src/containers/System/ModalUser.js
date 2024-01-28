import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.onHandleToggle();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.open}
        toggle={() => this.toggle()}
        size='lg'
        centered
        className='modal-user-container'
      >
        <ModalHeader toggle={() => this.toggle()}>
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className='modal-user-body'>
            <div className='input-container'>
              <label>Email:</label>
              <input type='text' />
            </div>
            <div className='input-container'>
              <label>Password:</label>
              <input type='password' />
            </div>
            <div className='input-container'>
              <label>First Name:</label>
              <input type='text' />
            </div>
            <div className='input-container'>
              <label>Last Name:</label>
              <input type='text' />
            </div>
            <div className='input-container max-width-input'>
              <label>Address:</label>
              <input type='text' />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' className='px-3' onClick={() => this.toggle()}>
            Save Changes
          </Button>{' '}
          <Button color='secondary' className='px-3' onClick={() => this.toggle()}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);