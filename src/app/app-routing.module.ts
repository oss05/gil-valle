import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/01-home/home.component';
import { NosotrosComponent } from './pages/02-nosotros/nosotros.component';
import { GobiernoCorporativoComponent } from './pages/03-gobierno-corporativo/gobierno-corporativo.component';
import { LitigioEstrategicoComponent } from './pages/04-litigio-estrategico/litigio-estrategico.component';
import { LaboralComponent } from './pages/05-laboral/laboral.component';
import { PropiedadIndustrialComponent } from './pages/06-propiedad-industrial/propiedad-industrial.component';
import { DerechosMigratoriosComponent } from './pages/07-derechos-migratorios/derechos-migratorios.component';
import { ContactoComponent } from './pages/08-contacto/contacto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'gobierno-corporativo', component: GobiernoCorporativoComponent },
  { path: 'litigio-estrategico', component: LitigioEstrategicoComponent },
  { path: 'laboral', component: LaboralComponent },
  { path: 'propiedad-industrial', component: PropiedadIndustrialComponent },
  { path: 'derecho-migratorio', component: DerechosMigratoriosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
