class Run{
    result: number;
    a: number;
    b: number;
    
    constructor() {
        this.result = 0;
        this.a = 0;
        this.b = 0;
    }
    sum (x: number, y: number) {
        this.result = x+y
    }
    
    mul() {
        this.result = this.a * this.b;
    }

}

const obj = new Run();

obj.sum(1,2);
console.log(obj.result);