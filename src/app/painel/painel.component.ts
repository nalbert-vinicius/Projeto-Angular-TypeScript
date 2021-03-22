import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { throwError } from 'rxjs';
import {Frase} from '../shared/frase.model';
import {Frases} from './frases-mock';
import { ProgressoComponent } from '../progresso/progresso.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  public instrucao: string ='Traduza a frase';
  public frases: Frase[] = Frases;
  public resposta: string ='';
  public rodada: number =0;
  public progresso: number=0;
  public tentativas: number =3;
  //Enviando do component filho para o pai via Outpot
  @Output() public encerrarJogo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log("Componente destruido")
  }

  //funcao recebe um parametro do tipo Event do HTML
  //após isso e atribuido a variavel resposta o target.value(valor digitado) do componente HTML recebido por parametro
  public atualizarResposta(resposta: Event): void{
    //captura o que é digitado
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public compararResposta(): void{
      if(this.resposta == this.frases[this.rodada].frasePtBr){
        //trocando pergunta
        this.rodada++
        //atualiza barra de progresso
        this.progresso+=25;
        //limpa campo de resposta
        this.resposta='';  

        if(this.rodada==4){
          this.encerrarJogo.emit('Vitoria')
        }
      }
      else{
        this.tentativas--
        if(this.tentativas==-1){
          this.encerrarJogo.emit('Derrota')
        }
      }  
  }
}
