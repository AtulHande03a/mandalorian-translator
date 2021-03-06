var btntranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serverUrl = 'https://api.funtranslations.com/translate/mandalorian.json';

https: function getTranslationUrl(text) {
  return serverUrl + '?' + 'text=' + text;
}

function errorHandler(error) {
  console.log('error occured', error);
  alert('something is wrong! try again after some time');
}

function clickHandler() {
  // outputDiv.innerHTML = "hhjh"+txtInput.nodeValue;
  var inputText = txtInput.value;

  fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
      var tText = json.contents.translated;
      outputDiv.innerText = tText;
    })
    .catch(errorHandler);
}

btntranslate.addEventListener('click', clickHandler);
