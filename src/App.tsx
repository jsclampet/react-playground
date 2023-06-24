import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Steven" } });
  };
  return (
    <div>
      <h2>{game.player.name}</h2>
      <button onClick={handleClick}> CHANGE NAME</button>
    </div>
  );
};

export default App;
