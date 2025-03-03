import * as fs from 'fs';
import type { InputsOrWeights } from './weightedSum';

export function saveWeights(weights: InputsOrWeights, filename: string): void {
    fs.writeFileSync(filename, JSON.stringify(weights, null, 2));
}
