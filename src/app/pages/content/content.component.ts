import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  contentCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcvsnOcF0qztWlB4zcOJJaqlsyGl4M27U8Q&s"
  contentTitle:string = "4.000 vezes Curry!"
  contentDescription:string = "O super astro do Golden State Warriors, Stephen Curry, continua a bater recorde e redefinir os limites do basquete. Bem como, nesta quinta-feira (13), ele se tornou o primeiro jogador da NBA a atingir a impressionante marca de 4.000 cestas de três pontos, um feito que ele próprio nunca imaginou ser possível."

  constructor(){}
}
