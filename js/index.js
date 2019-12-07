// Your code goes here

let navStop = document.querySelector("nav", (event) => {
    preventDefault();
})

/////////////////////////////////////////////////////

let navBoom = document.querySelector('.main-navigation');  

navBoom.addEventListener('mouseenter', (event) => {  // 1
    navBoom.style.transform = "scale(1.3)";
    navBoom.style.transition = "all 0.3s";
    
})
navBoom.addEventListener('mouseleave', (event) => {   // 2
    navBoom.style.transform = "scale(1.0)";
    navBoom.style.transition = "all 0.3s";
})

////////////////////////////////////////////

let pic = document.querySelector('.img-content');  // 3
pic.addEventListener('click', (event) => {
    pic.style.display = "none" ;
})
let picOne = document.querySelector('.text-content');  // 3 return
picOne.addEventListener('click', (event) => {
    pic.style.display = "inline-block";
})
//////////////////////////////////////////

 document.addEventListener('keypress', logKey);    // 4
function logKey(e) {
    console.log( `${e.code}`)
    };

/////////////////////////////////////////

let contCont = document.querySelector('.content-destination');

contCont.addEventListener('click', (event) => {
    contCont.style.opacity = "0.1";
})
    contCont.addEventListener("dblclick", (event) => {  // 5
        contCont.style.opacity = "1.0";
    })

document.addEventListener("scroll", (event) => {
    let container = document.querySelector('.home');
    container.style.background = "black";
})