import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BlogComponent } from '@components/blog/blog.component';
import { ProfessionalDetailsComponent } from '@components/professional-details/professional-details.component';
import { ErrorComponent } from '@components/error/error.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { NotAuthorizedComponent } from '@components/not-authorized/not-authorized.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'professional-details', component: ProfessionalDetailsComponent
    },
    {
        path: 'error', component: ErrorComponent
    },
    {
        path: 'not-authorized', component: NotAuthorizedComponent
    },
    {
        path: 'not-found', component: NotFoundComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
