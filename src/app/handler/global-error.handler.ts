import { ErrorHandler, Injectable, NgZone, inject } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalStore } from "@ngrx/global.store";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    readonly store = inject(GlobalStore);

    constructor(private router: Router, private zone: NgZone){}
    
    handleError(error: any): void {
        this.store.updateLastError(error);
        this.zone.run(() => { // have to use NgZone here since its outside the UI
            this.router.navigateByUrl('/error');
        });
    }
    
}