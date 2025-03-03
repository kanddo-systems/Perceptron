import * as fs from 'fs';
import type { InputsOrWeights } from './weightedSum';

export function loadWeights(filename: string): InputsOrWeights | null {
    if (fs.existsSync(filename)) {
        const rawData = fs.readFileSync(filename, 'utf8');
        return JSON.parse(rawData);
    }
    return null;
}
