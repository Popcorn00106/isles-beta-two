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
}

function showCurrency() {
    document.getElementById('currency').classList.toggle('hidden');
}
