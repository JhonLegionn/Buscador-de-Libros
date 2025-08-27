// Utilidades para favoritos usando localStorage

export function saveFavorite(book) {
  const favs = getFavorites();
  // Evitar duplicados
  if (!favs.find(fav => fav.id === book.id)) {
    favs.push(book);
    localStorage.setItem('favorites', JSON.stringify(favs));
  }
}

export function getFavorites() {
  const favs = localStorage.getItem('favorites');
  return favs ? JSON.parse(favs) : [];
}

export function removeFavorite(bookId) {
  const favs = getFavorites();
  const filtered = favs.filter(book => book.id !== bookId);
  localStorage.setItem('favorites', JSON.stringify(filtered));
}

export function isFavorite(bookId) {
  const favs = getFavorites();
  return favs.some(book => book.id === bookId);
}
