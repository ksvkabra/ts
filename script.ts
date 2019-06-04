console.log('it works')

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

let age = 19;
//a = "keshav" - error - a cannot be changed to string from number type

//string
let myName = "keshav";
console.log(typeof myName);
let someVar: string;
//someVar= 10; c variable can only use type c

let myAge = 27;
//d  = '27'; //error

//array
let hobbies: string[] = ["sports", "cooking"];
console.log(typeof hobbies);
console.log(typeof hobbies[0]);

let cars = ['maruti', 'honda', 'bmw', 'rollroyce'];
console.log(cars);
cars  = ['mercedes']
console.log(cars);

let numberToString: any = 100;
numberToString = 'keshav';


//tuples
let empDetail: [string, number] = ['keshav', 99];
console.log(empDetail);
console.log(typeof empDetail);

//enum
enum SetColor {
    'Green',
    'Blue',
    'Red'
}

let color: SetColor = SetColor.Green;
console.log(color);


//functions

// function add(): number {
//     return 4+5;
// }

function add(a: number, b: number): number {
    return a+b;
}

console.log(add(4, 5))

let myNumber: (a:number, b:number) => number;

myNumber  = add;

console.log(myNumber(1, 2));

//objects

let emp1 = {
    name: 'keshav',
    age: 20,
}

console.log(emp1);

emp1 = {
    name: 'amrit',
    age: 20
}

console.log(emp1);


let emp2: {name: string, age: number} = {
    name: "keshav",
    age: 14
}

console.log(emp2);


type Complex = {data: number[], output: (all: boolean) => number[]}

let cmp1: Complex = {
    data: [1, 2, 3],
    output: (all:boolean): number[] => cmp1.data
}

console.log(cmp1, 'hi');
console.log(cmp1.output(true));

type bankAccount = {money: number, deposit:(value: number) => void};

let bankAccount: bankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: bankAccount, hobbies: string[]}=  {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);


