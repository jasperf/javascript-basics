/**
 * Mozilla JavaScript Beginner
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 */
/**
 * query Selector and text content
 **/

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/**
 * if statement
 * commented out as we only used this to test an if statement
 * in the browser
 * */

// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   // JavaScript Alert popup 
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

/**
 * function with parameters
 * */

function multiply(num1,num2) {
    var result = num1 * num2;
    //return to make the variable available outside of the function
    return result;
  }

  // in console you can now run multiply(12,12); for example to run these parameters

/**
 * onclick event with JavaScript
 */

 // Pick the selector to use
var myImage = document.querySelector('img');
// add onclick to the set variable and equal that to 
// a closure function
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

/**
 * Setting the username in a header tag using localStorage for
 * browser storing of data, prompt,
 * setItem and getItem functions part of localStorage
 */

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    // store data in the browser
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }