import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';

const routes: Routes = [
    //Nomes de rotas no Angular (path) não começam com barra '/'
    { path: 'aluno', component: AlunoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
