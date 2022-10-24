var button_menu = document.getElementById("head-menu-sobreposiçao");
var nav_menu = document.getElementById("nav_menu");
var aux = true;

button_menu.addEventListener('click',

    function(){
        if(aux == true){
            nav_menu.style.display = 'none';
            aux = false;
        } else {
            nav_menu.style.display = 'block';
            aux = true;
        };
    }
);
