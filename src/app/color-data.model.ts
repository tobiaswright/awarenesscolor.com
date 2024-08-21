import { ColorMap } from './color-map.model';

export interface ColorData {
    id: number;
    cause: string;
    causeFull: string;
    htmlcolor: string;
    multi?: boolean;
    colorData?: ColorMap
}