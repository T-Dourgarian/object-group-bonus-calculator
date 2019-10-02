const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

$(document).ready(readyNow);

function readyNow() {
  $("#runBtn").click(showEmployees);

}

function showEmployees() {
  let listEl = $("#employeeList");

  let newEmployeeArray = getNewObjects(employees);

  for (const employee of newEmployeeArray) {
    listEl.append(listDOMEmployee(employee));
  }


}

function listDOMEmployee(newEmployee) {
  // this is to append to the <ul> tag
  return "<li> Name: " + newEmployee.name + ", Bonus Percentage: " + newEmployee.bonusPercentage + ", Total Compensation: " + newEmployee.totalCompensation + ", Total Bonus: " + newEmployee.totalBonus + " </li>" 
}



function bonusCalculator(employee) {
  let totalPercentage = 0;
  if (employee.reviewRating == 5) totalPercentage += .1;

  else if (employee.reviewRating == 4) totalPercentage += .06;

  else if (employee.reviewRating == 3) totalPercentage += .04;
  else if (employee.reviewRating <= 2) return 0;

  if (employee.employeeNumber.length == 4) totalPercentage += .05;

  if(employee.annualSalary > 65000) totalPercentage -= .01;

  if (totalPercentage > .13) totalPercentage = .13;

  if (totalPercentage < 0) totalPercentage = 0;

  return totalPercentage;
}


function newEmployeeObject(employee) {

    let bonusPercentage = bonusCalculator(employee);

    let newEmployee = {
      name: employee.name,
      bonusPercentage: bonusPercentage * 100 + "%",
      totalCompensation: Number(employee.annualSalary) + (bonusPercentage * Number(employee.annualSalary)),
      totalBonus:bonusPercentage * employee.annualSalary
    };

    return newEmployee;
}

function getNewObjects(array) {
  let newEmployeeArray = [];
  for(employee of array) {
    newEmployeeArray.push(newEmployeeObject(employee));
  }
  return newEmployeeArray;
}



// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


console.log(getNewObjects(employees));