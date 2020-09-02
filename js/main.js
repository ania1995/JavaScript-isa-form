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
  console.log(`${nameValue.value} ${cityValue.value} ${codeValue.value}`);
  //document.write(`${nameValue.value} ${cityValue.value} ${codeValue.value}`);

  feedback.innerHTML += `<div><p>${nameValue.value}</p> <p> ${cityValue.value}</p><p> ${codeValue.value}</p></div>`;
});
