const writeubication = (uid, numero,type,estado,nSerie,) => {
    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child('posts').push().key;
    // obtener coodenadas del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
            let currentPosition = {
                lat: data.coords.latitude,
                lng: data.coords.longitude
            }
            const fech=new Date();
            const dataUser = {
                uid: uid,
                valor: numero,
                key: newPostKey,
                camera:'',
                nSerie,
                type,
                estado,
                currentPosition
            };            
            const updates = {};
            updates[`/all/${newPostKey}`] = dataUser;
            updates[`/user-ubication/${uid}/${newPostKey}`] = dataUser;
            firebase.database().ref().update(updates);
        })
    }
    else{
        alert('Por favor activa tu ubicación')
    }
    
}