import * as Rx from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';
import { userData } from './user-resource.mock-data';

@Injectable()
export class UserResource {

    constructor(private _http: Http, private _jsonp: Jsonp) {
    }

    private _url:string = 'https://5lfoiyb0b3.execute-api.us-west-2.amazonaws.com/prod/mockcredit/values';

    public getUserCredit() : Rx.Observable<any> {
        /*
        const headers = new Headers(
            {   'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Access-Control-Allow-Methods': 'GET',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            });
        const options = new RequestOptions({ headers: headers });
        return this._http.get(this._url);

        this._jsonp.get('https://5lfoiyb0b3.execute-api.us-west-2.amazonaws.com/prod/mockcredit/values?callback=JSONP_CALLBACK').map(data => {
            debugger;
            return data;
        })
            .subscribe( x => {
                debugger

            } )
            */
        return Rx.Observable.of(userData);
    }
}