module.exports = (sequelize,DataTypes)=>{
    const Project = sequelize.define('project',{
        
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        userId:{
            field: 'user_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        projectName:{
            field:'project_name',
            type:DataTypes.STRING(50),
            validate:{
                isAlpha:true
            }
        },
        projectDescription: {
            field:'project_description',
            type: DataTypes.TEXT,
        }
    },
    {
        tableName: 'project',
        timestamps: false,
        underscored: true,
        classMethods: {
        }
    });
    Project.associate = function associate(models) {
        Project.hasOne(models.User, {
            foreignKey: 'userId'
        });
    }
    return Project
   }