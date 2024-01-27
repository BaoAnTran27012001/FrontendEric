import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    const response = await getAllUsers('ALL');
    console.log(response);
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }
  render() {
    console.log('check render:', this.state);
    const allUsers = this.state.arrUsers;
    return (
      <div className='users-container'>
        <div className='title'>Manage users with React</div>
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
