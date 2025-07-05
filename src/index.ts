let sales = 200_999_99
let level
let queue = [1,3,4,5,6,7,8,8];

queue.forEach(element => {
    console.log(element.toString);
});
// console.log(level);
// tuple
let user :[number, string] = [1, 'mm']
// function render(resposne :any){
//     console.log(resposne);  
// }
// //enum
enum Size{Small =3, Medium, Large};
let mySize: Size = Size.Large;
console.log(mySize);
function calculateTax(income: number, taxYear?:number): number{
    if((taxYear||2022) < 50_000)
        return income * 1.2;
    return income;
}
calculateTax(22);

type Employee = {
    readonly id:number,
    name:string
    retire: (date: Date)=> void
}

let employee : Employee = {
    id:1,
    name:"",
    retire:(date:Date)=>{
           console.log(date);
       }
    };

    function kgToLbs(weight:number | string):number{
        // Narrowing
        if(typeof weight === 'number')
            return weight * 2.2;
        return parseInt(weight)*2.2;
    }

type Draggable = {
    drag: ()=> void
};
type resizeable = {
    resize: ()=> void
}
type UIWidget = Draggable & resizeable

let ui: UIWidget = {
    resize:()=> {},
    drag:()=> {}
}
type Hight = 150|200;
let hight :Hight =200

type Metric = 'cm' | 'm'

//Nullish
let speed: number | null = null

let ride = {
    speed: speed ?? 30
}

//Type Assertions
let phone = <HTMLInputElement> document.getElementById('phone')

phone.value
//the unknown type
function render(document: unknown){
    if(document instanceof WakeLock){

        // document.toLowerCase()
    }

}