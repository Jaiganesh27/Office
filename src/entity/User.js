module.exports =(sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        firstName: {
            field: 'first_name',
            type: DataTypes.STRING(50),
        },
        lastName: {
            field: 'last_name',
            type: DataTypes.STRING(50),
        },
        emailId:{
            field: 'email_id',
            type:DataTypes.STRING(30),
        }, 
        password: {
            field: 'password',
            type: DataTypes.STRING(255),
        },
        phone: {
            field: 'phone',
            type: DataTypes.STRING(15),
        },
    },
    {
        tableName: 'user',
        timestamps: false,
        underscored: true,
    }
    
    
    );
    User.associate = function associate(models) {
        User.hasOne(models.userRole, {
            foreignKey: 'userId'
        });
        User.hasOne(models.ProjectUserAccess, {
            foreignKey: 'userId'
        });
    }

    return User
   }