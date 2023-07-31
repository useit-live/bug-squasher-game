import React, {useCallback, useEffect, useRef, useState} from "react";
import {generateRandomMovement, generateRandomPosition} from "../logic";
import Header from "./header";
import BugComponent from "./bug-component";
import Modal from "./dialog-modal";
import {TIMER} from "../const";
import './style/index.css'

const BugSquasherGame = () => {
    const [bugs, setBugs] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TIMER);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const timeLeftInterval = useRef(null);
    const timeLeftInterval = useRef(60);
    const bugGenerationInterval = useRef(null);
    const bugMovementInterval = useRef(null);


    // Function to close modal dialog
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setScore(0);
        setTimeLeft(TIMER);
    };


    // Function to add a new bug to the game
    const addBug = () => {
        const bug = {
            ...generateRandomPosition(),
            ...generateRandomMovement(),
        };
        setBugs((prevBugs) => [...prevBugs, bug]);
    };

    // Function to update the bug positions based on their movement
    const moveBugs = () => {
        setBugs((prevBugs) =>
            prevBugs.reduce((acc, bug) => {
                // Calculate the new position after applying movement
                const x = bug.x + bug.dx;
                const y = bug.y + bug.dy;

                // Set boundaries to keep the bug within the screen
                const maxWidth = window.innerWidth - 50;
                const maxHeight = window.innerHeight - 50;

                // Check if the bug is within the screen boundaries
                const isWithinScreen = x >= 0 && x <= maxWidth && y >= 0 && y <= maxHeight;

                // Check if the bug has any movement
                const hasMovement = bug.dx !== 0 || bug.dy !== 0;

                // Keep the bug if it has movement and is within the screen, otherwise remove it
                return hasMovement && isWithinScreen ? [...acc, {...bug, x, y}] : acc;
            }, []));


        // prevBugs.map((bug) => {
        //     // Calculate the new position after applying movement
        //     const x = bug.x + bug.dx;
        //     const y = bug.y + bug.dy;
        //
        //     // Set boundaries to keep the bug within the screen
        //     const maxWidth = window.innerWidth - 50;
        //     const maxHeight = window.innerHeight - 50;
        //
        //     // Check if the bug is within the screen boundaries
        //     const isWithinScreen = x >= 0 && x <= maxWidth && y >= 0 && y <= maxHeight;
        //
        //     // Check if the bug has any movement
        //     const hasMovement = bug.dx !== 0 || bug.dy !== 0;
        //
        //     // Keep the bug if it has movement and is within the screen, otherwise remove it
        //     return hasMovement && isWithinScreen ? {...bug, x, y} : null;
        // }).filter(Boolean)
        // );
    };


    // Function to remove a bug when it's squashed
    const squashBug = useCallback((bugIndex) => {
        setBugs((prevBugs) => prevBugs.filter((_, index) => index !== bugIndex));
        setScore((prevScore) => prevScore + 1);
    }, []);

    // Function to stop the game
    const stopGame = () => {
        clearInterval(timeLeftInterval.current);
        clearInterval(bugGenerationInterval.current);
        clearInterval(bugMovementInterval.current);
    };

    //Function to start the game
    const initGame = () => {
        if (timeLeft === 0) {
            stopGame();
            setIsModalOpen(true);
        } else {
            timeLeftInterval.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            bugGenerationInterval.current = setInterval(() => {
                addBug();
            }, 500);
            bugMovementInterval.current = setInterval(moveBugs, 1000 / 30); // 30 frames per second
        }
    };

    // useEffect to handle game logic and update bug positions
    useEffect(() => {
        initGame();
        return () => stopGame();
    }, [timeLeft]);

    return (
        <>
            <Header score={score} timeLeft={timeLeft}/>
            <div className="bug-squasher-container">
                {bugs.map((bug, index) => (
                    <BugComponent key={index} index={index} bug={bug} onClick={squashBug}/>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Game over</h2>
                <p>Score: {score}</p>
            </Modal>
        </>

    );
};

export default BugSquasherGame;
