export class SimpleMenuItem {

    active: boolean;
    label: string;
    icon: string | undefined;
    routerLink: string | undefined;
    url: string | undefined;

    public constructor(active: boolean, label: string, icon?: string, routerLink?: string, url?: string) {
        this.active = active;
        this.label = label;
        this.icon = icon;
        this.routerLink = routerLink;
        this.url = url;
    }
}