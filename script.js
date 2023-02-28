'use strict';

const modal = document.querySelector('.modal');
const para = modal.querySelector('.modal-content p');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
//need to put All in order to select all the buttons. Without the "All", will only select the first button
const openModal = document.querySelector('.buttons');

openModal.addEventListener('click', handleClick);
closeModal.addEventListener('click', handleClose);

// Content
const modalContent = {
  one: 'This is the first modal content',
  two: 'This is the second modal content',
  three: 'This is the third modal content',
};

// When the button container catches an event...
function handleClick(e) {
  // We check that it's from a button...
  if (e.target.matches('.open-modal')) {
    // ...destructure the id from the button's dataset...
    const { id } = e.target.dataset;

    // ...use it to get the content from the object...
    const content = modalContent[id];

    // ...and add the content to the paragraph element
    para.textContent = content;

    // Finally we show the modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
}

function handleClose() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//remove "hidden" class to show the modal when clicked
// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

//add "hidden" class to close the modal when clicked
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

//for loop - open Modal

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

//function for close modal
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  //click escape button
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    handleClose();
  }
});
