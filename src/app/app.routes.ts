import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BlogComponent } from '@components/blog/blog.component';
import { ProfessionalDetailsComponent } from '@components/professional-details/professional-details.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'professional-details', component: ProfessionalDetailsComponent
    }
];
