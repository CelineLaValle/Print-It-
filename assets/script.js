const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const dotsContainer = document.querySelector('.dots');

// Ajoutez un point pour chaque diapositive
slides.forEach(function(slide, index) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) {
		dot.classList.add('dot_selected'); // Ajoute la classe pour le point actif initial
	}
	dotsContainer.appendChild(dot);
});

    // Sélectionnez les flèches par leur classe commune
    const arrow = document.querySelectorAll('.arrow');
	const dots = document.querySelectorAll('.dot');
    let currentSlideIndex = 0; // Index de la diapositive actuelle


    // Parcourez chaque flèche et ajoutez un event listener
    arrow.forEach(function(fleche) {
        fleche.addEventListener('click', function(event) {
            // Vérifiez si la classe de la flèche est 'arrow_left' ou 'arrow_right'
            if (fleche.classList.contains('arrow_left')) {
                currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Calcul de l'index précédent
            } else if (fleche.classList.contains('arrow_right')) {
                currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Calcul de l'index suivant
            }
			 // Mettre à jour le bullet point actif
			 updateActiveDot(currentSlideIndex);
			 // Mettre à jour l'image et le texte correspondant
			 updateSlide(currentSlideIndex);
		});
	});

	function updateActiveDot(index) {
        dots.forEach(function(dot, dotIndex) {
            if (dotIndex === index) {
                dot.classList.add('dot_selected'); // Ajoute la classe dot_selected au bullet point actif
            } else {
                dot.classList.remove('dot_selected'); // Supprime la classe dot_selected des autres bullet points
            }
        });
    }

	function updateSlide(index) {
        const slide = slides[index]; // Sélectionne la diapositive correspondant à l'index actuel
        const image = document.querySelector('.banner-img'); // Sélectionne l'élément img avec la classe "banner-img"
        const tagLine = document.querySelector('#banner p'); // Sélectionne l'élément p à l'intérieur de l'élément avec l'ID "banner"

        // Met à jour l'image en changeant son attribut src avec le chemin de l'image de la diapositive sélectionnée
        image.src = `./assets/images/slideshow/${slide.image}`;
        // Met à jour le texte en remplaçant le contenu HTML de l'élément p avec la tagLine de la diapositive sélectionnée
        tagLine.innerHTML = slide.tagLine;
    }