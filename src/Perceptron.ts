import { calculateWeightUpdate } from "./utils/calculateWeightUpdate";
import { loadWeights } from "./utils/loadWeights";
import { randomWeight } from "./utils/randomWeight";
import { saveWeights } from "./utils/saveWeights";
import { weightedSum, type InputsOrWeights } from "./utils/weightedSum";

export class Perceptron {
    weights: InputsOrWeights;
    learnRate: number;
    weightsFile = 'weights.json';

    constructor(features: string[], learnRate: number = 0.01) {
        const savedWeights = loadWeights(this.weightsFile);

        if (savedWeights) {
            console.log('Loaded weights from file');	
            this.weights = savedWeights;
        } else {
            console.log('Initializing new weights');
            this.weights = {};
            features.forEach(feature => {
                this.weights[feature] = randomWeight();
            });
        }

        this.learnRate = learnRate;
    }

    predict(inputs: InputsOrWeights): boolean {
        return !!weightedSum(inputs, this.weights);
    }

    train(inputs: InputsOrWeights, expectedOutput: number): void {
        const prediction: number = this.predict(inputs) ? 1 : 0;
        const error = expectedOutput - prediction;

        for (const feature in inputs) {
            if (this.weights[feature] !== undefined) {
                this.weights[feature] += calculateWeightUpdate(inputs[feature], error, this.learnRate)
            }
        }

        saveWeights(this.weights, this.weightsFile);
    }
}


