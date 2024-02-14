import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BlogComponent } from '@components/blog/blog.component';
import { ProfessionalDetailsComponent } from '@components/professional-details/professional-details.component';
import { ErrorComponent } from '@components/error/error.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { NotAuthorizedComponent } from '@components/not-authorized/not-authorized.component';
import { LoginComponent } from '@components/login/login.component';
import { DashboardComponent } from '@components/user/dashboard/dashboard.component';
import { authorizationGuard } from './guards/authorization.guard';
import { AuthorityEnum } from '@models/authority.enum';
import { BlogEditorComponent } from '@components/user/blog-editor/blog-editor.component';
import { UserComponent } from '@components/user/user.component';
import { ArticlesListComponent } from '@components/user/blog-editor/articles-list/articles-list.component';
import { ArticleEditorComponent } from '@components/user/blog-editor/article-editor/article-editor.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'user',
        component: UserComponent,
        data: { authority: AuthorityEnum.ADMIN },
        canMatch: [authorizationGuard],
        children: [
            {
              path: '', component: DashboardComponent
            },
            {
              path:'blog-editor', component: BlogEditorComponent,
              children: [
                {
                  path: '', component: ArticlesListComponent
                },
                {
                  path:'article', component: ArticleEditorComponent
                }
              ]
            }
          ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'professional-details',
        component: ProfessionalDetailsComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: 'not-authorized',
        component: NotAuthorizedComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
