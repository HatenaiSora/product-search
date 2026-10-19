# Recruitment starter

Projekt startowy do zadań podczas rozmowy technicznej. Treść zadań dostaniesz w trakcie rozmowy, więc nie musisz nic przygotowywać poza uruchomieniem projektu.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Uruchomienie

Wymagany Node.js 20.9 lub nowszy (zalecany 22 LTS, jest `.nvmrc`).

```bash
git clone <adres-repozytorium>
cd recruitment-starter
npm install
npm run dev
```

Otwórz http://localhost:3000. Jeśli widzisz stronę „Projekt działa” i linki do API zwracają JSON, wszystko jest gotowe.

## Co jest w projekcie

```
app/
├─ api/products/route.ts   mock API produktów
├─ task/    strona na zadanie
└─ layout.tsx
mocks/                     dane w JSON
types/index.ts             typy
```

### Mock API

| Endpoint                   | Opis                   |
| -------------------------- | ---------------------- |
| `GET /api/products`        | lista produktów        |
| `GET /api/products?q=lap`  | filtrowanie po nazwie  |
| `GET /api/products?fail=1` | odpowiedź z błędem 500 |

Goal: On the /task page, show a list of products fetched from /api/products?q=<query>.

To-do (file: app/task/page.tsx):

1. After the search query changes, fetch data from `/api/products?q=<term>` and display the list. Only name and price are required.
2. Handle three states visible to user:

- loading,
- request failed,
- request succeeded but no results were found.

Task complete when: "lap" displays a list of laptops, "xyz" displays a "no results" message, and a server error displays an error message instead of an empty list.

Good to know:

- The `Product` type is defined in `types/index.ts`.
- The API has a random delay of 200–1500 ms, making the loading state visible.
- You can trigger a 500 error by appending `&fail=1` to the query (e.g., `/api/products?q=lap&fail=1`).
- You can open `/api/products?q=lap` in your browser to inspect the data structure.

UI is not being evaluated;
