import {Action} from '@ngrx/store';

export class LoadUserAction implements Action {
    static TYPE: string = "~credit-check:load-user";
    readonly type = LoadUserAction.TYPE;

    constructor(public payload: any) {
    }
}