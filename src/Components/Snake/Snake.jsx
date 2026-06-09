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
    const [currDirection, setCurrDirection] = useState(DIRECTIONS.DOWN);
    const [snakeLength, setSnakeLength] = useState(4);
    const [historyArr, setHistoryArr] = useState([]);

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

            if(newTiles[nextRow] && newTiles[nextRow][nextCol] !== undefined){
                        newTiles[nextRow][nextCol] = {cj: currDirection};
                        setX(nextRow);
                        setY(nextCol);
                        //hi chris, the issue with this line is that it is a mutation,
                        //in react it is important to creat a new copy and then set.
                        // historyArr.push({row: nextRow, col: nextCol});
                        const newHistoryArr = [...historyArr, {row: nextRow, col: nextCol}];
                        console.log(newHistoryArr.length + "-" + snakeLength);
                        if(newHistoryArr.length > snakeLength){
                            let dequeueItem = newHistoryArr.shift();
                            newTiles[dequeueItem.row][dequeueItem.col] = null;
                        }
                        //this is where you set it.
                        setHistoryArr(newHistoryArr);
            }
                
            setTiles(newTiles);
        }, 1000);

        return () => clearInterval(interval);
    }, [row,column, currDirection]);

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
            <Board tiles={tiles}/>
            <h1>{getDirectionName(currDirection)}</h1>
        </>
     );
}

export default Snake;
