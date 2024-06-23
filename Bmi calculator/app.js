<<<<<<< HEAD
const btn = document.getElementById('btn');

const height =  document.getElementById('height');

const weight =  document.getElementById('weight');

const herror = document.getElementById('height_error');

const werror = document.getElementById('weight_error');

btn.addEventListener('click' , ()=>{
    const h = parseInt(height.value);
    const w = parseInt(weight.value);
    const result = document.getElementById('output');
    let height_status = false;
    let weight_status=false;

    if( h === '' || isNaN(h) || h<=0)
    {
       herror.innerHTML  = 'Please enter valid height' 
    }
    else 
    {
        herror.innerHTML  = '' ;
        height_status =true;
    }
    if( w === '' || isNaN(h) || w<=0)
    {
       werror.innerHTML  = 'Please enter valid weight' 
    }
    else 
    {
        werror.innerHTML  = '' ;
        weight_status =true;
    }
if(height_status && weight_status){
    const bmiResult = (w/(Math.pow((h/100),2))).toFixed(2);
    if(bmiResult < 18.6){
        result.innerHTML = 'Under weight : ' + bmiResult;
       
    }else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML ='Normal Weight: '+ bmiResult;
        
    }
    else{
        result.innerHTML='OverWeight:'+ bmiResult;
       
        

    }
}
=======
const btn = document.getElementById('btn');

const height =  document.getElementById('height');

const weight =  document.getElementById('weight');

const herror = document.getElementById('height_error');

const werror = document.getElementById('weight_error');

btn.addEventListener('click' , ()=>{
    const h = parseInt(height.value);
    const w = parseInt(weight.value);
    const result = document.getElementById('output');
    let height_status = false;
    let weight_status=false;

    if( h === '' || isNaN(h) || h<=0)
    {
       herror.innerHTML  = 'Please enter valid height' 
    }
    else 
    {
        herror.innerHTML  = '' ;
        height_status =true;
    }
    if( w === '' || isNaN(h) || w<=0)
    {
       werror.innerHTML  = 'Please enter valid weight' 
    }
    else 
    {
        werror.innerHTML  = '' ;
        weight_status =true;
    }
if(height_status && weight_status){
    const bmiResult = (w/(Math.pow((h/100),2))).toFixed(2);
    if(bmiResult < 18.6){
        result.innerHTML = 'Under weight : ' + bmiResult;
       
    }else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML ='Normal Weight: '+ bmiResult;
        
    }
    else{
        result.innerHTML='OverWeight:'+ bmiResult;
       
        

    }
}
>>>>>>> a7810997f1dc526cdc7a3d6b49618604db952682
});