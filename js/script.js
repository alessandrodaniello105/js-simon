//ELEMENTS
const containerSimonNumbers = document.querySelector('ul');
// const outputUserNumbers     = document.querySelector('p');
const outputUserNumbers     = document.querySelector('.user-numbers-container');
const userNumbersList       = document.getElementById('user-numbers');
const finalMessage          = 'I numeri che hai indovinato sono:';
const mainWrapper           = document.querySelector('.main-wrapper');

// 1. Creo un array che conterrà i numeri generati
const numRandom = [];

// 7. Creo un array per i numeri scritti dall'utente
const numUser = [];

// 9. Creo una variabile messaggio e un counter per quantificare i numeri indovinati
let message;
let counterRightNumbers = 0;

const numTarget = 5;
let counterNum = 0;




// 12. Creo un pulsante di avvio gioco
const buttonStart = document.createElement('button');

buttonStart.innerText = 'Start Game';
buttonStart.classList.add('position-absolute');
buttonStart.style.top = '100px';
buttonStart.style.left = '50%';
buttonStart.style.transform = 'translateX(-50%)';

mainWrapper.append(buttonStart);


buttonStart.addEventListener('click', function() {
  this.classList.add('d-none');
  simonNumberGenerator();

  // 5. Creo un timer di 5s che farà scomparire il contenitore

  setTimeout(function() {
    
    containerSimonNumbers.style.display = "none";

  }, 5000);


  // 6. Creo un timer di 5.1s che farà comparire il prompt
  setTimeout(function() {

    promptNumbers();

    checkUserNumbers();
  
    printResults();
  }, 5100);


});




// FUNCTIONS

// 2. Creo una funzione di generazione randomica di 5 numeri...
const randomGen = () => Math.ceil(Math.random() * 10);

function simonNumberGenerator() {

  while (counterNum < numTarget ) {

    let simonNum = randomGen();
    
    // 2. ...con verifica
    verifyRandomNumber(simonNum);
      
  };
  
  
  // 4. Stampo i numeri in pagina in un contenitore
  printer();


};


function verifyRandomNumber(num) {

  if (numRandom.includes(num)) {

    num = randomGen();

  } else {
    counterNum++;

    // 3. Pusho i numeri random (da ricordare) nell'array
    numRandom.push(num);

  }

};

function printer() {

  let counter = 0;

  for (let i = 0; i < numRandom.length; i++) {
    counter++
    containerSimonNumbers.innerHTML += `
    <li class = "list-group-item">${numRandom[i]}</li> 
    `;
  };

};


// 8. Creo un funzione che con un prompt chiede all'utente di inserire i 5 numeri da ricordare, uno alla volta
function promptNumbers() {

  let counterIteration = 0;

  while (counterIteration < numTarget) {
    
    counterIteration++;

    let input = parseInt(prompt('Inserisci SOLO uno dei numeri che ricordi'));


    // 10. Creo una funzione che ad ogni prompt verifica se il numero inserito è presente nei numeri random
    //      se sì lo includo nel messaggio e aumento il counter

    if (numRandom.includes(input) && (!numUser.includes(input))) {

      counterRightNumbers++;

      numUser.push(input);

    }

  };
  
}


function checkUserNumbers() {

  for (let userEl = 0; userEl < numUser.length; userEl++){

    userNum = numUser[userEl];

    printRightNumber(userNum);

  };

};


// 11. Stampo il messaggio (il totale di numeri indovinati e quali) in pagina
function printRightNumber(element) {

  outputUserNumbers.classList.remove('d-none');
  outputUserNumbers.classList.add('d-flex', 'flex-column');

  let li = document.createElement('li');

  li.className = 'list-group-item';

  li.innerHTML = element;

  userNumbersList.append(li);

};


function printResults() {

  let resultsMessage = document.createElement('p');

  resultsMessage.classList.add('fs-5', 'fw-bold', 'py-3');

  message = `Hai ricordato ${counterRightNumbers} su ${numTarget}`;

  resultsMessage.innerHTML = message;

  outputUserNumbers.append(resultsMessage);
};