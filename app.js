// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    //   creating element
    const element = document.createElement("article");
    // adding class to the element
    element.classList.add("grocery-item");
    // creating the attribute
    const attr = document.createAttribute("data-id");
    // assigining value to the attribute
    attr.value = id;
    // setting attribute to the element
    element.setAttributeNode(attr);
    // updating inner Html
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="edit-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    // append child
    list.appendChild(element);
    // add class list to the child
    list.classList.add("show-container");
    displayAlert("Item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add to local storage
    addLocalStorage(id, value);
    // set back to degault
    setBackToDefault();
  } else if (value && !editFlag) {
    displayAlert("Item edited Successfully", "success");
  } else {
    displayAlert("Invalid input, Try again", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {}

// set back to degault
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addLocalStorage(id, value) {
  console.log("added to local storage");
}
// ****** SETUP ITEMS **********
