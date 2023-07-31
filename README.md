# bug-squasher-game
- bug-squasher-game

# Objective:
- The BugSquasherGame function is a React component that implements a simple game where the user has to click on bugs that randomly appear on the screen to score points. The objective of the function is to handle the game logic, update the bug positions, and render the game components.

# Inputs:
The function does not receive any inputs.

# Flow:
1. The function initializes the state variables for bugs, score, timeLeft, and isModalOpen.
2. The function defines the handleCloseModal, addBug, moveBugs, squashBug, stopGame, and initGame functions to handle the game logic.
3. The function uses the useEffect hook to initialize the game and update the bug positions.
4. The function renders the Header, BugComponent, and Modal components.

# Outputs:
The function returns the JSX elements for the Header, BugComponent, and Modal components.

# Additional aspects:
- The function uses the useState hook to manage the state of the bugs, score, timeLeft, and isModalOpen variables.
- The function uses the useRef hook to manage the timeLeftInterval, bugGenerationInterval, and bugMovementInterval variables.
- The function uses the useCallback hook to define the squashBug function to prevent unnecessary re-renders.
- The function uses the setInterval function to update the timeLeft, add new bugs, and move the bugs.
- The function uses the clearInterval function to stop the game when the timeLeft reaches zero or the user closes the modal dialog.