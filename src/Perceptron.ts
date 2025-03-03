export class Perceptron {
    weights: { [key: string]: number };
    learnRate: number;

    constructor(features: string[], learnRate: number = 0.01) {
        this.weights = {};
        features.forEach(feature => {
            this.weights[feature] = Math.random() * 2 - 1;
        });
        this.learnRate = learnRate;
    }

    logWeights() {
        console.log(this.weights);
    }
}


