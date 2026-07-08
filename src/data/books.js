// Local "database" of books for the Shkodra Library demo.
// This is plain data, not a real backend — BooksCategories.jsx and
// Home.jsx simply import and filter this array in the browser.
import { getCategoryById } from './categories';

// Real cover images, one per book id. Any id without a matching file
// simply falls back to the generated placeholder cover below.
import cover1 from '../assets/1.png';
import cover2 from '../assets/2.png';
import cover3 from '../assets/3.png';
import cover4 from '../assets/4.png';
import cover5 from '../assets/5.png';
import cover6 from '../assets/6.png';
import cover7 from '../assets/7.png';
import cover8 from '../assets/8.png';
import cover9 from '../assets/9.png';
import cover10 from '../assets/10.png';
import cover11 from '../assets/11.png';
import cover12 from '../assets/12.png';
import cover13 from '../assets/13.png';
import cover14 from '../assets/14.png';

// Maps a book id to its imported cover image.
const bookImages = {
  1: cover1,
  2: cover2,
  3: cover3,
  4: cover4,
  5: cover5,
  6: cover6,
  7: cover7,
  8: cover8,
  9: cover9,
  10: cover10,
  11: cover11,
  12: cover12,
  13: cover13,
  14: cover14,
};

// The three possible values of a book's `status` field.
export const BOOK_STATUS = {
  AVAILABLE: 'I disponueshëm',
  RESERVED: 'I rezervuar',
  BORROWED: 'I huazuar',
};

// Builds a clean placeholder cover (title on a category-colored background)
// from placehold.co. Used whenever we don't have real cover art for a book.
function coverUrl(title, categoryId) {
  const category = getCategoryById(categoryId);
  const bg = (category?.gradient?.[0] ?? '#1f3a5f').replace('#', '');
  return `https://placehold.co/400x600/${bg}/f8f4ec?font=playfair-display&text=${encodeURIComponent(title)}`;
}

const rawBooks = [
  {
    id: 1,
    title: 'Kronikë në gur',
    author: 'Ismail Kadare',
    category: 'letersi-shqipe',
    status: BOOK_STATUS.AVAILABLE,
    description:
      'Një roman që rrëfen fëmijërinë e një djali në qytetin e Gjirokastrës gjatë Luftës së Dytë Botërore, të parë përmes syve plot fantazi të fëmijërisë.',
    publishedYear: 1971,
    language: 'Shqip',
    pages: 280,
    rating: 4.8,
    ratingCount: 132,
  },
  {
    id: 2,
    title: 'Lahuta e Malcis',
    author: 'Gjergj Fishta',
    category: 'poezi',
    status: BOOK_STATUS.BORROWED,
    description:
      'Poema epike më e njohur e letërsisë shqipe, që këndon jetën, luftërat dhe traditat e malësorëve të Shqipërisë së Veriut.',
    publishedYear: 1937,
    language: 'Shqip',
    pages: 512,
    rating: 4.6,
    ratingCount: 58,
  },
  {
    id: 3,
    title: 'Kështjella',
    author: 'Ismail Kadare',
    category: 'roman',
    status: BOOK_STATUS.RESERVED,
    description:
      'Roman historik që rrëfen rrethimin osman të një kështjelle shqiptare, simbol i qëndresës kundër pushtuesve.',
    publishedYear: 1970,
    language: 'Shqip',
    pages: 320,
    rating: 4.7,
    ratingCount: 96,
  },
  {
    id: 4,
    title: 'Rrethimi i Shkodrës',
    author: 'Marin Barleti',
    category: 'histori',
    status: BOOK_STATUS.AVAILABLE,
    description:
      'Kronikë historike e humanistit shkodran Marin Barleti mbi rrethimin osman të Shkodrës në vitin 1478.',
    publishedYear: 1504,
    language: 'Shqip',
    pages: 260,
    rating: 4.5,
    ratingCount: 41,
  },
  {
    id: 5,
    title: 'Bagëti e Bujqësi',
    author: 'Naim Frashëri',
    category: 'poezi',
    status: BOOK_STATUS.AVAILABLE,
    description:
      'Poemë bukolike që lartëson bukurinë e natyrës shqiptare dhe jetën e thjeshtë të fshatit.',
    publishedYear: 1886,
    language: 'Shqip',
    pages: 120,
    rating: 4.4,
    ratingCount: 37,
  },
  {
    id: 6,
    title: 'Lulet e Verës',
    author: 'Naim Frashëri',
    category: 'poezi',
    status: BOOK_STATUS.RESERVED,
    description:
      'Përmbledhje poetike që shpreh dashurinë për atdheun, natyrën dhe dritën e diturisë.',
    publishedYear: 1890,
    language: 'Shqip',
    pages: 150,
    rating: 4.3,
    ratingCount: 29,
  },
  {
    id: 7,
    title: 'Tregime të Moçme Shqiptare',
    author: 'Mitrush Kuteli',
    category: 'letersi-shqipe',
    status: BOOK_STATUS.BORROWED,
    description:
      'Rrëfime të frymëzuara nga folklori shqiptar, të rishkruara me një gjuhë të pasur e poetike.',
    publishedYear: 1947,
    language: 'Shqip',
    pages: 200,
    rating: 4.6,
    ratingCount: 52,
  },
  {
    id: 8,
    title: 'Aventurat e Tom Sojerit',
    author: 'Mark Twain',
    category: 'libra-per-femije',
    status: BOOK_STATUS.AVAILABLE,
    description:
      'Aventurat e një djali të shkathët buzë lumit Misisipi, një nga klasikët më të dashur për fëmijë e të rritur.',
    publishedYear: 1876,
    language: 'Shqip',
    pages: 264,
    rating: 4.7,
    ratingCount: 210,
  },
  {
    id: 9,
    title: 'Princi i Vogël',
    author: 'Antoine de Saint-Exupéry',
    category: 'libra-per-femije',
    status: BOOK_STATUS.RESERVED,
    description:
      'Përralla e njohur botërisht për një princ të vogël që udhëton nga planeti i tij, duke na mësuar për dashurinë dhe miqësinë.',
    publishedYear: 1943,
    language: 'Shqip',
    pages: 96,
    rating: 4.9,
    ratingCount: 341,
  },
  {
    id: 10,
    title: 'Robinson Kruzo',
    author: 'Daniel Defoe',
    category: 'klasike-boterore',
    status: BOOK_STATUS.AVAILABLE,
    description:
      'Historia e mbijetesës së një marinari të mbetur i vetëm në një ishull të shkretë për shumë vite.',
    publishedYear: 1719,
    language: 'Shqip',
    pages: 320,
    rating: 4.5,
    ratingCount: 88,
  },
  {
    id: 11,
    title: 'Don Kishoti',
    author: 'Miguel de Cervantes',
    category: 'klasike-boterore',
    status: BOOK_STATUS.RESERVED,
    description:
      'Aventurat e kalorësit idealist Don Kishoti dhe shqiptarit të tij Sanço Panca, kryevepër e letërsisë botërore.',
    publishedYear: 1605,
    language: 'Shqip',
    pages: 480,
    rating: 4.8,
    ratingCount: 176,
  },
  {
    id: 12,
    title: 'Oliver Tuist',
    author: 'Charles Dickens',
    category: 'klasike-boterore',
    status: BOOK_STATUS.AVAILABLE,
    description:
      'Historia e një jetimi në Londrën viktoriane, që përballet me varfërinë dhe padrejtësinë shoqërore.',
    publishedYear: 1838,
    language: 'Shqip',
    pages: 360,
    rating: 4.6,
    ratingCount: 103,
  },
  {
    id: 13,
    title: 'Kritika e Arsyes së Pastër',
    author: 'Immanuel Kant',
    category: 'filozofi',
    status: BOOK_STATUS.BORROWED,
    description:
      'Vepër themelore e filozofisë moderne mbi kufijtë dhe mundësitë e njohjes njerëzore.',
    publishedYear: 1781,
    language: 'Shqip',
    pages: 620,
    rating: 4.2,
    ratingCount: 19,
  },
  {
    id: 14,
    title: 'Skënderbeu',
    author: 'Fan Noli',
    category: 'biografi',
    status: BOOK_STATUS.RESERVED,
    description:
      'Biografi e Gjergj Kastriotit - Skënderbeut, heroit kombëtar shqiptar, shkruar nga Fan Noli.',
    publishedYear: 1921,
    language: 'Shqip',
    pages: 240,
    rating: 4.7,
    ratingCount: 64,
  },
];

// Use the real cover image when one exists for this id, otherwise fall
// back to the generated placeholder cover.
export const books = rawBooks.map((book) => ({
  ...book,
  image: bookImages[book.id] || coverUrl(book.title, book.category),
}));
