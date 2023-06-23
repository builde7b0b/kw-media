import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { CharactersComponent } from './characters/characters.component';
import { StorylinesComponent } from './storylines/storylines.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'storyline', component: StorylinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
