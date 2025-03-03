export function calculateWeightUpdate(
    inputValue: number,
    error: number,
    learnRate: number
): number {
    return learnRate * error * inputValue;
}