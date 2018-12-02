const btnIni = document.getElementById('btnIni');
const btnLbf = document.getElementById('btnLbf');
const btnUb = document.getElementById('btnUb');
const seeNserie = document.getElementById('seeN°serie');
const seeMap = document.getElementById('seeMap');
const seeDanger = document.getElementById('seeDanger');
const search = document.getElementById('search');
const part = document.getElementById('part');
btnIni.addEventListener('click', () => {
    seeNserie.removeAttribute('class');
    seeMap.setAttribute('class', 'hidden');
    seeDanger.setAttribute('class', 'hidden');
})
btnLbf.addEventListener('click', () => {
    seeDanger.removeAttribute('class');
    seeMap.setAttribute('class', 'hidden');
    seeNserie.setAttribute('class', 'hidden');
})
const show = (filter) => {
    part.innerHTML = '';
    filter.forEach((res) => {
        let nro = document.createElement('p');
        nro.textContent = res.serie;
        part.appendChild(nro);
    });
};firebase.database().ref().child('verify').once('value', (data) => {
    let bills = Object.values(data.val());
    show(bills);
});
const filterType = (bills, search) => {
    let searchType = bills.filter(res => res.serie.toUpperCase().indexOf(search.toUpperCase()) > -1);
    return searchType;
};
search.addEventListener('keyup', () => {
    const valueSearch = search.value;
    firebase.database().ref().child('verify').once('value', (data) => {
        let bills = Object.values(data.val());
        let filter = filterType(bills, valueSearch);
        show(filter);
    });
});
btnUb.addEventListener('click', () => {
    seeMap.removeAttribute('class');
    seeNserie.setAttribute('class', 'hidden');
    seeDanger.setAttribute('class', 'hidden');
})