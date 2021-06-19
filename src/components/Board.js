import React from 'react';

import Square from './Square';

const NEWGAME = [
  {open: false},{open: false},{open: false},{open: false},{open: false},
  {pieceType:"E", direction:"Right", open: false},{open: false},{pieceType:"M", open: false},{open: false},{pieceType:"R", direction:"Left", open: false},
  {pieceType:"E", direction:"Right", open: false},{open: false},{pieceType:"M", open: false},{open: false},{pieceType:"R", direction:"Left", open: false},
  {pieceType:"E", direction:"Right", open: false},{open: false},{pieceType:"M", open: false},{open: false},{pieceType:"R", direction:"Left", open: false},
  {open: false},{open: false},{open: false},{open: false},{open: false}
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: "Nouvelle partie commencée : aux éléphants !",
      nextPlayer: "E",
      selectedSquare: null,
      squares : NEWGAME
    }
  }
  renderRow(i) {
    const startIndex = i * 5; //row 1, index range 1,5
    const row = this.state.squares.slice(startIndex, startIndex + 5); //start at 0 (array indexes)
    return <div className="boardRow">{row.map((squareParams, squareIndex) => this.renderSquare(squareParams, startIndex+squareIndex))}</div>
  }
  renderSquare(squareParams, squareIndex) {
    return <Square key={squareIndex} squareParams={squareParams} onClick={() => this.handleClick(squareIndex)} />
  }
  availablesPushablesSquares(i) {
    const availableSquares = [];
    //top
    if(i > 4) {
      availableSquares.push(i - 5);
    }
    //bottom
    if(i < 20) {
      availableSquares.push(i + 5);
    }
    //left & right
    if(i % 5 == 0) {
      availableSquares.push(i + 1);
    } else if(i % 5 == 4) {
      availableSquares.push(i - 1);
    } else {
      availableSquares.push(i - 1);
      availableSquares.push(i + 1);
    }

    return availableSquares;
  }
  setOpenSquares(i) {
    //copy state
    const newState = Object.assign({}, this.state);

    if(newState.selectedSquare == i) {
      //Remove all open tile ()
      newState.squares.map(square => square.open = false);
      newState.selectedSquare = null;
    } else {
      //then calc tiles to highlight
      this.availablesPushablesSquares(i).map(index => newState.squares[index].open = true);
      newState.selectedSquare = i;
    }

    //apply newState
    this.setState(newState);
  }
  /*
  clearMovePreview() {
    let newState = Object.assign({}, this.state);
    this.setState(newState);
  }*/
  movePieceToSquare(i) {
    let newState = Object.assign({}, this.state);
    if(!newState.squares[i].hasOwnProperty('pieceType')) {
      //move to empty square
      newState.squares[i] = newState.squares[this.state.selectedSquare];
      newState.squares[this.state.selectedSquare] = {open: false};
      //clear openSquares
      newState.squares.map(square => square.open = false);
      newState.nextPlayer = newState.nextPlayer == "E" ? "R" : "E";

      this.setState(newState);
    } else {
      //move to occupied (need to handle push)
    }
  }
  handleClick(i){
    //console.log(i);
    if(this.state.nextPlayer === this.state.squares[i].pieceType) {
      this.setOpenSquares(i);
    } else if(this.state.squares[i].open == true) {
      this.movePieceToSquare(i);
    } else {
      //this.setState();
    }
  }
  render() {
    return (
      <div className="board-wrapper">
        <div className="game-status">{this.state.gameStatus}</div>
        <div id="Board">
          {this.renderRow(0)}
          {this.renderRow(1)}
          {this.renderRow(2)}
          {this.renderRow(3)}
          {this.renderRow(4)}
        </div>
        <div id="Debug">
          nextPLayer : {this.state.nextPlayer}
        </div>
      </div>
    );
  }
}

export default Board;
