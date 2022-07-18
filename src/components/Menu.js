import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { gameState, highScoreState } from './atoms/gameAtom'

function Menu() {
  const setGameStatus = useSetRecoilState(gameState);
  const highScore = useRecoilValue(highScoreState);
  
  return (
    <div className="mt-60">
        <h1 className='text-[5rem] text-green-500 text-center'>Snake Game</h1>
        <h2 className='text-5xl text-white text-center'>High Score: {highScore}</h2>
        <div className='flex justify-center mt-10'>
            <button onClick={() => setGameStatus("PLAY")} className='bg-green-500 text-white text-3xl px-4 py-2 rounded-md'>Start</button>
        </div>
    </div>
  )
}

export default Menu