import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForIfComponent } from '../pages/lessons/for-if/for-if.component';
import { NotesModule } from './notes.module';

@NgModule({
  declarations: [ForIfComponent],
  imports: [CommonModule, NotesModule],
  exports: [ForIfComponent],
})
export class ForIfModule {}
