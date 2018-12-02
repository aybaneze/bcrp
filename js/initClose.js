window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user);

            if (user.emailVerified === true) {
                console.log('Inicio Logueado ')
                moneyValue( user.uid);
                omitir(user.uid);
                getLocations(user.uid);
            }
            if (user.isAnonymous === true) {
                console.log('Inicio Logueado ANONIMO ')

            }
        } else {
            console.log('No esta logueado');
            window.location='index.html';

        }
    });
}

btnLogout.addEventListener('click', () => {
    firebase.auth().signOut()
        .then(() => {
            console.log('fhgjkku');

            window.location = 'index.html'

        })
        .catch((error) => {
            console.log('Error al cerrar Sesión');
        });
})
