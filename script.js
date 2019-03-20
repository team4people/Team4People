const modal = document.querySelector('#my-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');
const createEvent = document.getElementById('create');

function showModal(){
  document.getElementById('eventModal').setAttribute('aria-hidden', 'false');
}


function createElements () {

  //Creating New ELements
  var newElContainer = document.createElement('div');
  var newElBody = document.createElement('div');
  var newElHeader = document.createElement('h5');
  var newElText = document.createElement('p');



  //Assign all the bootstrap classes to the ELements

  newElContainer.classList.add('media');
  newElBody.classList.add('media-body');



  //Append Elements Together

  document.getElementById('mainEvent').appendChild(newElContainer);
  newElContainer.appendChild(newElBody);
  newElBody.appendChild(newElHeader);
  newElBody.appendChild(newElText);

  newElHeader.innerText = 'Event Title';
  newElText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  console.log('created new div');
}

// Events
/*
console.log(modalBtn);
modalBtn.addEventListener('click', function () {
  openModal();
});
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
console.log("open Modal");

// Open
function openModal() {
  modal.style.display = 'block';
  console.log("openModal");
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
*/
