export function calculateWeightUpdate(input: number, error: number, learnRate: number): number {
    const update = learnRate * error * input;
    return update;
}