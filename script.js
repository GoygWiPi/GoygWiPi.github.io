
function fillEmojiLine() {

    const line = document.getElementById("emoji-line");
    line.innerHTML = "😸";
    const emojiWidth = line.scrollWidth;
    const count = Math.ceil(window.innerWidth / emojiWidth);
    line.innerHTML = "😸".repeat(count);
}

window.addEventListener("load", fillEmojiLine);

window.addEventListener("resize", fillEmojiLine);
