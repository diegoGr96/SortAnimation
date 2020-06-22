'use strict'

/*
    Creación de los elementos con longitudes aleatorias
*/
var arraySpans = [];
function barajar(){
    arraySpans = [];
    for(let i = 0; i < 1200; i++){
        let elemento = [];
        let span = document.createElement("span");
        let randomHeight = Math.floor(Math.random()*101);
        span.style.height = randomHeight + "%";
        span.id = randomHeight;
        elemento.push(span);
        elemento.push(randomHeight);
        arraySpans.push(elemento);
    }
}

function mostrarArray(){
    document.getElementById("container").innerHTML = "";
    for(let i = 0; i < arraySpans.length; i++ ){
        document.getElementById("container").appendChild(arraySpans[i][0]);
    }
    console.log("Ordenando el array....");
}

function ordenarBurbuja(){
    
    let aux;
    let nComparaciones = 0;
    for(let i = 0; i < arraySpans.length - 1; i++){
        for(let j = 0; j < arraySpans.length - 1; j++){
            nComparaciones++;
            if(arraySpans[j][1] > arraySpans[j + 1][1]){
                aux = arraySpans[j];
                arraySpans[j] = arraySpans[j + 1];
                arraySpans[j + 1] = aux;
                
                // mostrarArray();
            }
        }
    }
}


var btnOrdenar = document.getElementById("btnOrdenar");
btnOrdenar.addEventListener('click', () =>{
    barajar();
    mostrarArray();
   
    ordenarBurbuja();
    var timeoutID = setTimeout(mostrarArray, 2000);
    
    
});

