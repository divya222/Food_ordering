import { NgModule } from '@angular/core';
import { MaterialComponent } from '../../projects/material/src/lib/material.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    MatCheckboxModule
  ],
  exports: [MaterialComponent]
})
export class MaterialModule { }
