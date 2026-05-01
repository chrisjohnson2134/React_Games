import { useState, useEffect } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayterTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState();

    useEffect(() => {
        CheckWin();
    }, [tiles])

    const handleTileClick = (index) => {
        if(tiles[index] !== null){
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        if(playerTurn === PLAYER_X){
            setPlayterTurn(PLAYER_O);
        }else{
            setPlayterTurn(PLAYER_X);
        }
    };

    function CheckWin(){

        const winConditions = [
            {combo: [0,1,2], strikeClass: "strike-row-1"},
            {combo: [3,4,5], strikeClass: "strike-row-2"},
            {combo: [6,7,8], strikeClass: "strike-row-3"},
            {combo: [0,3,6], strikeClass: "strike-column-1"},
            {combo: [1,4,7], strikeClass: "strike-column-2"},
            {combo: [2,5,8], strikeClass: "strike-column-3"},
            {combo: [0,4,8], strikeClass: "strike-diagonal-1"},
            {combo: [2,4,6], strikeClass: "strike-diagonal-2"},
        ];

        for (let i = 0; i < winConditions.length; i++) {
            const condition = winConditions[i];
            const [a,b,c] = condition.combo;
            if (tiles[a] === playerTurn &&
                tiles[b] === playerTurn &&
                tiles[c] === playerTurn) {
                    setStrikeClass(condition.strikeClass);
            }
        }
    }

    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
        </div>
    );
}

export default TicTacToe;