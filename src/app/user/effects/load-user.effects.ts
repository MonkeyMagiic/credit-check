import * as Rx from 'rxjs';
import {Injectable} from '@angular/core';
import {Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {UserResource} from "../resources/user-resource";
import {LoadUserAction} from "../actions/user-actions";

@Injectable()
export class LoadUserEffects {

    constructor(private _resource: UserResource) { }

    @Effect() load: Rx.Observable<Action> = Rx.Observable
        .of(undefined)
        .switchMap( () => this._resource.getUserCredit())
        .map(user => new LoadUserAction(user));
}