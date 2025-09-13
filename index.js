
let count = 0;


const decrease = document.getElementById("btnDec").onclick = function(){
   count -=1;

   document.getElementById("countLable").textContent = count;
}

const reset = document.getElementById("btnReset").onclick = function(){
   count = 0;

   document.getElementById("countLable").textContent = count;
}

const increase = document.getElementById("btnInc").onclick = function(){
   count +=1;

   document.getElementById("countLable").textContent = count;
}

