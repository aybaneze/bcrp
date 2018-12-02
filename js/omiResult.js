const omitir = (uid) => {
    document.getElementById('rest').innerHTML='';
    clickOmi.addEventListener('click', () => {
        firebase.database().ref(`/user-ubication/${uid}`).on('child_added', snap => {
            const div = document.createElement("div");
            div.setAttribute("class", "row");
            const divcul = document.createElement("div");
            divcul.setAttribute("class", "col-md-12  border border-dark text-center");
            const h3 = document.createElement("h3");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            const p4 = document.createElement("p");
            h3.innerHTML='Tu historial'
            p1.innerHTML = 'valor: ' + snap.val().valor;
            p2.innerHTML = 'numero de serie: ' + snap.val().nSerie;
            p3.innerHTML = 'estado: ' + snap.val().estado;
            p4.innerHTML = 'tipo: ' + snap.val().type;
            div.appendChild(divcul);
            divcul.appendChild(h3);
            divcul.appendChild(p1);
            divcul.appendChild(p2);
            divcul.appendChild(p3);
            divcul.appendChild(p4);
            document.getElementById('rest').appendChild(div);
          
        })

    })
}