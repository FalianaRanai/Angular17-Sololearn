import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiExampleComponent } from '../pages/api-example/api-example.component';
import { RestApiModule } from './rest-api.module';
import { SetupJsonServerModule } from './setup-json-server.module';

@NgModule({
  declarations: [ApiExampleComponent],
  imports: [CommonModule, SetupJsonServerModule, RestApiModule],
  exports: [ApiExampleComponent],
})
export class ApiExampleModule {}
