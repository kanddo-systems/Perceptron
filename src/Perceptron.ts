import { calculateWeightUpdate } from "./utils/calculateWeightUpdate";
import { loadWeights } from "./utils/loadWeights";
import { randomWeight } from "./utils/randomWeight";
import { saveWeights } from "./utils/saveWeights";
import { sigmoid } from "./utils/sigmoid";
import { weightedSum, type InputsOrWeights } from "./utils/weightedSum";

export class Perceptron {
    private weights: InputsOrWeights;
    private learnRate: number;
    private readonly weightsFile = "weights.json";

    constructor(features: string[], learnRate: number = 0.00001) {
        this.weights = loadWeights(this.weightsFile) || {};

        if (Object.keys(this.weights).length > 0) {
            console.log("Loaded weights from file");
        } else {
            console.log("Initializing new weights");
            features.forEach(feature => {
                this.weights[feature] = randomWeight();
            });
        }

        this.learnRate = learnRate;
    }

    predict(inputs: InputsOrWeights): number {
        const sum = weightedSum(inputs, this.weights);
        return sigmoid(sum);
    }

    train(inputs: InputsOrWeights, expectedOutput: number): void {
        const prediction = this.predict(inputs);
        const error = expectedOutput - prediction;

        for (const feature in this.weights) {
            if (inputs[feature] !== undefined) {
                this.weights[feature] += calculateWeightUpdate(inputs[feature], error, this.learnRate);
            }
        }

        saveWeights(this.weights, this.weightsFile);
    }
}
