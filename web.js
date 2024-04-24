document.getElementById("checkButton").addEventListener("click", function() {
    var userInput = document.getElementById("scientificInput").value;
    var scientificPattern = /^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?$/;
    
    if (userInput.toLowerCase() === 'exit') {
        document.getElementById("result").innerText = "Thank you";
        return;
    }

    if (scientificPattern.test(userInput)) {
        document.getElementById("result").innerText = "Valid Scientific Number !";
    } else {
        document.getElementById("result").innerText = "Invalid Scientific Number !";
    }
});

