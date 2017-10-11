
/* current_person pas présent enlever menu */

if (document.getElementById('current_person') === null) {
    document.getElementById('menu').style.display = "none";
}

/* Déplacement breadcrumbs */

document.getElementById('header_informations').appendChild(document.getElementById('breakcrumbs'));


/* Ajoute un lien vers l'accueil */

document.getElementById('advanced_search').parentNode.insertAdjacentHTML('beforebegin', '<b><a href="/">Accueil</a></b>&nbsp;&nbsp;');


/* Ce déconnecter de la personne 

document.getElementById('current_person').insertAdjacentHTML('beforeend', '<div><a href="/" id="deleted_cookie">Changer de pesronne</a></div> ');*/


/* Enleve le popin sur le lien "Les présents" */

var el = document.getElementById('les_presents');
elClone = el.cloneNode(true);
elClone.innerHTML = 'Mes usagers (les présents)';
el.parentNode.replaceChild(elClone, el);


/*  Corrige une faute dans le titre "Les Presents" */

if (window.location.pathname == '/les_presents/new') {
    document.querySelector('#lign_one h1').innerHTML = 'Mes usagers (les présents)';
}

/* Enleve le popin sur la loupe */

var elements = document.getElementsByClassName('glimpse');
var elements_user = Array.prototype.filter.call(elements, function(element) {
    var parser = document.createElement('a');
    parser.href = element.href;
    return parser.pathname.substring(0, 8) == "/people/";
});
for (var i = 0; i < elements_user.length; i++) { 
    delete_all_event(elements_user[i]);
}

function delete_all_event (el) {
    elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
}


/* Suppression des target="_blank" */

Array.from(document.querySelectorAll('a[target="_blank"]'))
  .forEach(link => link.removeAttribute('target'));


