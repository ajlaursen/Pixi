import axios from 'axios';
// import { useAuth } from '../../../utils/';

function setDefaults(token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
};

function setAuth(obj = {}) {
  localStorage.setItem('authentication', JSON.stringify(obj));
  setDefaults(obj.token);
};

function getAuth() {
  const auth = JSON.parse(localStorage.getItem('authentication'));
  if (auth) {
    setDefaults(auth.token);
    return auth;
  }
  return null;
};

function logout() {
  localStorage.removeItem('authentication');
  
};

async function updateUser(user) {
  return axios({
    method: 'post',
    url: '/user/update',
    data: user,
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

async function createUser(user) {
  return axios({
    method: 'post',
    url: '/user/new',
    data: user,
  }).then(function (res) {
      console.log(res);
      setAuth({ token: res.data.token });
      return res.data.token;
    })
    .catch(function (err) {
      console.log(err);
    });

};

async function login(user) {
  console.log(user);
  return axios({
    method: 'post',
    url: '/user/login',
    data: user,
  }).then(function (res) {
      console.log(res);
      setAuth({ token: res.data.token });
      return res.data.token;
    })
    .catch(function (err) {
      console.log(err);
    });
};

async function getUser(user){
  return axios({
    method: 'get',
    url: '/user/',
    data: user,
  }).then(function (res) {
    return res.data
  }).catch((err)=>console.log(err))
}

export const API = {
  setDefaults,
  setAuth,
  getAuth,
  logout,
  createUser,
  login,
  updateUser,
  getUser,
};
