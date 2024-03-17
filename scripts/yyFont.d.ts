
declare type yyFontFromStorage = {
    
    pName: string;
    fontname: string;
    
    TPageEntry: number;
    charset: number;
    first: number;
    last: number;
    ascender: number;
    ascenderOffset: number;
    glyphs: Array;
    sdfSpread: number;

    antialias: number;
    bold: boolean;
    italic: boolean;
    scaleX: number;
    scaleY: number;
    size: number;
    lineHeight: number;

};