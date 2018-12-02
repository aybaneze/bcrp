const array = (uid,array) => {
    firebase.database().ref(`/user-ubication/${uid}`).on('value', snap => {
        Object.keys(snap.val()).forEach(element => {
            firebase.database().ref(`/user-ubication/${uid}/${element}`).on('value', snap => {
                let locationData = {
                    position: {
                        lat: snap.val().currentPosition.lat,
                        lng: snap.val().currentPosition.lng
                    },
                    name: snap.val().estado
                }
                array.push(locationData)
            });
        });




    })
}
const getLocations = (uid, ) => {
    let locationsInfo = []
    firebase.database().ref(`/user-ubication/${uid}`).on('value', snap => {
        Object.keys(snap.val()).forEach(element => {
            firebase.database().ref(`/user-ubication/${uid}/${element}`).on('value', snap => {
                let locationData = {
                    position: {
                        lat: snap.val().currentPosition.lat,
                        lng: snap.val().currentPosition.lng
                    },
                    name: snap.val().estado
                }
                console.log(locationData);
                locationsInfo.push(locationData)
                console.log(locationsInfo);
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
    //     let locationsInfo = []

    //     let locationData = {
    //         position: {
    //             lat: snap.val().currentPosition.lat,
    //             lng: snap.val().currentPosition.lng
    //         },
    //         name: snap.val().estado
    //     }
    //     locationsInfo.push(locationData)
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((data) => {
    //             let currentPosition = {
    //                 lat: data.coords.latitude,
    //                 lng: data.coords.longitude
    //             }
    //             console.log(locationsInfo);

    //             dibujarMapa(currentPosition, locationsInfo)
    //         })
    //     }
    // })
}

const dibujarMapa = (obj, locationsInfo) => {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: obj
    })

    let marker = new google.maps.Marker({
        position: obj,
        title: 'patata'
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