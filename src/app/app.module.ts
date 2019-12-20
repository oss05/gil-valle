import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/01-home/home.component';
import { NosotrosComponent } from './pages/02-nosotros/nosotros.component';
import { GobiernoCorporativoComponent } from './pages/03-gobierno-corporativo/gobierno-corporativo.component';
import { LitigioEstrategicoComponent } from './pages/04-litigio-estrategico/litigio-estrategico.component';
import { LaboralComponent } from './pages/05-laboral/laboral.component';
import { PropiedadIndustrialComponent } from './pages/06-propiedad-industrial/propiedad-industrial.component';
import { DerechosMigratoriosComponent } from './pages/07-derechos-migratorios/derechos-migratorios.component';
import { ContactoComponent } from './pages/08-contacto/contacto.component';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    GobiernoCorporativoComponent,
    LitigioEstrategicoComponent,
    LaboralComponent,
    ContactoComponent,
    PropiedadIndustrialComponent,
    DerechosMigratoriosComponent
  ],
  imports: [




BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
