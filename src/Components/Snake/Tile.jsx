function Tile({tile}) {
    return ( 
        <>
            {tile ? (
                <div className={`tile}`} style={{border: '1px solid white', backgroundColor: "black"}}>
                <div className={`circle`}></div>
                </div>
            ) : 
            (
                <div className={`tile}`} style={{border: '1px solid white', backgroundColor: "black"}}/>
            )

            }
            
        </>
     );
}

export default Tile;