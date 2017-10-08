import {NgModule} from "@angular/core";
import {CreditOverview, CreditScore, CreditPosition} from "./credit-overview.component";

@NgModule({
    declarations: [CreditOverview, CreditScore, CreditPosition],
    exports: [CreditOverview]
})
export class CreditModule {
}
