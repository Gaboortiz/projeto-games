function filterGames(category) {
  let cards = document.querySelectorAll('.game-card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'flex'; // corrigido: mostrar todos se for "all"
    } else {
      if (card.classList.contains(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    }
  });
}