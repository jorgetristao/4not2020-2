import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  //Nome da entidade no plural
  alunos : any = []
  
  //Quais colunas serão exibidas e qual a ordem
  displayedColumns: string[] = ['nome', 'cpf', 'rg', 'endereco', 'telefone', 'email']

  //Injeção de dependência ou inversão de controle
  constructor(private alunoSrv: AlunoService) { }

  async ngOnInit() {
      this.alunos = await this.alunoSrv.listar()
      console.log(this.alunos)
  }

}
