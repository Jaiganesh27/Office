const Employee = require('../../entity/Employee');
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
                console.log('id', req.params.id, req.body)
                let newEmployee = await empServices.updateEmployeeById(req.body, id);
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
    if (!req.body && req.params.id)
        res.status(400).send('Bad Request')
    else {
        try {
            let id = req.params.id;
            let deletedEmployee = await empServices.deleteEmployeeById(id);
            res.send(deletedEmployee).status(200)
        }
        catch (err) {
            res.send(err).status(404)
        }
    }
}
getEmployeesList = async (req, res) => {

    try {
        let id = req.params.id;
        let employeeList = await empServices.getListofAllEmployee();
        res.send(employeeList).status(200)
    }
    catch (err) {
        res.send(err).status(404)
    }

}
getEmployee = async (req, res) => {
    if (!req.body && req.params.id)
    res.status(400).send('Bad Request')
else {
    try {
        let id = req.params.id;
        let oneEmployee = await empServices.getEmployeeById(id);
        res.send(oneEmployee).status(200)
    }
    catch (err) {
        res.send(err).status(404)
    }
}
}
module.exports = {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
    getEmployeesList
}