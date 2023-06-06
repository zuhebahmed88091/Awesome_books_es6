/* eslint-disable import/prefer-default-export */
// NAVBAR ELEMENTS
const nav = () => {
  const navListBtn = document.getElementById('list-section-btn');
  const navAddBtn = document.getElementById('add-section-btn');
  const navContactBtn = document.getElementById('contact-section-btn');
  // SECTION ELEMENTS
  const listSection = document.querySelector('.list');
  const addSection = document.querySelector('.add');
  const contactSection = document.querySelector('.contact');

  navListBtn.addEventListener('click', () => {
    listSection.classList.remove('hidden');
    addSection.classList.add('hidden');
    contactSection.classList.add('hidden');
  });
  navAddBtn.addEventListener('click', () => {
    listSection.classList.add('hidden');
    addSection.classList.remove('hidden');
    contactSection.classList.add('hidden');
  });
  navContactBtn.addEventListener('click', () => {
    listSection.classList.add('hidden');
    addSection.classList.add('hidden');
    contactSection.classList.remove('hidden');
  });
};

export { nav };
