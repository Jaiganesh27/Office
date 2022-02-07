module.exports =(sequelize,DataTypes)=>{
    const Employee = sequelize.define('employees',{
        name:{
            type:DataTypes.STRING(30),
            validate:{
                isAlpha:true
            }
        },
        department:{
            type:DataTypes.STRING(30),
        },
        email:{
            type:DataTypes.STRING(30),
            validate:{
                isEmail:true
            }
        },
        phone:{
            type:DataTypes.BIGINT,
            validate:{
               min:10,
            //    max:10,
               isNumeric:true
            }
        }
    })
    return Employee
   }