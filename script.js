let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {

button.addEventListener('click',(e)=>{

if(e.target.innerHTML == '='){
string = eval(string);
input.value = string;
}

else if(e.target.innerHTML == 'AC'){
string = "";
input.value = string;
}

else if(e.target.innerHTML == 'DEL'){
string = string.substring(0,string.length-1);
input.value = string;
}

else{
string += e.target.innerHTML;
input.value = string;
}

})

})

document.addEventListener("keydown", function(e){

if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
string += e.key;
input.value = string;
}

if(e.key === "Enter"){
string = eval(string);
input.value = string;
}

if(e.key === "Backspace"){
string = string.slice(0,-1);
input.value = string;
}

if(e.key === "Escape"){
string = "";
input.value = "";
}

});