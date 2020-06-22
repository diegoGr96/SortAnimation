'use strict'

/* 
    Class element whit the span and his random height   
*/
class element{
    span;
    randomHeight;
    constructor(span, randomHeight){
        this.span = span;
        this.randomHeight = randomHeight;
    }
}

/*
    Create an Array with 1200 spans with random height's
*/
var arraySpans = [];
var isOrdered = false;
var isOrderedMessage = false;
var secondsToSort;

function shuffle(){
    arraySpans = [];
    isOrdered = false;
    isOrderedMessage = false;

    for(let i = 0; i < 1200; i++){
        let span = document.createElement("span");
        let randomHeight = Math.floor(Math.random()*101);
        span.style.height = randomHeight + "%";
        span.id = i;
        arraySpans.push(new element(span,randomHeight));
    }
}

function mostrarArray(){
    document.getElementById("container").innerHTML = "";
    for(let i = 0; i < arraySpans.length; i++ ){
        document.getElementById("container").appendChild(arraySpans[i].span);
    }
    console.log("Ordenando el array....");
}

function ordenarBurbuja(){
    let aux;
    let nComparaciones = 0;
    let date = new Date();
    let miliBefore = date.getMilliseconds();
    
    for(let i = 0; i < arraySpans.length - 1; i++){
        for(let j = 0; j < arraySpans.length - 1; j++){
            nComparaciones++;
            if(arraySpans[j].randomHeight > arraySpans[j + 1].randomHeight){
                aux = arraySpans[j];
                arraySpans[j] = arraySpans[j + 1];
                arraySpans[j + 1] = aux;
                
                // mostrarArray();
            }
        }
    }
    date = new Date();
    let miliAfter = date.getMilliseconds();
    isOrdered = true;
    
    secondsToSort = (miliAfter - miliBefore)/1000;
    console.log(`Milis antes: ${miliBefore} - Milis despues: ${miliAfter} - Segundos para ordenar: ${secondsToSort}`);
}


var btnOrdenar = document.getElementById("btnSort");
var btnShuffle = document.getElementById("btnShuffle");

btnShuffle.addEventListener('click',() => {
    document.getElementById("messageContainer").innerHTML = "";
    btnOrdenar.style.display = "inline";
    shuffle();
    mostrarArray();
});

btnOrdenar.addEventListener('click', () =>{
    if(!isOrdered){
        ordenarBurbuja();
        mostrarArray();
        // var timeoutID = setTimeout(mostrarArray, 2000);
        let messageAlreadySorted = document.createElement("p");
        messageAlreadySorted.id  = "pAlreadySorted";
        messageAlreadySorted.innerHTML = "Seconds to Sort: " + secondsToSort;
        document.getElementById("messageContainer").appendChild(messageAlreadySorted);
    }else{
        if(!isOrderedMessage){
            document.getElementById("pAlreadySorted").innerHTML = "Seconds to Sort: " + secondsToSort + " - The array is already sorted."; 
            isOrderedMessage = true;
        }

    }

});

