const basicAuth = require('basic-auth');
const User = require('../models/user');
const user = require('../models/user');

module.exports = async (req, res, next) => {
    const credentials = basicAuth(req);

    // validar se as credenciais estão corretas/preenchidas
    if (!credentials || !credentials.name || !credentials.pass) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    console.log(credentials);
    try{
        const user = await User.findOne({Username: credentials.name});
        if(!user || user.Password != credentials.pass){
            return res.status(401).json({message: 'Auth failed'});
        }
        req.user = user;
        console.log('User authenticated');
        next();
    }catch(err){
        res.status(500).json({message: 'Error validating credentials'});
    }

}