let score = 0;
let correctAnswer;

function generateQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;

    let expression = `${a} + ${b} * ${c}`;
    correctAnswer = a + (b * c);

    document.getElementById("question").innerText = expression;

    let options = [
        correctAnswer,
        a * (b + c), // wrong option
        correctAnswer + 2,
        correctAnswer - 2
    ];

    options.sort(() => Math.random() - 0.5);

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let result = document.getElementById("result");

    if (selected === correctAnswer) {
        result.innerText = "Correct! 🎉";
        score++;
    } else {
        result.innerText = "Wrong ❌";
    }

    document.getElementById("score").innerText = score;
}

function nextQuestion() {
    document.getElementById("result").innerText = "";
    generateQuestion();
}

generateQuestion();
function sendScore() {
    document.getElementById("finalScore").value = score;
}