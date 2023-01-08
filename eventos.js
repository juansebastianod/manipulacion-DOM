const h1=document.querySelector("h1");
let input =document.querySelector('#input');
let input2=document.querySelector("#input2");
let button=document.getElementById('btncalcular');
let form=document.getElementById('form')

let parrafo=document.getElementById('resultado');

form.addEventListener('submit',(e) => {

    parrafo.innerHTML=`resultado ${(+input.value)+(+input2.value)}`;
    e.preventDefault();




})

input.addEventListener('keydown',tecla)



function tecla(){

    parrafo.innerHTML=input.value
}
function btnOnclick(){


    // console.log("desde el javaScrip")
    // input.classList.add("rosadito")
    // input.classList.remove('input')
    
    //parrafo.innerHTML=`resultado ${(+input.value)+(+input2.value)}`;
   
}





