const modal = document.querySelector('#my-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');

// Events
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
