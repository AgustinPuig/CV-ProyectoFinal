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

//crear barras
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("css");
crearBarra(css);
let photoshop = document.getElementById("english");
crearBarra(english);


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

//animacion
function efectoEspecialidades(){
    var especialidades = document.getElementById("especialidades");
    var distancia_skills = window.innerHeight - especialidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 15, 2, intervalCss);
        },100);
        const intervalEnglish = setInterval(function(){
            pintarBarra(english, 14, 3, intervalEnglish);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#91311D";
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
  window.addEventListener('scroll', function() {
    const button = document.getElementById('topButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  document.getElementById('topButton').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  