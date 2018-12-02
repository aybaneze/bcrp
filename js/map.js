
const getLocations = (uid) => {
    const locationsInfo = [];
    firebase.database().ref(`/all`).on('value', snap => {
        console.log(snap.val());
        Object.keys(snap.val()).forEach(element => {
            firebase.database().ref(`/all/${element}`).on('value', snap => {
               console.log(snap.val().estado);
               
                let locationData = {
                    position: {
                        lat: snap.val().currentPosition.lat,
                        lng: snap.val().currentPosition.lng
                    },
                    name: (snap.val().estado).toString()
                }
                locationsInfo.push(locationData)
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((data) => {
                        let currentPosition = {
                            lat: data.coords.latitude,
                            lng: data.coords.longitude
                        }
                        console.log(locationsInfo);
                        dibujarMapa(currentPosition, locationsInfo)
                    })
                }
            });
        });
    })

}


const dibujarMapa = (obj, locationsInfo) => {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 120,
        center: obj
    })
    let marker = new google.maps.Marker({
        position: obj,
        title: 'tu ubicacion',

    })
    marker.setMap(map)

    let markers = locationsInfo.map(place => {
        return new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.name


        })

    })
}