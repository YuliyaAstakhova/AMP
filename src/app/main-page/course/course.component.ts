import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CourseInterface from '../../core/course/courseInterface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @Input() public course: CourseInterface;
  @Output() onCourseDelete = new EventEmitter<CourseInterface>();

  public delete(): void {
      this.onCourseDelete.emit(this.course);
  }

  constructor() { }

  ngOnInit() {
    console.log('course', this.course)
  }

}
