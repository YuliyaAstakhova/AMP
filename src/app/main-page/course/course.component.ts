import { Component, OnInit, Input } from '@angular/core';
import CourseInterface from '../../core/course/courseInterface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @Input() public course: CourseInterface;

  constructor() { }

  ngOnInit() {
  }

}
