import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }
  public getUsers(): Array<any>{
    return [
      {firstName: 'Almat', lastName: 'Mustafaev'},
      {firstName: 'Alihan', lastName: 'Genii'},
      {firstName: 'Zhandos', lastName: 'Emex'}
    ]
  }
  public getAdmins(): Array<any>{
    return [
      {firstName: 'Hank', lastName: 'Mank'},
      {firstName: 'Serik', lastName: 'Ahmetovic'},
      {firstName: 'Leo', lastName: 'Capro'}
    ]
  }
  public getModerators(): Array<any>{
    return [
      {firstName: 'John', lastName: 'Travolta'},
      {firstName: 'Will', lastName: 'Smith'},
      {firstName: 'Dead', lastName: 'Inside'}
    ]
  }

}
