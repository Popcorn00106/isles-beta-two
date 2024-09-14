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
