const { User } = require('../../models');

const router = require('express').Router();

router.post('/login', ({ email, password }, res) => {
  // User.find(email)
  //   .then(user => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

module.exports = router;
