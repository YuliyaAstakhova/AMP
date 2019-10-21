import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderModule } from '../header/header.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ CourseComponent, CourseListComponent, MainPageComponent ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbsModule,
    FooterModule,
  ],
  exports: [ MainPageComponent ],
})
export class MainPageModule { }
