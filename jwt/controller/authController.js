const { userValidateSchema } = require('../entity/user_validation')
const entity = require('../entity');
const { signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken } = require('../jwt_helper/token');
const { hashPassword, comparePassword } = require('../entity/encrypt_pass');
const user = entity.user;
module.exports = {
    register: async (req, res) => {
        try {
            if (req.body) {
                userData = await user.findOne({
                    where: {
                        email: req.body.email,
                    }
                })
                if (userData) {
                    res.json({ msg: 'user already exists!!' })
                    return 
                }
                userValid = await userValidateSchema.validateAsync(req.body);
                req.body.password = await hashPassword(req.body.password);
                data = await user.create(req.body);
                console.log(data, 'data');
                accessToken = await signAccessToken(data.id);
                refreshToken = await signRefreshToken(data.id);
                console.log('refrshtoken', refreshToken);
                res.json({ accessToken, refreshToken });
            }
            else {
                res.json({ message: 'Error Occured!' })
            }
        }
        catch (err) {
            next(err)
        }
        //   res.json({message:})
    },

    login: async (req, res) => {
        // console.log('used list is there!');
        //  authToken = req.headers['authorization']
        //  console.log("tokenauthfromheader",authToken);
        try {
            userValid = await user.findOne({
                where: {
                    email: req.body.email,
                }
            });
              if(userValid){
                  res.status(401).json({message:''})
              }
            let userPass = await comparePassword(req.body.password, userValid.password);
            console.log(userPass, userValid, 'userPass');
            if ((userValid != null) && userPass) {
                accessToken = await signAccessToken(userValid.id);
                refreshToken = await signRefreshToken(userValid.id);
                res.json({ accessToken, refreshToken });
            }
            else
                res.status(401).json({ message: 'UNAUTHORIZED REQUEST' });

        }
        catch (err) {
            res.status(500).json({ err: 'UNAUTHORIZED ENTRY!' })
        }
    },



    // need to complete
    refreshToken: async (req, res) => {
        try {
            let refToken = req.headers['authorization'];
            if (!refToken) {
                res.status(401).json({ message: 'BAD REQUEST!' })
            }
            let refreshAccessedId = await verifyRefreshToken(refToken);
            if (refreshAccessedId && refreshAccessedId.id != undefined) {
                console.log('refreshAccessedId', refreshAccessedId.id);
                accessToken = await signAccessToken(refreshAccessedId.id);
                res.status(200).json({ accessToken });
            }
            else {
                throw new Error;
            }
        }
        catch (err) {
            res.json({ message: 'UNAUTHORIZED!', error: err })
        }
    },
    logout: async (req, res) => {
        console.log('logout page!');
    },
    getData: async (req, res) => {
        let token = req.headers['authorization']
        if (!token)
            res.status(400).json({ message: 'success', err: 'BAD REQUEST!' });
        try {
            userData = await verifyAccessToken(token);
            res.status(200).json({ data: userData, message: 'success' });
        }
        catch (err) {
            res.status(401).json({ message: 'Failed', errMessage: err });
        }
    }
}