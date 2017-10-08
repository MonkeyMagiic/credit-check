import * as Rx from 'rxjs';
import {createSelector} from 'reselect';
import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {CreditOverviewSelection} from "./credit-overview";
import * as fromRoot from "../reducers";
import * as fromUser from "../reducers/user.reducer";
import * as fromCreditState from "../reducers/credit.reducer"

@Component({
    selector: 'credit-overview',
    template: `
        <div [ngSwitch]="selected|async">
            <credit-score *ngSwitchCase="CreditOverviewSelection.SCORE_OVERVIEW"
                          [state]="user|async">
            </credit-score>
            <credit-position *ngSwitchCase="CreditOverviewSelection.POSITION_OVERVIEW"
                             [state]="user|async"></credit-position>
        </div>`
})
export class CreditOverview {

    constructor(store: Store<fromRoot.IState>) {
        this.selected = store.select(createSelector(fromRoot.getCreditState, fromCreditState.getSelected));
        this.user = store.select(fromRoot.getUserState);
    }

    readonly selected: Rx.Observable<CreditOverviewSelection>;
    readonly user: Rx.Observable<fromUser.IState>;

    // Used for enum view bindings
    get CreditOverviewSelection() {
        return CreditOverviewSelection;
    }
}


@Component({
    selector: 'credit-score',
    template: `
        <div style="background-color: purple; border-radius: 50px;">
            <progress-bar [value]="state.maxScoreValue" [max]="state.maxScoreValue"></progress-bar>
        </div>`
})
export class CreditScore {
    @Input() state:fromUser.IState;
}

@Component({
    selector: 'credit-position',
    template: `<div style="background-color: blue; border-radius: 50px;">
                <progress-bar></progress-bar>
               </div>`
})
export class CreditPosition {
    @Input() state:fromUser.IState;
}
