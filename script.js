
function fillEmojiLine() {

    const line = document.getElementById("emoji-line");

    line.innerHTML = "";

    while (line.scrollWidth < window.innerWidth) {

        line.innerHTML += "😸";
    }

}

window.addEventListener("load", fillEmojiLine);

window.addEventListener("resize", fillEmojiLine);
