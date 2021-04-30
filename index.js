var textArea = document.getElementById('textArea');

// function pushBtn(obj) {
//   var pushed = obj.innerHTML;
//   textArea.innerHTML += pushed;
// }
//
// let oneBtnJS = document.getElementById("oneButton");
// oneBtnJS.addEventListener("click", function() { pushBtn('1'); });
//
// let twoBtnJS = document.getElementById("twoButton");
// twoBtnJS.addEventListener("click", function() { pushBtn('2'); });
//
// let threeBtnJS = document.getElementById("threeButton");
// threeBtnJS.addEventListener("click", function() { pushBtn('3'); });
//
// let fourBtnJS = document.getElementById("fourButton");
// fourBtnJS.addEventListener("click", function() { pushBtn('4'); });
//
// let fiveBtnJS = document.getElementById("fiveButton");
// fiveBtnJS.addEventListener("click", function() { pushBtn('5'); });
//
// let sixBtnJS = document.getElementById("sixButton");
// sixBtnJS.addEventListener("click", function() { pushBtn('6'); });
//
// let sevenBtnJS = document.getElementById("sevenButton");
// sevenBtnJS.addEventListener("click", function() { pushBtn('7'); });
//
// let eightBtnJS = document.getElementById("eightButton");
// eightBtnJS.addEventListener("click", function() { pushBtn('8'); });
//
// let nineBtnJS = document.getElementById("nineButton");
// nineBtnJS.addEventListener("click", function() { pushBtn('9'); });


function pushBtn(obj) {

  var pushed = obj.innerHTML;

    if (pushed == '=') {
      // Calculate
      textArea.innerHTML = eval(textArea.innerHTML);

      } else if (pushed == 'C') {
        // All Clear
        textArea.innerHTML = '0';

      } else {
        if (textArea.innerHTML == '0') {
        textArea.innerHTML = pushed;

      } else {
        textArea.innerHTML += pushed;
    }
  }
}
