import Tile from "./Tile";

function Board({tiles}) {
    return ( 
        <div className="snakeBoard">
            <Tile tile={tiles[0][0]}/>
            <Tile tile={tiles[0][1]}/>
            <Tile tile={tiles[0][2]}/>
            <Tile tile={tiles[0][3]}/>
            <Tile tile={tiles[0][4]}/>
            <Tile tile={tiles[0][5]}/>

            <Tile tile={tiles[1][0]}/>
            <Tile tile={tiles[1][1]}/>
            <Tile tile={tiles[1][2]}/>
            <Tile tile={tiles[1][3]}/>
            <Tile tile={tiles[1][4]}/>
            <Tile tile={tiles[1][5]}/>

            <Tile tile={tiles[2][0]}/>
            <Tile tile={tiles[2][1]}/>
            <Tile tile={tiles[2][2]}/>
            <Tile tile={tiles[2][3]}/>
            <Tile tile={tiles[2][4]}/>
            <Tile tile={tiles[2][5]}/>

            <Tile tile={tiles[3][0]}/>
            <Tile tile={tiles[3][1]}/>
            <Tile tile={tiles[3][2]}/>
            <Tile tile={tiles[3][3]}/>
            <Tile tile={tiles[3][4]}/>
            <Tile tile={tiles[3][5]}/>

            <Tile tile={tiles[4][0]}/>
            <Tile tile={tiles[4][1]}/>
            <Tile tile={tiles[4][2]}/>
            <Tile tile={tiles[4][3]}/>
            <Tile tile={tiles[4][4]}/>
            <Tile tile={tiles[4][5]}/>

            <Tile tile={tiles[5][0]}/>
            <Tile tile={tiles[5][1]}/>
            <Tile tile={tiles[5][2]}/>
            <Tile tile={tiles[5][3]}/>
            <Tile tile={tiles[5][4]}/>
            <Tile tile={tiles[5][5]}/>
        </div>
     );
}

export default Board;