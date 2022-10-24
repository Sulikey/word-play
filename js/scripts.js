// Business Logic
function newArray(array) {
  let newArray = [];
  array.forEach(function (string) {
    if (string.length >= 3) {
      newArray.push(string);
    }
  });
  return newArray;
}

function swap(array) {
  let newArray = [];
  array.forEach(function (element) {
    newArray.unshift(element);
  });
  return newArray;
}

// User Interface Logic
addEventListener('load' ,function() {
  const form = document.querySelector('form');
  form.addEventListener("submit" , handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const sentence = document.getElementById("sentence").value;

  const sentenceArray = sentence.split(' ');
  const newSentence = newArray(sentenceArray);
  
  const newH1 = document.createElement('h1');
  const body = document.querySelector('body');
  newH1.append(swap(newSentence));
  body.append(newH1);
}


