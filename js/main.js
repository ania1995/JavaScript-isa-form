//odwołanie po "id" formularza
const form = document.querySelector("#peopleForm");

//odwołanie po "name" formularza
const form2 = document.forms["peopleForm"];
//odwołanie po "name" formularza - zadziała o ile "name" jest jednym słowem
const form3 = document.forms.peopleForm;

//odwołanie po indekxie formularza w HTMLColeection
//const form3 = document.forms[0];

//wszystkie powyższe równe (prawie)

//form[0]
//form['jakiś name']

const Input = document.querySelector("#idInput");

function displayCurrentState() {
  console.log(`aktualny stan formularza ${Input.value}`);
}
