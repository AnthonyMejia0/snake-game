import { useRecoilState, useRecoilValue } from "recoil";
import Apple from "./components/Apple";
import { directionState, fruitState, gameState, highScoreState, scoreState, snakeState, speedState } from "./components/atoms/gameAtom";
import GameOver from "./components/GameOver";
import Menu from "./components/Menu";
import Snake from "./components/Snake";
import { getRandomCoords, isGameOver, useInterval } from "./lib/functions";

function App() {
  const [gameStatus, setGameStatus] = useRecoilState(gameState);
  const [snake, setSnake] = useRecoilState(snakeState);
  const [fruit, setFruit] = useRecoilState(fruitState);
  const [direction, setDirection] = useRecoilState(directionState);
  const speed = useRecoilValue(speedState);
  const [score, setScore] = useRecoilState(scoreState);
  const [highScore, setHighScore] = useRecoilState(highScoreState);

  const onkeydown = (e) => {
    switch (e.keyCode) {
      case 37:
        if (direction !== "RIGHT") setDirection("LEFT");
        break;

      case 38:
        if (direction !== "DOWN") setDirection("UP");
        break;
        
      case 39:
        if (direction !== "LEFT") setDirection("RIGHT");
        break;

      case 40:
        if (direction !== "UP") setDirection("DOWN");
        break;

      default:
        break;
    }
  }

  const moveSnake = () => {
    let newSnake = [...snake];
    const i = newSnake.length-1;
    let head = {};
    
    switch (direction) {
      case "LEFT":
        head = { x: newSnake[i].x-1, y: newSnake[i].y };
        break;

      case "UP":
        head = { x: newSnake[i].x, y: newSnake[i].y-1 };
        break;

      case "RIGHT":
        head = { x: newSnake[i].x+1, y: newSnake[i].y };
        break;

      case "DOWN":
        head = { x: newSnake[i].x, y: newSnake[i].y+1 };
        break;

      default:
        break;
    }

    if (isGameOver(head, snake)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setGameStatus("LOSE");
      return;
    }

    newSnake.push(head);

    if (head.x !== fruit.x || head.y !== fruit.y) {
      newSnake.shift();
    }
    else {
      setScore(score + 1);
      setFruit(getRandomCoords(0, 19));
    } 

    setSnake(newSnake);
  }

  document.onkeydown = onkeydown;

  useInterval(() => {    
    if (gameStatus === "PLAY") {
      moveSnake();
    }
  }, speed);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <div>
        {
          gameStatus === "MENU" ? <Menu /> :
          gameStatus === "PLAY" ?
          <div className="">
            <h1 className="text-[5rem] text-white text-center p-8">Score: {score}</h1>
            <div className="flex justify-center mt-4">
              <div className="relative flex h-[616px] w-[616px] border-8 border-gray-500 items-center justify-center">
                <Snake />
                <Apple />
              </div>
            </div>
          </div> : 
          gameStatus === "LOSE" ? <GameOver /> : null
        }
      </div>
    </div>
  );
}

export default App;
