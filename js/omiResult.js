const omitir = (uid) => {

    clickOmi.addEventListener('click', () => {
        firebase.database().ref(`/user-ubication/${uid}`).on('child_added', snap => {
            seeNserie.removeAttribute('class');
            seeMap.setAttribute('class', 'hidden');
            seeDanger.setAttribute('class', 'hidden');
            camera.setAttribute('class', 'hidden');
            seeomi.removeAttribute('class');
            seecontise.tAttribute('class', 'hidden');
            seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
            const div = document.createElement("div");
            div.setAttribute("class", "row");
            const divcul = document.createElement("div");
            divcul.setAttribute("class", "col-md-12 border border-dark text-right");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            const p4 = document.createElement("p");
            p1.innerHTML = 'valor: ' + snap.val().valor;
            p2.innerHTML = 'numero de serie: ' + snap.val().nSerie;
            p3.innerHTML = 'estado: ' + snap.val().estado;
            p4.innerHTML = 'tipo: ' + snap.val().type;
            div.appendChild(divcul);
            divcul.appendChild(p1);
            divcul.appendChild(p2);
            divcul.appendChild(p3);
            divcul.appendChild(p4);

            document.getElementById('rest').appendChild(div);
        })

    })
}