function filterGames(platform) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const platforms = card.getAttribute('data-platform');

    // Se for "all", remove hidden de todos
    if (platform === 'all') {
      card.classList.remove('hidden');
    } 
    // Se o card contém a plataforma, mostra
    else if (platforms.includes(platform)) {
      card.classList.remove('hidden');
    } 
    // Senão, esconde
    else {
      card.classList.add('hidden');
    }
  });
}