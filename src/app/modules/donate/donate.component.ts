import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setInitialRoute('donate');
  }

}
