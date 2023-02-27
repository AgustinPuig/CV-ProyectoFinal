//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav")
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Ocultar menu cuando selecciona opcion
let links = document.querySelectorAll("nav a");
for(var x=0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Barras de habilidad//
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let english = document.getElementById("english");
crearBarra(english);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

function efectoEspecialidades(){
    var especialidades = document.getElementById("especialidades");
    var distancia_skills = window.innerHeight - especialidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalhtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalhtml);
            },100);
            const intervalcss = setInterval(function(){
                pintarBarra(css, 16, 0, intervalcss);
                },100);
                const intervaljavascript = setInterval(function(){
                    pintarBarra(javascript, 16, 0, intervaljavascript);
                    },100);
                    const intervalenglish = setInterval(function(){
                        pintarBarra(english, 16, 0, intervalenglish);
                        },100);
    }
}

function pintarBarra (id_barra, cantidad, indice, interval){
    contadores [indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#ff0000";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoEspecialidades();
}


/* redes clickeables */
document.getElementById("facebook").addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/";
  });
  
  document.getElementById("youtube").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/";
  });
  
  document.getElementById("instagram").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/";
  });
  
  document.getElementById("linkedin").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/";
  });
  