window.onload = function(){
    var liczba1 = 1 + Math.floor(Math.random() * 20);
    var liczba2 = 1 + Math.floor(Math.random() * 20);

    console.log(liczba1);
    console.log(liczba2)

    document.getElementById("pytanie").innerHTML = "ile to jest " + liczba1 + " * " + liczba2 + " ?"

    document.getElementById("przycisk").onclick = function(){

        var wynik = document.getElementById("wynik").value
        var obliczanie = liczba1 * liczba2;

        if(wynik == obliczanie){
            document.getElementById("odp").innerHTML = "Poprawny wynik"
        } else {
            document.getElementById("odp").innerHTML = "Źle! Wynik to: " + obliczanie
        }
    }
}