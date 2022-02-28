import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { GuardiaGuard } from './guardia.guard';
import { NuovoUtentePage } from './pages/nuovo-utente.page';
import { DeactivateGuard } from './deactivate.guard';

const routes:Route[] = [
  {
    path:"",
    component:HomePage
  },
  {
    path:"active-posts",
    component:ActivePostsPage
  },
  {
    path:"inactive-posts",
    canActivate:[GuardiaGuard],
    component:InactivePostsPage
  },
  {
    path:"active-posts/:id",
    component:PostDetailsPage
  },
  {
    path:"inactive-posts/:id",
    component:PostDetailsPage
  },
  {
    path:"users",
    component:UsersPage,
    canActivateChild:[GuardiaGuard],
    children:[
      {
        path:":id",
        component:UsersDetailsPage
      }
    ]
  },
  {
    path:"nuovo-utente",
    component:NuovoUtentePage,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage,
    NuovoUtentePage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
