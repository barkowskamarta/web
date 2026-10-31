window.onload = function(){
    var grafika = document.getElementById("grafika")
    var szerokosc = grafika.width;
    var wysokosc = grafika.height;

    document.getElementById("grafika").onmouseover = function(){

        document.getElementById("grafika").style.width = (szerokosc * 2) + "px";
        document.getElementById("grafika").style.height = (wysokosc * 2) + "px";
    }

    document.getElementById("grafika").onmouseout = function(){

        document.getElementById("grafika").style.width = szerokosc + "px";
        document.getElementById("grafika").style.height = wysokosc + "px";
    }
}