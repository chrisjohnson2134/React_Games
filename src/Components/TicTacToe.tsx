import { useState, useEffect } from "react";
import Board from "./Board";

type Tile = string | null;
type Player = "X" | "O";
const PLAYER_X: Player = "X";
const PLAYER_O: Player = "O";

function TicTacToe(){
    const [tiles, setTiles] = useState<Array<Tile>>(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState<Player>(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState<string | undefined>();
    const [winningPlayer, setWinningPlayer] = useState<Player | undefined>();

    const handleTileClick = (index: number): void => {
        if(tiles[index] !== null){
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        if(!CheckWin(newTiles)){
            if(playerTurn === PLAYER_X){
                setPlayerTurn(PLAYER_O);
            }else{
                setPlayerTurn(PLAYER_X);
            }
        }
        else{
            setWinningPlayer(playerTurn)
        }
    };

    function CheckWin(tilesArr:Tile[]): boolean {
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
            if (tilesArr[a] === playerTurn &&
                tilesArr[b] === playerTurn &&
                tilesArr[c] === playerTurn) {
                    setStrikeClass(condition.strikeClass);
                    setWinningPlayer(playerTurn);
                    console.log("win");
                    return true;
            }
        }

        return false;
    }
    
        return(
        <div>
            <h1>Tic Tac Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
            
                {winningPlayer ? (
                    <h1>Winning Player is: {winningPlayer} !</h1>
                ) :
                (
                <h1>Player Turn: {playerTurn}</h1>
                )}
            
        </div>
    );
}

export default TicTacToe;