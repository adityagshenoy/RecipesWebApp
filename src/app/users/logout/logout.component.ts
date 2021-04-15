import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedinemitService } from 'src/app/Services/loggedinemit.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private loggedinemitService:LoggedinemitService) { }

  ngOnInit(): void {
    //sessionStorage.setItem("isLoggedin", "false");         
    // sessionStorage.setItem("UserId", null );
    //         sessionStorage.setItem("Firstname", null );
    //         sessionStorage.setItem("Lastname", null );
this.loggedinemitService.setloginsessionflag(false);
this.loggedinemitService.setloginsession(null,null,null);

    this.router.navigate([""]);

  }

}
