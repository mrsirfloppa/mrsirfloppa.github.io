let clicks = 0;
const counter = document.getElementById("count")
const catimage = document.getElementById('cat')
const GAMBLING = document.getElementById('GAMBLING')


catimage.addEventListener('click', function() {
    clicks = clicks + 1;
    console.log("clicked");
    counter.textContent = clicks;
});
GAMBLING.addEventListener('click', function() {
    const GAMBLENUMBER = Math.floor(Math.random() * 101) - 50;
    clicks = clicks + GAMBLENUMBER;
    console.log("GAMBLE TIME :D")
    counter.textContent = clicks;
    if (clicks < 1) {
        clicks = 0
        counter.textContent = clicks;
    }
});

