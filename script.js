"use strict";
console.log('it works');
// list of types 
/*
    1. number
    2. string
    3. null
    4. object
    5. function return
    6. array
    7. void
    8. boolean
    9. tuple
    10. enum

    typeof - return string value
    function types
    type alias
    union types
*/
//number
var age = 19;
//a = "keshav" - error - a cannot be changed to string from number type
//string
var myName = "keshav";
console.log(typeof myName);
var someVar;
//someVar= 10; c variable can only use type c
var myAge = 27;
//d  = '27'; //error
//array
var hobbies = ["sports", "cooking"];
console.log(typeof hobbies);
console.log(typeof hobbies[0]);
var cars = ['maruti', 'honda', 'bmw', 'rollroyce'];
console.log(cars);
cars = ['mercedes'];
console.log(cars);
var numberToString = 100;
numberToString = 'keshav';
//tuples
var empDetail = ['keshav', 99];
console.log(empDetail);
console.log(typeof empDetail);
//enum
var SetColor;
(function (SetColor) {
    SetColor[SetColor["Green"] = 0] = "Green";
    SetColor[SetColor["Blue"] = 1] = "Blue";
    SetColor[SetColor["Red"] = 2] = "Red";
})(SetColor || (SetColor = {}));
var color = SetColor.Green;
console.log(color);
//functions
// function add(): number {
//     return 4+5;
// }
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
var myNumber;
myNumber = add;
console.log(myNumber(1, 2));
//objects
var emp1 = {
    name: 'keshav',
    age: 20,
};
console.log(emp1);
emp1 = {
    name: 'amrit',
    age: 20
};
console.log(emp1);
var emp2 = {
    name: "keshav",
    age: 14
};
console.log(emp2);
var cmp1 = {
    data: [1, 2, 3],
    output: function (all) { return cmp1.data; }
};
console.log(cmp1, 'hi');
console.log(cmp1.output(true));
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
