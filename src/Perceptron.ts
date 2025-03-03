import { calculateWeightUpdate } from "./utils/calculateWeightUpdate";
import { randomWeight } from "./utils/randomWeight";
import { weightedSum } from "./utils/weightedSum";

export class Perceptron {
    weights: { [key: string]: number };
    learnRate: number;

    constructor(features: string[], learnRate: number = 0.01) {
        this.weights = {};
        features.forEach(feature => {
            this.weights[feature] = randomWeight();
        });
        this.learnRate = learnRate;
    }

    predict(inputs: { [key: string]: number }): boolean {
        return !!weightedSum(inputs, this.weights);
    }

    train(inputs: { [key: string]: number }, expectedOutput: number): void {
        const prediction: number = this.predict(inputs) ? 1 : 0;
        const error = expectedOutput - prediction;

        for (const feature in inputs) {
            if (this.weights[feature] !== undefined) {
                this.weights[feature] += calculateWeightUpdate(inputs[feature], error, this.learnRate)
            }
        }
    }
}


