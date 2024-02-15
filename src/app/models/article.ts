export class Article {

    id: number | undefined;
    title: string;
    content: string;
    tags: string[];

    constructor(title: string, content: string, tags: string[], id?: number){
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.id = id;
    }
}