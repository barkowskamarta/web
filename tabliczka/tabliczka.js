window.onload = function(){
    /*  1.
    for (i = 1; i < 11; i++){
        var liczba = 3;
        var wynik = i * liczba;

        document.write(i + "*" + liczba + "=" + wynik + "<br>");

    */
    
    /* 2.
    for (i = 1; i < 11; i++){
        var liczba = 1;
        var wynik = i * liczba;

        liczba++;

        for(j = 1; j < 11; j++){
            var wynik = i * j;

            document.write(i + "*" + j + "=" + wynik + "<br>");
        }
    }
    */
    
    document.write("<table>");

    for (i = 1; i < 11; i++){

        document.write("<tr>");

        for(j = 1; j < 11; j++){
            var wynik = i * j;

            document.write("<td>" + wynik + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</table>");

}