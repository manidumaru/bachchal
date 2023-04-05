import boardState from "./boardData";
import tiger from "../assets/tiger_icon.png";
import goat from "../assets/goat_icon.png";
import "./styles/board.css";
import React, {useState} from 'react';

function Board() {
    var activePiece = null;
    var draggedPosition;
    var droppedPosition;
    var goatMove;
    const [availableGoats, setAvailableGoats] = useState(20);

    function pieceDragStert(e) {
        goatMove = false;
        if (e.target.tagName !== "IMG") {
            e.preventDefault();
        }
        if (e.target.attributes.id.value === "goat") {
            goatMove = true;
        }
        // console.log(e.target.tagName);
        // console.log("dragged from");
        // console.log(e.target.parentElement.id);
        // console.log("id = " + e.target.parentElement.id);
        activePiece = e.target;
        draggedPosition = e.target.parentElement.id;
    }

    function pieceDrop(e) {
        console.log("goatMove = " + goatMove);
        if (!draggedPosition) {
            e.target.append(activePiece);
            console.log(e.target.attributes.id.value);
            droppedPosition = e.target.attributes.id.value;
            boardState[droppedPosition].piece = "goat";
            // setAvailableGoats(availableGoats - 1)
            console.log(boardState);
            activePiece = null;
            return 0;
        }
        else {
            console.log("something is being dragged");
            try{

                droppedPosition = e.target.attributes.id.value;
            }
            catch(err) {
                console.log("A piece already exists there!");
                activePiece = null;
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
                        console.log("No Path");
                        activePiece = null;
                        return;
                    }
                }
                else {
                    console.log("Legal Move");
                }
            }   
            else {
                console.log("Can't Jump");
                activePiece = null;
                return;
            }
            // console.log("dragged X = " + dragX + ", " + "dragged Y = " + dragY);
            // console.log("dropped X = " + dropX + ", " + "dropped Y = " + dropY);
            e.target.append(activePiece);
            boardState[draggedPosition].piece = null;
            if(goatMove) {
                boardState[droppedPosition].piece = "goat";    
            }
            else {
                boardState[droppedPosition].piece = "tiger";
            }
            
            activePiece = null;
            draggedPosition = null;
            droppedPosition = null;
            console.log(boardState);
        } 
    }

    function pieceDragOver(e) {
        e.preventDefault();
    }

    return (
        <div className = "board-component-holder">
            <div className="board-holder">
            {
                boardState.map(function(board, index) {
                    if (board.piece === "tiger") {
                        return (
                            <div onDragStart={(e)=> {pieceDragStert(e)}} onDrop={(e)=> {pieceDrop(e)}} onDragOver={(e)=> {pieceDragOver(e)}} id={index} className="board-position" draggable>
                                <img id="tiger" src={tiger} alt = "tiger" className="tiger-piece"></img>
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
            <div className="goat-holder">
                <div onDragStart={(e)=> {pieceDragStert(e)}} onDrop={(e)=> {pieceDrop(e)}} onDragOver={(e)=> {pieceDragOver(e)}} className="goat-image" draggable>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>                                   
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>                                   
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>                                   
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>                                   
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>  
                </div>
                {/* <div onDragStart={(e)=> {pieceDragStert(e)}} onDrop={(e)=> {pieceDrop(e)}} onDragOver={(e)=> {pieceDragOver(e)}} className="goat-image" draggable>
                    <img id="goat" src={goat} alt = "goat" className="goat-piece"></img>                                                       
                </div> */}
            </div>
        </div>
    )
}

export default Board;