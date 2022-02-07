var entity = require('../../entity')
var Employee = entity.employees;
console.log("employee model",Employee);
addNewEmployee =async (data) =>{
    console.log("employee model",Employee);
    console.log("result",data);
    try{
  result =  await Employee.create(data);
  console.log("result",result)
   return result;
    }
    catch(err){
        return err;
    }
}
updateEmployeeById = async (data,id) =>{
    console.log("updated function console",data,id);
    try{
 let result =  await Employee.findOne({
      where :{
          id:id
      }
  })
    if(result)
    {
        let updatedData = {};
        updatedData.name = data.name;
        updatedData.department = data.department;
        updatedData.email = data.email;
        updatedData.phone = data.phone;
         
       let newResult = await Employee.update(updatedData,{
            where:{
                id:id
            }
        })
        return newResult;
    }
    else{
        throw err;   
    }
    }
    catch(err){
        return err;
    }
}

deleteEmployeeById =()=>{
    
}
getListofAllEmployee =()=>{
    
}
getEmployeeById =()=>{
    
}
module.exports = { addNewEmployee,updateEmployeeById, deleteEmployeeById, getListofAllEmployee, getEmployeeById};