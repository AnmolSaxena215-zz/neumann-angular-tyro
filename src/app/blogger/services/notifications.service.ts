import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Notifications{
  notifications : Array<String>
}
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private http : HttpClient
  ) { }

  getNotifications() : Observable<Notifications[]>{
    return this.http.get<Notifications[]>('https://tyro-neumann-project.herokuapp.com/user/notifications')
  }
}
