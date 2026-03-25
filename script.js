let score = 0;
let correctAnswer;
let a, b, c;

function generateQuestion() {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 10) + 1;

    correctAnswer = a + (b * c);

    document.getElementById("question").innerHTML =
        `${a} + (<span style="color:red">${b} × ${c}</span>)`;

    let options = [
        correctAnswer,
        a * (b + c),
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

    document.getElementById("result").innerText = "";
    document.getElementById("explanation").innerText = "";
}

function checkAnswer(selected) {
    let result = document.getElementById("result");
    let explanation = document.getElementById("explanation");

    let step1 = b * c;
    let final = a + step1;

    if (selected === correctAnswer) {
        result.innerText = "Correct!";
        score++;
    } else {
        result.innerText = "Wrong!";
    }

    explanation.innerText =
        "Step 1: Multiply → " + b + " × " + c + " = " + step1 +
        "\nStep 2: Add → " + a + " + " + step1 + " = " + final;

    document.getElementById("score").innerText = score;
}

function nextQuestion() {
    generateQuestion();
}

generateQuestion();
