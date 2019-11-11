import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from 'app/core/course/courseInterface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(courses: CourseInterface[], fieldName: string): CourseInterface[] {
    return courses.sort((prev, next) => +next[fieldName] - prev[fieldName]);
  }

}
