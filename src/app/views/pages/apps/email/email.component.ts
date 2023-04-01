import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  public isAsideNavCollapsed = true;

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

}
