import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  //property bindig usado para alterações diretas nos atributos do HTML
  public coracaoVazio: String ='../../assets/coracao_vazio.png';
  public coracaoCheio: String ='../../assets/coracao_cheio.png';
  @Input() public tentativas: number;
 
  public coracoes: Coracao[] =[
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];



  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    if(this.tentativas!= this.coracoes.length){
      let i =this.tentativas
      this.coracoes[i].cheio = false
    }  
  }
}
