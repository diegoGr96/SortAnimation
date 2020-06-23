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
var nComparaciones;
var delay;
var isColor = false;

function shuffle(){
    document.getElementById("container").innerHTML = "";
    arraySpans = [];
    isOrdered = false;

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
    isOrdered = true;
    let aux;
    nComparaciones = 0;
    
    for(let i = 0; i < arraySpans.length - 1; i++){
        delay = setTimeout(() => {
            for(let j = 0; j < arraySpans.length - 1; j++){
                nComparaciones++;
                if(arraySpans[j].randomHeight > arraySpans[j + 1].randomHeight){
                    aux = arraySpans[j];
                    arraySpans[j] = arraySpans[j + 1];
                    arraySpans[j + 1] = aux;
                    document.getElementById("container").insertBefore(arraySpans[j].span, arraySpans[j + 1].span);
                }
            }
        },0.1);
    }
}

function ordenarInsercion(){
    isOrdered = true;
    let aux;
    nComparaciones = 0;
    for(let i = 1; i < arraySpans.length; i++){
       setTimeout(() => {
        aux = arraySpans[i];
        nComparaciones++;
        
        for(let j = i - 1; j >= 0 && arraySpans[j].randomHeight > aux.randomHeight; j--){
            arraySpans[j + 1] = arraySpans[j];
            arraySpans[j] = aux;
            nComparaciones++;
            document.getElementById("container").insertBefore(arraySpans[j].span, arraySpans[j + 1].span);
        }
        }, 0.1);

    }
}

var btnBubble = document.getElementById("btnBubble");
var btnInsertion = document.getElementById("btnInsertion");
var btnShuffle = document.getElementById("btnShuffle");
var btnColorDisplay = document.getElementById("btnColorDisplay");

btnShuffle.addEventListener('click',() => {
    btnBubble.style.display = "inline";
    btnInsertion.style.display = "inline";
    btnColorDisplay.style.display = "inline";
    document.getElementById("pMessage").innerHTML = "";
    shuffle();
    mostrarArray();
});

btnBubble.addEventListener('click', () =>{
    sort(ordenarBurbuja);
});

btnInsertion.addEventListener('click', () =>{
    sort(ordenarInsercion);
});

function sort(method){
    if(!isOrdered){
        method();
         setTimeout(() => {
             let pMessage = document.getElementById("pMessage");
             pMessage.style.display = "block";
             pMessage.innerHTML = "Number of elements " + arraySpans.length + " - Number of comparisons: " + nComparaciones; 
         }, 0.1);
        console.log(arraySpans);
        console.log(nComparaciones);
    }
}

btnColorDisplay.addEventListener('click', () => {
    if(!isColor){
        btnColorDisplay.innerHTML = "Black & White";
        isColor = true;
    }else{
        btnColorDisplay.innerHTML = "Color";
        isColor = false;
    }
    setStateColor();
    document.getElementById("container").innerHTML = "";
    mostrarArray();
});

function setStateColor(){
    for(let i = 0; i < arraySpans.length; i++){
        if(isColor){
            let element = arraySpans[i]
            element.span.style.background = `rgb(${100 - element.randomHeight},${element.randomHeight},0)`;
        }else{
            arraySpans[i].span.style.background = "#fff";
        }
    }    
}

