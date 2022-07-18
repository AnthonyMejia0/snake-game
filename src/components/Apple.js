import React from 'react'
import { useRecoilValue } from 'recoil';
import apple from "./apple.png"
import { fruitState } from './atoms/gameAtom';

function Apple() {
    const fruit = useRecoilValue(fruitState);
    const style = {
        position: "absolute",
        top: `${fruit.y * 30}px`,
        left: `${fruit.x * 30}px`,
        width: "5%",
        height: "5%",
    };

  return (
    <img src={apple} style={style} alt="Apple" />
  )
}

export default Apple