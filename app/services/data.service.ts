import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1002:{acno:1002,username:"chinu",password:"abc123",balance:0},
    1003:{acno:1003,username:"ponu",password:"abc123",balance:0},
    1004:{acno:1004,username:"manu",password:"abc123",balance:0},
}
}
