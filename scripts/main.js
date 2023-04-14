//the return statement tells the browser to return the result variable
//out of the function ,so it is available to use. This is necessary bc
//variables defined inside functions are only available inside those functions.
//this called variable scoping
/*
const myHeading = document.querySelector("h1");
myHeading.textContent="hello world!";

let iceCream = "chocolate";
if( iceCream === "chocolate"){
    alert("yay, i love chocolate ice cream");
}else{
    alert("aww, but chocolate is my favorite");
}

function multiply(num1,  num2){
    let result = num1 * num2;
    return result;
}
console.log(multiply(1,5));
console.log(multiply(7,8));

// real interactivity on a website requires event handlers. These are code
//structures that listen for activity in the browser ,and run code in response.
//the most obvious example is handling the click event, which is fired by
//the browser when you click on sth with you mouse.

document.querySelector("html").addEventListener("click", function (){
    alert("Ouch! ");
});

// anonymous function, bc it doesn't have a name. there is an alternative way of writing anonymous functions, which we call
//an arrow function.
document.querySelector("html").addEventListener("click", () => {
    alert("Stop poking me.");
});

 */

let myImage = document.querySelector("img");

myImage.onclick =() => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/firefox2.png");
    }else{
        myImage.setAttribute("src","images/firefox-icon.png");
    }
};

// Personalized welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName =prompt("Please enter you name.");
    if(!myName){
        setUserName();
    }else {
        localStorage.setItem("name", myName);
        myHeading.textContext = `Mozilla is cool, ${myName}`;
        //don't use single quote! use backticks(`)
    }
}
//the setUserName() function contains a prompt() function, which displays
//a dialog box, similar to alert(). This prompt() function does more than alert(), asking the user to enter data,
//and storing it in a variable after user clicks OK.

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent =`Mozilla is cool, ${storedName}`;
}
//the first like of this block uses the negation operator to check whether name data exists.
//if not, the setUserName() function runs to create it.

myButton.onclick =() =>{
    setUserName();
};
