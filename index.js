// Define the initial employee object
var employee = {
    name: "Irene Annah",
    streetAddress: "Mbagadi Area"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value 
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    var newObj = { ...employee }; // Copy the original object
    delete newObj[key]; // Delete the specified key from the copy
    return newObj; }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
  }
  
  
  
  console.log("Initial employee object:");
  console.log(employee);
  
  var updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log("Updated employee object non-destructively (updateEmployeeWithKeyAndValue):");
  console.log(updatedEmployee1);
  
  var updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated employee object destructively (destructivelyUpdateEmployeeWithKeyAndValue):");
  console.log(updatedEmployee2);
  
  var employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee object without 'name' key non-destructively (deleteFromEmployeeByKey):");
  console.log(employeeWithoutName);
  
  var destructivelyUpdatedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee object without 'streetAddress' key destructively (destructivelyDeleteFromEmployeeByKey):");
  console.log(destructivelyUpdatedEmployee);
  
  
  console.log("Original employee object after function calls:");
  console.log(employee);
  