export type InputsOrWeights = { [key: string]: number };
export function weightedSum(inputs: InputsOrWeights, weights: InputsOrWeights): number {
    let sum = 0;

    for (const key in inputs) {
        if (weights[key] !== undefined) {
            sum += inputs[key] * weights[key];
        }
    }

    return sum;
}