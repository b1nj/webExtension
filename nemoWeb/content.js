
/* current_person pas présent enlever menu */

if (document.getElementById('current_person') === null) {
    document.getElementById('menu').style.display = "none";
}

/* Déplacement breadcrumbs */

document.getElementById('header_informations').appendChild(document.getElementById('breakcrumbs'));


/* Ajoute un lien vers l'accueil */

document.getElementById('advanced_search').parentNode.insertAdjacentHTML('beforebegin', '<b><a href="/">Accueil</a></b> ');


/* Ce déconnecter de la personne 

document.getElementById('current_person').insertAdjacentHTML('beforeend', '<div><a href="/" id="deleted_cookie">Changer de pesronne</a></div> ');*/



