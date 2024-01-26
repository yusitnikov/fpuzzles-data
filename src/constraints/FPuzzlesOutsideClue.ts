import {FPuzzlesCellCoords} from "./FPuzzlesCellCoords";

export interface FPuzzlesOutsideClue extends FPuzzlesCellCoords {
    value?: string | number;
}
