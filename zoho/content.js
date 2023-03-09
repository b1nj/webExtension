


/* Suppression des target="_blank" */

/*Array.from(document.querySelectorAll('a[target="_blank"]'))
  .forEach(link => link.removeAttribute('target'));*/

//document.getElementById('searchCategory').nextElementSibling.value = 'Contacts,Accounts,Potentials,CustomModule6';


console.log('ssssssss');
/*document.querySelector('#mainMenuTabDiv').addEventListener("click", (event) => {
    console.log(event.target);

    setTimeout(func, 1);
    function func() {
        document.getElementById('Visible_Potentials').text = 'Sites';
    }


    if (event.target.text === 'Contrats ') {
        console.log('ok');
    }
});*/

setTimeout(function () {


    console.log('zzzzzzzzzz');
    document.querySelector('.crmMenuRight').addEventListener("click", (event) => {
        console.log(event.target);

        if (event.target.text === 'Contrats ') {
            console.log('ok');
        }
    });
}, 1000);




//sModules


//document.getElementById('Visible_Potentials').text = 'Sites';




