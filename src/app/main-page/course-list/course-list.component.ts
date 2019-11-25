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
  // public courses: CourseInterface[] = [];

  public courses: CourseInterface[] = [
    {
      id: 'id1',
      title: 'title1',
      creationDate: new Date('11/05/2019'),
      duration: 100,
      topRated: false,
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
      creationDate: new Date('11/20/2019'),
      duration: 200,
      topRated: false,
      description: 'description2',
    },
    {
      id: 'id3',
      title: 'title3',
      topRated: true,
      creationDate: new Date('09/25/2019'),
      duration: 30,
      description: 'description3',
    },
    {
      id: 'id4',
      title: 'title4',
      topRated: false,
      creationDate: new Date('10/25/2019'),
      duration: 45,
      description: 'description3',
    },
  ];

  public searchQuery: string = '';

  ngOnInit() {

  }

  public setQuery(searchQuery):void {
    console.log('setQuery:', searchQuery);
    this.searchQuery = searchQuery;
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
