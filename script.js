
// Fonction pour afficher la modal
function afficherModale(numeroModal) {
    var modal = document.getElementById('modal' + numeroModal);
    modal.style.display = "block";

    // Ajouter un gestionnaire d'événements pour l'événement de clic sur la fenêtre entière
    window.addEventListener('click', function(event) {
        // Vérifier si l'élément cliqué est à l'extérieur de la modal
        if (event.target == modal) {
            // Si oui, fermer la modal
            modal.style.display = "none";
        }
    });
}

// Ajoutez un gestionnaire d'événements pour la croix
var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var modal = button.parentElement;
        modal.style.display = "none";
    });
});


// Filtres
document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const selectedFilter = filter.getAttribute('data-filter');
            const isActive = filter.classList.contains('active');

            // Si le filtre est déjà actif et est cliqué à nouveau,
            // désélectionne tous les filtres et affiche tous les projets
            if (isActive) {
                filters.forEach(f => f.classList.remove('active'));
                projects.forEach(project => {
                    project.style.display = 'block';
                });
            } else {
                // Sinon, supprime la classe 'active' de tous les filtres
                filters.forEach(f => f.classList.remove('active'));
                // Ajoute la classe 'active' au filtre sélectionné
                filter.classList.add('active');

                // Filtrer les projets en fonction du filtre sélectionné
                projects.forEach(project => {
                    const tags = project.getAttribute('data-tags').split(',');

                    if (selectedFilter === 'all' || tags.includes(selectedFilter)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            }
        });
    });
});


// Sélectionner tous les liens de navigation
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Gestionnaire d'événement de défilement
window.addEventListener('scroll', () => {
    // Parcourir tous les liens de navigation
    navLinks.forEach(link => {
        // Récupérer l'ID de la section associée au lien
        const targetId = link.getAttribute('href').substring(1);
        // Récupérer la section associée au lien
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Récupérer les dimensions de la section et de la fenêtre
            const bounding = targetSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // Vérifier si la section est visible à l'écran
            if (
                bounding.top >= 0 &&
                bounding.bottom <= windowHeight
            ) {
                // Si la section est visible, ajouter la classe 'active' au lien de navigation correspondant
                link.classList.add('active');
            } else {
                // Si la section n'est pas visible, retirer la classe 'active' du lien de navigation correspondant
                link.classList.remove('active');
            }
        }
    });
});









