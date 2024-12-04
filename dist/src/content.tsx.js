import { SYSTEM_PROMPT } from "/src/constants/prompt.ts.js";
import axios from "/vendor/.vite-deps-axios.js__v--48703a39.js";
async function getAIResponse(prompt2) {
  let apiKey2 = await chrome.storage.local.get("apiKey");
  const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey2.apiKey,
    {
      contents: [
        {
          parts: [
            {
              text: prompt2
            }
          ]
        }
      ],
      model: "models/gemini-1.5-flash-latest"
    }
  );
  const text = response.data.candidates[0]?.content?.parts[0]?.text;
  let solution = JSON.parse(text.replace("```json", "").replace("```", ""));
  console.log(solution);
  console.log(JSON.stringify(response.data));
  return solution;
}
let apiKey = await chrome.storage.local.get("apiKey");
if (apiKey.apiKey == void 0) {
  alert("Please set your API key in the extension settings");
} else {
  let allQuestions = document.querySelectorAll(".geS5n");
  let button = document.createElement("button");
  button.textContent = "Solve All";
  allQuestions[0].append(button);
  button.onclick = async () => {
    solveAllQuestions();
  };
  allQuestions.forEach((question) => {
    let button2 = document.createElement("button");
    button2.textContent = "";
    button2.style.padding = "5px";
    button2.style.margin = "5px";
    button2.style.width = "10px";
    button2.style.height = "10px";
    button2.style.color = "white";
    question.append(button2);
    button2.onclick = async () => {
      navigator.clipboard.writeText(question.innerText.replace("1 point", "Options:"));
      let options = question.querySelectorAll(".AB7Lab");
      let prompt2 = SYSTEM_PROMPT.replace("{{Question}}", question.innerText).replace("1 point", "Options:").replace("*", " ");
      prompt2 = prompt2.replace("*", "");
      try {
        const solution = getAIResponse(prompt2).then((solution2) => {
          if (solution2.correctOption != -1) {
            options[solution2.correctOption - 1].click();
          } else {
            alert("AI was not able to solve the question but try" + solution2.correctOption);
          }
        });
        console.log(prompt2);
      } catch (e) {
        alert("some error occured with question" + question.innerText);
        console.log(e);
      }
      ;
    };
  });
}
async function solveAllQuestions() {
  let allQuestions = document.querySelectorAll(".geS5n");
  for (let question of allQuestions) {
    try {
      let options = question.querySelectorAll(".AB7Lab");
      if (options.length > 2) {
        let prompt2 = SYSTEM_PROMPT.replace("{{Question}}", question.innerText).replace("1 point", "Options:").replace("*", " ");
        prompt2 = prompt2.replace("*", "");
        const solution = await getAIResponse(prompt2);
        if (solution.correctOption != -1) {
          options[solution.correctOption - 1].click();
        } else {
          alert("AI was not able to solve the question ");
        }
      }
      ;
      console.log(prompt);
    } catch (e) {
      alert("some error occured with question" + question.innerText);
      console.log(e);
    }
  }
}
;
