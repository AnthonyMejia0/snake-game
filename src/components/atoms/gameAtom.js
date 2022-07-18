import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getRandomCoords } from "../../lib/functions";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const gameState = atom({
    key: "gameState",
    default: "MENU",
});

export const snakeState = atom({
    key: "snakeState",
    default: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 2, y: 0},
        {x: 3, y: 0}
    ]
});

export const fruitState = atom({
    key: "fruitState",
    default: getRandomCoords(0, 19)
});

export const directionState = atom({
    key: "directionState",
    default: "RIGHT"
});

export const speedState = atom({
    key: "speedState",
    default: 100
});

export const scoreState = atom({
    key: "scoreState",
    default: 0
});

export const highScoreState = atom({
    key: "highScoreState",
    default: 0,
    effects_UNSTABLE: [persistAtom],
});