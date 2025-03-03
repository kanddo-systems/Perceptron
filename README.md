# Perceptron

This project implements a simple Perceptron to classify basketball players based on their statistics. The Perceptron is trained using a dataset of players and their respective stats for points, assists, and rebounds.

## What is a Perceptron?

A Perceptron is a type of artificial neural network and one of the simplest forms of a neural network model. It is a binary classifier that maps its input features to a binary output (0 or 1). The Perceptron algorithm is a supervised learning algorithm used for binary classification tasks. It consists of input values, weights, a bias, a weighted sum, and an activation function. The Perceptron adjusts its weights based on the error in its predictions during the training process, allowing it to learn from the data.

## Installation

To install the dependencies, run:

```bash
bun install
```

## Running the Project

To run the project, execute:

```bash
bun run index.ts
```

## Project Structure

```plaintext
.
├── .gitignore
├── bun.lock
├── index.ts
├── package.json
├── README.md
├── src/
│   ├── base/
│   │   └── playersMock.ts
│   ├── Perceptron.ts
│   ├── Player.ts
│   └── utils/
│       ├── calculateWeightUpdate.ts
│       ├── classifyPlayer.ts
│       ├── loadWeights.ts
│       ├── randomWeight.ts
│       ├── saveWeights.ts
│       ├── sigmoid.ts
│       └── weightedSum.ts
├── tsconfig.json
└── weights.json
```

## File Descriptions

- **index.ts**: The entry point of the project. It initializes and trains the Perceptron with the player data.
- **src/Perceptron.ts**: The implementation of the Perceptron class, responsible for predicting and training the weights.
- **src/Player.ts**: Defines the `PlayerStats` interface for the player's statistics.
- **src/base/playersMock.ts**: Contains mock player data for training and testing.
- **src/utils/**: Contains utility functions used by the Perceptron:
  - **calculateWeightUpdate.ts**: Calculates the weight update.
  - **classifyPlayer.ts**: Classifies a player based on their statistics.
  - **loadWeights.ts**: Loads saved weights from a file.
  - **randomWeight.ts**: Generates a random weight.
  - **saveWeights.ts**: Saves the weights to a file.
  - **sigmoid.ts**: Sigmoid activation function.
  - **weightedSum.ts**: Calculates the weighted sum of the inputs.
- **weights.json**: Stores the weights of the Perceptron after training. These weights are used for making predictions on new data.

## How It Works

1. **Initialization**: The Perceptron is initialized with the players' features (points, assists, rebounds) and a learning rate.
2. **Training**: The Perceptron is trained over a set number of epochs using the mock player data.
3. **Prediction**: After training, the Perceptron can predict the classification of new players based on their statistics.

## Example Usage

```ts
import { playerMock } from "./src/base/playersMock";
import { Perceptron } from "./src/Perceptron";
import { classifyPlayer } from "./src/utils/classifyPlayer";

const players = playerMock;
const perceptron = new Perceptron(['points', 'assists', 'rebounds']);

// Training
players.forEach(player => {
    const inputs = {
        points: player.points,
        assists: player.assists,
        rebounds: player.rebounds,
    };
    const expectedOutput = classifyPlayer(player);
    perceptron.train(inputs, expectedOutput);
});

// Prediction
players.forEach(player => {
    const inputs = {
        points: player.points,
        assists: player.assists,
        rebounds: player.rebounds,
    };
    const prediction = perceptron.predict(inputs);
    console.log(`Player: ${player.name}, Prediction: ${prediction}`);
});
```

## Contributing

Feel free to contribute to this project. To get started:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to the original branch: `git push origin my-new-feature`.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.