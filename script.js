/**
 * Gère la galerie d'images sur les pages produits.
 * Au clic sur une miniature, l'image principale est mise à jour.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne la galerie sur la page actuelle (s'il y en a une)
    const gallery = document.querySelector('.gallery');
    
    if (gallery) {
        const mainImage = gallery.querySelector('#main-img');
        const thumbnails = gallery.querySelectorAll('.thumbnails img');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Met à jour l'image principale
                mainImage.src = thumbnail.src;
                mainImage.alt = thumbnail.alt; // Met à jour le texte alternatif

                // Gère la classe 'active' pour la bordure
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }

    /**
     * Gère le déploiement des sections FAQ sur la page d'accueil.
     * Ceci est un exemple, car la balise <details> gère cela nativement,
     * mais on pourrait ajouter des animations ici.
     */
    const faqItems = document.querySelectorAll('details');
    faqItems.forEach(item => {
        item.addEventListener('toggle', event => {
            if (event.target.open) {
                // Action quand un item s'ouvre
                // console.log(event.target.querySelector('summary').textContent + " a été ouvert.");
            } else {
                // Action quand un item se ferme
                // console.log(event.target.querySelector('summary').textContent + " a été fermé.");
            }
        });
    });
});
