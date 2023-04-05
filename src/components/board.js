import boardState from "./boardData";
import tiger from "../assets/tiger_icon.png";
import "./styles/board.css";

function Board() {
    var activePiece = null;
    var draggedPosition;
    var droppedPosition;

    function pieceDragStert(e) {
        // console.log("dragged from");
        // console.log(e.target.parentElement.id);
        // console.log("id = " + e.target.parentElement.id);
        activePiece = e.target;
        draggedPosition = e.target.parentElement.id;
    }

    function pieceDrop(e) {
        try{
            droppedPosition = e.target.attributes.id.value
        }
        catch(err) {
            console.log("A piece already exists there!");
            return;
        }
        // console.log("dropped to");
        // console.log(e.target)
        // console.log("id = " + e.target.attributes.id.value)    
        let draggedCoordinate = boardState[draggedPosition].value.split("");
        let droppedCoordinate = boardState[droppedPosition].value.split("");

        let dragX = parseInt(draggedCoordinate[0]);
        let dragY = parseInt(draggedCoordinate[1]);
        let dropX = parseInt(droppedCoordinate[0]);
        let dropY = parseInt(droppedCoordinate[1]);

        if (Math.abs(dropX-dragX) <= 1 && Math.abs(dropY-dragY) <= 1) {
            if (dragX % 2 !== dragY % 2) {
                if (dropX !== dragX && dropY !== dragY) {
                    console.log("Illegal Move");
                    return;
                }
            }
            else {
                console.log("Naice Hai")
            }
        }   
        else {
            console.log("Illegal Move");
            return;
        }

        console.log("dragged X = " + dragX + ", " + "dragged Y = " + dragY);
        console.log("dropped X = " + dropX + ", " + "dropped Y = " + dropY);

        e.target.append(activePiece);
        boardState[draggedPosition].piece = null;
        boardState[droppedPosition].piece = "tiger";

        activePiece = null;
    }

    function pieceDragOver(e) {
        e.preventDefault();
    }

    return (
        <div className = "board-holder">
            {
                boardState.map(function(board, index) {
                    if (board.piece === "tiger") {
                        return (
                            <div onDragStart={(e)=> {pieceDragStert(e)}} onDrop={(e)=> {pieceDrop(e)}} onDragOver={(e)=> {pieceDragOver(e)}} id={index} className="board-position" draggable>
                                <img src={tiger} alt = "tiger" className="tiger-piece"></img>
                            </div>
                        )    
                    }
                    else {
                        return (
                            <div onDragStart={(e)=> {pieceDragStert(e)}} onDrop={(e)=> {pieceDrop(e)}} onDragOver={(e)=> {pieceDragOver(e)}} id={index} className="board-position" draggable>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Board;