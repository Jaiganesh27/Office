const UserRole = require("../../entity/UserRole");

getAllUserRoles = async () => {
    try {
        let result = await UserRole.findAll({
            include: [{ model: UserRole, attributes: attributes}]
        })
        if (result)
            return result;
    }
    catch (err) {
        return err;
    }
}
getUserRoleById = async (userId,roleId) => {
    try {
        let result = await UserRole.findOne({

            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: {
                id: id
            }
        })
        if (result)
            return result;
    }
    catch (err) {
        return err;
    }
}
