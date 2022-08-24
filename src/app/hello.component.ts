import { Component, Input } from '@angular/core';
import {Injectable} from '@angular/core';
//import { UsersListService } from './../service/users-list.service';
import { Resolve } from '@angular/router';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

@Injectable()
export class HelloComponent implements Resolve<any> {
  constructor(public usersListService){}
  resolve(){
    return this.usersListService.getUsers()
  }
  
  @Input() name: string;
}
