const checkAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      console.log(req.session.logged_in);
      console.log(req.session);

      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = checkAuth;