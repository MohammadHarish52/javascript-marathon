const cursoR = document.querySelector(".cursor");

var timeout ;
 
// cursor movement 
 
document.addEventListener("mousemove" , (e)=>{
    let x=  e.pageX;
    let y = e.pageY;

    cursoR.style.top =  y + 'px';
    cursoR.style.left =  x + 'px';
    cursoR.style.display = 'block';

    //stop animation

    function mouseStopped(){
        cursoR.style.display = 'none';
    }
    //hide animation
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped ,1000)

});