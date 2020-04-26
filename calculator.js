/*Addition function*/
function add(){
    background.display.value += '+';
}

/*Subtraction function*/
function subtract(){
    background.display.value += '-';
}

/*Division function*/
function devide(){
    background.display.value += '/';
}

/*Multiplying function*/
function multiply(){
    background.display.value += '*';
}

/*modulus function*/
function modulus(){
    background.display.value += '%';
}

/*clear screen function*/
function lclear(){
    background.display.value ='';
}

/*function to show or hide calculator*/
function toggleDisplay(hide)
{
    if(hide == 1){
        document.getElementById("background").style.display="none";
    }else{
        document.getElementById("background").style.display="block";
    }
}

document.getElementById("c1").addEventListener('click', function(e){
    e.preventDefault();
    toggleDisplay(1);
});

document.getElementById("c2").addEventListener('click', function(e){
    e.preventDefault();
});

document.getElementById("c3").addEventListener('click', function(e){
    e.preventDefault();
});