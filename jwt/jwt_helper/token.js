const db = require('../config/db.json');
const jwt = require('jsonwebtoken');

module.exports = {
    verifyAccessToken: async (req, res) => {

    },
    signAccessToken: async (req, res) => {

        try {
            payload = req.user.id,
               accessToken =  jwt.sign(payload, db.ACCESS_SECRET_KEY, {
                    'expiresIn': db.ACCESS_KEY_EXPTIME,
                    'issuer': 'jaiganesh',
                    'audience': req.user.id
                })
                return  accessToken;
        }
        catch (err) {
                return err;
        }

    },
    signRefreshToken: async (userId) => {
        try {
            payload = {user:userId},
            options = {
                expiresIn: db.ACCESS_KEY_EXPTIME,
                issuer: 'jaiganesh',
                // audience: userId
            }
              let accessToken = await jwt.sign(payload, db.ACCESS_SECRET_KEY,options )


              options =  {
                expiresIn: db.REFRESH_KEY_EXPTIME,
                issuer: 'jaiganesh',
                // audience: userId
            }
               let  refreshToken = await jwt.sign(payload, db.REFRESH_SECRET_KEY,options)
              return {accessToken , refreshToken}
        }
        catch (err) {
            return err;
        }

    },
    verifyRefreshToken: async (req, res) => {

    }
}