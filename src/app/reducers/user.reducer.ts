export interface IState {
    score: number;
    scoreBand: number;
    maxScoreValue: number;
    minScoreValue: number;
}

const initial: IState = {score: 0, scoreBand: 0, maxScoreValue: 0, minScoreValue: 0};

export const reducer = (state: IState = initial, action: any): IState => {
    return state;
}