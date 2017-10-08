import {combineReducers} from "@ngrx/store";
import * as fromSystem from "./system.reducer";
import * as fromUser from "./user.reducer";
import * as fromCredit from "./credit.reducer";

export interface IState {
    system: fromSystem.IState;
    user: fromUser.IState;
    credit: fromCredit.IState;
}

// TODO: Include error-catch meta-reducer
export const reducer = combineReducers({
    system: fromSystem.reducer,
    user: fromUser.reducer,
    credit: fromCredit.reducer
});

export const getUserState = (state: IState) => state.user;
export const getCreditState = (state:IState) => state.credit;
