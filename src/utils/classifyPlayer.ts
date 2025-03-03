import type { PlayerStats } from "../Player";

export function classifyPlayer(player: PlayerStats): number {
    console.log('Classifying player:', player);
    const goodPoints = player.points > 8;
    const goodAssists = player.assists > 2;
    const goodRebounds = player.rebounds > 0;

    if (goodPoints && goodAssists && goodRebounds) {
        return 1;
    }

    return 0;
}
