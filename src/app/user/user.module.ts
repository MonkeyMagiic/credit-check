import {NgModule} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {UserResource} from "./resources/user-resource";
import {LoadUserEffects} from "./effects/load-user.effects";

@NgModule({
    imports: [
        EffectsModule.run(LoadUserEffects),
    ],
    providers: [UserResource]
})
export class UserModule {

}