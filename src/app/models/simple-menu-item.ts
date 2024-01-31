export class SimpleMenuItem {

    id: number;
    label: string;
    icon: string | undefined;
    routerLink: string | undefined;
    url: string | undefined;

    public constructor(id: number, label: string, icon?: string, routerLink?: string, url?: string) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.routerLink = routerLink;
        this.url = url;
    }
}