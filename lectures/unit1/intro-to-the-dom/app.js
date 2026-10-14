

const greetElemnt=document.querySelector('#greeting-text')
console.log(greetElemnt)
const buttonElement =document.querySelector ('#greet-user-button')
// called caching an element
console.log(buttonElement) // any elemnt you cach console.log
function greetUser (){
    greetElemnt.textContent ='hello user , welcome'
}
buttonElement.addEventListener('click' , greetUser)
// exercise 1:
// 1. cache the buttons and the p element
// 2. console.log() check that you cached them correctly
const plusButton = document.querySelector('#plus-button')
const cartCount = document.querySelector('#cart-count')
const minusButton = document.querySelector('#minus-button')

console.log(plusButton)
console.log(cartCount)
console.log(minusButton)
function increaseCount()
{
    console.log('increase count')
    cartCount.textContent =Number (cartCount.textContent )+ 1
    
}
function decreaseCount()
{
    if (Number(cartCount.textContent) > 0) {
    console.log('decrease count')
    cartCount.textContent =Number(cartCount.textContent )- 1 
    }
}
plusButton.addEventListener ('click' , increaseCount)
minusButton.addEventListener ('click' , decreaseCount)

// Exercise 2:
// 1. Add <img> tag and a <button>Zaidify</button> tag to your html. The original src for the image should be as follows: https://github.com/SEB-16-Bahrain/assets/blob/main/zaid-ai-image.png
// 2. Cache both elements in the JavaScript file and CONSOLE.LOG TO CHECK THAT THEY ARE CACHED CORRECTLY
// 4. Create a function called performZaidify. This function when clicked should change the src of the img to this: https://github.com/SEB-16-Bahrain/assets/blob/main/zaid-real-image.png;
const zaidImage = document.querySelector('#image')
const zaidifyButton = document.querySelector ('#zaidify-button')

console.log (zaidImage) ;
console.log(zaidifyButton) ;
function performZaidify() {
    zaidImage.src='https://github.com/SEB-16-Bahrain/assets/blob/main/zaid-real-image.png?raw=true';
}
zaidifyButton.addEventListener('click', performZaidify) ;