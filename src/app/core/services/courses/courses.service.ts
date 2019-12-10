import { Injectable } from '@angular/core';
import CourseInterface from 'app/core/course/courseInterface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: CourseInterface[] = [
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

  public createCourse(course: CourseInterface): void {
    this.courses.push(course);
  }

  public getList(): CourseInterface[] {
    return [...this.courses];
  }

  public getItemById(query: string): CourseInterface {
    return this.courses.find(({ id }) => id === query );
  }

  public updateItem(courseId: string, newItem: CourseInterface): void {
    const index = this.courses.findIndex(({ id }) => id === courseId );

    if (index !== -1) {
      this.courses.splice(index, 1, newItem);
    }
  }

  public removeItem(courseId: string): void {
    const index = this.courses.findIndex(({ id }) => id === courseId );
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
