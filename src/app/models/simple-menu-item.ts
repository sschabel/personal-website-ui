export class SimpleMenuItem {

    id: number;
    label: string;
    isExternal: boolean;
    icon: string | undefined;
    routerLink: string | undefined;
    url: string | undefined;
    action: Function | undefined;

    public constructor(id: number, label: string, isExternal: boolean, icon?: string, routerLink?: string, url?: string, action?: Function) {
        this.id = id;
        this.label = label;
        this.isExternal = isExternal;
        this.icon = icon;
        this.routerLink = routerLink;
        this.url = url;
        this.action = action;
    }

}