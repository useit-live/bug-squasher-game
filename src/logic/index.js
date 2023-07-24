// Function to generate random position for a bug
export const generateRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    return {x, y};
};

// Function to generate random movement for a bug
export const generateRandomMovement = () => {
    const dx = Math.random() * 10 - 5; // Random horizontal movement between -5 and 5
    const dy = Math.random() * 10 - 5; // Random vertical movement between -5 and 5
    return {dx, dy};
};