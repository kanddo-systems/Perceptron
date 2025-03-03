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

    players.forEach(player => {
        const prediction = perceptron.predict({
            points: player.points,
            assists: player.assists,
            rebounds: player.rebounds,
        });
        console.log(`${player.name}: ${prediction === 1 ? "Bom jogador" : "Não é bom jogador"}`);
    });
}

init();