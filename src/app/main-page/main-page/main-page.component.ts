import { Component, OnInit } from '@angular/core';
import Course from '../../core/course/course';
import User from '../../core/user/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const testCourse = new Course('course title', 1, 'course description', true);
    const testUser = new User('firstName', 'lastName');
  }
}
