import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001"

export default {
  createUser: function (user) {
    return axios({
      method: 'post',
      url: '/user/signup',
      data: user,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
  
  },

  login: function () {
    return axios.post('/user/login');
  },
};
