"use strict";
var employees = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 51 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' }
];
console.log(employees[0]);
var firstName = employees.map(function (emp) {
    return emp.name;
});
console.log("firstname", firstName);
var lastNameUpper = employees.map(function (emp) {
    var lastName;
    lastName = emp.name.split(" ")[1];
    var lastNameUpper = lastName.toUpperCase();
    var newName = emp.name.split(" ")[0] + " " + lastNameUpper;
    emp.name = newName;
    return emp;
});
console.log(lastNameUpper);
console.log(employees);
console.log(employees.filter(function (emp) {
    if (typeof emp.age !== 'undefined') {
        if (emp.age > 41 && emp.age < 60)
            return emp;
    }
}));
var avgAge = 0;
var finalAvgAge = console.log(employees.map(function (emp) {
    if (typeof emp.age !== 'undefined') {
        console.log(emp.name);
        avgAge = emp.age + avgAge;
        return avgAge;
    }
}));
console.log(avgAge / 4);
var big;
big = 0;
var bigEmployee;
var maxAge = employees.map(function (emp) {
    if (typeof emp.age !== 'undefined') {
        if (big < emp.age) {
            big = emp.age;
            bigEmployee = emp;
        }
    }
});
console.log(bigEmployee);
var newEmpList = {
    'young': [],
    'old': [],
    'noage': []
};
var list = ["foo", "bar"];
console.log(typeof list);
console.log(typeof newEmpList.young);
employees.map(function (emp) {
    if (typeof emp.age !== 'undefined') {
        if (emp.age < 35) {
            newEmpList.young.push(emp.name);
        }
        else {
            newEmpList.old.push(emp.name);
        }
    }
    else {
        newEmpList.noage.push(emp.name);
    }
});
console.log(newEmpList);
if (employees[4]['age']) {
    console.log('yes');
}
