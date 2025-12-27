const container = document.getElementById("sticky-notes");
const topicInput = document.getElementById("topic-input");
const textArea = document.getElementById("text-area");
const template = document.getElementById("template");
const addBtn = document.getElementById("add-btn");

let count = 0;

const handleClick = () => {
  let topic = topicInput.value.trim();
  let text = textArea.value.trim();
  if (!topic && !text) return;
  count++;
  const clone = template.content.cloneNode(true);
  clone.querySelector(".window").style.top = `${count * 5}px`;
  clone.querySelector(".window").style.left = `${(count * 5) + 310}px`;
  clone.querySelector(".topic").innerText = topic;
  clone.querySelector(".text").innerText = text;
  clone.querySelector(".delete-btn").addEventListener("click", (e) => {
    e.target.closest(".window").remove();
  });
  container.appendChild(clone);
};

addBtn.addEventListener("click", handleClick);
