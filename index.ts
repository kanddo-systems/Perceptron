import { Perceptron } from "./src/Perceptron";
import type { PlayerStats } from "./src/Player";
import { classifyPlayer } from "./src/utils/classifyPlayer";
import type { InputsOrWeights } from "./src/utils/weightedSum";

function init() {
    const players: PlayerStats[] = [
        { name: "Player 1", points: 25, assists: 5, rebounds: 10 },
        { name: "Player 2", points: 5, assists: 2, rebounds: 1 },
        { name: "Player 3", points: 30, assists: 7, rebounds: 12 },
        { name: "Player 4", points: 18, assists: 4, rebounds: 8 },
        { name: "Player 5", points: 22, assists: 3, rebounds: 6 },
        { name: "Player 6", points: 10, assists: 2, rebounds: 2 },
        { name: "Player 7", points: 35, assists: 9, rebounds: 14 },
        { name: "Player 8", points: 28, assists: 6, rebounds: 10 },
        { name: "Player 9", points: 12, assists: 3, rebounds: 4 },
        { name: "Player 10", points: 16, assists: 4, rebounds: 7 }
    ];

    const expectedOutputs: InputsOrWeights = players.reduce((acc: InputsOrWeights, player) => {
        acc[player.name] = classifyPlayer(player); 
        return acc;
    }, {});

    console.log("Outputs:", expectedOutputs)

    const perceptron = new Perceptron(['points', 'assists', 'rebounds']);

    const epochs = 10000;

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

        if (epoch % 10 === 0) {
            console.log(`Epoch ${epoch}:`, perceptron.weights);
        }
    }

    players.forEach(player => {
        const inputs = {
            points: player.points,
            assists: player.assists,
            rebounds: player.rebounds,
        };

        const prediction = perceptron.predict(inputs);
        console.log(`${player.name}: Predicted: ${prediction ? "Bom jogador" : "Não é bom jogador"}`);
    });
}

init();
