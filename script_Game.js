
        const secretNumber = 12; // Your favorite number
        const message = document.getElementById("message");
        const proceedBtn = document.getElementById("proceedBtn");

        function checkGuess() {
            const userGuess = document.getElementById("userGuess").value;

            if (userGuess == secretNumber) {
                message.innerHTML = "Yay! You guessed it right! 🎉";
                message.classList.add("correct");
                message.classList.remove("wrong");

                // Show the proceed button after the correct guess
                proceedBtn.style.display = "inline-block";
            } else {
                message.innerHTML = "Oops! Try again... 😅";
                message.classList.add("wrong");
                message.classList.remove("correct");
            }
        }

        function redirectToHome() {
            window.location.href = "GameCrush.html"; // Redirect to your main page
        }
    
