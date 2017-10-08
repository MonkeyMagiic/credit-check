import {CreditOverviewSelection} from "../credit/credit-overview";

export interface IState {
    selected:CreditOverviewSelection;
}

export const reducer = (state: IState = {selected:CreditOverviewSelection.SCORE_OVERVIEW}, action: any): IState => {
    return state;
}

export const getSelected = (state: IState) => state.selected;