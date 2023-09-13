// Write your solution in this file!
const employee = {
    name: 'Kevin Olongo',
    streetAddress: "191 Suna MIgori",
  };
  module.exports = { employee };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
  };

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  module.exports = { employee, updateEmployeeWithKeyAndValue, destructivelyUpdateEmployeeWithKeyAndValue };

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};