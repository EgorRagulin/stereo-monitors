import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./modules/pages/not-found/not-found/not-found.component";
import { HeaderComponent } from "./modules/header/header/header.component";
import { NewsComponent } from "./modules/news/news/news.component";
import { InstructionComponent } from "./modules/pages/instruction/instruction/instruction.component";
import { PicturesComponent } from "./modules/pages/pictures/pictures/pictures.component";
import { MoviesComponent } from "./modules/pages/movies/movies/movies.component";
import { ContactsComponent } from "./modules/pages/contacts/contacts/contacts.component";
import { DownloadComponent } from './modules/pages/download/download/download.component';


const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'news', component: NewsComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'download', component: DownloadComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
