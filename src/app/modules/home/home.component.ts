import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  donationBox: any[] = [{
    title: 'Who we are',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro?',
    action: 'Donate now',
    icon: 'fa fa-globe'
  },
  {
    title: 'Became a donor',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro?',
    action: 'Donate now',
    icon: 'fa fa-user-circle'
  },
  {
    title: 'Participate',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro?',
    action: 'Donate now',
    icon: 'fa fa-heart'
  },
  ];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setInitialRoute('home');
  }

}
