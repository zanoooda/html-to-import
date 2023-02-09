const titleQuestion = document.getElementById("titleQuestion");
const answer = document.getElementById("answer");
const titleAnswers = document.getElementById("titleAnswer");

let url = new URL(location.href);
let detailsTitle = JSON.parse(url.searchParams.get("data"));
let indexObj = detailsTitle - 1;

const getDetailsTitle = () => {
    let div = document.createElement("h1");
    div.classList.add("titleQuestion");
    div.textContent = `${array[0][indexObj].question}`;
    titleQuestion.appendChild(div);
};
let array = [];
const getQuestion = async () => {
    let arrayListQuestion = await fetch("TV_FAQ_eng.json")
        .then((res) => res.json())
        .then((data) => data);
    array.push(arrayListQuestion);
};
const getAnswer = () => {
    const detailsQuestion = array[0][indexObj];
    const titleAnswer = detailsQuestion.answer.split(".")[0];
    const indexDot = detailsQuestion.answer.indexOf(".");
    let subAnswer = detailsQuestion.answer.slice(indexDot + 1);

    let numberBlack = document.createElement("p");
    let liTitle = document.createElement("h1");
    let subAnswerP = document.createElement("li");

    numberBlack.classList.add("numberBlack");
    numberBlack.textContent = ` `;

    liTitle.classList.add("listQuestionTitle");
    liTitle.innerText = `${titleAnswer}.`;
    subAnswerP.classList.add("subAnswerP");
    subAnswerP.innerText = `${subAnswer}`;
    titleAnswers.appendChild(numberBlack);
    titleAnswers.appendChild(liTitle);
    answer.appendChild(subAnswerP);
};
getQuestion().then(() => {
    getDetailsTitle();
    getAnswer();
});
