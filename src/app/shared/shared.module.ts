import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { Routes, RouterModule } from '@angular/router'; */
import { PostCardComponent } from './post-card.component';
import { MaiuscoloPipe } from '../pipes/maiuscolo.pipe';


/* const routes: Routes = [
  {

  }
]; */

@NgModule({
  declarations: [
    PostCardComponent,
    MaiuscoloPipe
  ],
  imports: [
    CommonModule
/*     RouterModule.forChild(routes) */
  ],
  exports: [PostCardComponent]
})
export class SharedModule { }
