import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ExperienciaProfissionalComponent } from './pages/experiencia-profissional/experiencia-profissional.component';
import { FormacaoAcademicaComponent } from './pages/formacao-academica/formacao-academica.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: 'apresentacao'},
  {path: 'apresentacao' , pathMatch: 'full', component: HomeComponent},
  {path: 'formacao-academica', pathMatch: 'full', component: FormacaoAcademicaComponent},
  {path: 'experiencia-profissional', pathMatch: 'full', component: ExperienciaProfissionalComponent},
  {path: 'projetos', pathMatch: 'full', component: ProjetosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'apresentacao'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
