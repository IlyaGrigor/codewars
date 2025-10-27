// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
//

let newHealth;

function combat(health, damage) {
    if (health - damage >= 0) {
        return newHealth = health - damage;
    } else {
        return newHealth = 0;
    }
}

console.log(combat(100, 90));
console.log(newHealth);