console.log("Script started");


//variable to track the number of clicks
let clicks = 0;
//value of each click
let clickValue = 1;

//variable to store the click counter h1
let clickDisplay = document.getElementById(click-display);
// Store level display
let levelDisplay = document.getElementById("level-display");

//set initial text for click counter
clickDisplay.innerText = "clicks:" + clicks;

//called each time the image is clicked
function handleClick() {
    console.log("Click")
    //Add one to click count
    clicks = clicks + clickValue;
    //click count display for h1
    clickDisplay.innerText = "Clicks" + clicks;
}
