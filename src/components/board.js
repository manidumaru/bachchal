import boardState from "./boardData";
import tiger from "../assets/tiger_icon.png";
import goat from "../assets/goat_icon.png";
import "./styles/board.css";
import React, {useState} from 'react';
import dropSound from "../assets/PieceMoveSounds/normalMove.mp3";
import captureMove from "../assets/PieceMoveSounds/captureMove.mp3";
import illegalMoveSound from "../assets/PieceMoveSounds/illegalMove.mp3";

function Board() {
    var activePiece = null;
    var draggedPosition;
    var droppedPosition;
    var goatMove;
    var sound;
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
            // console.log(e.target.attributes.id.value);
            if (parseInt(e.target.attributes.id.value) || e.target.attributes.id.value === "0") {
                droppedPosition = e.target.attributes.id.value;
            }
            else {                
                console.log("A piece already exists there.");
                return;
            }
            e.target.append(activePiece);
            sound = document.getElementById("pieceDropSound");
            console.log(sound);
            sound.play();
            sound = null;
            boardState[droppedPosition].piece = "goat";
            // if (droppedPosition) {
            //     setAvailableGoats(availableGoats - 1);
            // }
            console.log(boardState);
            activePiece = null;
            return 0;
        }
        else {
            if (parseInt(e.target.attributes.id.value) || e.target.attributes.id.value === "0") {
                droppedPosition = e.target.attributes.id.value;
            }
            else {
                console.log("A piece already exists there!");
                console.log(e.target.attributes.id.value);
                activePiece = null;
                sound = document.getElementById("pieceIllegalMove");
                sound.play();
                sound = null;
                return;
            }
            // try{

            //     droppedPosition = e.target.attributes.id.value;
            // }
            // catch(err) {
            //     console.log("A piece already exists there!");
            //     activePiece = null;
            //     return;
            // }

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
                        sound = document.getElementById("pieceIllegalMove");
                        sound.play();
                        return;
                    }
                }
                else {
                    console.log("Legal Move");
                }
            } 
            ////////////////////////////////////////////////// Jump Logic ///////////////////////////////////////////////////  
            else if ((Math.abs(dropX-dragX) === 2 
            || Math.abs(dropY-dragY) === 2) 
            && (Math.abs(dragX-dropX) % 2 === Math.abs(dragY-dropY) % 2)
            ) 
            {
                if(goatMove) {
                    console.log("goats cannot Jump!!");
                    sound = document.getElementById("pieceIllegalMove");
                    sound.play();
                    return;
                }
                else if ((Math.abs(dragX-dropX) === Math.abs(dragY-dropY)) && (dragX%2 !== dragY%2)) {
                    console.log("No path to jump");
                    sound = document.getElementById("pieceIllegalMove");
                    sound.play();
                    return;
                }
                else {
                    ///////////////////////////////////////////////////////////         Tiger-Capture logic here
                    let adjecentX, adjecentY, capture_index;
                    if(dragX === dropX) {
                        adjecentX = dragX;
                        if ((dragY-dropY) < 0) {
                            adjecentY = dragY + 1;
                            console.log("Right Jump"); ////////////////////////         Right Jump               
                        }
                        else if ((dragY-dropY) > 0) {
                            adjecentY = dragY - 1;
                            console.log("Left Jump");  ////////////////////////         Left Jump
                        }
                    }
                    else if (dragY === dropY) {
                        adjecentY = dragY;
                        if (dragX-dropX < 0) {
                            adjecentX = dragX + 1;
                            console.log("Down Jump");  ////////////////////////         Down Jump
                        }
                        else if (dragX-dropX > 0) {
                            adjecentX = dragX - 1;
                            console.log("Up Jump");    ////////////////////////         Up Jump
                        }
                    }
                    else if ((dragX !== dropX) && (dragY !== dropY)) {
                        if((dragX-dropX > 0) && (dragY-dropY < 0)) {
                            adjecentX =  dragX - 1;
                            adjecentY = dragY + 1;
                            console.log("Top-right Jump");
                        }
                        else if ((dragX-dropX > 0) && (dragY-dropY)>0) {
                            adjecentX = dragX - 1;
                            adjecentY = dragY - 1;
                            console.log("Top-left Jump");
                        }
                        else if ((dragX-dropX < 0) && (dragY-dropY > 0)) {
                            adjecentX = dragX + 1;
                            adjecentY = dragY - 1;
                            console.log("Down-left Jump");
                        }
                        else {
                            adjecentX = dragX + 1;
                            adjecentY = dragY + 1; 
                            console.log("Down-right Jump");
                        }
                    }
                    console.log(`skipped position = (${adjecentX}, ${adjecentY})`);
                    for (let position in boardState) {
                        if (boardState[position].value === (adjecentX.toString()+adjecentY.toString())) {
                            capture_index = position;
                            break;
                        }
                    }
                    console.log("capture index = " + capture_index);
                    if (boardState[capture_index].piece === "goat") {
                        let captured_goat = document.getElementById(capture_index);
                        console.log(captured_goat);                        
                        captured_goat.removeChild(captured_goat.firstChild);
                        sound = document.getElementById("pieceCaptureSound");
                        sound.play();
                        sound = null;
                        boardState[capture_index].piece = null;
                        console.log("Valid Capture");
                    }
                    else {
                        console.log("Invalid Move: No goat to capture");
                        sound = document.getElementById("pieceIllegalMove");
                        sound.play();
                        return;
                    }
                }
            }
            else {
                console.log("Can't Jump");
                activePiece = null;
                sound = document.getElementById("pieceIllegalMove");
                sound.play();
                return;
            }
            // console.log("dragged X = " + dragX + ", " + "dragged Y = " + dragY);
            // console.log("dropped X = " + dropX + ", " + "dropped Y = " + dropY);
            e.target.append(activePiece);
            sound = document.getElementById("pieceDropSound");
            sound.play();
            sound = null;
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
            <audio id ="pieceDropSound" src={dropSound}></audio>
            <audio id ="pieceCaptureSound" src={captureMove}></audio>
            <audio id ="pieceIllegalMove" src={illegalMoveSound}></audio>
        </div>
    )
}

export default Board;