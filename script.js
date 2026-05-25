
function fillEmojiLine() {

    const emojiLine = document.getElementById('emoji-line');
    const emoji = '😸';

    const temp = document.createElement('span');
    temp.style.visibility = 'hidden';
    temp.style.position = 'absolute';
    temp.style.whiteSpace = 'nowrap';
    temp.style.fontSize = getComputedStyle(emojiLine).fontSize;
    temp.textContent = emoji;
    document.body.appendChild(temp);
    const emojiWidth = temp.getBoundingClientRect().width;
    document.body.removeChild(temp);

    const count = Math.floor(window.innerWidth / emojiWidth);
    emojiLine.textContent = emoji.repeat(count);
}

fillEmojiLine();
window.addEventListener('resize', fillEmojiLine);
