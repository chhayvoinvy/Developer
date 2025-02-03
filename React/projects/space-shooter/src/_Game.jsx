import Ship from "./_Ship";
import Power from "./_Power";
import Obstracles from "./_Obstacles";

function Game() {
  return (
    <>
      <div className="game-container">
        <Ship />
        <Power />
        <Obstracles />
      </div>
    </>
  )
}

export default Game
