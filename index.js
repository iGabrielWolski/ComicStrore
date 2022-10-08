let HamburguerMenu = document.querySelector(".js-fa-bars");
let ItensMenu = document.querySelector(".js-menu")

HamburguerMenu.addEventListener("click",OpenMenu);

function OpenMenu(){
    ItensMenu.classList.toggle("menu__hide")
};
