document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bg-music");
    music.volume = 0.5;

    // Fix autoplay (starts after first click)
    document.body.addEventListener("click", () => {
        music.play().catch(() => {});
    }, { once: true });

    function nextScreen(num) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('screen' + num).classList.add('active');
    }

    // FIXED BUTTONS (this solves your issue)
    document.getElementById("startBtn").onclick = () => nextScreen(2);
    document.getElementById("to3").onclick = () => nextScreen(3);
    document.getElementById("to4").onclick = () => nextScreen(4);

    // Messages
    const messages = [
        "You’re cute (objectively true)",
        "You tolerate me (rare skill)",
        "You laugh at my bad jokes (concerning)",
        "You make everything better",
        "You’re my favorite person ever",
        "You’re literally gorgeous",
        "You make my day better just by existing (no effort required)",
        "You’re illegally adorable, I’m pretty sure",
        "You’re my daily dose of happiness (side effects: smiling like an idiot)",
        "You’re the reason my phone battery dies so fast",
        "You make my brain go ‘aww’ on repeat",
        "You’re my favorite notification",
        "You’re the prettiest problem I’ve ever had",
        "You make me forget what I was saying… constantly",
        "You’re my comfort person (and my chaos too somehow)",
        "You’re the best thing that ever happened to my screen time",
        "You’re dangerously cute, I should be warned before seeing you",
        "You’re my favorite distraction (and I’m not even mad about it)",
        "You make everything feel lighter",
        "You’re my ‘I can’t stop smiling’ person",
        "You’re cuter than anything I can come up with… and that’s saying a lot",
        "You’re my happy place in human form",
        "You make even boring days feel special",
        "You’re the reason I randomly smile at my phone like a weirdo",
        "You’re too pretty to be real, honestly",
        "You’re my favorite everything"
    ];

    let firstClick = true;

    function typeText(lines, element) {
        element.innerHTML = "";
        let lineIndex = 0;

        function typeLine() {
            if (lineIndex >= lines.length) return;

            let i = 0;
            const line = document.createElement("div");
            element.appendChild(line);

            function typing() {
                if (i < lines[lineIndex].length) {
                    line.innerHTML += lines[lineIndex].charAt(i);
                    i++;
                    setTimeout(typing, 20);
                } else {
                    lineIndex++;
                    setTimeout(typeLine, 200); // small delay between lines
                }
            }
            typing();
        }
        typeLine();
    }

    document.getElementById("loveBtn").onclick = () => {
        const shuffled = [...messages].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        typeText([
            "💜 " + selected[0],
            "💜 " + selected[1],
            "💜 " + selected[2]
        ], document.getElementById("loveText"));

        if (firstClick) {
            document.getElementById("loveBtn").innerText = "Again 😤";
            firstClick = false;
        }
    };

    // Answer check
    document.getElementById("checkBtn").onclick = () => {
        const answer = document.getElementById("answer").value.trim().toLowerCase();

        if (answer === "20" || answer === "20 days") {
            nextScreen(5);
        } else {
            document.getElementById("response").innerText = "Wrong. Try again or I cry 😭";
        }
    };

    // Moving NO button
    document.getElementById("noBtn").onmouseover = () => {
        const btn = document.getElementById("noBtn");
        btn.style.left = Math.random() * 250 + "px";
        btn.style.top = Math.random() * 175 + "px";
    };

    // YES → hearts + next screen
    document.getElementById("yesBtn").onclick = () => {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.innerText = "💜";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (15 + Math.random() * 20) + "px";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 4000);
        }

        setTimeout(() => {
            nextScreen(6);
            animateFinalMessage();
            startHeartLoop();
        }, 800);
    };

    function animateFinalMessage() {
        const lines = document.querySelectorAll("#finalMessage .final-line");

        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add("show");
                setTimeout(() => {
                    spawnHearts(line);
                }, 100); 

            }, index * 500);
        });
    }

    function spawnHearts(element) {
        for (let i = 0; i < 6; i++) {
            const heart = document.createElement("div");
            heart.className = "final-heart";
            heart.innerText = "💜";

            heart.style.left = Math.random() * 90 + "%"; 
            heart.style.top = Math.random() * 30 + "px"; 

            element.appendChild(heart);

            setTimeout(() => heart.remove(), 4000);
        }
    }

    function startHeartLoop() {
        setInterval(() => {
        const lines = document.querySelectorAll("#finalMessage .final-line");
        lines.forEach(line => spawnHearts(line));
            }
        }, 2000); // every 2 seconds
    }

});
