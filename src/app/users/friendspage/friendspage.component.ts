import { Component, OnInit } from '@angular/core';
import { UsersrvcService } from 'src/app/Services/usersrvc.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/RecipeModel';
import { mergeMap, take } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-friendspage',
  templateUrl: './friendspage.component.html',
  styleUrls: ['./friendspage.component.css']
})
export class FriendspageComponent implements OnInit {

  id:string;
  friendsid:[string];
  friendsuser:[User] = [] as any;
  friendsuserfinal: User[];
  behaviorsubject:BehaviorSubject<User[]> = [] as any;;
  friendsuserobservable:Observable<User[]> = [] as any;
  constructor(private _usrvc:UsersrvcService, private route:ActivatedRoute) { 
  }

  userfor:User = new User();

  ngOnInit(): void {
 
 this.id = this.route.parent.snapshot.params["id"];

    this.friendsuser= [] as any;
    this.friendsuserobservable =  this._usrvc.getUser(this.id).pipe(
      mergeMap(userfetched => {
                                this.friendsuser= [] as any;
                                userfetched.Friends.forEach(friendid => this._usrvc.getUser(friendid).subscribe(fetheceduser => this.friendsuser.push(fetheceduser)))
                                return new Observable<User[]>(observer => observer.next(this.friendsuser));
                              }
              )
    )//.subscribe(fethedfriends => this.friendsuserfinal = fethedfriends)



    // this._usrvc.getUser(this.id).subscribe(temp => 
    //     {this.userfor = temp;
    //       this.friendsid = this.userfor.Friends;
    //       for (let index = 0; index < this.friendsid.length; index++) {
    //         var temuser:User;
    //         var tempid = this.friendsid[index];
    //          this._usrvc.getUser(tempid).subscribe( tmp => {temuser=tmp;
    //                                                    this.friendsuser.push(temuser)});
            
    //       }
    //     });

  }
}
