import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core.module';
import { ApiExampleComponent } from './pages/api-example/api-example.component';
import { RestApiGetComponent } from './pages/api-example/rest-api/rest-api-get/rest-api-get.component';
import { RestApiPostComponent } from './pages/api-example/rest-api/rest-api-post/rest-api-post.component';
import { RestApiComponent } from './pages/api-example/rest-api/rest-api.component';
import { SetupJsonServerInstallerCreerFichierComponent } from './pages/api-example/setup-json-server/setup-json-server-installer-creer-fichier/setup-json-server-installer-creer-fichier.component';
import { SetupJsonServerInstallerDemarrerServerComponent } from './pages/api-example/setup-json-server/setup-json-server-installer-demarrer-server/setup-json-server-installer-demarrer-server.component';
import { SetupJsonServerInstallerJsonServerComponent } from './pages/api-example/setup-json-server/setup-json-server-installer-json-server/setup-json-server-installer-json-server.component';
import { SetupJsonServerComponent } from './pages/api-example/setup-json-server/setup-json-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiExampleComponent,
    SetupJsonServerComponent,
    SetupJsonServerInstallerJsonServerComponent,
    SetupJsonServerInstallerCreerFichierComponent,
    SetupJsonServerInstallerDemarrerServerComponent,
    RestApiComponent,
    RestApiGetComponent,
    RestApiPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
