module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define('userrole', {

        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roleId: {
            field: 'role_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        accessType: {
            field: 'access_type',
            type: DataTypes.INTEGER,
        },
    },
        {
            tableName: 'userrole',
            timestamps: false,
            underscored: true,
        }
    );

    UserRole.associate = function associate(models) {
        UserRole.belongsTo(models.User, {
            foreignKey: 'userId'
        });
        UserRole.belongsTo(models.Role, {
            foreignKey: 'roleId'
        });
    }



return UserRole
}