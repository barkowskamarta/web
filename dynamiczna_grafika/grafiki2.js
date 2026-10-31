window.onload = function(){
    document.getElementById("grafika").onmousemove = function(){
        document.getElementById("grafika").src = "img/1.png"
    }

    document.getElementsByTagName("body")[0].onmousedown = function(){
        document.getElementById("grafika").style.display = "none"
    }
}