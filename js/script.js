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

console.log(numRandom);

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