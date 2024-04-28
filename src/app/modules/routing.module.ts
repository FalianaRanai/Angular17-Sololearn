import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { RoutingComponent } from '../pages/lessons/routing/routing.component';

@NgModule({
  declarations: [RoutingComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [RoutingComponent],
})
export class RoutingModule {}
