function nextScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen' + num).classList.add('active');
}

const messages = [
    "You’re cute (objectively true)",
    "You tolerate me (rare skill)",
    "You laugh at my bad jokes (concerning)",
    "You make everything better",
    "You’re my favorite person ever 💖",
    "You’re literally gorgeous"
];

function randomLove() {
    const text = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("loveText").innerText = text;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value;

    if (answer == 0) { // 🔴 CHANGE THIS TO YOUR REAL ANSWER
        nextScreen(5);
    } else {
        document.getElementById("response").innerText = "Wrong. Try again or I cry 😭";
    }
}

function finalMessage() {
    document.getElementById("finalText").innerText = 
        "You’re the best thing that’s ever happened to me, baby 💖";
}