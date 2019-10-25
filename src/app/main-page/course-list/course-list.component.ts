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
  public query = 'test';
  public courses: CourseInterface[] = [
    {
      id: 'id1',
      title: 'title1',
      creationDate: new Date(),
      duration: 1,
      description: 'description1',
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

  public find():void {
    console.log('query:', this.query);
  }

  public add():void {
    console.log('add');
  }
}
