const quizData = [
    {
        question: 'How old is my dog?',
        a: 'I do not have a dog.',
        b: '5',
        c: '10',
        d: '3',
        correct: 'a'
    }, {
        question: 'What is the most commonly used programing language?',
        a: 'Java',
        b: 'c++',
        c: 'javaScript',
        d: 'English',
        correct: 'c'
    }, {
        question: 'If I have 10 ice cubes and you have 3 apples, how many pancakes will fit on the roof?',
        a: '13',
        b: 'Nobody likes pancakes.',
        c: '420',
        d: 'Purple, because aliens wear hats.',
        correct: 'd'
    }, {
        question: 'What biome does a chupacabra live in?',
        a: 'desert',
        b: 'swamp',
        c: 'meowtains',
        d: 'chupacabras are a diverse species that have adapted to many biomes',
        correct: 'd'
    }, {
        question: 'How long did it take me to write this code?',
        a: '1 hour',
        b: '2 days',
        c: '2 hours',
        d: '4 hours',
        correct: 'b'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");


const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;


}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            console.log(score);
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();

        } else {
            document.getElementById("quiz").id = "newQuiz"

            quiz.innerHTML = `<h2>Congratulations! You answered ${score} out of ${quizData.length} correctly.</h2> <button id="newButton" onclick="location.reload()">Reload</button>`;
        }
    }
});
