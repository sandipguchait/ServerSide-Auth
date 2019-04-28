const User = require('../models/User');

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    //Validation
    if( !email || !password ) {
        return res.status(422).send({ error: 'Please Provide Both Email and Password'});
    }

    // CHECKING TO SEE IF EMAIL EXISTS
    User.findOne({ email }, (err, existingUser) => {
        if(err) return next(err);

        if(existingUser) {
            return res.status(422).send({ error: 'Email already Exists'});
        }

        //ELSE ADDING USER TO DB
        const user = new User({
            email,
            password
        });

        user.save((err) => {
            if (err) return next(err);
            res.json({ success: true });
        });
    });


}