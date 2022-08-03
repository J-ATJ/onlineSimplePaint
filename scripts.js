var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = '#ffffff';
pincel.fillRect(0, 0, 1400, 600);

var puedoDibujar = false;

var xRojo = 0;
var xNaranja  = 50;
var xAmarillo = 100;
var xLima = 150;
var xVerde = 200;
var xCian = 250;
var xAzul = 300;
var xMorado = 350;
var xRosa = 400;
var xCafe = 450;
var xNegro = 500;
var xBlanco = 550;
var xGris = 600;

var yCuadrados = 0;
var tamanhoCuadrados = 50;
var colorActual = "blue";

function dibujarCirculo(x,y,colorActual ) {
    if(puedoDibujar) {
        pincel.fillStyle = colorActual;
        pincel.beginPath();
        if(colorActual == "#ffffff"){
            pincel.arc(x, y, 7, 0, 2 * 3.14);
        } else{
            pincel.arc(x, y, 7, 0, 2 * 3.14);
        }
        
        pincel.fill();
    }
}

function dibujarCuadrado(x, y, tamanho, color) {   
    pincel.fillStyle = color;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();
}

function dibujarPaletaColores() {
    dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, '#ff0000');
    dibujarCuadrado(xNaranja, yCuadrados, tamanhoCuadrados, '#ff9600');
    dibujarCuadrado(xAmarillo, yCuadrados, tamanhoCuadrados, '#ffff07');
    dibujarCuadrado(xLima, yCuadrados, tamanhoCuadrados, '#7bff00');
    dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, '#00a111');
    dibujarCuadrado(xCian, yCuadrados, tamanhoCuadrados, '#00dada');            
    dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, '#0027e7');
    dibujarCuadrado(xMorado, yCuadrados, tamanhoCuadrados, '#66008e');
    dibujarCuadrado(xRosa, yCuadrados, tamanhoCuadrados, '#ff50e8');
    dibujarCuadrado(xCafe, yCuadrados, tamanhoCuadrados, '#75470b');
    dibujarCuadrado(xNegro, yCuadrados, tamanhoCuadrados, '#000000');
    dibujarCuadrado(xBlanco, yCuadrados, tamanhoCuadrados, '#ffffff');
    dibujarCuadrado(xGris, yCuadrados, tamanhoCuadrados, '#b4b4b4');
}

function habilitarDibujar() {
    puedoDibujar = true;
}

function deshabilitarDibujar() {
    puedoDibujar = false;
}

function puedeDisenharArea(xCoordenada,yCoordenada){
    if ((xCoordenada >= 0 && xCoordenada < (13*tamanhoCuadrados+5)) && (yCoordenada >=0 && yCoordenada < (tamanhoCuadrados+5))) {
        return false;
    } else{
        return true;
    }
}    

function capturarMovimientoDelMouse(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if (puedeDisenharArea(x,y)){
            dibujarCirculo(x,y,colorActual);    
    }
}

function seleccionarColor(evento) {   
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if (y > yCuadrados && y < (yCuadrados + tamanhoCuadrados)) {

        if(x > xRojo && x < (xRojo + tamanhoCuadrados)) {
            colorActual = "#ff0000";
        } 
        else if (x > xNaranja && x < (xNaranja + tamanhoCuadrados)) {
            colorActual = "#ff9600";
        } 
        else if (x > xAmarillo && x < (xAmarillo + tamanhoCuadrados)) {
            colorActual = "#ffff07";
        } 
        else if (x > xLima && x < (xLima + tamanhoCuadrados)) {
            colorActual = "#7bff00";
        } 
        else if (x > xVerde && x < (xVerde + tamanhoCuadrados)) {
            colorActual = "#00a111";
        }                 
        else if (x > xCian && x < (xCian + tamanhoCuadrados)) {
            colorActual = "#00dada";
        }             
        else if(x > xAzul && x < (xAzul + tamanhoCuadrados)) {
            colorActual = "#0027e7";
        }
        else if(x > xMorado && x < (xMorado + tamanhoCuadrados)) {
            colorActual = "#66008e";
        }
        else if(x > xRosa && x < (xRosa + tamanhoCuadrados)) {
            colorActual = "#ff50e8";
        }
        else if(x > xCafe && x < (xCafe + tamanhoCuadrados)) {
            colorActual = "#75470b";
        }
        else if(x > xNegro && x < (xNegro + tamanhoCuadrados)) {
            colorActual = "#000000";
        }
        else if(x > xBlanco && x < (xBlanco + tamanhoCuadrados)) {
            colorActual = "#ffffff";
        }
        else if(x > xAzul && x < (xAzul + tamanhoCuadrados)) {
            colorActual = "#0027e7";
        }   
        else if(x > xGris && x < (xGris + tamanhoCuadrados)) {
            colorActual = "#b4b4b4";
        }                        
    }
}

pantalla.onmousemove = capturarMovimientoDelMouse;
pantalla.onmousedown = habilitarDibujar;
pantalla.onmouseup = deshabilitarDibujar;
dibujarPaletaColores();
pantalla.onclick = seleccionarColor;
