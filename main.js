// DOM czyli reprezentacja dokumentuHTML  w przeglądarce...
// elementy strony (tag, atrybuty) są WEZŁAMI, KTÓRE MOGĄ BYĆ:
// 1. POBIERANE
// 2. MODYFIKOWANE
// 3. USUNIĘTĘ
// 4. TWORZONE 
// Nasł....
// Struktura DOM przypomina drzewo, na szczycie którego jest obiekt: document
// DOM nie jest częscią JS, ale JS umożliwia prace z DOM, jest interfejsem sposobem na prace ze
// stroną internetową, który możemy obsługiawać za pomocą JS


// I. ------------POBIERANIE ELEMENÓW ZE STRONY INTERNETOWEJ ------------------
// Aby w przyszłości zmodyfikować  element, najpierw należy go pobrać


// 1. POBIERANIE WŁAŚCIWOŚCI OBIEKTU document ---------------------------

// Przykładowe własciwości
// document  - cała strona internetowa
// document.documentElement - odnosi się do HTML do pierwszego znacznika
// document.body
// document.body.h1 - z h1 nie zadziała bo ten element musimy sobie wyszukać
// document.images        -  zbiera wszystkie obrazki

// HTMLCollection(2) [img#car, img, car: img#car]
//HTMLCollection - przypomina tablicę, jest to o biekt tablicopodobny, ma length ,
//  do jego elementów mozna sie dostać za pomocą notacji tablicy 
// Problemem jest że ma mniej metod niż tablica



// 2. DWIE METODY ZROBIENIA TABLICY Z POBRANYCH ELEMENTÓW, KTÓRE SĄ OBIEKTEM TABLICOPODOBNYM ------------------------------------

// A.
//do cument.images jest obiektem tablicopodobnym zamieniam poniżej na tablicę
// na obiekcie Array wykonuję metodę from(), która informuje zrób tablicę
//  z tego co jest w nawiasach
// const imgs =  Array.from(document.images)

// B ... operator rest , []
const imgs1 = [...document.images]



// 3 DWIE METODY POBIERAJĄCE JEDEN ELEMENT------------------------------

//document pdwołuje sie do całej strony ale my chemy odwołać sie do konkretnego

// A. Metoda querySelector() 
// document.querySelector("li:nth-child(3");

// B. Metoda getElementById() - interesuje mnie juz nei selektor, ale sama nazwa id

const  firstElement = document.getElementById('first')

// Gdybym chciał w JS za pomocą querySelector() pobrać to co mam w nawiasach
//to nie mogę wpisać ('first'), ale musiałbym zapisac ('#first')
const  firstElement1 = document.querySelector('#first')

// jeśli nie znajdę jakiegoś elementu to dostanę null i nie ma błedu
document.querySelector("li:nth-child(6");



// 4. METODY POBIERAJĄCE WSZYSTKIE PASUJĄCE ELEMENTY A  NIE TYLKO JEDEN ------------------------------------------

// - Praca z jednym elementem jest łatwiejsza - bo ma pewne metody i właściwości
// - Jak pobierzemy wiele elementów  to są one umieszczone w obiekcie 
// tablico podobnym, którą musimy zmienic na tablicę, w tedy jednak bedziemy musieli wykonac:
// albo petle
// albo jakas metode
// aby do kazdego elementu sie dostac

// WNIOSEK inaczej pracuje kiedy mam JEDEN ELEMENT pobrany - tak jak powyżej
// a inaczej kiedy mam WIELE ELEMENTÓW tak jak ponizej
// querySelector() - metoda do pobrania jednego elementu 

// A. querySelectorAll() - do pobrania wielu elmentów

const list = document.querySelectorAll("ul>li");
//Pobieram wszystkie li, któe są dzieckiem ul
//Zwrpocona zostanie tu NodeList - CZYLI lista węzłow, obiekt TABLICOPODOBNY
// który też ma długość length i metody tablicy, ale mniej niz tablica

// Można by zapisać z *, czyli dowolny element, który jest przed ul (wiadomo, że będzie, ponieważ jest przed nim choćby body)

const list1 = document.querySelectorAll("* ul>li");

// querySelectorAll - to nowa metoda
// Mamy tu NodeList, czyli listę WĘZŁÓW - node to węzeł
// Wyszukując tworzy nam się lista węzłów, tablicopodobną - ma ona jednak więcej metod, niż uzyskamy z obiektów tablicopodobnych, ze starych metod  


// B. document.getElementsByTagName('li');

// Jeśli korzystamy ze starych metod to piszemy jak poniżej:
// document.getElementsByTagName('li'); czyli szukaj nam wszystkich elementów po tagu: 'li'. 
// Czyli wszystkie li tu na stronie znajdzie
// Mamy zatem pięć elementów

const list2 =document.getElementsByTagName('li');
		//HTMLCollection (obiekt tablicopodobny)
		//Szukanie poprzez Tag konkretny

        // Nie zadziała nam tu nasza nowa formuła tj. czegoś takiego nie znajdzie jak NameList 
        // Wyświetli nam natomiast obiekt tablicopodobny, już nie NodeList, ale podobny. Też możemy za pomocą indeksu dostać się do poszczególnych elementów, ma swoją długość (length), jak każda tablica, ale już nie posiada tych metod 
        
const list3 =  document.getElementsByTagName('ul li');
		//HTMLCollection (obiekt tablicopodobny)


// PODSUMOWANIE
// Przy tych metodach pobierających WIELE jeśli nie znajdzie zwraca pusty obiekt, przy pobieraniu pojedynczych jeśli nie znajdzie zwraca null 
        

// C.  document.getElementsByClassName("even"); 
// Jeśli korzystamy ze starych metod to piszemy jak poniżej.
// Mamy zatem poniżej klasę even, która jest u nas w index.html, która się dwa razy u nas zdarza 

const list4 = document.getElementsByClassName("even");
		//HTMLCollection (obiekt tablicopodobny)
		//Szukanie poprzez klasę

// Przed even nie dajemy kropki bo metoda Class wie, że przekazujemy klasę 
// Mamy HTMLCollection, które pobrało nam dwa elementy z klasą even
// Jeśli nie znajdzie już żadnego pasującego elementu, to nie zwraca już null - dotyczy to każdej z powyższych trzech metod, tylko zwraca pusty obiekt


// Jeśli chcielibyśmy powyższą rzecz zrobić pierwszą metodą tj. querySelectorAll, to musielibyśmy użyć kropki czyli ".even", gdyż tak jak w CSS zapisujemy klasę za pomocą kropki 
const list5 = document.querySelectorAll(".even");

// Najczęściej stosowanym jest pierwszy z powyższych sposobów. Przypomina on w większym stopniu tablicę i ma więcej metod. 
// Pozwala nam zbudować selektor - najwygodniejszym sposobem szukania elementów są obecnie selektory


// 5. TESTUJEMY POZNANE RZECZY -------------------------------
// Zobacz, czym od powyższego różni się getElementsByClassName('li')
const liList6 = document.getElementsByClassName('li');
//pobranie elementów (HTMLCollection)

// Mamy tu HTMLCollection już nie NodeList tj. listę węzłów, tylko kolekcję HTML
// Widzimy tu tylko długość 
// Żadnego elementu nam nie pobrał, bo mamy class zamiast tag  


// Zobacz, czym od powyższego różni się getElementsByTagName('li')
const liList7 = document.getElementsByTagName('li');
//pobranie elementów (HTMLCollection)
// Mamy 5 elementów, index jak w tablicy - obiekt tablicopodobny - długość też mamy; dziedziczymy z obiektu HTMLCollection 
// Mamy tu niewiele metod w porównaniu z NodeList 

// NodeList z querySelector ma - PAMIĘTAJ! - mniej metod niż tablica 
const liList8 = document.querySelectorAll('li');
// Jeśli potrzebujemy większej ilości metod, żeby pracować z omawianymi tu obiektami, to zamieniamy je na tablicę


// PIERWSZA metoda zamiany na tablicę:
// Poniżej zamieniłem, za pomocą operatora rest - zapisywanego za pomocą trzech kropek … - liList na tablicę
const liList9 = document.querySelectorAll('li');
const liArray = [...liList9]; //parametr rest do przerobienia na tablicę
// liArray - to nasza zmienna, którą stworzyliśmy, przechowuje już tablicę
// Widać to w proto_:Array, że jest instancją tablicy, po niej dziedziczy
// Można tu już z większej liczby metod skorzystać 


// DRUGA metoda zamiany na tablicę:
const liList10 = document.querySelectorAll('li');
const liArray2 = Array.from(liList10); //metoda do przerobienia na tablicę


// 6. POBIERANIE ATRYBUTÓW Z ELEMENTÓW ----------------------
// Jak mamy pobrany jakiś element, to chcemy pobrać jego atrybut 
// Najpierw pobrałem h2 - u nas to jest napis Document Object Model(DOM) - i chcę pobrać jego klasę
// Jeśli nazwałem zmienną h2, to mam możliwość, pobrać jej atrybut, za pomocą metody getAttribute. W nawiasie () wskazuję o jaki atrybut mi chodzi 
const h2 = document.querySelector('h2');
console.log(h2.getAttribute('class')); //Ta klasa nazywa się big title
// Mam możliwość pobrania atrybutu i wskazuję o jaki atrybut mi chodzi
// Najpierw chodzi mi o klasę i w konsoli ją wyświetlam

// Jeśli chcę pobrać inny atrybut, to wpisuję jego nazwę w nawiasach (), to może być: src, for, data-color, nazwa może być dowolna, on jej poszuka
// const h2 = document.querySelector('h2'); Tu zakomentowałem bo mam powyżej
console.log(h2.getAttribute('data-color'));

// Jeśli nie ma danego atrybutu, to zwracany jest null 
// Jeśli jest, zwraca całą zawartość atrybutu
// const h2 = document.querySelector('h2'); //Tu zakomentowałem bo mam powyżej
console.log(h2.getAttribute('id'));

//A.  Możemy najpierw pobierać nasz selektor h2 tj. document.querySelector('h2');  przypisując go do const h2, aby następnie w konsoli wywołać
// const h2 = document.querySelector('h2');
console.log(h2.getAttribute('id'));

//B. Możemy to zrobić w jeszcze inny sposób: czyli piszemy document.querySelector('h2') i od razu po kropce tj. na tym, co zostanie pobrane zrobimy getAttribute
// const h2 = document.querySelector('h2');
console.log(document.querySelector('h2').getAttribute('src'));
// Mamy null ponieważ nie ma src 

// const h2 = document.querySelector('h2');
console.log(document.querySelector('h2').getAttribute('class'));

// C. Możemy pobierać atrybuty z naszego elementu, możemy również pobierać zawartość 
//C.1.       textContent – jest to właściwość każdego węzła, każdego pobranego przez nas węzła. Mamy pobrane h2 i przypisaliśmy zawartość do właściwości h2Text
// const h2 = document.querySelector('h2');
const h2Text = h2.textContent;
// textContent przechowuje tekst

//D.  Możemy pobierać atrybuty z naszego elementu, możemy również pobierać zawartość 
// innerHTML - tekst wraz ze znacznikami html, które są wewnątrz danego elementu
// const h2 = document.querySelector('h2');
// const h2Text = h2.innerHTML;
// innerHTML np. jeśli chcemy pobrać tagi zagnieżdżone w środku


document.body.innerHTML //Wpisz w konsoli
// Zwróćmy teraz Document Object Model, który jest w body  TO NIE JEST dokładnie nasz HTML. Są tu dodatkowe węzły np. z LiveServer (on brał udział w generowaniu strony)

document.body.textContent //Wpisz w konsoli
// Pobierzmy document.body.textContent - unikniemy teraz wszystkich znaczników

// Sprawdzenie, czy dany element ma daną klasę
// W każdym węźle mamy właściwość, która nazywa się obiekt classList
// const h2 = document.querySelector('h2'); 
console.log(h2.classList);
// Mamy tu obiekt tablicopodobny, który przechowuje informacje o wszystkich klasach tego elementu 
// Jeśli by nie miał żadnej klasy, to mielibyśmy długość 0 i pustą tablicę 
// Mamy zatem dwie klasy


// Na tym obiekcie classList wykonać różne metody np. metodę contains()
// Sprawdza ona czy dany obiekt ma określoną klasę?
// const h2 = document.querySelector('h2'); 
h2.classList.contains("title");
// Metoda contains sprawdza czy element posiada daną klasę. Jeśli ma zwracane jest true, jeśli nie zwraca false


// II. ------------------- MODYFIKOWANIE ELEMENTÓW NA STRONIE INTERNETOWEJ ---------------
// Mam dużo metod i właściwości, które umożliwiają mi modyfikację, tego co widze na stronie internetowej

const firstLi = document.querySelector('li:first-child'); //1. pobieranie elementu

// 1. text content
firstLi.textContent = "Nierodka wita na JS'ie"

//możemy modyfikowac zawartosc elementow przez przypisywanie nowych wlasciwosci za pomoca: textContent lub innerHTML. Stara wartosc jest usuwana

//2. innerHTML
//uzywam go jezeli chce umiescic html
const firstLi1 = document.querySelector("li:first-child")
//1. pobieranie elementu
firstLi1.innerHTML = '<strong>Pogrubienie</strong> i normalnie'//2.modyfikacja

//3. STYLE
//Dodawanie styli do elementu(liniowo)
//Mamy tu wpływ na css
// JS - nie pozwala nam jak w CSS nadpisywac font-size, zatem uzywamy notacji wielbladziej (camel case) np. fontSize
//np. firstLi.style.color
const firstLi = document.querySelector('li:first-child');//1.pobieranie elementu
firstLi.style.fontSize = '30px';
firstLi.style.backgroundColor = "#ccc";
firstLi.style.letterSpacing = "12px";

//4 CLASS
//dodawanie (add) klas
//odejmowanie (remove) klas
//przelaczanie (tooggle) klas
firstLi.classList.contains("space")

//1. Metoda toggle
//Jesli dana klasa jest to ja zabierze jesli nie ma to ja doda
firstLi.classList.toggle("space")

//2. Add()
firstLi.classList.add("space")

//3. Remove() - jesli dana klasa jest to ja usuwa a jak jej nie ma to nic nie robi
firstLi.classList.remove("space")

//4. className - za pomoca niej mozna dostac sie do klasy w przeciwienstwie do classList.add nadpisuje nam zawartosc. 
//Nie wazne jest wazne czy wczesniej byly klasy czy nie ona nam doda


// III. ---------------- ZDARZENIA AKCJE NASŁUCHIWANIE -----------------------------
// Mozemy nasłuchiwać, wyczekiwać na jakieś zdarzenie, czyli jak wystąpi zdarzenie
// to zaprogramujemy jakąś akcje  np. na click ..

// IV. ----------------TWORZENIE I DODAWANIE ELEMENTÓW ---------------
//  Na początku muszę coś stworzyć aby potem zmodyfikować
