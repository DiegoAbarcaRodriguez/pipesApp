import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  imports: [PrimeNgModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [],
})
export class SharedModule { }
