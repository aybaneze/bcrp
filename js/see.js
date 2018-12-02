const btnIni = document.getElementById('btnIni');
const btnLbf = document.getElementById('btnLbf');
const btnUb = document.getElementById('btnUb');
const seeNserie = document.getElementById('seeN°serie');
const seeMap = document.getElementById('seeMap');
const seeDanger = document.getElementById('seeDanger');
const seemoney = document.getElementById('money');
const dispaymoney = document.getElementById('dispaymoney');
const search = document.getElementById('search');
const part = document.getElementById('part');

btnIni.addEventListener('click', () => {
    seeNserie.removeAttribute('class');
    seeMap.setAttribute('class', 'hidden');
    seeDanger.setAttribute('class', 'hidden');
    camera.setAttribute('class', 'hidden');
    seeomi.removeAttribute('class');
    seeconti.setAttribute('class', 'hidden');
    seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
})
btnLbf.addEventListener('click', () => {
    seeDanger.removeAttribute('class');
    seeMap.setAttribute('class', 'hidden');
    seeNserie.setAttribute('class', 'hidden');
    camera.setAttribute('class', 'hidden');
    seeomi.removeAttribute('class');
    seeconti.setAttribute('class', 'hidden');
    seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
})
btnUb.addEventListener('click', () => {
    seeMap.removeAttribute('class');
    seeNserie.setAttribute('class', 'hidden');
    seeDanger.setAttribute('class', 'hidden');
    camera.setAttribute('class', 'hidden');
    seeomi.removeAttribute('class');
    seeconti.setAttribute('class', 'hidden');
    seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
})
dispaymoney.addEventListener('click', () => {
    seemoney.removeAttribute('class');
    seemoney.setAttribute('class', 'col-md-12 mt-3');
    dispaymoney.setAttribute('class', 'hidden');
})
const show = (filter) => {
    part.innerHTML = '';
    filter.forEach((res) => {
        let nro = document.createElement('p');
        nro.textContent = res.serie;
        nro.setAttribute('class', 'list-bord');
        nro.setAttribute('class', 'border border-dark ')
        part.appendChild(nro);

    });
};
firebase.database().ref().child('verify').once('value', (data) => {
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