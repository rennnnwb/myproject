const input = document.getElementById('text');
const submit = document.getElementById('submit');
const question = document.getElementById('questions');
let firstNum;
let secondNum;
let scoreBoard = document.getElementById('score');
question.textContent = `What is ${firstNum} multiply by ${secondNum}`;
let score = 0;


function start() {
    firstNum = Math.floor((Math.random() * 10) + 1)
    secondNum = Math.floor((Math.random() * 10) + 1)
    question.textContent = `What is ${firstNum} multiply by ${secondNum}`
    input.value = "";

}
start()

submit.addEventListener('click', () => {

    let compute = firstNum * secondNum;

    if (Number(input.value) === compute) {
        score++
        scoreBoard.textContent = `Score: ${score}`
        document.getElementById('reward').textContent = "Good Job, Eshua"
        start()
    } else {
        document.getElementById('reward').textContent = "Try again, Eshua"
    }



})










