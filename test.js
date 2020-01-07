let res = document.getElementById("result");
let eqv = document.getElementById("eqv")
let btn = document.querySelectorAll(".q");
let equ = document.getElementById('equ');
let num = [];
let de = document.getElementById("de");
let c = document.getElementById("c");
let ce = document.getElementById("ce");
let x2 = document.getElementById("x2");
let sqrt = document.getElementById("sqrt");
let xx = document.getElementById("xx");
let neg = document.getElementById("neg");
let i = 0;
for(i=0; i<btn.length; i++){
    num[i] = btn[i].textContent;
    btn[i].onclick = vall;
}

function vall(){
    equ.innerHTML = equ.innerHTML + this.textContent;
}

function eqvv(){
    if (equ.innerHTML === " "){
       return false; 
    } else {
    res.innerHTML = Math.floor(10000000000* eval(equ.textContent))/10000000000;
    equ.innerHTML = res.innerHTML;
    }
    if (res.innerHTML.length > 11){
        res.style.fontSize = '20px';
    } else {
        res.style.fontSize = '46px';
    }
    
}

function del(){  
    if (equ.innerHTML === " "){
       return false; 
    } else {
    equ.textContent = equ.textContent.slice(0,equ.textContent.length-1);
    }
}

function cler(){
    equ.innerHTML = " ";
}

function cler2(){
    equ.innerHTML = " ";
    res.innerHTML = "0";
}

function sqr(){
    res.innerHTML = parseInt(res.innerHTML)*parseInt(res.innerHTML);
    equ.innerHTML = res.innerHTML;
    if (res.innerHTML.length > 11){
        res.style.fontSize = '20px';
    } else {
        res.style.fontSize = '46px';
    }
}

function sqrt2(){
    res.innerHTML = Math.sqrt(parseInt(res.innerHTML));
    equ.innerHTML = res.innerHTML;
    if (res.innerHTML.length > 11){
        res.style.fontSize = '20px';
    } else {
        res.style.fontSize = '46px';
    }
}

function xx1(){
    res.innerHTML = Math.floor(10000000000*1 / parseInt(res.innerHTML))/10000000000;
    equ.innerHTML = res.innerHTML;
    if (res.innerHTML.length > 11){
        res.style.fontSize = '20px';
    } else {
        res.style.fontSize = '46px';
    }
}

function xx2(){
    if (equ.innerHTML === " "){
       return false; 
    } else {
    res.innerHTML = Math.floor(10000000000* eval(equ.textContent))/(-10000000000);
    equ.innerHTML = res.innerHTML;
    }
    if (res.innerHTML.length > 11){
        res.style.fontSize = '20px';
    } else {
        res.style.fontSize = '46px';
    }
}

eqv.onclick = eqvv;
de.onclick = del;
c.onclick = cler;
ce.onclick = cler2;
x2.onclick = sqr;
sqrt.onclick = sqrt2;
xx.onclick = xx1;
neg.onclick = xx2;



// draggable caculator

let title = document.getElementById("title");
let calc = document.getElementById("calc");
title.onmousedown = drag;
title.onmouseup = stop
    
function blaa (e){
        let x = e.clientX;
        let y = e.clientY;
        calc.style.top = (y-30) + "px";
        calc.style.left = (x-161) + "px"; 
    }

function drag(){
    
        document.addEventListener("mousemove", blaa);
        title.style.cursor = "grabbing";
}

function stop(){
        document.removeEventListener("mousemove", blaa);
        title.style.cursor = "grab";
}
       
