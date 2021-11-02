// SELECTING AN ELEMENT

const list = document.querySelector('#players');
console.log(players);

// APPENDING CONTENT

list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

// const list = document.querySelector('#fifa-wins');
// console.log(list);

// list.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");

// SELECT VALUE OF INPUT FIELD

const email = document.querySelector('#email');
console.log(email.value);

// SELECT INNER TEXT/HTML

const link = document.querySelector('#home');
console.log(link.innerText);
console.log(link.innerHTML);

// DATASET

const boris = document.querySelector('#user');
console.log(boris.dataset.githubNickname);

// ADD EVENT LISTENER

// const romain = document.querySelector('#romain');

// romain.addEventListener('click', (event) => {
//   event.currentTarget.classList.toggle('img-circle');
// });

const portraits = document.querySelectorAll('.portrait');

portraits.forEach((portrait) => {
  portrait.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-circle');
  });
});
