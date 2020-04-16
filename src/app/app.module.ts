import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { LoginComponent } from "./Components/login/login.component";
import { GraphicsComponent } from "./Components/graphics/graphics.component";
import { RouterModule, Routes } from "@angular/router";
import { GeneralComponent} from "./Components/Views/general/general.component"
import { GestionTecnologiaBiomedicaComponent } from './Components/Views/gestion-tecnologia-biomedica/gestion-tecnologia-biomedica.component';
import { LeftMenuComponent } from './Components/left-menu/left-menu.component';
import { Costos1Component } from './Components/Views/costos1/costos1.component';
import { Costos2Component } from './Components/Views/costos2/costos2.component';
import { Eficiencia1Component } from './Components/Views/eficiencia1/eficiencia1.component';
import { Eficiencia2Component } from './Components/Views/eficiencia2/eficiencia2.component';
import { DisponibilidadComponent } from './Components/Views/disponibilidad/disponibilidad.component';
import { TiempoComponent } from './Components/Views/tiempo/tiempo.component';
import { RightMenuComponent } from './Components/right-menu/right-menu.component';
import { Costos1ExcelComponent } from './Components/ViewsExcel/costos1-excel/costos1-excel.component';
import { Costos2ExcelComponent } from './Components/ViewsExcel/costos2-excel/costos2-excel.component';
import { DisponibilidadExcelComponent } from './Components/ViewsExcel/disponibilidad-excel/disponibilidad-excel.component';
import { Eficiencia1ExcelComponent } from './Components/ViewsExcel/eficiencia1-excel/eficiencia1-excel.component';
import { Eficiencia2ExcelComponent } from './Components/ViewsExcel/eficiencia2-excel/eficiencia2-excel.component';
import { GeneralExcelComponent } from './Components/ViewsExcel/general-excel/general-excel.component';
import { GestionTecnologicaBiomedicaExcelComponent } from './Components/ViewsExcel/gestion-tecnologica-biomedica-excel/gestion-tecnologica-biomedica-excel.component';
import { TiempoExcelComponent } from './Components/ViewsExcel/tiempo-excel/tiempo-excel.component';
const appRoutes: Routes = [
  { path: "", component: GeneralComponent },
  { path: "inicio", component: LoginComponent },
  { path: "grafica", component: GraphicsComponent },
  { path: "General", component: GeneralComponent},
  { path: "GestionTecnologiaBiomedica", component: GestionTecnologiaBiomedicaComponent},
  { path: "Costos1", component: Costos1Component},
  { path: "Costos2", component: Costos2Component},
  { path: "Eficiencia1", component: Eficiencia1Component},
  { path: "Eficiencia2", component: Eficiencia2Component},
  { path: "Disponibilidad", component: DisponibilidadComponent},
  { path: "Tiempo", component: TiempoComponent},
  { path: "Principal", component: LeftMenuComponent},
  { path: "GeneralExcel", component: GeneralExcelComponent},
  { path: "GestionTecnologiaBiomedicaExcel", component: GestionTecnologicaBiomedicaExcelComponent},
  { path: "Costos1Excel", component: Costos1ExcelComponent},
  { path: "Costos2Excel", component: Costos2ExcelComponent},
  { path: "Eficiencia1Excel", component: Eficiencia1ExcelComponent},
  { path: "Eficiencia2Excel", component: Eficiencia2ExcelComponent},
  { path: "DisponibilidadExcel", component: DisponibilidadExcelComponent},
  { path: "TiempoExcel", component: TiempoExcelComponent}



];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    GraphicsComponent,
    GestionTecnologiaBiomedicaComponent,
    GeneralComponent,
    LeftMenuComponent,
    Costos1Component,
    Costos2Component,
    Eficiencia1Component,
    Eficiencia2Component,
    DisponibilidadComponent,
    TiempoComponent,
    RightMenuComponent,
    Costos1ExcelComponent,
    Costos2ExcelComponent,
    DisponibilidadExcelComponent,
    Eficiencia1ExcelComponent,
    Eficiencia2ExcelComponent,
    GeneralExcelComponent,
    GestionTecnologicaBiomedicaExcelComponent,
    TiempoExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
