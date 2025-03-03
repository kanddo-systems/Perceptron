import type { PlayerStats } from "../Player";

export function classifyPlayer(player: PlayerStats): number {
    const goodPoints = player.points > 7;
    const goodAssists = player.assists > 3;
    const goodRebounds = player.rebounds > 2;

    if (goodPoints || goodAssists || goodRebounds) {
        return 1;
    }

    return 0;
}
