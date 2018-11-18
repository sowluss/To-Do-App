let myForm = document.getElementById('myForm');
let myField = document.getElementById('myField');
let myList = document.getElementById('myList');

myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  createItem(myField.value);
})

function createItem(x) {
  // whatever the users types in goes into here:
  let myHTML = `<div class="lists"><li>${x}</li><div class="close"><i onclick="deleteItem(this)"class="fas fa-times close"></i></div></div>`
  myList.insertAdjacentHTML("beforeend", myHTML);
  myField.value = '';
}

function deleteItem(listToDelete) {
  listToDelete.parentElement.parentElement.remove();
}