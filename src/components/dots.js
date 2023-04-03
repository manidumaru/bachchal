import tiger from "../assets/tiger_icon.png";
import "./styles/dots.css";
import React, {useState} from 'react';

function Dots() {
  const [boardState, setBoardState] = useState();
  let board = [];
  let activePiece = null;

  function dragPieceStart(e) {
    if (e.target.classList[0] === "tiger-icon") {
      activePiece = e.target;
    }
  }

  function pieceDragOver(e) {
    e.preventDefault();
  }

  function pieceDrop(e) {
    console.log(board[9]);
    let class_id = e.target.attributes.id.value;
    var update_className = document.getElementById(`${class_id}`); 
    
    console.log(update_className);
    // update_className.attributes.class.value = "dots tiger-image";
    update_className.setAttribute("value", "true")
    // console.log(update_className.attributes.class.value);
  

    console.log(board[9]);
    
    if (activePiece) {
      e.target.append(activePiece);
      activePiece = null;
      for (let i = 0; i<25; i++) {
        if (board[i].props.value === "true") {
          console.log(board[i].props.className + " " + board[i].props.id);
        }
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (
        (i === 0 && j === 0) ||
        (i === 0 && j === 4) ||
        (i === 4 && j === 0) ||
        (i === 4 && j === 4)
      ) {
        board.push(
          <div
            id = {`${i}${j}`}
            onDrop={(e) => {
              pieceDrop(e);
            }}
            onDragOver={(e) => {
              pieceDragOver(e);
            }}
            onDragStart={(e) => {
              dragPieceStart(e);
            }}
            className="dots tiger-image"
            value = "true"
          >
            <img
              onDrop={(e) => {
                pieceDrop(e);
              }}
              onDragOver={(e) => {
                pieceDragOver(e);
              }}
              onDragStart={(e) => {
                dragPieceStart(e);
              }}
              src={tiger}
              className="tiger-icon"
              alt="tiger"
              draggable
            ></img>
          </div>
        );
      } else {
        board.push(
          <div
            id={`${i}${j}`}
            onDrop={(e) => {
              pieceDrop(e);
            }}
            onDragOver={(e) => {
              pieceDragOver(e);
            }}
            onDragStart={(e) => {
              dragPieceStart(e);
            }}
            className="dots"
            value = "false"
            draggable
          ></div>
        );
      }
    }
  }

  return <div className="board-holder">{board}</div>;
}

export default Dots;
