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
    Create an Array with 3200 spans with random height's
*/
var arraySpans = [];
var isOrdered = false;
var isOrderedMessage = false;
var nComparaciones;
var delay;

function shuffle(){
    document.getElementById("container").innerHTML = "";
    arraySpans = [];
    isOrdered = false;
    isOrderedMessage = false;

    for(let i = 0; i < 3200; i++){
        let span = document.createElement("span");
        let randomHeight = Math.floor(Math.random()*101);
        span.style.height = randomHeight + "%";
        span.id = i;
        arraySpans.push(new element(span,randomHeight));
    }
}

function mostrarArray(){
    for(let i = 0; i < arraySpans.length; i++ ){
        document.getElementById("container").appendChild(arraySpans[i].span);
    }
}

function ordenarBurbuja(){
    let aux;
    nComparaciones = 0;
    
    for(let i = 0; i < arraySpans.length - 1; i++){
        delay = setTimeout(() => {
            arraySpans[i].span.style.background  ="green";
            for(let j = 0; j < arraySpans.length - 1; j++){
                nComparaciones++;
                if(arraySpans[j].randomHeight > arraySpans[j + 1].randomHeight){
                    aux = arraySpans[j];
                    arraySpans[j] = arraySpans[j + 1];
                    arraySpans[j + 1] = aux;
                    document.getElementById("container").insertBefore(arraySpans[j].span, arraySpans[j + 1].span);
                }
            }
            arraySpans[i].span.style.background  ="green";
        },0.1);
    }
    isOrdered = true;
}

var btnOrdenar = document.getElementById("btnSort");
var btnShuffle = document.getElementById("btnShuffle");

btnShuffle.addEventListener('click',() => {
    btnOrdenar.style.display = "inline";
    document.getElementById("pMessage").innerHTML = "";
    shuffle();
    mostrarArray();
});

btnOrdenar.addEventListener('click', () =>{
    if(!isOrdered){
        ordenarBurbuja();
        setTimeout(() => {
            document.getElementById("pMessage").innerHTML = 
            "Number of elements " + arraySpans.length + " - Number of comparisons: " + nComparaciones;
        }, 0.1);
        console.log(arraySpans);
    }else{
        if(!isOrderedMessage){
            isOrderedMessage = true;
        }
    }
});

