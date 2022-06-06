const employeeCtl = {};
const Employee = require('../models/employee');

employeeCtl.getEmployees = async (req, res)=>{
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtl.createEmployee = async (req, res)=>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({message: 'Employee created.'});

};

employeeCtl.getEmployee = async (req, res)=>{
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeeCtl.updateEmployee = async (req, res)=>{
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated.'});
};

employeeCtl.deleteEmployee = async (req, res)=>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted.'});
};

module.exports = employeeCtl;