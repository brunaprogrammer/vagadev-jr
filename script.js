
var menuOpened = document.querySelector(".menu-opened")
var menu =document.querySelector(".menu")

function opened (){
    menuOpened.style.display = "block";
}

menu.addEventListener("mouseover", opened);
menu.addEventListener("mouseleave", esconderMenu);

function esconderMenu (){
    menuOpened.style.display = "none";
}

var btnUm = document.querySelector(".btn um")
var btnDois = document.querySelector(".btn dois")
var btnTres = document.querySelector(".btn tres")

var contador = 0;
var comprar = document.querySelector(".comprar")
var bag = document.querySelector(".bag")

var cover = document.querySelector(".cover")

var img = '<img src="comprado.png">'

function comprados(e){

    console.log(e.currentTarget);

    contador ++
    bag.textContent = contador
    bag.style.display = "block"
    //cover.style.display = "block" //aparece mario ao centro
    e.currentTarget.classList.remove("btn")

    e.currentTarget.classList.add("comprado") 
    e.currentTarget.textContent = "Comprado!" //+ img
    
    /*e.currentTarget.style.display = "block" 
    e.currentTarget.classList.add("comprar")*/
    
}

document.querySelectorAll(".btn").forEach(el=>el.addEventListener("click", comprados));



