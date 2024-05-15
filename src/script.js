document.addEventListener("DOMContentLoaded", function () {
  const emojis = ["😀", "😂", "😍", "😢", "😡"];
  const emojiContainer = document.getElementById("emojiContainer");

  emojis.forEach((emoji, index) => {
    const emojiWrapper = document.createElement("div");
    emojiWrapper.className = "emojiWrapper";
    emojiWrapper.style.display = "inline-block";
    emojiWrapper.style.textAlign = "center";

    const emojiElement = document.createElement("div");
    emojiElement.className = "emoji";
    emojiElement.textContent = emoji;
    emojiElement.dataset.index = index;
    emojiWrapper.appendChild(emojiElement);

    const counterElement = document.createElement("div");
    counterElement.className = "counter";
    counterElement.textContent = "0";
    emojiWrapper.appendChild(counterElement);

    emojiContainer.appendChild(emojiWrapper);

    emojiElement.addEventListener("click", function () {
      const currentIndex = this.dataset.index;
      const counter = emojiContainer.querySelectorAll(".counter")[currentIndex];
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  });
});
