var onebtn = document.getElementById('calc-one');
var onebtn = document.getElementById('calc-two');
var onebtn = document.getElementById('calc-three');
var onebtn = document.getElementById('calc-four');
var onebtn = document.getElementById('calc-five');
var onebtn = document.getElementById('calc-six');
var onebtn = document.getElementById('calc-seven');
var onebtn = document.getElementById('calc-eight');
var onebtn = document.getElementById('calc-nine');
var onebtn = document.getElementById('calc-zero');

var decimalbtn = document.getElementById('decimal');
var clearbtn = document.getElementById('clear');
var backpacebtn = document.getElementById('backspace');
var displayValElement = document.getElementById('Calculator-display');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];     /* problem here */

var calcNumnbtns = document.getElementsByClassName('calc-btn-num');
var calOperationBtns = document.getElementsByClassName('calc-btn-operator');

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;

if(displayVal === '0')
  displayVal = '';

displayVal += btnText;
displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText;

    switch (operator) {
      case '+':
        pendingVal = displayVal;
        display ='0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+');
        break;

      case '-':
        pendingVal = displayVal;
        display ='0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('-');
        break;

        case 'x':
          pendingVal = displayVal;
          display ='0';
          displayValElement.innerText = displayVal;
          evalStringArray.push(pendingVal);
          evalStringArray.push('*');
          break;

        case '÷':
          pendingVal = displayVal;
          display ='0';
          displayValElement.innerText = displayVal;
          evalStringArray.push(pendingVal);
          evalStringArray.push('/');

        case '=':
          evalStringArray.push(displayVal);
          var evaluation = eval(evalStringArray.join(''));
          displayVal = evaluation + '';
          displayValElement.innerText = displayVal;
          evalStringArray = [];
          break;
      default:
          break;

    }

}



for (let i = 0; i < calcNumnbtns.length; i++) {
  calcNumnbtns[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < calOperationBtns.length; i++) {
  calOperationBtns[i].addEventListener('click', performOperation, false);
}



clearbtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  displayValElement.innerHTML = displayVal;
}

backpace.onclick = () => {
  let lenthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lenthOfDisplayVal - 1);

  if(displayVal === '')
    displayVal = '0';

  displayValElement.innerText = displayVal;
}

decimal.onclick = () => {
  if(!displayVal.includes('.'))
  displayVal += '.';
  displayValElement.innerText = displayVal;
}
