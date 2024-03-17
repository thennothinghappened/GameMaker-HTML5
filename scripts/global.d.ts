
declare type yyJSONGame = {

    AnimCurves: Array;

    AudioGroups: Array;

    Backgrounds: Array;

    EmbeddedFonts: Array;
    
    ExtensionOptions: Record<string, any>;
    Extensions: Array;
    
    FeatureFlags: Record<string, string>;
    
    FiltersAndEffectDefs: Array;
    
    Fonts: Array<yyFontFromStorage>;

    GMObjects: Array<yyGMObject>;

};

declare var JSON_game: yyJSONGame;
declare var g_pGMFile: yyJSONGame;
