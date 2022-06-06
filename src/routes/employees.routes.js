const {Router} = require('express');
const router = Router();
const employeesCtl = require('../controllers/employees.controllers');

router.get('/', employeesCtl.getEmployees);
router.post('/', employeesCtl.createEmployee);
router.get('/:id', employeesCtl.getEmployee);
router.put('/:id', employeesCtl.updateEmployee);
router.delete('/:id', employeesCtl.deleteEmployee);

module.exports = router;