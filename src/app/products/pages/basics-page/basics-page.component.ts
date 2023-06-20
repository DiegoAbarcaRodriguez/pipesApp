import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  nameUpper: string = 'DIEGO';
  nameLower: string = 'diego';
  fullName: string = 'dIeGO';

  customDate: Date = new Date();
}
