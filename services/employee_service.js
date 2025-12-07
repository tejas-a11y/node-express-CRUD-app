const db = require('../db')

module.exports.getAllEmployees = async()=>{
    const [records] = await db.query("SELECT * FROM employees")
    .catch(err => console.log(err))
    return records;
}

module.exports.getEmployeeById = async(id)=>{
    const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
    .catch(err => console.log(err))
    return record;
}

module.exports.deletetEmployee = async(id)=>{
    const [data] = await db.query("DELETE FROM employees WHERE id = ?", [id])
    .catch(err => console.log(err))
    return data.affectedRows;
}

module.exports.addOrEditEmployee = async(obj,id = 0)=>{
    const [data] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?)", 
        [id, obj.name, obj.employee_code, obj.salary])
    .catch(err => console.log(err))
    return data[0][0].affectedRows;
}