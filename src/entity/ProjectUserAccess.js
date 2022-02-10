module.exports =(sequelize,DataTypes)=>{
    const ProjectUserAccess = sequelize.define('projectUsersAccess',{
        
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        projectId:{
            field:'project_id',
            type:DataTypes.BIGINT,
            validate:{
                isAlpha:true
            }
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'projectuseraccess',
        timestamps: false,
        underscored: true,
    });
    ProjectUserAccess.associate = function associate(models) {
        ProjectUserAccess.belongsTo(models.User, {
            foreignKey: 'userId'
        });
        ProjectUserAccess.belongsTo(models.Project, {
            foreignKey: 'projectId'
        });
    }
    return ProjectUserAccess
   }