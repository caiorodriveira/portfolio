import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
/*material*/
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { FormacaoAcademicaComponent } from './pages/formacao-academica/formacao-academica.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CertificadoDialogComponent } from './dialogs/certificado-dialog/certificado-dialog.component';
import { ExperienciaProfissionalComponent } from './pages/experiencia-profissional/experiencia-profissional.component';
import { ApresentacaoComponent } from './pages/apresentacao/apresentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FormacaoAcademicaComponent,
    CertificadoDialogComponent,
    ExperienciaProfissionalComponent,
    ApresentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
