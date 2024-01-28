import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isModalOpen:false
    };
  }

  async componentDidMount() {
    const response = await getAllUsers('ALL');
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }
  handleAddNewUser = () => {
    this.setState({
      isModalOpen:true
    })
  };
  toggleUserModal = ()=>{
    this.setState({
      isModalOpen:!this.state.isModalOpen
    })
  }
  render() {
    console.log('check render:', this.state);
    const allUsers = this.state.arrUsers;
    return (
      <div className='users-container'>
      <ModalUser open = {this.state.isModalOpen} onHandleToggle = {this.toggleUserModal}/>
        <div className='title'>Manage users with React</div>
        <div className='mx-1'>
          <button
            className='btn btn-primary px-3'
            onClick={() => this.handleAddNewUser()}
          >
            <i className='fas fa-plus'></i>
            Add new users
          </button>
        </div>
        <div className='users-table mt-3 mx-1'>
          <table id='customers'>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>

            {allUsers &&
              allUsers.map((user, index) => {
                return (
                  <tr>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td className='d-flex'>
                      <button className='btn-edit'>
                        <i className='fas fa-pencil-alt'></i>
                      </button>
                      <button className='btn-delete'>
                        <i className='fas fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
