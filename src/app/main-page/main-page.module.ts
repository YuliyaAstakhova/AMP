import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ContainerModule } from '../container/container.module';
import { ButtonModule } from 'app/ui/button/button.module';
import { SearchComponent } from './course-list/search/search.component';

@NgModule({
  declarations: [ CourseComponent, CourseListComponent, MainPageComponent, SearchComponent ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    ContainerModule,
    ButtonModule,
  ],
  exports: [ MainPageComponent ],
})
export class MainPageModule { }
