let main = document.querySelector("main");;
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn10 = document.querySelector(".btn10");
let reset = document.querySelector(".reset");

btn1.addEventListener("click",function(){
    main.style.backgroundColor="peru"
});

btn2.addEventListener("click",function(){
    main.style.backgroundColor="blue"
});

btn3.addEventListener("click",function(){
    main.style.backgroundColor="teal"
});

btn4.addEventListener("click",function(){
    main.style.backgroundColor="orchid"
});

btn5.addEventListener("click",function(){
    main.style.backgroundColor="black"
});

btn6.addEventListener("click",function(){
    main.style.backgroundColor="purple"
});
btn7.addEventListener("click",function(){
    main.style.backgroundColor="blueviolet"
});

btn8.addEventListener("click",function(){
    main.style.backgroundColor="hotpink"
});

btn9.addEventListener("click",function(){
    main.style.backgroundColor="coral"
});

btn10.addEventListener("click",function(){
    main.style.backgroundColor="crimson"
});

reset.addEventListener("click",function(){
    main.classList.remove("peru", "blue", "teal", "orchid", "black", "purple", "blueviolet", "hotpink", "coral", "crimson");
    main.style.backgroundColor = '';
})