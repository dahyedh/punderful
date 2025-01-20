const MAX_JOKE_LENGTH = 120;
const jokeBoard = document.querySelector("#joke-board");
const readyBtn = document.querySelector("#ready-btn");
const readyDiv = document.querySelector(".ready-btn-wrapper");
const emojiBtns = document.querySelector(".emoji-btns");
export const booBtn = document.querySelector("#boo-btn");
export const lolBtn = document.querySelector("#lol-btn");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    return res.data.joke;
  } catch (e) {
    return "Something went wrong. Please try again!";
  }
};

const addNewJoke = async () => {
  let newJokeTxt = await getDadJoke();
  while (newJokeTxt.length > MAX_JOKE_LENGTH) {
    newJokeTxt = await getDadJoke();
  }
  jokeBoard.innerText = newJokeTxt;
};

const loadFirstJoke = async () => {
  await addNewJoke();
  readyBtn.classList.add("unavailable");
  readyDiv.classList.add("unavailable");
  emojiBtns.classList.remove("unavailable");
  jokeBoard.classList.remove("first-page");
};

const onLolBtn = () => {
  addNewJoke();
};

const onBooBtn = () => {
  addNewJoke();
};

readyBtn.addEventListener("click", loadFirstJoke);
booBtn.addEventListener("click", onBooBtn);
lolBtn.addEventListener("click", onLolBtn);
