import * as Rx from 'rxjs';
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {UserResource} from "../resources/user-resource";

@Injectable()
export class UserResourceEffects {

    constructor(private _actions: Actions, private _resource: UserResource) { }

    /*
    @Effect() fetchUserResource: Rx.Observable<Action> = this._actions
        .ofType(BOOTSTRAP)
        .switchMap( () => this._resource.getUserCredit())
        .map( x =>  )
        */
}