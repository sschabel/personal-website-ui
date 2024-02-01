export class SimpleMenuItem {

    id: number;
    label: string;
    isExternal: boolean;
    icon: string | undefined;
    routerLink: string | undefined;
    url: string | undefined;

    public constructor(id: number, label: string, isExternal: boolean, icon?: string, routerLink?: string, url?: string) {
        this.id = id;
        this.label = label;
        this.isExternal = isExternal;
        this.icon = icon;
        this.routerLink = routerLink;
        this.url = url;
    }

}