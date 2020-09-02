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

// First Method

// nameValue.addEventListener("input", function () {
//   if (nameValue.value.length < 3) {
//     console.log(`Pole niepoprawne`);
//     nameValue.classList.add("red");
//   } else {
//     console.log(`Pole poprawne`);
//     nameValue.classList.remove("red");
//   }
// });
// cityValue.addEventListener("input", function () {
//   if (cityValue.value.length < 3) {
//     console.log(`Pole niepoprawne`);
//   } else {
//     console.log(`Pole poprawne`);
//   }
// });

// const regExPostCode = /\d{2}-\d{3}/; //dopisać do poniższego kodu
// codeValue.addEventListener("input", function () {
//   if (codeValue.value.length != 6  ) { //dodać (codeValue.value.indexOf('-')!= 2)
//     console.log(`Pole niepoprawne`);
//   } else {
//     console.log(`Pole poprawne`);
//   }
// });

// Second method
// for (let i = 0; i < 3; i++) {
//   form[i].addEventListener("input", function () {
//     if (form[i].value.length < 3) {
//       console.log(`Pole niepoprawne`);
//       form[i].classList.add("red");
//     } else {
//       console.log(`Pole poprawne`);
//       form[i].classList.remove("red");
//     }
//   });
// }

//Third Method
const validateCondition = {
  0: (value) => value > 3,
  1: (value) => value > 3,
  2: (value) => value === 6,
};

for (let i = 0; i < 3; i++) {
  form[i].addEventListener("input", function () {
    if (validateCondition[i](form[i].value.length)) {
      console.log(`Pole poprawne`);
      form[i].classList.remove("red");
    } else {
      console.log(`Pole niepoprawne`);
      form[i].classList.add("red");
    }
  });
}
