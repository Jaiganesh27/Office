const { userValidateSchema } = require('../entity/user_validation')
const entity = require('../entity');
const { signAccessToken, signRefreshToken } = require('../jwt_helper/token');
const { hashPassword } = require('../entity/encrypt_pass');
const user = entity.user;
module.exports = {
    register: async (req, res) => {
        try {
            userData = await user.findOne({
                where: {
                    email: req.body.email,
                }
            })
            if (userData) {
                res.json({ msg: 'user already exists!!' })
            }
            userValid = await userValidateSchema.validateAsync(req.body);
            req.body.password = await hashPassword(req.body.password);
            data = await user.create(req.body);
            console.log(data, 'data');
            refreshToken = await signRefreshToken(data.id);
            console.log('refrshtoken', refreshToken);
            res.json(refreshToken);

        }
        catch (err) {
            next(err)
        }
        //   res.json({message:})
    },

    login: async (req, res) => {
        // console.log('used list is there!');
         authToken = req.headers['authorization']
        //  console.log("tokenauthfromheader",authToken);
       try{
           userValid = await user.findOne({
               where:{
                   [Op.and]:{email:req.body.email,id:req.body.id}

               }
           })  
           if(!userValid){
               res.status(400).json({message:'UNAUTHORIZED REQUEST'});
           }
             userValid
       }
       catch(err){

       }
    },

    refreshToken: async (req, res) => {
        console.log('refresh token page!');
    },

    logout: async (req, res) => {
        console.log('logout page!');
    }
}