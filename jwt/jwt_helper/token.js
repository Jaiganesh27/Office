const db = require('../config/db.json');
const jwt = require('jsonwebtoken');
const { refreshToken } = require('../controller/authController');

module.exports = {
    verifyAccessToken: async (token) => {
        try {
            let grantAccess = await jwt.verify(token, db.ACCESS_SECRET_KEY);
            if (grantAccess)
                console.log(grantAccess, 'grantAccessin token');
            return grantAccess;
        }
        catch (err) {
            return err;
        }

    },
    signAccessToken: async (userId) => {

        try {
            payload = { id: userId },
                accessToken =await  jwt.sign(payload, db.ACCESS_SECRET_KEY, {
                    'expiresIn': db.ACCESS_KEY_EXPTIME,
                    'issuer': 'jaiganesh',
                    // 'audience': userId
                })
            return accessToken;
        }
        catch (err) {
            return err;
        }

    },
    signRefreshToken: async (userId) => {
        try {
            payload = { id: userId },
                options = {
                    expiresIn: db.REFRESH_KEY_EXPTIME,
                    issuer: 'jaiganesh',
                    // audience: userId
                }
            let refreshToken = await jwt.sign(payload, db.REFRESH_SECRET_KEY, options)
            return refreshToken;
        }
        catch (err) {
            return err;
        }

    },
    verifyRefreshToken: async (refToken) => {
        try {
            if (!refToken) {
                throw err;
            }
            let refreshAccessedId = await jwt.verify(refToken, db.REFRESH_SECRET_KEY);
            return refreshAccessedId;
        }
        catch (err) {
            return err;
        }
    }
}