const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/background.png'); // Add your background image
    this.load.spritesheet('character', 'assets/character.png', { frameWidth: 32, frameHeight: 32 }); // Add your character sprite
}

function create() {
    this.add.image(400, 300, 'background');

    this.player = this.physics.add.sprite(100, 100, 'character');
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
    } else {
        this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160);
    } else {
        this.player.setVelocityY(0);
    }
}

function showMenu() {
    document.getElementById('menu').classList.toggle('hidden');
}

function showTasks() {
    document.getElementById('tasks').classList.toggle('hidden');
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.description} - Reward: ${JSON.stringify(task.reward)}`;
        listItem.onclick = () => showTaskDetails(task);
        taskList.appendChild(listItem);
    });
}

function showCurrency() {
    document.getElementById('currency').classList.toggle('hidden');
}

const tasks = [
    {
        id: 1,
        character: "Jack",
        description: "Gather 10 pieces of wood from the forest.",
        details: "The town elder, Jack, needs wood to repair the town hall. Head to the forest and gather 10 pieces of wood. Be careful of wild animals!",
        reward: { copper: 50 },
        completed: false
    },
    {
        id: 2,
        character: "Jack",
        description: "Find the lost amulet in the forest.",
        details: "Jack's amulet, a family heirloom, was lost in the forest. Search the forest and retrieve the amulet. It is said to be hidden near a large oak tree.",
        reward: { silver: 20 },
        completed: false
    },
    {
        id: 3,
        character: "Jack",
        description: "Help the blacksmith craft a new sword.",
        details: "The blacksmith, Darren, needs assistance in crafting a new sword for the town's defense. Gather the required materials and help Darren at the forge.",
        reward: { gold: 10 },
        completed: false
    },
    {
        id: 4,
        character: "Ruby",
        description: "Collect 5 rare herbs for Ruby.",
        details: "Ruby, the merchant, needs rare herbs for her potions. These herbs can be found in the forest and near the river. Collect 5 rare herbs and bring them to Ruby.",
        reward: { copper: 30 },
        completed: false,
        unlocks: [5, 6]
    },
    {
        id: 5,
        character: "Ruby",
        description: "Deliver a package to the blacksmith.",
        details: "Ruby has a package that needs to be delivered to Darren, the blacksmith. Make sure the package is delivered safely and promptly.",
        reward: { silver: 15 },
        completed: false
    },
    {
        id: 6,
        character: "Ruby",
        description: "Trade goods with the neighboring village.",
        details: "Ruby needs you to trade goods with the neighboring village. Take the goods to the village and return with the items Ruby requested.",
        reward: { gold: 25 },
        completed: false,
        unlocks: [7, 8]
    },
    {
        id: 7,
        character: "Darren",
        description: "Mine 10 pieces of iron ore.",
        details: "Darren needs iron ore to craft new tools. Head to the mines and gather 10 pieces of iron ore. Watch out for cave-ins!",
        reward: { copper: 40 },
        completed: false
    },
    {
        id: 8,
        character: "Darren",
        description: "Forge a new shield.",
        details: "Darren needs help forging a new shield for the town guard. Gather the required materials and assist Darren at the forge.",
        reward: { silver: 20 },
        completed: false,
        unlocks: [9]
    },
    {
        id: 9,
        character: "George and Beth",
        description: "Invest in the town's infrastructure.",
        details: "George and Beth need you to invest in the town's infrastructure. Use your earnings to help improve the town's facilities and services.",
        reward: { gold: 50 },
        completed: false,
        unlocks: [10]
    },
    {
        id: 10,
        character: "George and Beth",
        description: "Secure a trade deal with a distant city.",
        details: "George and Beth need you to secure a trade deal with a distant city. Travel to the city and negotiate a beneficial trade agreement.",
        reward: { platinum: 100 },
        completed: false,
        unlocks: [11]
    },
    {
        id: 11,
        character: "Jack",
        description: "Uncover the secret of the island.",
        details: "Jack has discovered clues about the island's secret. Follow the clues and uncover the hidden truth about the island's past.",
        reward: { palladium: 200 },
        completed: false
    }
];

function showTaskDetails(task) {
    alert(`Task: ${task.description}\nDetails: ${task.details}\nReward: ${JSON.stringify(task.reward)}`);
}

function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`Task completed: ${task.description}`);
        if (task.unlocks) {
            task.unlocks.forEach(unlockTask);
        }
    }
}
function unlockTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = false;
        alert(`New task unlocked: ${task.description}`);
    }
}

// Define key characters and their interactions
const characters = {
    protagonist: {
        name: "Player",
        memory: false
    },
    townElder: {
        name: "Jack",
        role: "Town Elder",
        description: "A wise figure who provides guidance and tasks."
    },
    merchant: {
        name: "Ruby",
        role: "Merchant",
        description: "Runs the general store and offers various goods."
    },
    blacksmith: {
        name: "Darren",
        role: "Blacksmith",
        description: "Crafts tools and equipment."
    },
    bankers: {
        names: ["George", "Beth"],
        role: "Bankers",
        description: "Manage the currency exchange and offer financial advice."
    }
};

function interactWithCharacter(character) {
    alert(`Interacting with ${character.name}: ${character.description}`);
}
