import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CourseInterface from '../../core/course/courseInterface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {
  public courses: CourseInterface[] = [
    {
      id: 'id1',
      title: 'title1',
      creationDate: new Date(),
      duration: 1,
      description: `description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1
      description1 fjgskfjls description1 krjglkrjg;krjg; description1 krjgkdescription1`,
    },
    {
      id: 'id2',
      title: 'title2',
      creationDate: new Date(),
      duration: 2,
      description: 'description2',
    },
    {
      id: 'id3',
      title: 'title3',
      creationDate: new Date(),
      duration: 3,
      description: 'description3',
    },
  ];

  ngOnInit() {

  }

  public setQuery(e):void {
    console.log('setQuery:', e);
  }

  public add():void {
    console.log('add');
  }

  public onCourseDelete(course: CourseInterface): void {
    console.log('delete course', course);
  }

  public loadMore(): void {
    console.log('load more clicked!');
  }
}
