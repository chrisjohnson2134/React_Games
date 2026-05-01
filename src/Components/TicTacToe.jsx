import { useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayterTurn] = useState(PLAYER_X);

    const handleTileClick = (index) => {
        if(tiles[index] !== null){
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        console.log(CheckWin(newTiles));

        if(playerTurn === PLAYER_X){
            setPlayterTurn(PLAYER_O);
        }else{
            setPlayterTurn(PLAYER_X);
        }
    };

    const CheckWin = (tilesLocal) => {
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for (let i = 0; i < winConditions.length; i++) {
            const condition = winConditions[i];
            const [a,b,c] = condition;
            if (tilesLocal[a] === playerTurn &&
                tilesLocal[b] === playerTurn &&
                tilesLocal[c] === playerTurn) {
                return true;
            }
        }

        return false;
    };

    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
        </div>
    );
}

export default TicTacToe;