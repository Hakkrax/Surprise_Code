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
    "You make my day better just by existing (no effort required"
    "You’re illegally adorable, I’m pretty sure"
    "You’re my daily dose of happiness (side effects: smiling like an idiot)”
    "You’re the reason my phone battery dies so fast"
    "You make my brain go ‘aww’ on repeat"
    "You’re my favorite notification"
    "You’re the prettiest problem I’ve ever had"
    "You make me forget what I was saying… constantly"
    "You’re my comfort person (and my chaos too somehow)"
    "You’re the best thing that ever happened to my screen time"
    "You’re dangerously cute, I should be warned before seeing you"
    "You’re my favorite distraction (and I’m not even mad about it)”
    "You make everything feel lighter"
    "You’re my ‘I can’t stop smiling’ person"
    "You’re cuter than anything I can come up with… and that’s saying a lot"
    "You’re my happy place in human form"
    "You make even boring days feel special"
    "You’re the reason I randomly smile at my phone like a weirdo"
    "You’re too pretty to be real, honestly"
    "You’re my favorite everything"
];

let firstClick = true;

function randomLove() {
    const shuffled = messages.sort(()  => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    document.getElementById("loveText").innerHTML =
        "💖 " + selected[0] + "<br>💖 " + selected[1] + "<br>💖 " + selected[2];

    // Change button text after first click
    if (firstClick) {
        document.getElementById("loveBtn").innerText = "Again 😤";
        firstClick = false;
    }
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim();

    if (answer === "20" || answer.toLowerCase() === "20 days") {
        nextScreen(5);
    } else {
        document.getElementById("response").innerText = "Wrong. Try again or I cry 😭";
    }
}

function finalMessage() {
    document.getElementById("finalText").innerText = 
        "You’re the best thing that’s ever happened to me, baby 💖";
}
