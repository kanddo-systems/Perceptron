import { playerMock } from "./src/base/playersMock";
import { Perceptron } from "./src/Perceptron";
import { classifyPlayer } from "./src/utils/classifyPlayer";
import type { InputsOrWeights } from "./src/utils/weightedSum";

function init() {
    const players = playerMock;

    const perceptron = new Perceptron(['points', 'assists', 'rebounds']);

    const expectedOutputs: InputsOrWeights = players.reduce((acc: InputsOrWeights, player) => {
        acc[player.name] = classifyPlayer(player);
        return acc;
    }, {});


    const epochs = 100000;

    for (let epoch = 0; epoch < epochs; epoch++) {
        players.forEach(player => {
            const inputs = {
                points: player.points,
                assists: player.assists,
                rebounds: player.rebounds,
            };

            const expectedOutput = expectedOutputs[player.name];
            perceptron.train(inputs, expectedOutput);
        });
    }


}

init();
