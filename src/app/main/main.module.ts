import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ContentComponent } from './content/content.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ContentComponent, CourseComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
