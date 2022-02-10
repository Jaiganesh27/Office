module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role', {

        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        roleName: {
            field: 'role_name',
            type: DataTypes.STRING(50),
        },
        isActive: {
            field: 'is_active',
            type: DataTypes.TINYINT,
        }
    },
        {
            tableName: 'role',
            timestamps: false,
            underscored: true,
        }
    );
    Role.associate = function associate(models) {
        Role.hasOne(models.userRole, {
            
            foreignKey: 'roleId'
        });
    }
    return Role
}