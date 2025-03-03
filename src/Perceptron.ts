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

    predict(inputs: { [key: string]: number }): number {
        return weightedSum(inputs, this.weights) >= 0 ? 1 : 0;
    }
}


