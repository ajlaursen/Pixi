import axios from 'axios';

export default {
  createUser: function (user) {
    return axios({
      method: 'post',
      url: '/user/new',
      data: user,
    }).then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
  
  },

  login: function (user) {
    return axios({
      method: 'post',
      url: '/user/login',
      data: user,
    }).then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
  },
};
