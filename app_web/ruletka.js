window.onload = function(){
    document.getElementById("przycisk").onclick = function(){
        kolory = document.getElementsByName("kolor");
        dwunastki = document.getElementsByName("dwunastki");

        var kwotaKoloru = Number(document.getElementById("kwotaKoloru").value);
        var kwotaDwunastki = Number(document.getElementById("kwotaDwunastki").value);

        var los = Math.floor(Math.random()*37);
        console.log(los)

        var wartosc = 0;
        var dwunastka = 0;

        for(i = 0; i < kolory.length; i++){
            if(kolory[i].checked == true){
                wartosc = kolory[i].value;
            }
        }

        czyKolor = false;

        if(los == 0){
            czyKolor = false;
        } else if(los % 2 == 0 && wartosc == "czerwone"){
            czyKolor = true;
        } else if(los % 2 != 0 && wartosc == "czarne"){
           czyKolor = true
        } else {
            czyKolor = false;
        }

        for(i = 0; i < dwunastki.length; i++){
            if(dwunastki[i].checked == true){
                dwunastka = dwunastki[i].value;
            }
        }

        czyDwunastka = false;

        if(los >= 1 && los <= 12 && dwunastka == 1){
            czyDwunastka = true;
        } else if(los >=13 && los <= 24 && dwunastka == 2){
            czyDwunastka = true;
        } else if(los >= 25 && los <= 36 && dwunastka == 3){
            czyDwunastka = true;
        } else {
            czyDwunastka = false;
        }

        var wynikKoloru = 0;

        if(czyKolor == true){
            wynikKoloru = kwotaKoloru * 2;
        }

        var wynikDwunastki = 0;

        if(czyDwunastka == true){
            wynikDwunastki = kwotaDwunastki * 3
        }

        var wynik = wynikDwunastki + wynikKoloru;

        document.getElementById("wynik").innerHTML = "Wygrana: " + wynik;
    }
}