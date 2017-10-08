import {NgModule} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {UserResource} from "./resources/user-resource";
import {UserResourceEffects} from "./effects/user-resource.effects";

@NgModule({
    imports: [
        EffectsModule.run(UserResourceEffects),
    ],
    providers: [UserResource]
})
export class UserModule {

}