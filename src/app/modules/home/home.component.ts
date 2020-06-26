import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/components/header/header.service';
import { Widget } from 'src/app/shared/interfaces/widget.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  donationBox: Observable<Widget[]>;

  constructor(private headerService: HeaderService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.donationBox = this.homeService.getHomeWidgets();
    this.headerService.setInitialRoute('home');
  }

}
