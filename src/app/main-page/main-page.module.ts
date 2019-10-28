import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ CourseComponent, CourseListComponent, MainPageComponent ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    FormsModule,
    SharedModule
  ],
  exports: [ MainPageComponent ],
})
export class MainPageModule { }
