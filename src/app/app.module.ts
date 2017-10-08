import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {APP_PROVIDERS, APP_CONFIG, APP_TRANSLATION} from './app.providers';
import {APP_ROUTES} from './app.routes';
import {HttpModule, JsonpModule} from '@angular/http';
import {IndicatorsModule} from "./indicators/indicators.module";
import {reducer} from './reducers';
import {UserModule} from "./user/user.module";
import {CreditModule} from "./credit/credit.module";

@NgModule({
    imports: [
        BrowserModule,
        APP_ROUTES,
        UserModule,
        CreditModule,
        IndicatorsModule,
        HttpModule,
        JsonpModule,
        APP_CONFIG,
        APP_TRANSLATION,

        StoreModule.provideStore(reducer),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: APP_PROVIDERS
})
export class AppModule {
}
