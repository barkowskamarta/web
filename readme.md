# Web – ćwiczenia szkolne

Zbiór małych projektów z lekcji programowania stron internetowych. Każdy projekt to osobny folder z plikiem HTML, skryptem w czystym JavaScripcie i (czasem) arkuszem CSS. Nie trzeba niczego instalować – wystarczy otworzyć plik `.html` w przeglądarce.

## Projekty

| Folder | Plik startowy | Opis |
| --- | --- | --- |
| [czas](czas/) | `czas.html` | Sprawdza, czy zdążysz na lekcje – po wpisaniu godziny i wybraniu dnia tygodnia pokazuje, czy jesteś spóźniony. |
| [dynamiczna_grafika](dynamiczna_grafika/) | `dynamiczne.html` | Zmiana obrazka w reakcji na zdarzenia myszy (kliknięcie, najechanie, ruch). Cztery warianty zadania w plikach `grafiki0.js`–`grafiki3.js`. |
| [quiz](quiz/) | `quiz.html` | Quiz z tabliczki mnożenia – losuje dwie liczby od 1 do 20 i sprawdza odpowiedź. |
| [ruletka](ruletka/) | `ruletka.html` | Prosta ruletka – zakład na kolor i dwunastkę, losowanie liczby od 0 do 36 i wyliczenie wygranej. |
| [tabliczka](tabliczka/) | `tabliczka.html` | Generowanie tabliczki mnożenia 10×10 w tabeli za pomocą pętli. |
| [zakupy](zakupy/) | `zakupy.html` | Lista zakupów – posortowana lista z możliwością dodawania i usuwania produktów. |

## Uruchomienie

1. Sklonuj lub pobierz repozytorium.
2. Otwórz wybrany plik `.html` w przeglądarce (np. dwuklikiem).

### Dynamiczna grafika

Wszystkie skrypty używają `window.onload`, więc w `dynamiczne.html` podpięty jest tylko jeden z nich naraz. Aby zobaczyć inny wariant, zmień nazwę pliku w tagu `<script src="grafiki3.js">`.

## Technologie

- HTML5
- CSS3
- JavaScript (bez bibliotek)
