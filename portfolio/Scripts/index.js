function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function mudouTamanho(){
    if (window.innerWidth >= 600){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}