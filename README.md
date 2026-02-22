## Polecenie zadania: Realizacja aplikacji "System Ewidencji Pojazdów"

**Cel zadania:**
Twoim celem jest stworzenie kompletnego systemu webowego (Fullstack), składającego się z serwera backendowego w technologii **Node.js/Express**, bazy danych **MySQL** oraz frontendu opartego na bibliotece **React**.

**Wymagania funkcjonalne i techniczne:**

1.  **Konfiguracja Bazy Danych:**
    *   Utwórz bazę danych o nazwie `nodedb`.
    *   Przygotuj tabelę `samochod`, zawierającą co najmniej pola: `id_sam`, `producent`, `marka` oraz `model`.

2.  **Serwer Backendowy (Express.js):**
    *   Skonfiguruj serwer na porcie **3000** z wykorzystaniem modułów `express`, `cors` (do obsługi komunikacji międzyźródłowej) oraz `mysql`.
    *   Zaimplementuj silnik widoków **Handlebars (`hbs`)** i skonfiguruj obsługę plików statycznych w folderze `public`.
    *   Stwórz następujące trasy (routes):
        *   `GET /`: Renderowanie strony głównej z dynamicznymi danymi (tytuł: "Strona główna projektu CKU").
        *   `GET /baza`: Wyświetlenie statusu połączenia z bazą danych ("TAK" lub "NIE").
        *   **`GET /selectdb`**: Kluczowy endpoint API, który wykonuje zapytanie SQL `SELECT * FROM samochod;` i zwraca wyniki w formacie **JSON**.

3.  **Aplikacja Kliencka (React):**
    *   Stwórz komponent o nazwie `Api`.
    *   Wykorzystaj hooki **`useState`** (do przechowywania tablicy danych) oraz **`useEffect`** (do asynchronicznego pobrania danych przy załadowaniu komponentu).
    *   Dane powinny być pobierane z adresu `http://localhost:3000/selectdb`.
    *   Zastosuj **renderowanie warunkowe**: dopóki dane nie zostaną pobrane, wyświetlaj napis "Ładowanie danych...", a następnie wypisz listę samochodów w formacie: `model - marka` przy użyciu metody `map`.
    *   Zintegruj komponent w głównym pliku `index.js`, aby był poprawnie renderowany w strukturze DOM.

4.  **Rozszerzenie (Dla chętnych):**
    *   W oparciu o komentarze w kodzie źródłowym, przygotuj szkielety funkcji do obsługi pełnego **CRUD**: wysyłania (`post`), aktualizacji (`put`) oraz usuwania danych (`delete`).