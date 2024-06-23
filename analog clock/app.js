const Secondhand = document.getElementById("second-hand")
const Minutehand = document.getElementById("minute-hand")
const Hourhand =  document.getElementById("hour-hand")

var min = 0;
var second = 0;
var hour = 0;


setInterval(function(){
    var now=new Date();
    min = now.getMinutes()
    second = now.getSeconds();
    SecondDegree = (second*6);
     hour = (now.getHours())
    Secondhand.style.transform = `rotate(${SecondDegree}deg)`
    MinuteDegree = (min*6);
    Minutehand.style.transform = `rotate(${MinuteDegree}deg)`
    HourDegree = (hour*30)+Math.random(min/12)
    Hourhand.style.transform = `rotate(${HourDegree}deg)`
     
},1000)
