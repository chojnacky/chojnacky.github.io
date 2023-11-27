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
        { name: 'Gorzów Wielkopolski', address: 'ul. Mieszka I 65' },
        { name: 'Szczecin', address: 'ul. Torfowa 3a' },
        { name: 'Zielona Góra', address: 'ul. Kręta 2' },
        { name: 'Koszalin', address: 'ul. Andersa 16a' },
        { name: 'Poznań', address: 'ul. Murawy 12' },
        { name: 'Gdańsk', address: 'ul. Grunwaldzka 339' },
        { name: 'Słupsk', address: 'ul. Leszczyńskiego 10A' },
        { name: 'Warszawa', address: 'ul. Ciszewskiego 7' },
        { name: 'Leszno', address: 'ul. 3 maja 12' },
        { name: 'Lubin', address: 'ul. Curie-Skłodowskiej 172' },
        { name: 'Jelenia Góra', address: 'ul. Zgorzelecka 9' },
        { name: 'Wrocław', address: 'ul. Olsztyńska 2' },
        { name: 'Gryfice', address: 'ul. Piłsudskiego 34A' },
        { name: 'Piła', address: 'ul. Grunwaldzka 2' },
        { name: 'Giżycko', address: 'ul. Kolejowa 18' },
        { name: 'Łódź', address: 'ul. Częstochowska 43' },
        { name: 'Chojnice', address: 'ul. Bydgoska 16' },
        { name: 'Lublin', address: 'ul. Abramowice Prywatne 42B' },
        { name: 'Chorzów', address: 'ul. Katowicka 160' },
        { name: 'Kraków', address: 'ul. Dobrego Pasterza 43' },
        { name: 'Toruń', address: 'ul. Polna 128/132' }
        // Dodaj pozostałe oddziały według tego samego wzoru
    ];

    function replaceText() {
        // Zmiana tekstu dla "oddziału wydania"
        var startElements = document.querySelectorAll('span[data-test-id="os.reservations.form.startDepartmentId"]');
        startElements.forEach(function(element) {
            oddzialy.forEach(function(oddzial) {
                if (element.textContent.trim() === oddzial.name) {
                    element.textContent = oddzial.name + ', ' + oddzial.address;
                }
            });
        });

        // Zmiana tekstu dla "oddziału zwrotu"
        var endElements = document.querySelectorAll('span[data-test-id="os.reservations.form.endDepartmentId"]');
        endElements.forEach(function(element) {
            oddzialy.forEach(function(oddzial) {
                if (element.textContent.trim() === oddzial.name) {
                    element.textContent = oddzial.name + ', ' + oddzial.address;
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
