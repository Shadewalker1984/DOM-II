// Your code goes here

let navStop = document.querySelector("nav", (event) => {
    preventDefault();
})

/////////////////////////////////////////////////////

let navBoom = document.querySelector('.main-navigation');  

navBoom.addEventListener('mouseenter', (event) => {  
    navBoom.style.transform = "scale(1.3)";
    navBoom.style.transition = "all 0.3s";
    
})
navBoom.addEventListener('mouseleave', (event) => {   
    navBoom.style.transform = "scale(1.0)";
    navBoom.style.transition = "all 0.3s";
})

////////////////////////////////////////////

let pic = document.querySelector('.img-content');  
pic.addEventListener('click', (event) => {
    pic.style.display = "none" ;
})
let picOne = document.querySelector('.text-content');  
picOne.addEventListener('click', (event) => {
    pic.style.display = "inline-block";
})
//////////////////////////////////////////

 document.addEventListener('keypress', logKey);  
function logKey(e) {
    console.log( `${e.code}`)
    };

/////////////////////////////////////////

let contCont = document.querySelector('.content-destination');

contCont.addEventListener('click', (event) => {
    contCont.style.opacity = "0.1";
})
    contCont.addEventListener("dblclick", (event) => {  
        contCont.style.opacity = "1.0";
    })

    //////////////////////////////////////////////

document.addEventListener("wheel", (event) => {   
    alert("Hi! I'm annoying! you can keep scrolling, just acknowledge me");
    alert = function () {};
})


let inverse = document.querySelector(".img-fluid");
    window.addEventListener("resize", (event) => {

        inverse.style.border = "1px solid red   ";
        console.log('I really cant think of anything creative to add, so I will add this.') ;
          
    })


let propogate = document.querySelector('.inverse-content');
    propogate.addEventListener('click', (event) => {
        console.log('clicked once')
    })

let butt = document.querySelector('.btn');
    butt.addEventListener('click', (event) => {
     butt.style.background = "black";
     event.stopPropagation();
})

let dest = document.querySelector('.destination');
    dest.addEventListener('click', (event) => {
        dest.style.background = 'blue';
    })


