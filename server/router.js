const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//Checking Authentication status before visiting aparticular route
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
   app.get('/', requireAuth, (req, res) => {
      res.send({ Working: 'Yes'});
   });
   app.post('/signup', Authentication.signup);
} 