/*elementy strony (tag, atrybuty) są węzłami, które mogą być:
1. pobierane 
2. modyfikowane
3. tworzone/usuwane
4. Nasłuchiwane
Struktura DOM przypomina drzewo, na szczycie którego jest obiekt: document
 DOM nie jest częścią JS, ale JS umożliwia prace z DOM, jest interfejsem/sposobem na prace ze stroną internetową, który możemy obsługiwać za pomocą JS

 */ 

 /* I. -------- POBIERANIE ELEMENTÓW ZE STRONY INTERNETOWEJ-------------
    Aby w przyszłości zmodyfikować element, najpierw należy go pobrać
 1. POBIERANIE WŁAŚCIWOŚCI OBIEKTU document
 Przykładowe właściwości
 document - cała strona internetowa
 document.documentElement - odnosi się do HTML do pierwszego znacznika
 document.body
 document.body.h1 - z h1 nie zadziała  bo ten element musimy sobie wyszukać
 document.images - zbiera wszystkie obrazki: HTMLCollection(2) [img#car, img, car: img#car]
 HTMLCollection - przypomina tablicę, jest to obiekt tablicopodobny, ma length, do jego elementów można się dostać za pomocą notacji tablicy
    problemem jest to, że ma mniej elementów niż tablica

2. DWIE METODY ZROBIENIA TABLICY Z POBRANYCH ELEMENTÓW, KTÓRE SĄ OBIEKTEM TABLICOPODOBNYM: */
// Metoda A
//document.images jest obiektem tablicopodobnym, który poniżej zmieniam w tablicę
// na obiekcie Array wykonuję metodę from(), która informuje zrób tablicę z tego co jest w nawiasach
const imgs = Array.from(document.images)
//Metoda B
// ... operator rest , []
const imgs1 = [...document.images]

/* 3. DWIE METODY POBIERAJĄCE JEDEN ELEMENT
document powołuje się do całej strony, ale my chcemy się odwołać do konkretnego elementu
metoda A: */
//document.querySelector("li:nth-child(3)");

// metoda B. getElementById() - interesuje mnie juz nie selektor, ale sama nazwa id
const firstElement = document.getElementById('first')
//gdybym chciał w JS za pomocą querySelector() pobrać to co mam w nawiasach, nie mógłbym wpisać ('first'), ale musiałbym zapisać ('#first')
document.querySelector("li:nth-child(6)")
// Jeśli nie znajdę jakiegoś elementu to dostanę null i nie ma błędu

// 4. METODY POBIERAJĄCE WSZYSTKIE PASUJĄCE ELEMENTY A NIE TYLKO JEDEN
// Praca z jednym elementem jest łatwiejsza ponieważ ma pewne metody i właściwości
// Jak pobierzemy wiele elementów to są one umieszczone w obiekcie tablicopodobnym, który musimy zmienić w tablicę, wtedy jednak będziemy musieli wykonać: 
// jakąś pętlę
// albo jakąś metodę 
// aby dostać się do każdego elementu  

//WNIOSEK inaczej pracuje się kiedy ma się pobrany jeden element tak jak powyżej, a inaczej kiedy ma się pobranych WIELE ELEMENTÓW
//document.querySelector() - pobiera jeden element
//document.querySelectorAll() - pobiera wiele elementów
document.querySelectorAll("ul>li");
// Pobieram wszystkie li, które są dzieckiem ul
// Zwrócona zostanie tu NodeLost - czyli lista węzłów, obiekt TABLICOPODOBNY
// który też ma długość length i metody tablicy, ale mniej niż tablica


/* II. ----------- MODYFIKOWANIE ELEMENTÓW NA STRONIE INTERNETOWEJ --------------
    Mam dużo metod i właściwości, które umożliwiają mi modyfikację, tego co widze na stronie internetowej
*/

/* III. ----------------------- ZDARZENIA, AKCJE, NASLUCHIWANIE --------------------
    Możemy nasłuchiwać, wyczekiwać na jakieś zdarzenie, czyli jak wystąpi zdarzenie to zaprogramujemy jakąś akcje np. ma click.. 
*/

/* ----------------- TWORZENIE I DODAWANIE ELEMENTÓW --------------------
    Na początku muszę coś stworzyć, aby potem zmodyfikować
*/