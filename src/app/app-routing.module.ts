import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { GalimageComponent } from './galimage/galimage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  // { path: '', component: HomepageComponent , pathMatch: 'full' },
  { path: '', component: HomepageComponent  , pathMatch: 'full'},
  { path: 'services', component: ServicesComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  { path: 'gallery', component: SidebarComponent, children: [{path: ':name', component: GalimageComponent}] },
    // {path: 'gallery/:name', component: GalimageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full'  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: HomepageComponent},
   { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
