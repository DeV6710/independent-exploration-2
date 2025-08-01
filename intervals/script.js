// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

time = setInterval(function(){
    time += 1;
    counterElement.innerHTML = time
},1000)

