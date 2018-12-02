const btnIni = document.getElementById('btnIni');
const btnLbf = document.getElementById('btnLbf');
const btnUb = document.getElementById('btnUb');
const seeNserie = document.getElementById('seeN°serie');
const seeMap = document.getElementById('seeMap');
const seeDanger = document.getElementById('seeDanger');
const seemoney = document.getElementById('money');
const dispaymoney = document.getElementById('dispaymoney');
btnIni.addEventListener('click', () => {
    seeNserie.removeAttribute('class');
    seeMap.setAttribute('class', 'hidden');
    seeDanger.setAttribute('class', 'hidden');
    camera.setAttribute('class', 'hidden');
    seeomi.removeAttribute('class');
    seecontise.tAttribute('class', 'hidden');
    seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
})
btnLbf.addEventListener('click', () => {
    seeDanger.removeAttribute('class');
    seeMap.setAttribute('class', 'hidden');
    seeNserie.setAttribute('class', 'hidden');
    camera.setAttribute('class', 'hidden');
    seeomi.removeAttribute('class');
    seecontise.tAttribute('class', 'hidden');
    seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
})
btnUb.addEventListener('click', () => {
    seeMap.removeAttribute('class');
    seeNserie.setAttribute('class', 'hidden');
    seeDanger.setAttribute('class', 'hidden');
    camera.setAttribute('class', 'hidden');
    seeomi.removeAttribute('class');
    seecontise.tAttribute('class', 'hidden');
    seeomi.setAttribute('class', 'col-md-12 pt-1 text-center');
})
dispaymoney.addEventListener('click', () => {
    seemoney.removeAttribute('class');
    seemoney.setAttribute('class', 'col-md-12 mt-3');
    dispaymoney.setAttribute('class', 'hidden');
})