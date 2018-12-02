const writeubication = (uid, numero,estado) => {
    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child('posts').push().key;
    // obtener coodenadas del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
            let currentPosition = {
                lat: data.coords.latitude,
                lng: data.coords.longitude
            }
            const data = {
                uid: uid,
                valor: numero,
                key: newPostKey,
                camera:'',
                estado,
                currentPosition
            };
            console.log(data);
            
            const updates = {};
            updates[`/all/${newPostKey}`] = data;
            updates[`/user-ubication/${uid}/${newPostKey}`] = data;
            firebase.database().ref().update(updates);
        })
    }
    else{
        alert('Por favor activa tu ubicación')
    }
    
}