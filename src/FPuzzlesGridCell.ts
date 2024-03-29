export interface FPuzzlesGridCell {
    // region Core fields
    region?: number | null;
    value?: number;
    // If true then value is a given digit, otherwise value is solver's digit
    given?: boolean;
    centerPencilMarks?: number[];
    cornerPencilMarks?: number[];
    // Given background color
    c?: string;
    // Solver's background color
    highlight?: string;
    // endregion
    // region Extensions
    givenPencilMarks?: number[] | null;
    // Array of given colors (by multi-coloring extension)
    cArray?: string[];
    // Array of solver's background colors (by multi-coloring extension)
    highlightArray?: string[];
    // endregion
}
