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
        if (item.answer.replace(/(\r\n|\n|\r)/gm, "").trim() == "" || item.question.replace(/(\r\n|\n|\r)/gm, "").trim() == "") {
            console.log(`[${index + 1}] item.answer: ${item.answer}`);
            console.log(`[${index + 1}] item.question: ${item.question}`);
            return
        } 
        let div = document.createElement("a");
        div.href = `./detailsQuestion${index + 1}.html`;
        div.classList.add("textQuestion");
        div.textContent = `${index + 1}) ${item.question}`;

        list.appendChild(div);
    })
);
