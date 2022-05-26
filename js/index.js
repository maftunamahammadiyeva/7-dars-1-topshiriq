const elForm = document.querySelector (".form");
const elFormInput = document.querySelector (".form__input");
const elResult = document.querySelector (".result");

elForm.addEventListener ('submit', function (evt) {
  evt.preventDefault()
  const inputValue = elFormInput.value

  if (inputValue%3 ===0) {
    elResult.textContent= "Fizz"
  } else if (inputValue%5 ===0){
    elResult.textContent = "Buzz"
  }  else {
    elResult.textContent= "Fizz Buzz"
  }
})