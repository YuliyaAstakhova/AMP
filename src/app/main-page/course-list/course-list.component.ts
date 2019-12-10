import { Component, OnInit  } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CourseInterface from 'app/core/course/courseInterface';
import { CoursesService } from 'app/core/services/courses/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less'],
  providers: [ CoursesService ],
})
export class CourseListComponent implements OnInit {
  constructor(private coursesService: CoursesService) { }

  public courses: CourseInterface[];
  // public courses: CourseInterface[] = [];

  public searchQuery: string = '';

  ngOnInit() {
    this.courses = this.coursesService.getList();
  }

  public setQuery(searchQuery):void {
    console.log('setQuery:', searchQuery);
    this.searchQuery = searchQuery;
  }

  public add():void {
    console.log('add');
  }

  public onCourseDelete(course: CourseInterface): void {
    if (prompt(`Do you realy want to delete course ${course.title}? (type "y" or "n")`, 'y') === 'y') {
        this.coursesService.removeItem(course.id);
        this.courses = this.coursesService.getList();
    }
  }

  public loadMore(): void {
    console.log('load more clicked!');
  }
}
