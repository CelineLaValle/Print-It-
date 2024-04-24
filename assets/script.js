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

    // Sélectionnez les flèches par leur classe commune
    const arrow = document.querySelectorAll('.arrow');

    // Parcourez chaque flèche et ajoutez un event listener
    arrow.forEach(function(fleche) {
        fleche.addEventListener('click', function(event) {
            // Vérifiez si la classe de la flèche est 'arrow_left' ou 'arrow_right'
            if (fleche.classList.contains('arrow_left')) {
                console.log("Clic sur la flèche gauche");
            } else if (fleche.classList.contains('arrow_right')) {
                console.log("Clic sur la flèche gauche");
            }
		});
	});