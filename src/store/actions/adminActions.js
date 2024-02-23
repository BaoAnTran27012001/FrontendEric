import actionTypes from './actionTypes';
import {
  getAllcodesService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
} from '../../services/userService';
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = await getAllcodesService('GENDER');
      if (res && res.errCode === 0) {
        console.log('baoan check get state: ', getState());
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (error) {
      dispatch(fetchGenderFailed());
      console.log('fetch getGenderStart: ', error);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcodesService('POSITION');
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (error) {
      dispatch(fetchPositionFailed());
      console.log('fetch Position Failed: ', error);
    }
  };
};
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcodesService('ROLE');
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (error) {
      dispatch(fetchRoleFailed());
      console.log('fetch Role Failed: ', error);
    }
  };
};
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log('check create user redux  ', res);
      if (res && res.errCode === 0) {
        toast.success('Created a new user successfully');
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (error) {
      dispatch(saveUserFailed());
      console.log('saveUserFailed: ', error);
    }
  };
};

export const saveUserSuccess = () => ({
  type: 'CREATE_USER_SUCCESS',
});
export const saveUserFailed = () => ({
  type: 'CREATE_USER_FAILED',
});
export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers('ALL');
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUsersFailed());
      }
    } catch (error) {
      toast.error('Fetch All User Error !');
      dispatch(fetchAllUsersFailed());
      console.log('fetch All Users Failed: ', error);
    }
  };
};
export const fetchAllUsersSuccess = (data) => ({
  type: 'FETCH_ALL_USERS_SUCCESS',
  users: data,
});
export const fetchAllUsersFailed = () => ({
  type: 'FETCH_ALL_USERS_SUCCESS',
});
export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      console.log('check create user redux  ', res);
      if (res && res.errCode === 0) {
        toast.success('Deleted user successfully');
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error('Deleted user error');
        dispatch(saveUserFailed());
      }
    } catch (error) {
      toast.error('Deleted user error');
      dispatch(deleteUserFailed());
      console.log('deleteUserFailed: ', error);
    }
  };
};
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});
