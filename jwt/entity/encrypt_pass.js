const crypto = require('bcrypt')
module.exports = {
    hashPassword: async (password) => {
        try {
            salt = await crypto.genSalt(10)
            hashedPass = await crypto.hash(password, salt);
            return hashedPass;
        }
        catch (err) {
            return err;
        }
    },
    comparePassword: async (cPass, aPass) => {
        try {
            comparePass = await crypto.compare(cPass, aPass);
            return comparePass;
        }
        catch (err) {
            return err;
        }
    }
}
