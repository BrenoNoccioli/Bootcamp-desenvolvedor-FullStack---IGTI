window.addEventListener('load', changeColor);

var inputs = document.querySelector('.inputs');

inputs.addEventListener('change', changeColor);

function changeColor() {
  var boxColor = document.querySelector('.box-color');
  var red = document.querySelector('#rangeR').value;
  var green = document.querySelector('#rangeG').value;
  var blue = document.querySelector('#rangeB').value;
  var inputNumberR = document.querySelector('#inputNumberR');
  var inputNumberG = document.querySelector('#inputNumberG');
  var inputNumberB = document.querySelector('#inputNumberB');

  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  boxColor.style.backgroundColor = color;
  inputNumberR.value = document.querySelector('#rangeR').value;
  inputNumberG.value = document.querySelector('#rangeG').value;
  inputNumberB.value = document.querySelector('#rangeB').value;

  document.querySelector('.rgb').innerHTML = color;
}
