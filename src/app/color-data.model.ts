export interface ColorMap {
    name: string,
    displayName: string,
    htmlcolor: string;
    hexCode: string[],
    multi: boolean;
}

export interface ColorData {
    id: number;
    cause: string;
    causeFull: string;
    colorData: ColorMap
}