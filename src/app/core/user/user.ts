import UserInterface from './userInterface';

export default class User implements UserInterface {
  id = `${(+new Date).toString(16)}`;
  firstName;
  lastName;
  login;

  constructor(firstName: string, lastName: string, login: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
  }
}
