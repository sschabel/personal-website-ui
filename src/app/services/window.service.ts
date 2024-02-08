import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class WindowService {
    
    public window(): Window {
        return window;
    }

    public setHref(url: string): void {
        window.location.href = url;
    }
}