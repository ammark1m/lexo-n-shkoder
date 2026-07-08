// List of book categories available at the library.
// The `id` is used for filtering, `name` is shown to the user, and
// `gradient` colors the placeholder cover used when a book has no
// real cover image (see data/books.js).
export const categories = [
  { id: 'roman', name: 'Roman', gradient: ['#7b2d26', '#a8453a'] },
  { id: 'letersi-shqipe', name: 'Letërsi Shqipe', gradient: ['#1f3a5f', '#2f5a8f'] },
  { id: 'histori', name: 'Histori', gradient: ['#5b4630', '#8a6b45'] },
  { id: 'libra-per-femije', name: 'Libra për Fëmijë', gradient: ['#2c7a63', '#45a687'] },
  { id: 'poezi', name: 'Poezi', gradient: ['#2a5f6b', '#3d8b9c'] },
  { id: 'filozofi', name: 'Filozofi', gradient: ['#3f3f46', '#61616b'] },
  { id: 'biografi', name: 'Biografi', gradient: ['#8a5a1f', '#c9922f'] },
  { id: 'klasike-boterore', name: 'Klasikë Botërorë', gradient: ['#5c3a68', '#815a91'] },
];

// Helper to look up a category by id (used in BookCard, filters, etc.)
export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}
