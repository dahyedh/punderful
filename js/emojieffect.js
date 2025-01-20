import { lolBtn, booBtn } from "./app.js";
const emojiContainer = document.querySelector(".emoji-container");

let currentEmoji = '';

const createLolEmojiRain = () => {
  const emojis = ["😂", "🤣", "😜", "🥳", "😎"];
  if (currentEmoji === 'boo') {clearAllEmojis();}
  createEmojiRain(emojis);
  currentEmoji = 'lol';
};

const createBooEmojiRain = () => {
  const emojis = ["😑", "🙄", "😴", "🤨", "🤔"];
  if (currentEmoji === 'lol') clearAllEmojis();
  createEmojiRain(emojis);
  currentEmoji = 'boo';
};


const createEmojiRain = (emojis, type) => {
  for (let i = 0; i < 20; i++) {

    const wrapper = document.createElement("div");
    wrapper.className = `emoji-wrapper ${type}`;
    wrapper.style.left = Math.random() * 100 + "vw"; 
    wrapper.style.top = Math.random() * -30 + "vh"; 

    const fallDuration = Math.random() * 2 + 2; 
    const scaleDuration = Math.random() * 1.5 + 1;

    wrapper.style.animation = `fallAnimation ${fallDuration}s linear forwards`;

    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.className = "emoji";
    emoji.style.fontSize = Math.random() * 1 + 1 + "rem"; 
    emoji.style.animation = `scaleAnimation ${scaleDuration}s ease-in-out infinite`;

    wrapper.appendChild(emoji);

    wrapper.addEventListener("animationend", () => wrapper.remove());

    emojiContainer.appendChild(wrapper);
  }
};


const clearAllEmojis = () => {
  const existingEmojis = document.querySelectorAll(".emoji-wrapper");
  existingEmojis.forEach((emoji) => emoji.remove());
};

lolBtn.addEventListener("click", createLolEmojiRain);
booBtn.addEventListener("click", createBooEmojiRain);
