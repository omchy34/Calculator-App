const btn = document.querySelectorAll(".btn");
const display = document.getElementById("txt-area");
let string = "";

const arr = Array.from(btn);
arr.forEach((e) => {
  e.addEventListener("click", (v) => {
    
    if (v.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (v.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    }else if(v.target.innerHTML == "C"){
      string = string.substring(0 , string.length - 1)
      display.value = string;
    }
    else{
      string += v.target.innerHTML;
      display.value = string;
      
    }
  });
});

// let text = document.getElementById('txt-area');
// text.innerHTML  += e.value
// console.log(text);
