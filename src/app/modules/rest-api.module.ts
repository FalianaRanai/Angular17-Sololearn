import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RestApiGetComponent } from '../pages/api-example/rest-api/rest-api-get/rest-api-get.component';
import { RestApiPostComponent } from '../pages/api-example/rest-api/rest-api-post/rest-api-post.component';
import { RestApiPutComponent } from '../pages/api-example/rest-api/rest-api-put/rest-api-put.component';
import { RestApiComponent } from '../pages/api-example/rest-api/rest-api.component';

@NgModule({
  declarations: [
    RestApiComponent,
    RestApiGetComponent,
    RestApiPostComponent,
    RestApiPutComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    RestApiComponent,
    RestApiGetComponent,
    RestApiPostComponent,
    RestApiPutComponent,
  ],
})
export class RestApiModule {}
