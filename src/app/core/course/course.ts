import CourseInterface from './courseInterface';

export default class Course implements CourseInterface {
  id = `${(+new Date).toString(16)}`;
  creationDate = new Date();
  title;
  duration;
  description;

  constructor(title: string, duration: number, description: string) {
    this.title = title;
    this.duration = duration;
    this.description = description;
  }
}
