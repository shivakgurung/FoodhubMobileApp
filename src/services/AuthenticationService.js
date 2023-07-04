import axios from 'axios';
import {ApiConstants} from '../constants';
// import {getToken} from '../Store';
// import {authHeader} from '../utils/Generator';

const AuthRequest = axios.create({
  baseURL: ApiConstants.BACKEND_API.BASE_API_URL,
});

const register = async user => {
  if (!user?.username || !user?.email || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {
    let requestBody = {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    };
    let registerResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.REGISTER,
      requestBody,
    );
    // console.log('the register response', registerResponse);
    // return registerResponse?.data;
    return registerResponse;
  } catch (error) {
    // console.log(error);
    // return error;
    // return {status: false, message: 'Oops! Something went wrong'};
    return {status: false, message: error?.response?.data?.message};
    // response?.response?.data?.message;
  }
};

const login = async user => {
  if (!user?.email || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {
    let requestBody = {
      email: user?.email,
      password: user?.password,
    };
    let loginResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.LOGIN,
      requestBody,
    );
    console.log(loginResponse);
    // return loginResponse?.data;
    return loginResponse;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

export default {register, login};
