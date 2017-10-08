import * as _ from 'lodash';
import {Action} from '@ngrx/store';
import {LoadUserAction} from "../user/actions/user-actions";

export interface IState {
    score: number;
    scoreBand: number;
    maxScoreValue: number;
    minScoreValue: number;
}

const initial: IState = {score: 0, scoreBand: 0, maxScoreValue: 0, minScoreValue: 0};

export const reducer = (state: IState = initial, action: Action): IState => {
    switch (action.type) {
        case LoadUserAction.TYPE: {
            const {score, scoreBand, maxScoreValue, minScoreValue} = action.payload.creditReportInfo;
            return _.extend({}, {score, scoreBand, maxScoreValue, minScoreValue});
        }
    }
    return state;
}