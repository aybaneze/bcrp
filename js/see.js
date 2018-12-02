const btnIni = document.getElementById('btnIni');
const btnLbf = document.getElementById('btnLbf');
const btnUb = document.getElementById('btnUb');
const seeNserie = document.getElementById('seeN°serie');
const seeMap = document.getElementById('seeMap');
const seeDanger = document.getElementById('seeDanger');
btnIni.addEventListener('click',()=>{
    seeNserie.removeAttribute('class');
    seeMap.setAttribute('class','hidden');
    seeDanger.setAttribute('class','hidden');
})
btnLbf.addEventListener('click',()=>{
    seeDanger.removeAttribute('class');
    seeMap.setAttribute('class','hidden');
    seeNserie.setAttribute('class','hidden');
})
btnUb.addEventListener('click',()=>{
    seeMap.removeAttribute('class');
    seeNserie.setAttribute('class','hidden');
    seeDanger.setAttribute('class','hidden');
})