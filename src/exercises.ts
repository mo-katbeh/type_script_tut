//1
type User = {
    name: string;
    age: number;
    occupation?: string; 
};

let users: User = [ 
  { 
name: 'John Smith', 
age: 30, 
occupation: 'Software engineer' 
}, 
  { 
    name: 'Kate Müller', 
    age: 28
} 
]; 
//2
type Bird = {
    fly: ()=> void
}


type Fish = {
    swim: ()=> void
}

type Pet = Fish | Bird

//3
type  DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 
                    'Friday' | 'Saturday' | 'Sunday';
//4
let user = getUser(); 

console.log(user?.address?.street); 

let x = foo ?? bar();

//5
let value: unknown = 'a'; 
if (typeof value === 'string') 
console.log(value.toUpperCase()); 