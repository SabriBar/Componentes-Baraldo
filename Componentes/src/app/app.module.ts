import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { AreaComponent } from './componentes/area/area.component';
import { CervezaComponent } from './componentes/area/cerveza/cerveza.component';
import { AperitivoComponent } from './componentes/area/aperitivo/aperitivo.component';
import { CoctelComponent } from './componentes/area/coctel/coctel.component';
import { ComidaComponent } from './componentes/area/comida/comida.component';
import { SinAlcoholComponent } from './componentes/area/sin-alcohol/sin-alcohol.component';
import { UbicacionComponent } from './componentes/toolbar/ubicacion/ubicacion.component';
import { HorarioComponent } from './componentes/toolbar/horario/horario.component';


const appRoutes: Routes = [
  {path: 'cerveza', component: CervezaComponent},
  {path: 'aperitivo', component: AperitivoComponent},
  {path: 'coctel', component: CoctelComponent},
  {path: 'comida', component: ComidaComponent},
  {path: 'sin-alcohol', component: SinAlcoholComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: '', component: HorarioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    AreaComponent,
    CervezaComponent,
    AperitivoComponent,
    CoctelComponent,
    ComidaComponent,
    SinAlcoholComponent,
    UbicacionComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
