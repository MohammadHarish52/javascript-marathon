const container = document.getElementById('container')
const colors = ['#071952' ,'#0B666A', '#7D7463' , '#331D2C' , '#A78295' , '#78C1F3' , '#1D5B79','#1A5D1A' , '#FFC95F' , '#CBFFA9' , '#3F3B6C' , '#FCAEAE' , '#F5F5F5' , '#FF2171', '#8EAC50' , '#3F2E3E', '#071952','#B7C4CF']
const Sqaures =  500 ; 

for (let i  = 0 ; i< Sqaures ; i++){
    const square=document.createElement("div");
    square.classList.add('square')

    square.addEventListener('mouseover' , () =>setColor(square))

    square.addEventListener('mouseout' , () => removeColor(square))

    container.appendChild(square)
    
}
function setColor(element){
    const color = getRandomcolor()
    element.style.background = color
    element.style.boxShadow = ` 0 0 2px ${color} ,  0 0 10px ${color}`


}
function getRandomcolor(element){
    return colors[Math.floor(Math.random() * colors.length)]

}
function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}