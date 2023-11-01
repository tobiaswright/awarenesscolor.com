import { ColorMap } from './color-map.model';

export interface ColorData {
    cause: string;
    causeFull: string;
    htmlcolor: string;
    multi?: boolean;
    colorData?: ColorMap
}