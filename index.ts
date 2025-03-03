import { Perceptron } from "./src/Perceptron";
import type { PlayerStats } from "./src/Player";

function init() {
    const players: PlayerStats[] = [
        { name: "Player 1", points: 25, assists: 5, rebounds: 10 },
        { name: "Player 2", points: 10, assists: 3, rebounds: 7 },
        { name: "Player 3", points: 30, assists: 7, rebounds: 12 },
    ];

    const expectedOutputs: { [key: string]: number } = {
        "Player 1": 1,
        "Player 2": 0,
        "Player 3": 1
    };

    const perceptron = new Perceptron(['points', 'assists', 'rebounds']);

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

init();