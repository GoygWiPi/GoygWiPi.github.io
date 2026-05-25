
function fillEmojiLine() {

    const line = document.getElementById("emoji-line");
    
    const temp = document.createElement("span");
    temp.style.visibility = "hidden";
    temp.style.position = "absolute";
    temp.textContent = "😸";
    document.body.appendChild(temp);
    const emojiWidth = temp.offsetWidth;
    document.body.removeChild(temp);

    const count = Math.ceil(window.innerWidth / emojiWidth);
    line.innerHTML = "😸".repeat(count);
}

window.addEventListener("load", fillEmojiLine);

window.addEventListener("resize", fillEmojiLine);
