import { SYSTEM_PROMPT } from "./constants/prompt";
import axios from "axios";
async function getAIResponse(prompt: string) {
  let apiKey = await chrome.storage.local.get("apiKey");
  console.log(apiKey);
  const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey.apiKey,
    {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      model: "models/gemini-1.5-flash-latest",
    },
  );


  const text = response.data.candidates[0]?.content?.parts[0]?.text;
  let solution = JSON.parse(text.replace("```json", "").replace("```", ""))
  console.log(solution);
  console.log(JSON.stringify(response.data));

  return solution;
}

let allQuestions: any = document.querySelectorAll(".geS5n");
console.log(allQuestions);

let button = document.createElement("button");
button.textContent = "Solve All";
allQuestions[0].append(button);
button.onclick = async () => {
  solveAllQuestions();
};
allQuestions.forEach((question: any) => {
  let button = document.createElement("button");
  button.textContent = "";
  button.style.padding = "5px";
  button.style.margin = "5px";
  button.style.width = "10px";
  button.style.height = "10px";
  button.style.color = "white";
  question.append(button);
  button.onclick = async () => {
    navigator.clipboard.writeText(question.innerText.replace("1 point", "Options:"));
    let options = question.querySelectorAll(".AB7Lab");
    let prompt = SYSTEM_PROMPT.replace("{{Question}}", question.innerText).replace("1 point", "Options:").replace("*", " ");
    prompt = prompt.replace("*", "")
    const solution = getAIResponse(prompt).then((solution) => {
      if (solution.correctOption != -1) {
        options[solution.correctOption - 1].click();
      } else {
        alert("AI was not able to solve the question but try" + solution.correctOption);
      }
    });
    console.log(prompt);
  };
});

async function solveAllQuestions() {

  let allQuestions: any = document.querySelectorAll(".geS5n");
  for (let question of allQuestions) {
    let options = question.querySelectorAll(".AB7Lab");
    let prompt = SYSTEM_PROMPT.replace("{{Question}}", question.innerText).replace("1 point", "Options:").replace("*", " ");
    prompt = prompt.replace("*", "")
    const solution = await getAIResponse(prompt)
    if (solution.correctOption != -1 && solution.correctOption > 4) {
      options[solution.correctOption - 1].click();
    } else {
      alert("AI was not able to solve the question but try" + solution.correctOption);
    }
    console.log(prompt);
  };
};
