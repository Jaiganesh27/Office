var empServices = require('./services')
addEmployee = async (req, res) => {
    if (!req.body)
        res.status(400).send('Bad Request')
    else {
        if (req.body.name && req.body.department &&
            req.body.email && req.body.phone != null | '') {
            try {
                let data = {};
                data.name = req.body.name;
                data.department = req.body.department;
                data.email = req.body.email;
                data.phone = req.body.phone;
                console.log("data", data)
                let newEmployee = await empServices.addNewEmployee(data);
                console.log("aftercoming ", newEmployee);
                res.status(200).send(newEmployee);
            }
            catch (err) {
                res.status(404).send(err);
            }
        }
        else
            res.status(400).send('Bad Request')
    }

}
updateEmployee = async (req, res) => {
    if (!req.body && req.params.id)
        res.status(400).send('Bad Request')
    else {
        if (req.body.name && req.body.department &&
            req.body.email && req.body.phone != null | '') {
            try {
                let id = req.params.id;
                console.log('id',req.params.id,req.body)
                let newEmployee = await empServices.updateEmployeeById(req.body,id);
                console.log("aftercoming ", newEmployee);
                res.status(200).send(newEmployee);
            }
            catch (err) {
                res.status(404).send(err);
            }
        }
        else
            res.status(400).send('Bad Request')
    }

}
deleteEmployee = async (req, res) => {

}
getEmployeesList = async (req, res) => {

}
getEmployeeById = async (req, res) => {

}
module.exports = {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    getEmployeesList
}