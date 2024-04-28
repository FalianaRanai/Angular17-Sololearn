import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LessonsComponent } from '../pages/lessons/lessons.component';
import { ComponentIntegrationModule } from './component-integration.module';
import { EventsModule } from './events.module';
import { ForIfModule } from './for-if.module';
import { FormModuleModule } from './form-module.module';
import { NotesModule } from './notes.module';
import { ReactiveFormModuleModule } from './reactive-form-module.module';
import { RoutingModule } from './routing.module';
import { SetupModule } from './setup.module';
import { StructureFichierModule } from './structure-fichier.module';
import { TemplatingModule } from './templating.module';

@NgModule({
  declarations: [LessonsComponent],
  imports: [
    CommonModule,
    SetupModule,
    StructureFichierModule,
    TemplatingModule,
    ComponentIntegrationModule,
    EventsModule,
    ForIfModule,
    FormModuleModule,
    ReactiveFormModuleModule,
    NotesModule,
    RoutingModule,
  ],
  exports: [LessonsComponent],
})
export class LessonsModule {}
