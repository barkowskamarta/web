window.onload = function(){
    document.getElementsByTagName("body")[0].onclick = function(){
        var grafika = document.getElementById("grafika").getAttribute("src");

        if(grafika == "img/back.png"){
            document.getElementById("grafika").src = "img/1.png"
        } else {
            document.getElementById("grafika").src = "img/back.png"
        }
    }
}