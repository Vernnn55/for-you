const quotes = [
    "hallo , semangat ya buat hari ni and seterusnya!",
    "kalo hidup bikin capek ,istirahat bentar.jangan nyerah nnti disangka drama ",
    "Bangkit, walau rebahan lebih menggoda wkwkwk",
    "Ciyaaaaa Yoooooo  🌼",
    "Ingat 3M mai cai mai thia mai khua ",
    "ud jgn di teken mulu itu-itu aj isinya "
];

function showQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = `"${q}"`;
}

function playAudio() {
    const audio = document.getElementById("music");
    audio.play();
}

let isPink = true;

function changeBackground() {
    document.body.style.background = isPink ?
        "linear-gradient(to right, #d0e6f6, #f5f5dc)" :
        "linear-gradient(to top right, #ffe6f0, #e0f7fa)";
    isPink = !isPink;
}

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = '🌸';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 4 + Math.random() * 3 + 's';
    document.getElementById('flower-container').appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 7000);
}

setInterval(createFlower, 600);