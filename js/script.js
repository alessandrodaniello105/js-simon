//ELEMENTS
const containerSimonNumbers = document.querySelector('ul');

// 1. Creo un array che conterrà i numeri generati
const numRandom = [];

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
// let bibi = 0;
// const timerSimon = setInterval(function() {
//   containerSimonNumbers.style.display = "none";
//   bibi++

//   clearInterval(timerSimon);
//   console.log(bibi); 
// }, 500);

let bibi = 0;
setTimeout(function() { 
  containerSimonNumbers.style.display = "none";
  bibi++
  console.log(bibi); 


}, 500);


// const timer

















