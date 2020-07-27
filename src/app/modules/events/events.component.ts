import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  slides = [{
    url: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg'
  }, {
    url: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg'
  }, {
    url: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg'
  }, {
    url: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
