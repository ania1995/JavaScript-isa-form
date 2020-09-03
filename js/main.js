const form = document.forms["peopleForm"];
const nameValue = form["name"];
const cityValue = form["city"];
const codeValue = form["post-code"];
const emailValue = form["email"];
const buttonSubmit = form["submit"];
const feedback = document.querySelector(".results");
const regExPostCode = /\d{2}-\d{3}/;
const regExEmail = /^\S+@\S+\.\S+$/;
const titleName = document.querySelector(".title");
const slider = document.querySelector(".slider");

function displayCurrentState() {
  console.log(`aktualny stan formularza ${Input.value}`);
}

setTimeout(function () {
  titleName.classList.remove("nonshow");
  titleName.classList.add("show");
}, 3000);

let activeSlider = 0;

setInterval(function () {
  if (activeSlider < slider.children.length - 1) {
    slider.children[activeSlider].classList.remove("active");
    slider.children[activeSlider + 1].classList.add("active");
    activeSlider++;
  } else {
    slider.children[activeSlider].classList.remove("active");
    slider.children[0].classList.add("active");
    activeSlider = 0;
  }
}, 2000);

// setTimeout( =>{
// titleName.classList.remove("nonshow");
// titleName.classList.add("show");
//}, 3000);

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
  setTimeout(function () {
    feedback.innerHTML += `<div>${nameValue.value} - ${cityValue.value} - ${codeValue.value} - ${emailValue.value}</div>`;
    for (let i = 0; i < 4; i++) {
      window.localStorage.removeItem(form[i].name);
      form[i].value = "";
    }
  }, 3000);

  window.localStorage.setItem("results", feedback.innerHTML);
});

//FAQ

// const faqContainer = document.querySelector(".faq");
// faqContainer.innerHTML = FAQLs;
const FAQLs = window.localStorage.getItem("faqContainer");
const faqItems = document.querySelectorAll(".faqItem");
const faqItem = document.querySelector(".faqItem");

faqItem.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  console.dir(event);
});

for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", (event) => {
    if (faqItems[i].querySelector("p").classList.contains("nondisplay")) {
      faqItems[i].querySelector("p").classList.remove("nondisplay");
      faqItems[i].querySelector("p").classList.add("display");
    } else {
      faqItems[i].querySelector("p").classList.add("nondisplay");
      faqItems[i].querySelector("p").classList.remove("display");
    }
    //window.localStorage.setItem("faqContainer", faqContainer.innerHTML);
  });
}
