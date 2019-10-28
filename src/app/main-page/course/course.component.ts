import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CourseInterface from '../../core/course/courseInterface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @Input() public course: CourseInterface;
  @Output('onCourseDelete') onCourseDeleteEvent = new EventEmitter<CourseInterface>();

  public onDelete(): void {
      this.onCourseDeleteEvent.emit(this.course);
  }

  constructor() { }

  ngOnInit() {
  }

}
