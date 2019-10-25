import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderModule } from '../header/header.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CourseComponent, CourseListComponent, MainPageComponent ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbsModule,
    FooterModule,
    FormsModule
  ],
  exports: [ MainPageComponent ],
})
export class MainPageModule { }
