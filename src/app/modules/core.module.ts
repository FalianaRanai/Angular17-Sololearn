import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ApiExampleModule } from './api-example.module';
import { LessonsModule } from './lessons.module';
import { NotesModule } from './notes.module';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LessonsModule,
    NotesModule,
    ApiExampleModule,
  ],
  exports: [LayoutComponent, MenuComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
