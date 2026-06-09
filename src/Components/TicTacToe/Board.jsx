import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles, onTileClick, playerTurn, strikeClass}) {
    return (
        <>
            <div className="board">
            <Tile value={tiles[0]} onClick={() => onTileClick(0)} playerTurn={playerTurn} className='border-right border-bottom'/>
            <Tile value={tiles[1]} onClick={() => onTileClick(1)} playerTurn={playerTurn} className='border-right border-bottom'/>
            <Tile value={tiles[2]} onClick={() => onTileClick(2)} playerTurn={playerTurn} className='border-bottom'/>

            <Tile value={tiles[3]} onClick={() => onTileClick(3)} playerTurn={playerTurn} className='border-right border-bottom'/>
            <Tile value={tiles[4]} onClick={() => onTileClick(4)} playerTurn={playerTurn} className='border-right border-bottom'/>
            <Tile value={tiles[5]} onClick={() => onTileClick(5)} playerTurn={playerTurn} className='border-bottom'/>

            <Tile value={tiles[6]} onClick={() => onTileClick(6)} playerTurn={playerTurn} className='border-right'/>
            <Tile value={tiles[7]} onClick={() => onTileClick(7)} playerTurn={playerTurn} className='border-right'/>
            <Tile value={tiles[8]} onClick={() => onTileClick(8)} playerTurn={playerTurn} className=''/>
            <Strike strikeClass={strikeClass}/>

            </div>
        </>
    );
}

export default Board;