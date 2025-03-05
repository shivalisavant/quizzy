let scores = { bunny: 0, cat: 0, panda: 0 };

function addScore(animal) {
    scores[animal]++;
    showResult();
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    let result = document.getElementById('result');
    let animalText = document.getElementById('animal');
    result.style.display = 'block';

    let maxScore = Math.max(scores.bunny, scores.cat, scores.panda);
    if (maxScore === scores.bunny) {
        animalText.innerText = 'You’re a Bunny! 🐰 So hoppy and sweet!';
    } else if (maxScore === scores.cat) {
        animalText.innerText = 'You’re a Cat! 😻 Purrfectly cute!';
    } else {
        animalText.innerText = 'You’re a Panda! 🐼 Fluffy and chill!';
    }
}

function resetQuiz() {
    scores = { bunny: 0, cat: 0, panda: 0 };
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}