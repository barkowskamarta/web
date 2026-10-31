window.onload = function(){
    document.getElementById('przycisk').onclick = function(){

        var godzina = document.getElementById('godzina').value;
        var minuty = document.getElementById('minuty').value;
        var dzien = document.getElementById('lista').value;

        console.log('godzina: ' + godzina);
        console.log('minuty: ' + minuty);

        // if((godzina == 8 && minuty <=20) || (godzina <= 7)){
        //     document.getElementById('spoznienie').innerHTML = 'OK! Nie jesteś spóźniony!';
        // } else {
        //     document.getElementById('spoznienie').innerHTML = 'O nie! Jesteś spóźniony!';
        // }

        if(dzien == 'poniedzialek'){
            if((godzina == 7 && minuty <=30) || (godzina <= 6)){
            document.getElementById('spoznienie').innerHTML = 'OK! Nie jesteś spóźniony!';
        } else {
            document.getElementById('spoznienie').innerHTML = 'O nie! Jesteś spóźniony!';
        }
        }

        if(dzien == 'wtorek' || dzien == 'czwartek' || dzien == 'piatek'){
            if((godzina == 8 && minuty <=50) || (godzina <= 7)){
            document.getElementById('spoznienie').innerHTML = 'OK! Nie jesteś spóźniony!';
        } else {
            document.getElementById('spoznienie').innerHTML = 'O nie! Jesteś spóźniony!';
        }
        }

        if(dzien == 'sroda'){
            if((godzina == 8 && minuty <=20) || (godzina <= 7)){
            document.getElementById('spoznienie').innerHTML = 'OK! Nie jesteś spóźniony!';
        } else {
            document.getElementById('spoznienie').innerHTML = 'O nie! Jesteś spóźniony!';
        }
        }

        if(dzien == 'sobota' || dzien == 'niedziela'){
           document.getElementById('spoznienie').innerHTML = 'Masz wolne';
        }
    }
}