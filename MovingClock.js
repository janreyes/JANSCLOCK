var refreshInterval = 50; // in milliseconds, for setInterval
var millisInAnHour = 1000*60*60; // number of milliseconds in an hour

//
// Changed by Evan - see below
//
function expansionhour() 
{
  
  // the maximum radius before it goes back to 0
  var maxRadius = 67.5;

  // CHANGED
  // number of pixels to grow the radius by each time
  // we want to make it so that it takes an hour to grow fully
  // 
  var rateOfGrowth = maxRadius * refreshInterval / millisInAnHour;
  
  // get the SVG element for this circle
  var circle2 = document.getElementById("circle2");
  
  // CHANGED
  // get the actual circle radius from the SVG element
  var circleRadius = circle2.getAttribute('r');
  
  // turn the radius into a decimal number (or else it will 
  // be a string)
  circleRadius = parseFloat(circleRadius);
  
  // grow the radius
  circleRadius = circleRadius + rateOfGrowth;

  // watch it slowly grow
  //console.log(circleRadius);
  
  // if the radius gets too big, make it 0
  if (circleRadius > maxRadius)
  {
    circleRadius = 0;
  }
  
  circle2.setAttribute('r', circleRadius);
}
  

//run the expansion function every 50ms (1s)
setInterval ( expansionhour, refreshInterval );



//
// For you:
// Now try doing this for the other 2 functions


//MINUTES CIRCLE


var millisInAnMinute = 1000*60;

function expansionminute() 
{
  var maxRadius = 67.5;
  
  var rateOfGrowth = maxRadius * refreshInterval / millisInAnMinute;
  
  var circle3 = document.getElementById("circle3");
  //console.log(circle3);
  
  var circleRadius = circle3.getAttribute('r');
  
  circleRadius = parseFloat(circleRadius);
  
  circleRadius = circleRadius + rateOfGrowth;
  
  //console.log(circleRadius);
  
if (circleRadius > maxRadius)
  {
    circleRadius = 0;
  }
  
  circle3.setAttribute('r', circleRadius);
}
  
setInterval ( expansionminute, refreshInterval );


//SECONDS CIRCLE
var refreshInterval = 50;

var millisInAnSecond = 1000;

function expansionsecond() 
{
  var maxRadius=200.5;
  
  var rateOfGrowth = maxRadius * refreshInterval / millisInAnSecond;
  
  var circle1 = document.getElementById("circle1");
  
    var circleRadius = circle1.getAttribute('r');
  
  circleRadius = parseFloat(circleRadius);
  
  circleRadius = circleRadius + rateOfGrowth;
  
  console.log(circleRadius);
  
if (circleRadius > maxRadius)
  {
    circleRadius = 0;
  }
  
  circle1.setAttribute('r', circleRadius);
}
  
setInterval ( expansionsecond, refreshInterval );
