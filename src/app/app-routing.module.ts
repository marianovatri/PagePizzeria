import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { HorariosComponent } from './componentes/horarios/horarios.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home'},

  { path: 'about', redirectTo: 'home'},
  { path: 'home', component: AboutComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'horarios', component: HorariosComponent},
  { path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
