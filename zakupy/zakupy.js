window.onload = function(){
    zakupy = ["lakier do paznokci", "klapki", "szlafrok", "schabowy",
    "dysk twardy", "awokado"];

    zakupy.sort()

    for(i = 0; i < zakupy.length; i++){
        document.getElementById("lista").innerHTML += "<li>" + zakupy[i] + "</li>";
    }

    document.getElementById("przycisk").onclick = function(){
    var wartosc = document.getElementById("dodaj").value;

        document.getElementById("lista").innerHTML = "";

        zakupy.push(wartosc);
        zakupy.sort();

        for(i = 0; i < zakupy.length; i++){
        document.getElementById("lista").innerHTML += "<li>" + zakupy[i] + "</li>";
        }
    }

    document.getElementById("przycisk2").onclick = function(){
        var wartosc = document.getElementById("dodaj").value;

        czyZnaleiony = false;
        index = -1;

        for(i = 0; i<zakupy.length; i++){
            if(wartosc == zakupy[i]){
                czyZnaleiony = true;
                index = i;
                
            }
        }

        if(czyZnaleiony == true){
            document.getElementById("lista").innerHTML = "";

            zakupy.splice(index, 1);
            zakupy.sort();

            for(i = 0; i < zakupy.length; i++){
            document.getElementById("lista").innerHTML += "<li>" + zakupy[i] + "</li>";
            }
        }
    }
}