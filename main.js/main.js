const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () =>{
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
    ? 'close'
    : 'menu';
    mobile_menu.classList.toggle('is-open');
})
/*-----------------------------------------------------------------------------*/
function small(){
    console.log("I am in small")
    bd = document.querySelector("body")
    bd.style.fontSize = ".75em"
}

function medium(){
    console.log("I am in medium")
    bd = document.querySelector("body")
    bd.style.fontSize = "1em"
}

function large(){
    console.log("I am in large")
    bd = document.querySelector("body")
    bd.style.fontSize = "2em"
}
