// data types : 
// 1-string 
// number 
// boolean
// undefined
// null
// arrray 
// object
const myStudent = {
    name: 'ahmed',
    phoneNumber: 9787364867,
    city : 'manama',
    languages: ['english', 'Arabic']
}
// accesung key value on object
console.log(myStudent.phoneNumber)
// another way of accesing key value
console.log(myStudent['phoneNumber'])
// adding a new value paie
myStudent.homeAddres='daih'
console.log(myStudent)
// changing a key value pait
myStudent.city = 'jidhafs'
// delete a key value pair 
delete myStudent.homeAddres
console.log (myStudent)
console.log(myStudent.languages[0])

const allStudents = [
    {
        studentName : 'ali'
    }
    ,
    {
studentName : 'nasser'
    }
    ,
{

studentName : 'ahmed'
}
]
console.log(allStudents[1].studentName)
console.log(allStudents[0].studentName)
console.log(allStudents[2].studentName)


for(let x of allStudents){
    console.log(x)
}
for (let i=0 ; i<allStudents.length ; i++) {
    allStudents[i].studentName
}

/*
Exercise 1:
Loop through this array of objects
console.log the following string:
"I am [teacherName] and I am from [country]"
*/
const allTeachers =
[
     {teacherName: "Omar", country: 'Saudi Arabia', languages: ['English',' Half Arabic']},
     {teacherName: "Zaid", country: 'Bahrain', languages: ['English','Arabic']},
     {teacherName: "Ayah", country: 'Bahrain', languages: ['English','Arabic']}
]
for(let oneTeacher of allTeachers){
    console.log(`I am ${oneTeacher.teacherName} and I am from ${oneTeacher.country} and I speak these languages:`)

    for(let oneLanguage of oneTeacher.languages){
        console.log(`- ${oneLanguage}`)
    }
}

for(let i = 0; i< allTeachers.length; i++){
    console.log(`I am ${allTeachers[i].teacherName} and I am from ${allTeachers[i].country} and I speak these languages:`)
    
    for(let j = 0; j< allTeachers[i].languages.length; j++){
        console.log(`${j + 1}. ${allTeachers[i].languages[j]}`)

    }
}

const newStudent = {
    studentName : 'jaafar' ,
    sayHi : function () {
        console.log('hi my name is jaafar')
    }
}
newStudent.sayHi()
const myAccount = {
    owner : 'mohammed' ,
    balance : 700 ,
    withDraw : function(amount) {
        myAccount.balance = myAccount.balance - amount
    }
}
myAccount.withDraw(200)
console.log(myAccount)
myAccount.deposit = function (amount) {
    myAccount.balance = 
}

