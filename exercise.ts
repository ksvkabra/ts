let employees = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 51},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'}
]

console.log(employees[0]);

let firstName = employees.map(emp => {
    return emp.name;
})

console.log("firstname" , firstName);

let lastNameUpper = employees.map(emp  => {
    let lastName: string;
    lastName  = emp.name.split(" ")[1];
    let lastNameUpper: string = lastName.toUpperCase();
    let newName = emp.name.split(" ")[0] + " " + lastNameUpper;
    emp.name = newName;
    return emp;
})

console.log(lastNameUpper);

console.log(employees);

console.log(employees.filter(emp => {
    if(typeof emp.age !== 'undefined') {
        if(emp.age > 41 && emp.age <60)
           return emp;
    }
}))

let avgAge : number = 0;

let finalAvgAge = console.log(employees.map(emp => {
    if(typeof emp.age !== 'undefined') {
        console.log(emp.name)
        avgAge = emp.age + avgAge;
        return avgAge;
    }
}))

console.log(avgAge/4);
let big:any;

big = 0;
let oldestEmployee;
let maxAge = employees.map(emp => {
    if(typeof emp.age !== 'undefined') {
        if(big < emp.age) {
            big = emp.age
            oldestEmployee = emp;
        }
    }
})

console.log(oldestEmployee);


let newEmpList:{young: string[], old: string[], noage: string[]} = {
    'young': [],
    'old': [],
    'noage': []
}

employees.map(emp => {
    if(typeof emp.age !== 'undefined') {
        if(emp.age< 35) {
            newEmpList.young.push(emp.name);
        }  else{
            newEmpList.old.push(emp.name);
        }
    } else {
        newEmpList.noage.push(emp.name);
    }
})

console.log(newEmpList) 

if(employees[4]['age']) {
    console.log('yes')
}