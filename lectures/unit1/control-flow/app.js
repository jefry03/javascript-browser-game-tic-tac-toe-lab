console.log("control flow lesson");
// if statement (condition) {
const savedPassword='1234'
const givenPassword='password1234'
// means assignment 
/// === means comparison
console.log(givenPassword === savedPassword) 
console.log(5>2)
// && meants two conditions must be true
console.log( 5 >2 && 10<=10)
// only one condition must be true
console.log( 1>2 || 10<10)
// ! not operator
console.log(5 !==2)
const age = 16
if(age >= 18){
    console.log("You are allowed to drive");
}
else if (age < 18) {
console.log("you are not allowed to deive")
}
else {
console.log("invalid ")
}

/*

First, declare and initialize a variable named color.
Then, write a branching statement that console.logs the following based upon the value of color:

If the value isgreen, log'Go'
If the value isyellow, log'Slow'
If the value isred, log'Stop'
If the value is anything else, log'ERROR'
*/

const color ='yellow'
let count = 5
count + 1
console.log(count)
count +=1
console.log('........................')
// for loop for ( starting point : condition  to continue : incremaation ) { action}
for ( let i=0 ; i<4 ;i++ ){
    if (i===2) {
        continue
    }
    console.log(i)
// truthy
// falsy 
}
const isloggedin= false 

for ( let i=1 ; i<=28 ;i++ ){
    console.log(i)


}


console.log('........................')
console.log('........................')
console.log('........................')

for ( let i=0 ; i<=28 ;i++ ){
    if (i <= 14) {
        continue;
    }
    console.log(i)
}
console.log()