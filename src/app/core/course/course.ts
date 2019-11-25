import CourseInterface from './courseInterface';

export default class Course implements CourseInterface {
  id = `${(+new Date).toString(16)}`;
  creationDate = new Date();
  title;
  duration;
  description;
  topRated;

  constructor(title: string, duration: number, description: string, topRated: boolean) {
    this.title = title;
    this.duration = duration;
    this.description = description;
    this.topRated = topRated;
  }
}
