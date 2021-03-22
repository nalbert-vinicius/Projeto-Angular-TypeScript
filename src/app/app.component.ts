import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoemAndamento: boolean = true;
  public encerramento: string;

  public encerrarJogo(tipo: string): void{
    this.jogoemAndamento = false;
    this.encerramento = tipo
  }

  public reiniciarJogo(): void{
    this.jogoemAndamento = true;
  }

}
