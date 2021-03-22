import { Component } from '@angular/core';
//sempre que for criar um componente fazer o import da classe component

@Component({
    //decorator
    //função serve para que o angular entenda que essa classe é um componente

    //selector indica qual rotulo devo usar dentro do template ou seja ele cria uma tag dentro do html
    //cria uma instacia que pode ser chamada dentro do html
    selector: 'app-topo',
    //indica qual templete usar nesse componente
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    //template: '<p>Esse é o componente</p>'
})
export class TopoComponent{
    // Data binding One-Way-Biding
    // string interpolation
    public titulo: string ='Aprendendo Inglês';
}