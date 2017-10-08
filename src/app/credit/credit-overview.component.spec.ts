import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../app.module';
import {CreditOverview} from "./credit-overview.component";

describe('Credit-Overview component:', () => {

    let component: CreditOverview;
    let fixture: ComponentFixture<CreditOverview>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [AppModule],
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(CreditOverview);
                component = fixture.componentInstance;
            });
    }));

    it('builds ok', () => {
        expect(component).toBeTruthy();
    });

});
