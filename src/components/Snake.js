import { useRecoilValue } from "recoil";
import { directionState, snakeState } from "./atoms/gameAtom";
import snakeHead from "./snake.jpg";

function Snake() { 
  const snake = useRecoilValue(snakeState);
  const direction = useRecoilValue(directionState);

  const rotate = (
    direction === "RIGHT" ? "rotate-[-90deg]" :
    direction === "LEFT" ? "rotate-90" :
    direction === "UP" ? "rotate-180" :
    "rotate-0"
  );

  return (
    <div>
        {
          snake.map((coords, i) => {
              const style = {
                  top: `${coords.y * 30}px`,
                  left: `${coords.x * 30}px`
              };

              return (
                i === snake.length-1 ? 
                <img key={i} src={snakeHead} style={style} className={`absolute w-[5%] h-[5%] ${rotate}`} alt="snake"/> :
                <div key={i} style={style} className="absolute w-[5%] h-[5%] border-2 border-black bg-[#8dc63f] rounded-lg"></div>
              );
          })
        }
    </div>
  )
}

export default Snake