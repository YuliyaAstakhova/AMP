import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from 'app/core/course/courseInterface';

@Pipe({
  name: 'filterCources'
})
export class FilterCourcesPipe implements PipeTransform {

  transform(courses: CourseInterface[], query: string): CourseInterface[] {
    return courses.filter(({title}) => title.includes(query));
  }

}
