import boardState from "./boardData";

function possibleMovesFinder(index) {
    var moves = [];
    let position = parseInt(index);
    let coordinate = boardState[position].value.split("");
    let x = parseInt(coordinate[0]);
    let y = parseInt(coordinate[1]);

    for (let i = x - 3; i < x + 3; i++) {
      for (let j = y - 3; j < y + 3; j++) {
        if (
          i < 0 ||
          i > 4 ||
          j < 0 ||
          j > 4 ||
          Math.abs(x - i) > 2 ||
          Math.abs(y - j) > 2
        ) {
          continue;
        }
        if (x % 2 === y % 2) {
          if (x !== i && y !== j && Math.abs(x - i) !== Math.abs(y - j)) {
            continue;
          }
          if (i === x && j === y) {
            continue;
          } else {
            let move = i.toString() + j.toString();
            moves.push(move);
          }
        } else {
          if (x % 2 !== y % 2) {
            if ((x !== i && y !== j) || (x === i && y === j)) {
              continue;
            } else {
              let move = i.toString() + j.toString();
              moves.push(move);
            }
          }
        }
      }
    }
    // console.log(moves);
    return moves;
  }

  export default possibleMovesFinder;