/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet (timeString) {
  let timeNow = parseInt(timeString.substr(0,2))
  if (timeNow < 12) {
    return 'Good Morning'
  }
  if (timeNow >= 12 && timeNow <= 17) {
    return 'Good Afternoon'
  }
  if (timeNow > 17) {
    return 'Good Evening'
  }
} 

function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.textContent = string
}