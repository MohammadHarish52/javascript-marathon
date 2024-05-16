let hrs = document.getElementById('hrs');
let Min = document.getElementById('minutes');
let Sec = document.getElementById('seconds');



setInterval(()=>{
    var curr = new Date();
 hrs.innerHTML = curr.getHours();
 Min.innerHTML = curr.getMinutes();
 Sec.innerHTML = curr.getSeconds();

},1000)
