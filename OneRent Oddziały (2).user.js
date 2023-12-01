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
        { region: 'Północ', name: 'Gorzów Wielkopolski', address: 'ul. Mieszka I 65' },
        { region: 'Północ', name: 'Szczecin', address: 'ul. Torfowa 3a' },
        { region: 'Północ', name: 'Koszalin', address: 'ul. Andersa 16a' },
        { region: 'Północ', name: 'Gdańsk', address: 'ul. Grunwaldzka 339' },
        { region: 'Północ', name: 'Słupsk', address: 'ul. Leszczyńskiego 10A' },
        { region: 'Północ', name: 'Gryfice', address: 'ul. Piłsudskiego 34A' },
        { region: 'Północ', name: 'Piła', address: 'ul. Grunwaldzka 2' },
        { region: 'Północ', name: 'Chojnice', address: 'ul. Bydgoska 16' },
        { region: 'Północ', name: 'Giżycko', address: 'ul. Kolejowa 18' },
        { region: 'Zachód', name: 'Zielona Góra', address: 'ul. Kręta 2' },
        { region: 'Zachód', name: 'Poznań', address: 'ul. Murawy 12' },
        { region: 'Zachód', name: 'Leszno', address: 'ul. 3 maja 12' },
        { region: 'Zachód', name: 'Lubin', address: 'ul. Curie-Skłodowskiej 172' },
        { region: 'Zachód', name: 'Jelenia Góra', address: 'ul. Zgorzelecka 9' },
        { region: 'Zachód', name: 'Toruń', address: 'ul. Polna 128/132' },
        { region: 'Wschód', name: 'Warszawa', address: 'ul. Ciszewskiego 7' },
        { region: 'Wschód', name: 'Łódź', address: 'ul. Częstochowska 43' },
        { region: 'Wschód', name: 'Lublin', address: 'ul. Abramowice Prywatne 42B' },
        { region: 'Południe', name: 'Wrocław', address: 'ul. Olsztyńska 2' },
        { region: 'Południe', name: 'Chorzów', address: 'ul. Katowicka 160' },
        { region: 'Południe', name: 'Kraków', address: 'ul. Dobrego Pasterza 43' },
        { region: 'Południe', name: 'Katowice', address: 'ul. Jankego 11' }
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
