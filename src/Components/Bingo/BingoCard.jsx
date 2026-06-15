function BingoCard({card}){
    return(
        <div className="bingoCard">
        <h2>B</h2>
        <h2>I</h2>
        <h2>N</h2>
        <h2>G</h2>
        <h2>O</h2>

        {
            card.flat().map((cell, index) => (
                <div key={index}>{cell}</div>
        ))}
        
    </div>
    );
}

export default BingoCard;