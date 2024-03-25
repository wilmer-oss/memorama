let verMovimientos=document.querySelector(".movimientos");
let verTiempo=document.querySelector(".tiempo");
let verAciertos=document.querySelector(".aciertos")
let iniciar=document.querySelector(".iniciar");
let mensaje=document.querySelector(".mensaje");
let resultado=document.querySelector(".resultado");
let notificacion=document.querySelector(".notificacion")
let reintentar=document.querySelector(".reintentar");


let tarjetasAbiertas= 0;
let tarjeta1;
let tarjeta2;
let primeraCarta;
let segundaCarta;
let movimientos=0;
let tiempo=20;
let aciertos=0;
let movimientoFallido=0;

reintentar.addEventListener("click",()=>{
location.reload();
notificacion.style.display="none";
});

function ganar(){
    clearInterval(time);
        notificacion.style.display="block";
        let ganaste=`FELICIDADES!!!!!`;
        let msj=`LO HAS HECHO MUY BIEN`;
        resultado.innerHTML= ganaste;
        resultado.classList.remove("red");
        resultado.classList.add("green");
        mensaje.innerHTML=msj;
    };

    function perder(){
        {   notificacion.style.display="block"
            let falla= `GAME OVER`;
            let msj=`DEMASIADOS INTENTOS FALLIDOS`;
            resultado.innerHTML=falla;
            resultado.classList.remove("green");
            resultado.classList.add("red");
            mensaje.innerHTML=msj;
            
        }}

        
function actualizarTiempo() {
    tiempo--;
    verTiempo.innerHTML = `tiempo ${tiempo} sg`;
    if(tiempo<=0){
        let res=`GAME OVER`; 
         let falla=`TE QUEDASTE SIN TIEMPO`;
        mensaje.innerHTML=falla;
        resultado.innerHTML=res;
        resultado.classList.remove("green");
        resultado.classList.add("red");
        notificacion.style.display="block";
        clearInterval(time);
    }
}

let time = setInterval(actualizarTiempo, 1000);
    
let numeros= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros=numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

function voltear(id){
    tarjetasAbiertas++;
    console.log(tarjetasAbiertas)
    if(tarjetasAbiertas==1){
        tarjeta1 =document.getElementById(id);
        primeraCarta= numeros[id];
        tarjeta1.innerHTML = ` <img src="./imagenes de juego/${primeraCarta}.png" alt="${primeraCarta}">`;
        tarjeta1.disabled=true;
    }
     else if(tarjetasAbiertas==2){
        movimientos++
      
        tarjeta2 =document.getElementById(id);
        segundaCarta= numeros[id];
        tarjeta2.innerHTML = `<img src="./imagenes de juego/${segundaCarta}.png" alt="${segundaCarta}">`;
        tarjeta2.disabled=true;
        verMovimientos.innerHTML=`movimientos : ${movimientos}`
    
        if(primeraCarta == segundaCarta){
            tarjeta1.classList.remove("botoncito");
            tarjeta2.classList.remove("botoncito");
            tiempo=20
            tarjetasAbiertas=0;
            aciertos++;
            if(aciertos==numeros.length/2){
                ganar()
            }
            verAciertos.innerHTML=`aciertos: ${aciertos}`;
        }else{
            movimientoFallido++
            if(movimientoFallido==16){
                perder();
            }
        setTimeout(()=>{
            tarjeta1.innerHTML="?";
            tarjeta2.innerHTML="?";
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjetasAbiertas=0;
        },500);

        }
    }

}
