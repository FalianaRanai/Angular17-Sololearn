import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderExampleComponent } from '../components/header-example/headerExample.component';
import { ComponentIntegrationComponent } from '../pages/lessons/component-integration/component-integration.component';

@NgModule({
  declarations: [ComponentIntegrationComponent, HeaderExampleComponent],
  imports: [CommonModule],
  exports: [ComponentIntegrationComponent, HeaderExampleComponent],
})
export class ComponentIntegrationModule {}
