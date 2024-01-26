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
    FPuzzlesClone,
    FPuzzlesWhispers,
} from "./constraints";
import {FPuzzlesRect} from "./constraints/FPuzzlesRect";
// noinspection ES6PreferShortImport
import {FPuzzlesOutsideClue} from "./constraints/FPuzzlesOutsideClue";

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
    sandwichsum?: FPuzzlesOutsideClue[];
    even?: FPuzzlesCellCoords[];
    odd?: FPuzzlesCellCoords[];
    extraregion?: FPuzzlesCellsCoords[];
    clone?: FPuzzlesClone[];
    quadruple?: FPuzzlesQuadruple[];
    betweenline?: FPuzzlesLineCoords[];
    minimum?: FPuzzlesCellCoords[];
    maximum?: FPuzzlesCellCoords[];
    line?: FPuzzlesLine[];
    rectangle?: FPuzzlesRect[];
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
    whispers?: FPuzzlesWhispers[];
    regionsumline?: FPuzzlesLineCoords[];
    entropicline?: FPuzzlesLineCoords[];
    modularline?: FPuzzlesLineCoords[];
    zipperline?: FPuzzlesLineCoords[];
    nabner?: FPuzzlesLineCoords[];
    doublearrow?: FPuzzlesLineCoords[];
    lockout?: FPuzzlesLineCoords[];
    rowindexer?: FPuzzlesCellsCoords[];
    columnindexer?: FPuzzlesCellsCoords[];
    boxindexer?: FPuzzlesCellsCoords[];
    xsum?: FPuzzlesOutsideClue[];
    skyscraper?: FPuzzlesOutsideClue[];
    fogofwar?: FPuzzlesCellsCoords["cells"];
    foglight?: FPuzzlesCellsCoords["cells"];
    // endregion
    // endregion
}
