import {FPuzzlesLineCoords} from "./FPuzzlesLineCoords";
import {FPuzzlesIsLockoutLine} from "./FPuzzlesIsLockoutLine";

export interface FPuzzlesLine extends FPuzzlesLineCoords, FPuzzlesIsLockoutLine {
    outlineC?: string;
    width?: number;
    // If true, the line is a graphical representation of a constraint that CTC app can't recognize (e.g. renban, whispers)
    isNewConstraint?: boolean;
    fromConstraint?: string;
}
