window.onload = function(){
    function zmiana(){
        document.getElementById("grafika").src = "img/1.png"
    }

    function powrot(){
        document.getElementById("grafika").src = "img/back.png"
    }

    document.getElementById("grafika").onclick = function(){
        zmiana();

        setTimeout(powrot, 3000)
    }
}