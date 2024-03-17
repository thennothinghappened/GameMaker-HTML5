
declare type YYJSONGame = {

    AnimCurves: Array;

    AudioGroups: Array;

    Backgrounds: Array;

    EmbeddedFonts: Array;
    
    ExtensionOptions: Record<string, any>;
    Extensions: Array;
    
    FeatureFlags: Record<string, string>;
    
    FiltersAndEffectDefs: Array;
    
    Fonts: Array<YYFontFromStorage>;

    GMObjects: Array<YYGMObject>;

};

declare var JSON_game: YYJSONGame;
declare var g_pGMFile: YYJSONGame;
