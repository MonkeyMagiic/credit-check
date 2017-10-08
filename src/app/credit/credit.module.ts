import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {CreditOverview, CreditScore, CreditPosition} from "./credit-overview.component";
import {IndicatorsModule} from "../indicators/indicators.module";

@NgModule({
    imports: [CommonModule, IndicatorsModule],
    declarations: [CreditOverview, CreditScore, CreditPosition],
    exports: [CreditOverview]
})
export class CreditModule {
}
