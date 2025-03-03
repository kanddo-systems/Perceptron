import * as fs from 'fs';
import type { InputsOrWeights } from './weightedSum';

export function saveWeights(weights: InputsOrWeights, filename: string): void {
    // console.log(`Saving weights: ${JSON.stringify(weights, null, 2)}`);
    fs.writeFileSync(filename, JSON.stringify(weights, null, 2));
}
