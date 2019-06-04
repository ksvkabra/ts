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

let a = 19;
//a = "keshav" - error - a cannot be changed to string from number type

//string
let b = "keshav";
console.log(typeof b);
let c: string;
//c = 10; c variable can only use type c

let d = 27;
//d  = '27'; //error

//array
let hoobies: string[] = ["sports", "cooking"];
console.log(typeof hoobies);
console.log(typeof hoobies[0]);

let cars = ['maruti', 'honda', 'bmw', 'rollroyce'];
console.log(cars);
cars  = ['mercedes']
console.log(cars);

let e: any = 100;
e = 'keshav';


//tuples
let num: [string, number] = ['keshav', 99];
console.log(num);
console.log(typeof num);

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

let f = {
    name: 'keshav',
    age: 20,
}

console.log(f);

f = {
    name: 'amrit',
    age: 20
}

console.log(f);


let g: {name: string, age: number} = {
    name: "keshav",
    age: 14
}

console.log(g);


type Complex = {data: number[], output: (all: boolean) => number[]}

let h: Complex = {
    data: [1, 2, 3],
    output: (all:boolean): number[] => h.data
}

console.log(h, 'hi');
console.log(h.output(true));

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