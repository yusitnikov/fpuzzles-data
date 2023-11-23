import {FPuzzlesGridCell} from "./FPuzzlesGridCell";
import {
    FPuzzlesLittleKillerSum,
    FPuzzlesKillerCage,
    FPuzzlesCellCoords,
    FPuzzlesLine,
    FPuzzlesLineCoords,
    FPuzzlesArrow,
    FPuzzlesQuadruple,
    FPuzzlesCellsCoords,
    FPuzzlesXV,
    FPuzzlesKropkiDot,
    FPuzzlesText,
    FPuzzlesShape,
    FPuzzlesSandwichSum,
    FPuzzlesClone,
} from "./constraints";

export interface FPuzzlesPuzzle {
    // region Core fields
    size: number;
    grid: FPuzzlesGridCell[][];
    title?: string;
    author?: string;
    ruleset?: string;
    // region Constraints
    "diagonal+"?: boolean;
    "diagonal-"?: boolean;
    antiknight?: boolean;
    antiking?: boolean;
    disjointgroups?: boolean;
    nonconsecutive?: boolean;
    littlekillersum?: FPuzzlesLittleKillerSum[];
    arrow?: FPuzzlesArrow[];
    killercage?: FPuzzlesKillerCage<string | number>[];
    cage?: FPuzzlesKillerCage<string>[];
    ratio?: FPuzzlesKropkiDot[];
    difference?: FPuzzlesKropkiDot[];
    xv?: FPuzzlesXV[];
    thermometer?: FPuzzlesLineCoords[];
    palindrome?: FPuzzlesLineCoords[];
    sandwichsum?: FPuzzlesSandwichSum[];
    even?: FPuzzlesCellCoords[];
    odd?: FPuzzlesCellCoords[];
    extraregion?: FPuzzlesCellsCoords[];
    clone?: FPuzzlesClone[];
    quadruple?: FPuzzlesQuadruple[];
    betweenline?: FPuzzlesLineCoords[];
    minimum?: FPuzzlesCellCoords[];
    maximum?: FPuzzlesCellCoords[];
    line?: FPuzzlesLine[];
    rectangle?: FPuzzlesShape[];
    circle?: FPuzzlesShape[];
    text?: FPuzzlesText[];
    // endregion
    // endregion
    // region Extensions
    disabledlogic?: string[];
    truecandidatesoptions?: string[];
    solution?: number[];
    successMessage?: string;
    // region Constraints
    renban?: FPuzzlesLineCoords[];
    whispers?: FPuzzlesLineCoords[];
    regionsumline?: FPuzzlesLineCoords[];
    lockout?: FPuzzlesLineCoords[];
    fogofwar?: FPuzzlesCellsCoords["cells"];
    foglight?: FPuzzlesCellsCoords["cells"];
    // endregion
    // endregion
}
