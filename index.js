var textArea = document.getElementById('textArea');

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
