import { ErrorHandler, inject } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalStore } from "app/ngrx/global.store";

export class GlobalErrorHandler implements ErrorHandler {

    readonly store = inject(GlobalStore);

    constructor(private router: Router){}
    
    handleError(error: any): void {
        this.store.updateLastError(error);
        this.router.navigateByUrl('/error');
    }
    
}