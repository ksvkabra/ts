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
var a = 19;
//a = "keshav" - error - a cannot be changed to string from number type
//string
var b = "keshav";
console.log(typeof b);
var c;
//c = 10; c variable can only use type c
var d = 27;
//d  = '27'; //error
//array
var hoobies = ["sports", "cooking"];
console.log(typeof hoobies);
console.log(typeof hoobies[0]);
var cars = ['maruti', 'honda', 'bmw', 'rollroyce'];
console.log(cars);
cars = ['mercedes'];
console.log(cars);
var e = 100;
e = 'keshav';
//tuples
var num = ['keshav', 99];
console.log(num);
console.log(typeof num);
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
var f = {
    name: 'keshav',
    age: 20,
};
console.log(f);
f = {
    name: 'amrit',
    age: 20
};
console.log(f);
var g = {
    name: "keshav",
    age: 14
};
console.log(g);
var h = {
    data: [1, 2, 3],
    output: function (all) { return h.data; }
};
console.log(h, 'hi');
console.log(h.output(true));
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
