const fs = require("fs");

var TV_FAQ_eng = require("./TV_FAQ_eng.json");

TV_FAQ_eng.forEach((item, index) => {
    console.log(item.question);
    console.log(item.answer);

    const titleAnswer = item.answer.split(".")[0];
    const indexDot = item.answer.indexOf(".");
    let subAnswer = item.answer.slice(indexDot + 1);

    html = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/details.css">

    <title>Document</title>
</head>
<body>
   <div class="content" id="titleQuestion">
       <h1 class="titleQuestion">${item.question}</h1>
    </div>
   <div class="answer" id="answer">
       <div class="titleAnswer" id="titleAnswer">
           <p class="numberBlack"> </p>
           <h1 class="listQuestionTitle">${titleAnswer.replace(new RegExp("\n", 'g'), "<br />")}</h1>
       </div>
       <li class="subAnswerP">
           ${subAnswer.replace(new RegExp("\n", 'g'), "<br />")}
       </li>
   </div>
</script>
</body>
</html>
`;
    fs.writeFileSync(`./detailsQuestion${index + 1}.html`, html);
});
