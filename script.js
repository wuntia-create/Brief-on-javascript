const number = Math.floor(Math.random() * 10) + 1;
let tries = 3;
function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const msg = document.getElementById("message");
    const left = document.getElementById("attempts");
    if (guess < 1 || guess > 10 || isNaN(guess)) {
        msg.textContent = "🛑 Enter a number between 1 and 10!";
        return;
    }
    if (guess === number) {
        msg.textContent = "🎉 correct",
        endGame();
    } else {
        msg.textContent = guess > number ? "📉 Too high!" : "📈 Too low!";
        tries--;
        left.textContent = `Attempts left : ${tries}`;
        if (tries === 0) {
            msg.textContent = `😓 Game over! The number was ${number}`;
            endGame();
        }
    }
}
function endGame() {
    document.getElementById("guessInput").disabled = true;
}