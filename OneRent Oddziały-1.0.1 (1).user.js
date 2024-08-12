// ==UserScript==
// @name     OneRent Oddziały
// @match    https://prod.onerent.zone/*
// @grant    GM_addStyle
// @version  1.0.1
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';

    // Definicja tablicy z oddziałami
    var oddzialy = [
        { region: 'Północ', name: 'Szczecin - Goleniów Airport', address: 'Glewice 1a, 72-100 Goleniów' },
{ region: 'Południe', name: 'Katowice - Pyrzowice Airport', address: 'Wolności 40, 42-625 Ożarowice' },
{ region: 'Północ', name: 'Gdańsk Airport', address: 'Juliusza Słowackiego 210, 80-298 Gdańsk' },
{ region: 'Wschód', name: 'Lublin Airport', address: 'Króla Jana III Sobieskiego 1, 21-040 Świdnik' },
{ region: 'Południe', name: 'Rzeszów - Jasionka Airport', address: 'Jasionka 942, 36-002 Jasionka' },
{ region: 'Centrum', name: 'Poznań Ławica Airport', address: 'Bukowska 285, 60-189 Poznan' },
{ region: 'Południe', name: 'Kraków - Balice Airport', address: 'Medwieckiego 1, 32-083 Balice' },
{ region: 'Południe', name: 'Wrocław Airport', address: 'Graniczna 190, 54-530 Wrocław' },
{ region: 'Wschód', name: 'Warszawa Modlin Airport', address: 'Generała Wiktora Thommee 1a, 05-102 Nowy Dwór Mazowiecki' },
{ region: 'Wschód', name: 'Warszawa Chopin Airport', address: 'Żwirki i Wigury 1, 00-001 Warszawa' },
{ region: 'Południe', name: 'Kielce', address: 'Nowaka Jeziorańskiego 89, 25-801 Kielce' },
{ region: 'Centrum', name: 'Kalisz', address: 'Częstochowska 211, 62-800 Kalisz' },
{ region: 'Północ', name: 'Olsztyn', address: 'Sokola 6C, 11-041 Olsztyn' },
{ region: 'Północ', name: 'Szczecinek', address: 'Cieślaka 11, 78-400 Szczecinek' },
{ region: 'Południe', name: 'Opole', address: 'Wiejska 22, 45-303 Opole' },
{ region: 'Centrum', name: 'Poznań Dworzec PKP', address: 'Dworcowa 2, 61-801 Poznań' },
{ region: 'Wschód', name: 'Białystok', address: 'Szosa Knyszyńska 17, 15-694 Białystok' },
{ region: 'Centrum', name: 'Bydgoszcz', address: 'Rysia 1 , 85-082 Bydgoszcz' },
{ region: 'Południe', name: 'Katowice', address: 'Jankego 11, 40-615 Katowice' },
{ region: 'Centrum', name: 'Toruń', address: 'Polna 128/132, 87-100 Toruń' },
{ region: 'Południe', name: 'Kraków', address: 'Dobrego Pasterza 43, 30-003 Kraków' },
{ region: 'Wschód', name: 'Lublin', address: 'Abramowice Prywatne 42B, 20-388  Lublin' },
{ region: 'Północ', name: 'Chojnice', address: 'Bydgoska 16, 89-629 Chojnice' },
{ region: 'Wschód', name: 'Łódź', address: 'Częstochowska 43, 93-121 Łódź' },
{ region: 'Północ', name: 'Giżycko', address: 'Białostocka 48, 11-500 Giżycko' },
{ region: 'Centrum', name: 'Piła', address: 'Rogozińska 2a, 64-920 Piła' },
{ region: 'Północ', name: 'Gryfice', address: 'Piłsudskiego 34A, 72-300 Gryfice' },
{ region: 'Południe', name: 'Wrocław', address: 'Olsztyńska, 51-423 2' },
{ region: 'Południe', name: 'Jelenia Góra', address: 'Moniuszki 1a, 58-506 Jelenia Góra' },
{ region: 'Południe', name: 'Lubin', address: 'Skłodowskiej Curie 172, 59-300 Lubin' },
{ region: 'Zachód', name: 'Leszno', address: '3 Maja 12, 64-100 Leszno' },
{ region: 'Wschód', name: 'Warszawa', address: 'Puławska 405, 02-777 Warszawa' },
{ region: 'Północ', name: 'Słupsk', address: 'Marii Zaborowskiej 29, 76-200 Słupsk' },
{ region: 'Północ', name: 'Gdańsk', address: 'Litewska 12, 80-309 Gdańsk' },
{ region: 'Centrum', name: 'Poznań', address: 'osiedle Jana III Sobieskiego 2A, 60-688  Poznań' },
{ region: 'Północ', name: 'Koszalin', address: 'Andersa 16a (I piętro), 75-453 Koszalin' },
{ region: 'Północ', name: 'Gorzów Wielkopolski', address: 'Mieszka I 65, 66-400 Gorzów Wielkopolski' },
{ region: 'Zachód', name: 'Zielona Góra', address: 'Kręta 2, 65-770 Zielona Góra' },
{ region: 'Północ', name: 'Szczecin', address: 'Al. Wojska Polskiego 70, 70-479 Szczecin' }
        // Dodaj pozostałe oddziały według tego samego wzoru
    ];

    function replaceText() {
        // Zmiana tekstu dla "oddziału wydania"
        var startElements = document.querySelectorAll('span[data-test-id="os.reservations.form.startDepartmentId"]');
        startElements.forEach(function(element) {
            oddzialy.forEach(function(oddzial) {
                if (element.textContent.trim() === oddzial.name) {
                    element.textContent = '[' + oddzial.region + '] ' + oddzial.name + ', ' + oddzial.address;
                }
            });
        });

        // Zmiana tekstu dla "oddziału zwrotu"
        var endElements = document.querySelectorAll('span[data-test-id="os.reservations.form.endDepartmentId"]');
        endElements.forEach(function(element) {
            oddzialy.forEach(function(oddzial) {
                if (element.textContent.trim() === oddzial.name) {
                    element.textContent = '[' + oddzial.region + '] ' + oddzial.name + ', ' + oddzial.address;
                }
            });
        });
    }

    // Sprawdzaj na bieżąco, czy strona się zmienia (np. poprzez AJAX)
    var observer = new MutationObserver(replaceText);
    observer.observe(document.body, { subtree: true, childList: true });

    // Zastosuj zmiany już na załadowanej stronie
    replaceText();
})();
