import { Perceptron } from "./src/Perceptron";
import type { PlayerStats } from "./src/Player";

function init() {
    const players: PlayerStats[] = [
        { name: "Player 1", points: 25, assists: 5, rebounds: 10 },
        { name: "Player 2", points: 10, assists: 3, rebounds: 7 },
        { name: "Player 3", points: 30, assists: 7, rebounds: 12 },
    ];

    const features = ['points', 'assists', 'rebounds'];

    const perceptron = new Perceptron(features);
    perceptron.logWeights();

    players.forEach(player => {
        console.log(`${player.name}: Points: ${player.points}, Assists: ${player.assists}, Rebounds: ${player.rebounds}`);
    });
}
init();