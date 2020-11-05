import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/header/header.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  counter = 95;
  animate = false;

  constructor(private headerService: HeaderService) {
    this.headerService.setInitialRoute('donate');
    this.attachAnimate();
  }

  ngOnInit(): void {
  }

  private attachAnimate(): void {
    this.animate = true;
    setTimeout(() => {
      this.counter++;
      this.animate = false;
      setTimeout(() => {
        if (this.counter < 200) {
          this.attachAnimate();
        }
      }, 750);
    }, 250);
  }

}
