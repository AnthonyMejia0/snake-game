import { useEffect, useRef } from "react";

export function getRandomCoords(min, max) {
    const x = Math.floor(Math.random() * (max - min + 1) + min);
    const y = Math.floor(Math.random() * (max - min + 1) + min);
    return {
      x: x,
      y: y
    };
}

// export const startState = {
//     fruit: getRandomCoords(0, 19),
//     // 30 x 30 Grid
//     snakeDots: [
//       {x: 0, y: 0},
//       {x: 1, y: 0},
//       {x: 2, y: 0}
//     ],
//     direction: "RIGHT",
//     speed: 50
//   };

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function isGameOver(coords, body) {
  const x = coords.x;
  const y = coords.y;

  if ((x < 0 || x > 19) || (y < 0 || y > 19)) return true;
  for (let i = 0; i < body.length; i += 1) {
    if (body[i].x === x && body[i].y === y) return true;
  }

  return false;
}