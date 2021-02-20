const router = require('express').Router();
const { apiLogin } = require('../../controllers/apiController.js');

router.post('/login', apiLogin);

// router.post('/login', ({ email, password }, res) => {
//   // User.find(email)
//   //   .then(user => {
//   //     res.json(dbTransaction);
//   //   })
//   //   .catch(err => {
//   //     res.status(400).json(err);
//   //   });
// });

module.exports = router;
