import UserInterface from './userInterface';

export default class User implements UserInterface {
  id = `${(+new Date).toString(16)}`;
  firstName;
  lastName;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
