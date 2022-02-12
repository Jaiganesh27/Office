module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {

        id: {
            type: Sequelize.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        userName: {
            field: 'user_name',
            type: Sequelize.DataTypes.STRING(50),
        },
        email: {
            field: 'email',
            type: Sequelize.DataTypes.STRING(50),
        },
        password: {
            field: 'password',
            type: Sequelize.DataTypes.STRING(255),
        }

    },
        {
            tableName: 'user',
            timestamps: true,
            underscored: true,
        }
    );
    return User
}