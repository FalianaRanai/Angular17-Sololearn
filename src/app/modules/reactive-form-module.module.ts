import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormModuleComponent } from '../pages/lessons/reactive-form-module/reactive-form-module.component';

@NgModule({
  declarations: [ReactiveFormModuleComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormModuleComponent],
})
export class ReactiveFormModuleModule {}
