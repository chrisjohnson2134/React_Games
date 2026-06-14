import { useEffect, useState } from "react";
import Board from "./Board";
import { DIRECTIONS } from "../Utils/Constants.js";

const MAX_ROWS = 6;
const MAX_COLS = 6;

function Snake() {
    const initialTiles = Array(MAX_ROWS).fill(null).map(() => Array(MAX_COLS).fill(null));
    const [tiles, setTiles] = useState(initialTiles);
    const [row, setX] = useState(-1);
    const [column, setY] = useState(0);
    const [foodCol, setFoodCol] = useState(-1);
    const [foodRow, setFoodRow] = useState(-1);
    const [currDirection, setCurrDirection] = useState(DIRECTIONS.DOWN);
    const [snakeLength, setSnakeLength] = useState(4);
    const [historyArr, setHistoryArr] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        initialTiles[0][0] = {cj: "cj"};
        const handleKeyDown = (event) => {
            switch(event.key){
                case "ArrowUp":
                    setCurrDirection(DIRECTIONS.UP);
                    break;
                case "ArrowDown":
                    setCurrDirection(DIRECTIONS.DOWN);
                    break;
                case "ArrowLeft":
                    setCurrDirection(DIRECTIONS.LEFT);
                    break;
                case "ArrowRight":
                    setCurrDirection(DIRECTIONS.RIGHT);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);  
        };
    });

    useEffect(() => {
        const interval = setInterval(() => {

            let nextRow = row + currDirection.dr;
            let nextCol = column + currDirection.dc;
            // console.log("next row: " + nextRow + " next col: " + nextCol);

            nextRow = nextRow === -1 ? MAX_ROWS : nextRow % (MAX_ROWS);
            nextCol = nextCol === -1 ? MAX_COLS : nextCol % (MAX_COLS);

            let newTiles = tiles.map(row => [...row]);

            if (newTiles[nextRow] && newTiles[nextRow][nextCol] && newTiles[nextRow][nextCol].type === "snake") {
            setGameOver(true);
            return; // Stop the move
            }

            if(newTiles[row] && newTiles[row][column] !== undefined)
                newTiles[row][column] = {type: "snake"};

            if(newTiles[nextRow] && newTiles[nextRow][nextCol] !== undefined){
                        newTiles[nextRow][nextCol] = {type: "head"};
                        setX(nextRow);
                        setY(nextCol);
                        //hi chris, the issue with this line is that it is a mutation,
                        //in react it is important to creat a new copy and then set.
                        // historyArr.push({row: nextRow, col: nextCol});
                        const newHistoryArr = [...historyArr, {row: nextRow, col: nextCol}];
                        if(nextRow === foodRow && nextCol === foodCol )
                        {
                            setSnakeLength(snakeLength+1);
                            setFoodRow(-1);
                            setFoodCol(-1);
                        }
                        // console.log(newHistoryArr.length + "-" + snakeLength);
                        if(newHistoryArr.length > snakeLength){
                            let dequeueItem = newHistoryArr.shift();
                            newTiles[dequeueItem.row][dequeueItem.col] = null;
                        }

                        //this is where you set it.
                        setHistoryArr(newHistoryArr);
            }

            const updatedTiles = generateFood(newTiles);

            setTiles(updatedTiles);

        }, 500);

        return () => clearInterval(interval);
    }, [row,column, currDirection]);

    const generateFood = (currTiles) => {
        console.log(foodRow + "-" + foodCol);

        if(foodCol === -1 && foodRow === -1 ){
            let foodRow = Math.floor(Math.random() * MAX_ROWS);
            let foodCol = Math.floor(Math.random() * MAX_COLS);
            while(tiles[foodRow][foodCol] !== null){
                foodRow = Math.floor(Math.random() * MAX_ROWS);
                foodCol = Math.floor(Math.random() * MAX_COLS);
            }

            setFoodCol(foodCol);
            setFoodRow(foodRow);


            const newTiles = currTiles.map(row => [...row]);
            newTiles[foodRow][foodCol] = {type: "food"};

            return newTiles;
        }

        return currTiles;
    };

    const getDirectionName = (direction) => {
    for (const key in DIRECTIONS) {
        if (DIRECTIONS[key] === direction) {
            return key; // Returns "UP", "DOWN", etc.
        }
    }
    return "Unknown";
    };

    const inBounds = (row,col) => {
        if(row < 0 || col < 0 ||
            row > MAX_ROWS || col > MAX_COLS)
            return false;
        
        return true;
    };

    return ( 
        <>
            <h1>Snake!</h1>
            <h3>Snake Length {snakeLength}</h3>
            {gameOver && <h3>Game Over</h3>}
            <Board tiles={tiles}/>
            <h1>{getDirectionName(currDirection)}</h1>
        </>
     );
}

export default Snake;
