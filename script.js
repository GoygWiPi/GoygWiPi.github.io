
function fillEmojiLine() {

    const emojiLine = document.getElementById('emoji-line');
    const emoji = '😸';

    emojiLine.textContent = emoji;
    const emojiWidth = emojiLine.getBoundingClientRect().width;

    const windowWidth = window.innerWidth;
    const count = Math.floor(windowWidth / emojiWidth);

    emojiLine.textContent = emoji.repeat(count);
}

fillEmojiLine();
window.addEventListener('resize', fillEmojiLine);
