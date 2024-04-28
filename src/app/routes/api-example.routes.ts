import { ApiExampleHomeComponent } from '../pages/api-example/api-example-home/api-example-home.component';
import { RestApiPostComponent } from '../pages/api-example/rest-api/rest-api-post/rest-api-post.component';
import { RestApiPutComponent } from '../pages/api-example/rest-api/rest-api-put/rest-api-put.component';

export const API_EXAMPLE_ROUTES = [
  { path: '', title: 'API Example', component: ApiExampleHomeComponent },
  { path: 'home', title: 'API Example', component: ApiExampleHomeComponent },
  {
    path: 'addUser',
    title: 'API Example - Add User',
    component: RestApiPostComponent,
  },
  {
    path: 'updateUser/:id',
    title: 'API Example - Update User',
    component: RestApiPutComponent,
  },
];
