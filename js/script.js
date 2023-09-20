//ELEMENTS
const containerSimonNumbers = document.querySelector('ul');
const outputUserNumbers     = document.querySelector('p');
const finalMessage          = 'I numeri che hai indovinato sono:'

// 1. Creo un array che conterrà i numeri generati
const numRandom = [];

const numUser = [];

// 2. Creo una funzione di generazione randomica di 5 numeri...
const randomGen = () => Math.ceil(Math.random() * 10);

const numTarget = 5;
let counterNum = 0;

while (counterNum < numTarget ) {

  let simonNum = randomGen();
  
  // 2. ...con verifica
  verifyRandomNumber(simonNum);

  // printer(num);

  
};

// 4. Stampo i numeri in pagina in un contenitore
printer2();


function verifyRandomNumber(num) {

  if (numRandom.includes(num)) {

    num = randomGen();

  } else {
    counterNum++;

    // 3. Pusho i numeri random (da ricordare) nell'array
    numRandom.push(num);

  }

};

// function printer(num) {
//   containerSimonNumbers.innerHTML += ' ' + num;
// };

function printer2() {

  let counter = 0;

  for (let i = 0; i < numRandom.length; i++) {
    counter++
    containerSimonNumbers.innerHTML += `
    <li class = "list-group-item">${numRandom[i]}</li> 
    `;
  };

};


// 5. Creo un timer di 5s che farà scomparire il contenitore
setTimeout(startGameForNow, 2500); //2.5s for testing


function startGameForNow() {

  containerSimonNumbers.style.display = "none";

  promptNumbers();

  checkUserNumbers();

};





function promptNumbers() {

  let userChances = 5;
  let counterIteration = 0;

  while (counterIteration < userChances) {
    
    counterIteration++;

    let input = parseInt(prompt('Inserisci SOLO uno dei numeri che ricordi'));
    
    if (numRandom.includes(input) && (!numUser.includes(input))) {
      
      numUser.push(input);

    }

    
    // printerResults(input, counterIteration);
    
  };
  
  // console.log(numUser);
  
}

function checkUserNumbers() {

  for (let userEl = 0; userEl < numUser.length; userEl++){

    userNum = numUser[userEl];
    console.log(userNum);
  };

};




// function printerResults(value, index) {
//   numRandom.includes(value) ? outputUserNumbers.innerHTML = ` <div>${numRandom[index]}</div> ` : outputUserNumbers.innerHTML += '';
// };


// let bibi = 0;
// const timerSimon = setInterval(function() {
//   containerSimonNumbers.style.display = "none";
//   bibi++

//   clearInterval(timerSimon);
//   console.log(bibi); 
// }, 500);


















