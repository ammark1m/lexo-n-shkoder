# Lexo n'Shkodër

**Platforma digjitale e Bibliotekës "Marin Barleti"**
*"Dija fillon me një faqe."*

Lexo n'Shkodër is a front-end portfolio project: a modern, fully responsive React web app that reimagines what a digital experience for the **Biblioteka Publike "Marin Barleti"** in Shkodër, Albania could look like. Visitors can browse the catalog, search and filter books by category, "reserve" a title, learn about the library, and view a demo library card — all in Albanian.

There is **no backend, no database and no authentication**. Every interaction (reservations, the contact form, the library card, "log out") is simulated on the client for demonstration purposes only.

## Tech stack

- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/) for client-side navigation
- [Vite](https://vitejs.dev/) as the build tool / dev server
- Plain, hand-written CSS — CSS custom properties for the design system, Flexbox and CSS Grid for layout (no UI framework)

## Pages

| Route        | Page                    | Description                                                                 |
|--------------|-------------------------|-------------------------------------------------------------------------------|
| `/`          | Kryefaqja                | Hero, "how it works", featured books, and an intro to Lexo n'Shkodër            |
| `/books`     | Librat dhe Kategoritë     | Searchable, filterable book catalog                                          |
| `/library`   | Biblioteka e Shkodrës     | History, mission, hours, address, borrowing rules and a map placeholder for Biblioteka "Marin Barleti" |
| `/contact`   | Na Kontaktoni             | Contact form (simulated) and contact details                                 |
| `/my-card`   | Kartela Ime               | A demo library card with sample reservations and borrowed books              |

## Features

- 📚 Book catalog with live search (title/author) and category filtering
- 🗂️ Local "database" of books in `src/data/books.js` — no API calls
- 🪪 Demo library card UI with reserved/borrowed books and status badges
- 💬 Reservation modal that's clearly labeled as a demo — no data is persisted
- 📱 Fully responsive layout (desktop, tablet, mobile) built with Flexbox/Grid
- 🇦🇱 Fully localized UI in Albanian
- 🎨 A library-inspired visual identity: navy, gold and parchment tones with serif headings

## Project structure

```
src/
  components/   Navbar, Footer, BookCard, CategoryCard, SearchBar, ReservationModal
  pages/        Home, BooksCategories, ShkodraLibrary, Contact, MyCard
  data/         books.js, categories.js — the local "database"
```

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Disclaimer

This project is built for portfolio purposes. It does not represent an official service of Biblioteka Publike "Marin Barleti" and does not process real reservations, accounts, or personal data.
