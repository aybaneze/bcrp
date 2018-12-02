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
          money = {
            value:number,
            type: 'A'
          }
        } else if (typeMoney === 'secondImage') {
          money = {
            value:number,
            type: 'B'
          }
        } else if (typeMoney === 'thirdImage') {
          money = {
            value:number,
            type: 'C'
          }
        }
      })
    }    
  } else if (number === 50) {
    typeMoney.setAttribute('class', 'hidden');
    money = number;
  } else if (number === 100) {
    typeMoney.removeAttribute('class');
    typeMoney.setAttribute('class', ' d-flex align-items-center justify-content-center');
    money = number;
  } else if (number === 200) {
    typeMoney.setAttribute('class', 'hidden');
    money = number;
  }
  console.log('money', money);
}
moneyValue();