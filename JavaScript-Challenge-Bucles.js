// let array = [ 'River Plate', ' Arsenal', 'PSG', 'Barcelona', 'Inter de Miami'];
// for (let i = 0; i < array.length; i++ ) {
//     let equipos = array[i];
//     if (equipos === 'River Plate' || equipos === 'Arsenal' || equipos === 'Barcelona'){
//         console.log ( equipos + " Teams Alexis Sanchez has played for.");
//     } else if 
//          (equipos === 'PSG' || equipos === 'Barcelona' || equipos === 'Inter de Miami'){
//             console.log ( equipos + " Teams Lionel Messi has played for."); 
//          }
//     };


const colors = ['red','green','blue','yellow'];
const person =  {
    name : 'María',
    age : '27',
    profession : 'diseñadora'
}

// 1.- Print the numbers from 1 to 5

let i = 0;
while (i<=5) {
    console.log(i);
    i++;
}

// 2.-Go through a list of colors.

for ( let i = 0; i < colors.length; i++){
console.log(colors[i]);
}

// 3.- Iterate through the properties of a person object.

for ( let values in person ) {
    console.log(person[values]);
}

// 4.- Find the number closest to the square of 100.

let num = 0; 
while (num * num < 100) {
   num++;
}
console.log("The number closest to 100 whose square is less than 100 is:", num);

// method 2

let numero = 0;

while (numero < 100) {
     numero*numero;
    if (numero=== 10) {
        console.log("The number closest to 100 whose square is less than 100 is:", num);
    }
    numero++;
}


// 5.- Print the even numbers up to 10, printing at least one.

// method 1

let number = 0;
while (number<=10) {
   if(  number%2 ===0 ) 
   {console.log(number);
}
number++
};






    

