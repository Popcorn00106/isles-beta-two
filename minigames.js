// Copper Minigame: Fishing
function startCopperMinigame() {
    alert("Starting the Copper Minigame: Fishing!");
    let fishCaught = 0;
    for (let i = 0; i < 5; i++) {
        if (Math.random() > 0.5) {
            fishCaught++;
        }
    }
    alert(`You caught ${fishCaught} fish! You earned ${fishCaught * 10} Copper.`);
}

// Silver Minigame: Puzzle
function startSilverMinigame() {
    alert("Starting the Silver Minigame: Puzzle!");
    const puzzlePieces = ["A", "B", "C", "D"];
    const shuffledPieces = puzzlePieces.sort(() => Math.random() - 0.5);
    const userAnswer = prompt(`Arrange the pieces in order: ${shuffledPieces.join(", ")}`);
    if (userAnswer === puzzlePieces.join("")) {
        alert("Correct! You earned 50 Silver.");
    } else {
        alert("Incorrect. Try again!");
    }
}

// Gold Minigame: Treasure Hunt
function startGoldMinigame() {
    alert("Starting the Gold Minigame: Treasure Hunt!");
    const treasureLocations = ["Beach", "Forest", "Cave", "Mountain"];
    const correctLocation = treasureLocations[Math.floor(Math.random() * treasureLocations.length)];
    const userGuess = prompt(`Where do you want to search for treasure? Options: ${treasureLocations.join(", ")}`);
    if (userGuess === correctLocation) {
        alert("You found the treasure! You earned 100 Gold.");
    } else {
        alert(`No treasure found at the ${userGuess}. Try again!`);
    }
}

// Platinum Minigame: Crafting
function startPlatinumMinigame() {
    alert("Starting the Platinum Minigame: Crafting!");
    const materials = ["Iron", "Silver", "Gold", "Platinum"];
    const requiredMaterial = "Platinum";
    const userMaterial = prompt(`Choose a material to craft with: ${materials.join(", ")}`);
    if (userMaterial === requiredMaterial) {
        alert("You crafted a Platinum item! You earned 200 Platinum.");
    } else {
        alert("Incorrect material. Try again!");
    }
}

// Palladium Minigame: Banking
function startPalladiumMinigame() {
    alert("Starting the Palladium Minigame: Banking!");
    const bankingOptions = ["Deposit", "Withdraw", "Invest"];
    const correctOption = "Invest";
    const userOption = prompt(`Choose a banking option: ${bankingOptions.join(", ")}`);
    if (userOption === correctOption) {
        alert("You made a successful investment! You earned 500 Palladium.");
    } else {
        alert("Incorrect option. Try again!");
    }
}

// Character Minigames
function startJackMinigame() {
    alert("Starting Jack's Minigame: Wisdom Quiz!");
    const questions = [
        { question: "What is the capital of Cornucopia?", answer: "Cornucopia City" },
        { question: "Who is the mayor of Cornucopia?", answer: "Jack" }
    ];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const userAnswer = prompt(randomQuestion.question);
    if (userAnswer === randomQuestion.answer) {
        alert("Correct! You earned 100 Wisdom Points.");
    } else {
        alert("Incorrect. Try again!");
    }
}

function startRubyMinigame() {
    alert("Starting Ruby's Minigame: Trading!");
    const items = ["Apple", "Banana", "Cherry", "Date"];
    const requiredItem = "Cherry";
    const userItem = prompt(`Choose an item to trade: ${items.join(", ")}`);
    if (userItem === requiredItem) {
        alert("Successful trade! You earned 50 Trading Points.");
    } else {
        alert("Incorrect item. Try again!");
    }
}

function startDarrenMinigame() {
    alert("Starting Darren's Minigame: Smithing!");
    const metals = ["Iron", "Copper", "Silver", "Gold"];
    const requiredMetal = "Iron";
    const userMetal = prompt(`Choose a metal to smith with: ${metals.join(", ")}`);
    if (userMetal === requiredMetal) {
        alert("You crafted an Iron tool! You earned 150 Smithing Points.");
    } else {
        alert("Incorrect metal. Try again!");
    }
}

function startGeorgeAndBethMinigame() {
    alert("Starting George and Beth's Minigame: Financial Planning!");
    const plans = ["Savings", "Investment", "Loan"];
    const correctPlan = "Investment";
    const userPlan = prompt(`Choose a financial plan: ${plans.join(", ")}`);
    if (userPlan === correctPlan) {
        alert("Successful financial plan! You earned 300 Financial Points.");
    } else {
        alert("Incorrect plan. Try again!");
    }
}

function displayMinigames() {
    const gameArea = document.getElementById('game-area');

    const copperButton = document.createElement('button');
    copperButton.textContent = "Start Copper Minigame";
    copperButton.onclick = startCopperMinigame;
    gameArea.appendChild(copperButton);

    const silverButton = document.createElement('button');
    silverButton.textContent = "Start Silver Minigame";
    silverButton.onclick = startSilverMinigame;
    gameArea.appendChild(silverButton);

    const goldButton = document.createElement('button');
    goldButton.textContent = "Start Gold Minigame";
    goldButton.onclick = startGoldMinigame;
    gameArea.appendChild(goldButton);

    const platinumButton = document.createElement('button');
    platinumButton.textContent = "Start Platinum Minigame";
    platinumButton.onclick = startPlatinumMinigame;
    gameArea.appendChild(platinumButton);

    const palladiumButton = document.createElement('button');
    palladiumButton.textContent = "Start Palladium Minigame";
    palladiumButton.onclick = startPalladiumMinigame;
    gameArea.appendChild(palladiumButton);

    const jackButton = document.createElement('button');
    jackButton.textContent = "Start Jack's Minigame";
    jackButton.onclick = startJackMinigame;
    gameArea.appendChild(jackButton);

    const rubyButton = document.createElement('button');
    rubyButton.textContent = "Start Ruby's Minigame";
    rubyButton.onclick = startRubyMinigame;
    gameArea.appendChild(rubyButton);

    const darrenButton = document.createElement('button');
    darrenButton.textContent = "Start Darren's Minigame";
    darrenButton.onclick = startDarrenMinigame;
    gameArea.appendChild(darrenButton);

    const georgeAndBethButton = document.createElement('button');
    georgeAndBethButton.textContent = "Start George and Beth's Minigame";
    georgeAndBethButton.onclick = startGeorgeAndBethMinigame;
    gameArea.appendChild(georgeAndBethButton);
}
