// 1. Creo un array che conterrà i numeri generati
const numRandom = [];

// 2. Creo una funzione di generazione randomica di 5 numeri...
const randomGen = () => Math.ceil(Math.random() * 10);

const numTarget = 5;
let counterNum = 0;

while (counterNum < numTarget ) {

  num = randomGen();
  
  // 2. ...con verifica
  verifyRandomNumber();

};

console.log(numRandom);

function verifyRandomNumber() {

  if (numRandom.includes(num)) {

    num = randomGen();

  } else {
    counterNum++;

    numRandom.push(num);

  }
  
}