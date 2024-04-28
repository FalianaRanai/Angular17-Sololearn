import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RestApiGetComponent } from '../pages/api-example/rest-api/rest-api-get/rest-api-get.component';
import { RestApiPostComponent } from '../pages/api-example/rest-api/rest-api-post/rest-api-post.component';
import { RestApiComponent } from '../pages/api-example/rest-api/rest-api.component';

@NgModule({
  declarations: [RestApiComponent, RestApiGetComponent, RestApiPostComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [RestApiComponent, RestApiGetComponent, RestApiPostComponent],
})
export class RestApiModule {}
