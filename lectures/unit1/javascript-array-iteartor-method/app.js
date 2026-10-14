console.log('array iterator methods')

const myNumbers = [10 , 20 , 30 , 40 , 50]
// for each call back function
myNumbers.forEach((number) => {
    console.log(number)
})
// all methods we will see from begenning to end
// all methods we will seee today take a call back function as the argumnt
// filter ()

const grades = [95 , 62 , 78 , 90 , 80 , 30]
 const passingGrades = grades.filter((oneGrade)=>{
    return oneGrade > 70
 })
 console.log(passingGrades)

 /////////


const shoppingCart = [
    {
        name: "Laptop",
        price: 1200,
        shipsToBahrain: true
    },
    {
        name: "Smartphone",
        price: 800,
        shipsToBahrain: false
    },
    {
        name: "Headphones",
        price: 150,
        shipsToBahrain: true
    },
    {
        name: "Smartwatch",
        price: 300,
        shipsToBahrain: false
    }
];

const itemShoppingToBahrain = shoppingCart.filter ((oneItem)=>{
    return oneItem.shipsToBahrain
})

console.log (itemShoppingToBahrain)


//  map ()
const priceInRyal =shoppingCart.map((oneItem)=>{
    return oneItem.price * 10 + ' SAR'

})
console.log (priceInRyal)


////////
const students = [
    {
        studentName: 'Ahmad',
        id: 57234
    },
    {
        studentName: 'Ammar',
        id: 2876
    },
    {
        studentName: 'Mohammad',
        id: 8795
    }
]

const ammarStudent = students.find((oneStudent)=>{
    return oneStudent.id === 2876
})
console.log(ammarStudent)
// every () : if every element match the condition
const isShippingValid = shoppingCart.every ((oneItem)=> {
    return  oneItem.shipsToBahrain
})
console.log (isShippingValid)
// some () : if one elemnt match the condition
const isAhmedInStudents = students.some ((oneStudent)=>{


})
shoppingCart.sort((a,b)=>{
    return b.price - a.price
})

console.log(shoppingCart)