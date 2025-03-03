import type { PlayerStats } from "../Player";

export function classifyPlayer(player: PlayerStats): number {
    const goodPoints = player.points >= 10;
    const goodAssists = player.assists >= 5;
    const goodRebounds = player.rebounds >= 3;

    const score = [goodPoints, goodAssists, goodRebounds].filter(Boolean).length;

    if (score >= 2) {
        return 1;
    }

    return 0;
}
