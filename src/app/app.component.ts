import { Component } from "@angular/core";
import {UserResource} from "./user/resources/user-resource";
// import { * as fromRoot } from "./reducers/index"

@Component({
    selector: 'app',
    template: `<credit-overview></credit-overview>`,
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    constructor(userResource:UserResource) {
        userResource.getUserCredit().subscribe( x => {
        })
    }
}
