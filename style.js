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
//document.images jest obiektem tablicopodobnym, który poniżej zmieniam w tablicę
// na obiekcie Array wykonuję metodę from(), która informuje zrób tablicę z tego co jest w nawiasach
const imgs = Array.from(document.images)



/* II. ----------- MODYFIKOWANIE ELEMENTÓW NA STRONIE INTERNETOWEJ --------------
    Mam dużo metod i właściwości, które umożliwiają mi modyfikację, tego co widze na stronie internetowej
*/

/* III. ----------------------- ZDARZENIA, AKCJE, NASLUCHIWANIE --------------------
    Możemy nasłuchiwać, wyczekiwać na jakieś zdarzenie, czyli jak wystąpi zdarzenie to zaprogramujemy jakąś akcje np. ma click.. 
*/

/* ----------------- TWORZENIE I DODAWANIE ELEMENTÓW --------------------
    Na początku muszę coś stworzyć, aby potem zmodyfikować
*/