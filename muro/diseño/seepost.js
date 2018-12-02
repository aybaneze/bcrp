const iconM = document.getElementById('iconM');
const seeIyP = document.getElementById('seeIyP');
iconM.addEventListener('click', () => {
    if (seeIyP.hasAttribute('value')) {
        seeIyP.removeAttribute('value');
        seeIyP.removeAttribute('class');
        seeIyP.setAttribute('class', 'col-12 col-md-12');
    } else {
        seeIyP.setAttribute('value', 'solo para el efecto');
        seeIyP.setAttribute('class', 'col-12 col-md-12 hiddennav2');
    }
})
