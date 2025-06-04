// Get DOM elements
const countDisplay = document.getElementById("count");
const button = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");


// Initialize counter variable
let count = 0;



// Add click event to the button
button.addEventListener("click", function () {
  count++; // Increase the count
  countDisplay.textContent = count; // Update the DOM
  if(count%2===0){
    document.getElementById("main-box").style.backgroundColor = "yellow";

  }else{
    
    document.getElementById("main-box").style.backgroundColor = "green";
  }
});

// add click event to the reset button
resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});

