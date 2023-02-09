const list = document.getElementById("list");

let array = [];
const getQuestion = async () => {
    let arrayListQuestion = await fetch("TV_FAQ_eng.json")
        .then((res) => res.json())
        .then((data) => data);
    array.push(arrayListQuestion);
};
getQuestion().then(() =>
    array[0].map((item, index) => {
        let div = document.createElement("a");
        div.href = `./detailsQuestion.html?data=${index + 1}`;
        div.classList.add("textQuestion");
        div.textContent = `${index + 1}) ${item.question}`;

        list.appendChild(div);
    })
);
