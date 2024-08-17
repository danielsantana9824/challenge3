// with this i can know when the user wants to add more employe or no
let stop = true;

// my array to storage my employees
let employees = [];

//  I will use this to calculate average
let average = 0;

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  while (this.stop) {
    let salaryTemp;

     employee  = {
     firstName : null,
     lastName : null,
     salary : 0
   };
  
    employee.firstName = prompt("Please enter your name", "");
    employee.lastName = prompt("Please enter your Last Name", "");
    salaryTemp = prompt("Please enter your Salary", "");
    employee.salary = parseInt(salaryTemp);

    while (employee.firstName === "" || employee.firstName === "") {

      if (employee.firstName === "") {
        employee.firstName = prompt("Please enter your name", "");
      } else {
        employee.lastName = prompt("Please enter your Last Name", "");
      }
    }
    
    while (isNaN(employee.salary) || employee.salary < 0) {

      if (isNaN(employee.salary)) {
        salaryTemp = prompt("Please enter your Salary.They can only be numbers, not letters.", "");
       employee.salary = parseInt(salaryTemp);
      } else {
        salaryTemp = prompt("Please enter your Salary.They can't be negative numbers.", "");
        employee.salary = parseInt(salaryTemp);
      }
  
    }
    
    this.stop = confirm("¿Do you wanna continue?");
    employees.push(employee);
  }


  return employees;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let acum = 0;

  employeesArray.forEach(employee => {
    acum += employee.salary;
  });
  average = acum / employeesArray.length;

  console.log("the average employee salary between our employee(s)",employeesArray.length, "is",average.toFixed(2));
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let winner = null;
  let random = Math.floor(Math.random() * (employeesArray.length) ) + 0;

  for (let i = 0; i < employeesArray.length; i++) {
    if (i ===  random) {
      winner = employeesArray[i];
    }
  }
  console.log("Congratulations to",winner.firstName,winner.lastName,"our random drawing winner!");
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
