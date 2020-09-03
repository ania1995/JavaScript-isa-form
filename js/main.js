const form = document.forms["peopleForm"];
const nameValue = form["name"];
const cityValue = form["city"];
const codeValue = form["post-code"];
const emailValue = form["email"];
const buttonSubmit = form["submit"];
const feedback = document.querySelector(".results");
const regExPostCode = /\d{2}-\d{3}/;
const regExEmail = /^\S+@\S+\.\S+$/;

function displayCurrentState() {
  console.log(`aktualny stan formularza ${Input.value}`);
}

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const submitCondition =
//     nameValue.value.length > 3 &&
//     cityValue.value.length > 3 &&
//     codeValue.value.length === 6;

//   if (submitCondition) {
//     console.log(
//       nameValue.value,
//       cityValue.value,
//       codeValue.value,
//       emailValue.value
//     );
//   } else {
//     alert(`Uzupełnij forularz`);
//   }
// });

// // First Method
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
//     cityValue.classList.add("red");
//   } else {
//     console.log(`Pole poprawne`);
//     cityValue.classList.remove("red");
//   }
// });

// codeValue.addEventListener("input", function () {
//   if (!regExPostCode.test(codeValue.value)) {
//     //dodać (codeValue.value.indexOf('-')!= 2)
//     console.log(`Pole niepoprawne`);
//     codeValue.classList.add("red");
//   } else {
//     console.log(`Pole poprawne`);
//     codeValue.classList.remove("red");
//   }
// });

// emailValue.addEventListener("input", function () {
//   if (!regExEmail.test(emailValue.value)) {
//     //dodać (codeValue.value.indexOf('-')!= 2)
//     console.log(`Pole niepoprawne`);
//     emailValue.classList.add("red");
//   } else {
//     console.log(`Pole poprawne`);
//     emailValue.classList.remove("red");
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

//Explain this below
// function test() {

// }
// var test2 = function(x) { return x }
// var test3 = (x) => {
//     return x;
// }

//Third Method
const validateCondition = {
  0: (value) => value.length > 3,
  1: (value) => value.length > 3,
  2: (value) => regExPostCode.test(value),
  3: (value) => regExEmail.test(value),
};

const resultsLs = window.localStorage.getItem("results");
feedback.innerHTML = resultsLs;

for (let i = 0; i < 4; i++) {
  form[i].addEventListener("input", function () {
    if (validateCondition[i](form[i].value)) {
      window.localStorage.setItem(form[i].name, form[i].value);
      console.log(`Pole poprawne`);
      form[i].classList.remove("red");
    } else {
      console.log(`Pole niepoprawne`);
      form[i].classList.add("red");
    }
  });
}

for (let i = 0; i < 4; i++) {
  form[i].value = window.localStorage.getItem(form[i].name);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  feedback.innerHTML += `<div>${nameValue.value} - ${cityValue.value} - ${codeValue.value} - ${emailValue.value}</div>`;
  window.localStorage.setItem("results", feedback.innerHTML);
  for (let i = 0; i < 4; i++) {
    window.localStorage.removeItem(form[i].name);
    form[i].value = "";
  }
});
