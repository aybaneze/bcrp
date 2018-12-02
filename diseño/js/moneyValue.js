const arraytwenty = ['./imgMoney/A.jpg', './imgMoney/B.jpg', './imgMoney/C.jpeg'];
const arrayoneHundred = ['./imgMoney/A.jpeg', './imgMoney/B.jpg', './imgMoney/C.jpg'];

const moneyValue = () => {
  for (let index = 0; index < btnCheck.length; index++) {
    btnCheck[index].addEventListener('click', () => {
      const longString = (btnCheck[index].value).length;
      const string = (btnCheck[index].value).slice(2, longString);
      const number = parseInt(string);
      asigValue(number);
    })
  }
}
const asigValue = (number) => {
  let money = '';
  if (number === 10) {
    typeMoney.setAttribute('class', 'hidden');
    inputTye.setAttribute('class', 'hidden');
    money = number;
  } else if (number === 20) {
    typeMoney.removeAttribute('class');
    typeMoney.setAttribute('class', ' d-flex align-items-center justify-content-center');
    firsImage.src = arraytwenty[0];
    secondImage.src = arraytwenty[1];
    thirdImage.src = arraytwenty[2];
    for (let index = 0; index < imgMoney.length; index++) {
      imgMoney[index].addEventListener('click', () => {
        const typeMoney = imgMoney[index].id;
        if (typeMoney === 'firsImage') {
          console.log(11);

          money = {
            value: number,
            type: 'A'
          }
          searchMoneyValue(money, number);

        } else if (typeMoney === 'secondImage') {
          console.log(12);

          money = {
            value: number,
            type: 'B'
          }
          searchMoneyValue(money, number);

        } else if (typeMoney === 'thirdImage') {
          console.log(13);

          money = {
            value: number,
            type: 'C'
          }
          searchMoneyValue(money, number);

        }
      })
    }
  } else if (number === 50) {
    typeMoney.setAttribute('class', 'hidden');
    inputTye.setAttribute('class', 'hidden');
    money = number;
  } else if (number === 100) {
    typeMoney.removeAttribute('class');
    typeMoney.setAttribute('class', ' d-flex align-items-center justify-content-center');
    money = number;
  } else if (number === 200) {
    typeMoney.setAttribute('class', 'hidden');
    inputTye.setAttribute('class', 'hidden');
    money = number;
  }
}

const searchMoneyValue = (money, number) => {

  inputTye.removeAttribute('class');
  inputTye.setAttribute('class', 'col-md-12 text-center mt-2');

  for (let index = 0; index < btnVer.length; index++) {
    btnVer[index].addEventListener('click', () => {
      const firts = firstLetter.value;
      const half = halfLetter.value;
      const last = lastLetter.value;
      const typeLetter = btnVer[index].id;
      if (typeLetter === 'A') {
        console.log('1');
        exerciseType(typeLetter, number,firts,half,last);
      } else if (typeLetter === 'B') {
        console.log('2');
        exerciseType(typeLetter, number,firts,half,last);
      } else if (typeLetter === 'C') {
        console.log('3');
        exerciseType(typeLetter, number,firts,half,last);
      }

    })
  }


}
const exerciseType = (type, number,firts,half,last) => {
    
    if (firts !== '' & half !== '' & last !== '') {
      if (firts.length === 1 & half.length === 7 & last.length === 1) {
        if (typeof (firts) === 'string' & typeof (parseInt(half)) !== 'string' & typeof (last) === 'string') {
          see(type, number,firts,half,last);
        } else {
          alert('Completa el recuadro con la cantidad de digitos correspondiente');
        }
      } else {
        alert('Completa el recuadro con la cantidad de digitos correspondiente')
      }
    } else {
      alert('Completa el recuadro')
    }
 
}
const see = (type, number,firts,half,last) => {
  if(number===20){
  if (type === 'A') {
    console.log('A',type, number,firts,half,last);
    let valor = half;
    let serieInit = firts.toUpperCase();
    let serieEnd = last.toUpperCase();
    if (serieInit === 'A' && 64 < serieEnd < 91) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP")
    } else if (serieInit === 'B' && serieEnd === 'A' && valor <= 5000000) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP")
    } else {
        alert("TU BILLETE NO SE ENCUENTRA REGISTRADO EN EL BCRP, POSIBLEMENTE ES FALSO");
    }
  } else if (type === 'B') {
    console.log('b',type, number,firts,half,last);
    let valor = half;
    let serieInit = firts.toUpperCase();
    let serieEnd = last.toUpperCase();

    if (serieInit === 'B' && 64 < serieEnd < 91) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
    } else if (serieInit === 'C' && 65 <= serieEnd.charCodeAt() && serieEnd.charCodeAt() <= 67) {
        console.log(serieInit);
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
        console.log(65 <= serieEnd.charCodeAt() <= 67)
    } else if (serieInit === 'C' && serieEnd === 'D' && valor <= 5000000) {
        console.log("c")
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
    } else {
        alert("TU BILLETE NO SE ENCUENTRA REGISTRADO EN EL BCRP, POSIBLEMENTE ES FALSO");
    }

  } else if (type === 'C') {
    console.log('c',type, number,firts,half,last);
    let valor = half;
    let serieInit = firts.toUpperCase();
    let serieEnd = last.toUpperCase();

    if (serieInit === 'C' && serieEnd === 'D' && valor >= 5000001) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
    } else if (serieInit === 'C' && 68 < serieEnd.charCodeAt() && serieEnd.charCodeAt() < 91) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
    } else if (serieInit === 'D' && 65 === serieEnd.charCodeAt()) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
    } else if (serieInit === 'D' && serieEnd.charCodeAt() === 66 && valor <= 5000000) {
        alert("TU BILLETE SE ENCUENTRA REGISTRADO EN EL BCRP");
    } else {
        console.log(serieInit, serieEnd.charCodeAt()),
            document.write("TU BILLETE NO SE ENCUENTRA REGISTRADO EN EL BCRP");
    }
  }
  }
  else if(number===100){

  }
}
moneyValue();