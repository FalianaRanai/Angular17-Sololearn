import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from '../pages/lessons/events/events.component';

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule],
  exports: [EventsComponent],
})
export class EventsModule {}
