import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
    @Input()
    smallCardPicture:string = ""
    @Input()
    smallCardTitle:string = ""
    @Input()
    smallCardResume:string = ""  
    @Input()
    id:string = "0";
  
  
  constructor(){}
}
