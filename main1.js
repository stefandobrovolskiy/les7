const readline = require('readline');
const { SliceArr } = require('./main3.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

async function main() {
  const answer = await askQuestion('Бажаєте ввести власний масив (y/n)? ');
  
  if (answer.trim().toLowerCase() === 'n') {
    const randomArray = generateRandomArray(10);
    console.log("Згенерований випадковий масив:", randomArray);
    const sortedArray = SliceArr(randomArray);
    console.log("Відсортований масив:", sortedArray);
  } else {
    const input = await askQuestion('Введіть числа, розділені пробілом: ');
    const unsortedArray = input.split(' ').map(Number);
    console.log('Згенерований вами масив', unsortedArray)
    const sortedArray = SliceArr(unsortedArray);
    console.log("Відсортований масив:", sortedArray);
  }

  rl.close();
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

main();
