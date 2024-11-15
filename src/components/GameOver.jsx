import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">O hat es zerstört!!</div>;
    case GameState.playerXWins:
      return <div className="game-over">X hat es zerstört!!</div>;
    case GameState.draw:
      return <div className="game-over">Unentschieden!!</div>;
    default:
      return <></>;
  }
}

export default GameOver;
