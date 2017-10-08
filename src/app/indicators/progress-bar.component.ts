import * as Rx from 'rxjs';
import {Component, OnInit, OnDestroy, OnChanges, ViewChild, SimpleChanges, ElementRef, Input} from '@angular/core';
import {TweenLite, TimelineMax, Bounce} from "gsap";

@Component({
    selector: 'progress-bar',
    template: '<canvas #canvas width="240" height="240"></canvas>'
})
export class ProgressBar implements OnInit, OnDestroy, OnChanges {

    static PI_TIMES_TWO:number = Math.PI * 2;
    static HALF_PI = Math.PI / 2;

    @ViewChild('canvas') canvasRef: ElementRef;

    @Input() value: number;

    private _subscription: Rx.Subscription;

    ngOnInit() {
        const nativeElement: HTMLCanvasElement = this.canvasRef.nativeElement;
        const context:CanvasRenderingContext2D = <CanvasRenderingContext2D>nativeElement.getContext('2d');
        context.beginPath();
        context.strokeStyle = '#9abada';
        context.lineCap = 'square';
        context.closePath();
        context.fill();
        context.lineWidth = 10.0;
        const imageData = context.getImageData(0, 0, 240, 240);

        this._subscription = Rx.Observable
            .of( context.getImageData(0, 0, 240, 240))
            .switchMap( () => {
                return Rx.Observable.interval( 5000 ).map( () => Math.random() * 0.8 );
            } )
            .mergeScan((position:number, update:number) => {
                return Rx.Observable.create( (observer: Rx.Observer<number>) => {
                    const tween = TweenLite.to({position}, 3,
                        {
                            position:update,
                            onUpdate:(x) => observer.next(x.target.position),
                            onUpdateParams:["{self}"],
                            onComplete: () =>{
                                if( !observer.closed ) {
                                    observer.complete();
                                }
                            },
                            onCompleteParams:["{self}"],
                            ease:Bounce.easeOut
                        });
                    return () => tween.kill();
                });
            }, 0)
            .subscribe( (value:number) => {
                context.putImageData(imageData, 0, 0);
                context.beginPath();
                context.arc(120, 120, 70, -(ProgressBar.HALF_PI), ((ProgressBar.PI_TIMES_TWO) * value) - ProgressBar.HALF_PI, false);
                context.stroke();
            } );
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    ngOnChanges() {
    }
}