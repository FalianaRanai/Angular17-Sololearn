import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ApiExampleHomeComponent } from '../pages/api-example/api-example-home/api-example-home.component';
import { ApiExampleComponent } from '../pages/api-example/api-example.component';
import { RestApiModule } from './rest-api.module';
import { SetupJsonServerModule } from './setup-json-server.module';

@NgModule({
  declarations: [ApiExampleComponent, ApiExampleHomeComponent],
  imports: [
    CommonModule,
    SetupJsonServerModule,
    RestApiModule,
    AppRoutingModule,
  ],
  exports: [ApiExampleComponent, ApiExampleHomeComponent],
})
export class ApiExampleModule {}
