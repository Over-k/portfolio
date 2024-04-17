import { COMMANDS } from "../config";
const scrollDiv = document.querySelectorAll("#terminal div div")[6];
const typingText = document.querySelector(".typing-text");
const outputText = document.querySelector(".output");
const history = [];
let histpos = 0;
const possibleKeys = "qwertyuiopasdfghjklzxcvbnm 1234567890";
const CMDs = COMMANDS.map(({ name }) => name);
const help = COMMANDS.map(
  ({ name, desc }) => `<b>${name}: </b>${desc}<br>`
).join("");

function output(value) {
  let answer = `<b>${value}</b>: command not found`;
  if (value === "clear") {
    outputText.innerHTML = "";
    return;
  }
  if (value === "help") {
    answer = help;
  }
  if (CMDs.includes(value)) {
    answer = COMMANDS.find((cmd) => cmd.name === value).content;
  }

  const div = document.createElement("div");
  const line = document.createElement("span");
  line.classList.add("mr-2", "keyword");
  line.style.color = "var(--color-pretty-syntax-keyword)";
  line.textContent = "root@aitmiloud ~ $";

  const prompt = document.createElement("span");
  prompt.classList.add("mr-2");
  prompt.textContent = value;

  const div1 = document.createElement("div");
  const result = document.createElement("span");
  result.classList.add("mr-2");
  result.innerHTML = answer;

  div.appendChild(line);
  div.appendChild(prompt);
  outputText.appendChild(div);
  div1.appendChild(result);
  outputText.appendChild(div1);
}

function historyHandler(key) {
  if (history.length) {
    if (key === "ArrowUp") {
      histpos = Math.max(histpos - 1, 0);
    } else if (key === "ArrowDown") {
      histpos = Math.min(histpos + 1, history.length);
    }
    typingText.textContent = history[histpos] || "";
  }
}

document.addEventListener("keydown", ({ key, keyCode }) => {
  if (possibleKeys.includes(key.toLowerCase())) {
    typingText.textContent += key;
    return;
  }
  if (key === "Backspace" && typingText.textContent !== "") {
    typingText.textContent = typingText.textContent.slice(0, -1);
    return;
  }
  if (key === "Enter" && typingText.textContent !== "") {
    output(typingText.textContent);
    history.push(typingText.textContent);
    typingText.textContent = "";
    scrollDiv.scrollTo(0, scrollDiv.offsetHeight);
  }
  if (key === "ArrowUp" || key === "ArrowDown") {
    historyHandler(key);
  }
});
