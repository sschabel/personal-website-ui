import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BlogComponent } from '@components/blog/blog.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'blog', component: BlogComponent
    }
];
