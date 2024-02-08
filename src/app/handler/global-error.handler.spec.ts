import { TestBed } from "@angular/core/testing";
import { GlobalErrorHandler } from "./global-error.handler";
import { RouterTestingModule } from "@angular/router/testing";
import { GlobalStore } from "@ngrx/global.store";
import { Router, Routes } from "@angular/router";

describe('GlobalErrorHandler', () => {

    let cut: GlobalErrorHandler;
    let router: Router;
    const routes: Routes = [
        { path: 'test', redirectTo: 'test' }
      ];
    let store: GlobalStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            providers: [GlobalErrorHandler]
        });

        router = TestBed.inject(Router);
        store = TestBed.inject(GlobalStore);
        cut = TestBed.inject(GlobalErrorHandler);
    });

    it('should update last error in GlobalStore and navigate to error page', () => {
        // given
        spyOn(store, 'updateLastError');
        spyOn(router, 'navigateByUrl');
        let error: Error = new Error('Test error!');
        // when
        cut.handleError(error);
        // then
        expect(store.updateLastError).toHaveBeenCalled();
        expect(router.navigateByUrl).toHaveBeenCalled();
    });

});