import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { directionState, gameState, scoreState, snakeState } from "./atoms/gameAtom"

function GameOver() {
    const score = useRecoilValue(scoreState);
    const setGameStatus = useSetRecoilState(gameState);
    const resetSnake = useResetRecoilState(snakeState);
    const resetDirection = useResetRecoilState(directionState);
    const resetScore = useResetRecoilState(scoreState);

    const reset = () => {
        resetSnake();
        resetDirection();
        resetScore();
        setGameStatus("PLAY");
    }

  return (
    <div className="mt-60">
        <h1 className='text-[5rem] text-gray-500 text-center'>Game Over</h1>
        <h2 className='text-5xl text-white text-center'>Score: {score}</h2>
        <div className='flex justify-center mt-10'>
            <button onClick={reset} className='bg-green-500 text-white text-3xl px-4 py-2 rounded-md'>Try Again?</button>
        </div>
    </div>
  )
}

export default GameOver