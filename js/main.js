const form = document.forms["peopleForm"];
const nameValue = form["name"];
const cityValue = form["city"];
const codeValue = form["post-code"];
const feedback = document.querySelector(".results");

function displayCurrentState() {
  console.log(`aktualny stan formularza ${Input.value}`);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const submitCondition =
    nameValue.value.length > 3 &&
    cityValue.value.length > 3 &&
    codeValue.value.length === 6;

  if (submitCondition) {
    console.log(nameValue.value, cityValue.value, codeValue.value);
  } else {
    alert(`Uzupełnij forularz`);
  }
});

nameValue.addEventListener("input", function () {
  if (nameValue.value.length < 3) {
    console.log(`Pole niepoprawne`);
    nameValue.classList.add("red");
  } else {
    console.log(`Pole poprawne`);
    nameValue.classList.remove("red");
  }
});
cityValue.addEventListener("input", function () {
  if (cityValue.value.length < 3) {
    console.log(`Pole niepoprawne`);
  } else {
    console.log(`Pole poprawne`);
  }
});
codeValue.addEventListener("input", function () {
  if (codeValue.value.length != 6) {
    console.log(`Pole niepoprawne`);
  } else {
    console.log(`Pole poprawne`);
  }
});
