import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "@models/article";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class BlogService {

    private baseBlogUrl: string = '/blog';
    private getAllUrl: string = '/articles';
    private baseArticleCrudUrl: string = '/article';

    constructor(private http: HttpClient){}

    public getAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(`${this.baseBlogUrl}${this.getAllUrl}`);
    }

    public createArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(`${this.baseBlogUrl}${this.baseArticleCrudUrl}/create`, article);
    }

    public updateArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(`${this.baseBlogUrl}${this.baseArticleCrudUrl}/update`, article);
    }

    public deleteArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(`${this.baseBlogUrl}${this.baseArticleCrudUrl}/delete`, article);
    }

}