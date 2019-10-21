// export interface CourseInterface {
//     id: string;
//     title: string;
//     creationDate: Date;
//     duration: number;
//     description: string;
// };

// export interface UserInterface {
//     id: string;
//     firstName: string;
//     lastName: string;
// };
//
// export class Course implements CourseInterface {
//   id = `${(+new Date).toString(16)}`;
//   creationDate = new Date();
//   title;
//   duration;
//   description;
//
//   constructor(title: string, duration: number, description: string) {
//     this.title = title;
//     this.duration = duration;
//     this.description = description;
//   }
// }

// export class User implements UserInterface {
//   id = `${(+new Date).toString(16)}`;
//   firstName;
//   lastName;
//
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// export const types = { User, Course };

// const testUser = new User('firstName', 'lastName');
// console.log(testUser);
