import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormsModuleComponent } from '../pages/lessons/forms-module/forms-module.component';

@NgModule({
  declarations: [FormsModuleComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModuleComponent],
})
export class FormModuleModule {}
