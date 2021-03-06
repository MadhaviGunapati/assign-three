import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {      
      getUser(): any[]{
      return [
          {
          'userid' : 1,
          'username': 'Reddy',
          'emailid' : 'reddy@comcast.net',
          'phonenumber' : '+1 (100) 100-1001'
        },
        {
          'userid' : 2,
          'username': 'Madhavi',
          'emailid' : 'madhavi@comcast.net',
          'phonenumber' : '+1 (123) 100-1001'
        },
        {
          'userid' : 3,
          'username': 'Venkat',
          'emailid' : 'venkat@aol.com',
          'phonenumber' : '+1 (199) 100-1001'
        },
        {
          'userid' : 4,
          'username': 'Krishna',
          'emailid' : 'krishna@yahoo.com',
          'phonenumber' : '+1 (177) 100-1001'
        },
        {
          'userid' : 5,
          'username': 'Akshara',
          'emailid' : 'akshara@gmail.com',
          'phonenumber' : '+1 (155) 100-1001'
        },
        {
          'userid' : 6,
          'username': 'Jahnavi',
          'emailid' : 'janu@comcast.net',
          'phonenumber' : '+1 (200) 100-1001'
        }
      ];
    }
  } 

