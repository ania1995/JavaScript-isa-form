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

const buttonValidate = {
  0: false,
  1: false,
  2: false,
  3: false,
};

for (let i = 0; i < 4; i++) {
  form[i].addEventListener("input", function () {
    if (validateCondition[i](form[i].value)) {
      buttonValidate[i] = true;
      console.log(`Pole poprawne`);
      form[i].classList.remove("red");
      if (
        buttonValidate[0] &&
        buttonValidate[1] &&
        buttonValidate[2] &&
        buttonValidate[3]
      ) {
        buttonSubmit.disabled = false;
      } else {
        buttonSubmit.disabled = true;
      }
    } else {
      buttonValidate[i] = false;
      console.log(`Pole niepoprawne`);
      form[i].classList.add("red");
      if (
        !buttonValidate[0] ||
        !buttonValidate[1] ||
        !buttonValidate[2] ||
        !buttonValidate[3]
      ) {
        buttonSubmit.disabled = true;
      } else {
        buttonSubmit.disabled = false;
      }
    }
  });
}
