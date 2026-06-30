import BingoCard from "./BingoCard";

function Bingo(){
    let bingoCard1 = [];

    for (let index = 0; index < 25; index++) {
        //congrats you figured out what column your in with math
        //now find the ranges and randomly generate a number, good night
        bingoCard1.push((index % 5));

    }
    

    return(
        <>
        <h1>Bingo!</h1>
        <BingoCard card={bingoCard1}/>
        </>
    );
}

export default Bingo;