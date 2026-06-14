const TILE_TYPES = {
    snake:{
        className: "tile snake",
        style: {border: '1px solid white', backgroundColor: "black"},
        content: <div className={"circle"}></div>
    },
    food: {
        className: "tile food",
        style: {border: '1px solid white', backgroundColor: "black"},
        content: <div className={"circle food"}></div>,
    },
    head:{
        className: "tile head",
        style: {border: '1px solid white', backgroundColor: "black"},
        content: <div className={"circle head"}></div>
    },
    empty:{
        className: "tile",
        style: {border: '1px solid white', backgroundColor: "black"},
        content: null
    }
}

function Tile({tile}) {
    const type = tile?.type || 'empty';
    const config = TILE_TYPES[type];

    return ( 
        <div className={config.className} style={config.style}>
            {config.content}
        </div>
     );
}

export default Tile;