import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { InfoComponent } from './componentes/info/info.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  // Esto es la ruta raiz ( es como si escribieramos solo localhost4200)
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  //
{ path: 'informacion', component: InfoComponent, canActivate: [RandomGuard]},
{ path: 'about', redirectTo: 'home'},
{ path: 'home', component: AboutComponent},
{ path: 'contacto', component: ContactComponent},
{ path: 'horarios', component: HorariosComponent},
// todo lo que se vea en una ruta despues de ":" significa que se puede modificar.
{ path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children:[
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'curriculum', component: CurriculumComponent}

]},
  // esto es la ruta comodin (en caso de que escriban un url dentro del localhost inexistente)
  { path: '**', redirectTo: 'contacto'}
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
