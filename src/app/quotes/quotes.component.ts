import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'Quotes App';
  quotes: Quote [] = [
   
   new Quote (1, 'Ashley',"Inspirational",'The purpose of our lives is to be happy.','Dalai Lama',new Date(2019,25,5),0,0),
   new Quote (2, 'Tony',"Inspirational",'Be the change that you wish to see in the world.','Mahatma Gandhi',new Date(2020,19,2),0,0),
   new Quote (3, 'Jazan',"Inspirational",'Without music, life would be a mistake.','Friedrich Nietzsche',new Date(2020,6,2),0,0),
   new Quote (4, 'Melissa',"Inspirational","I have not failed. I've just found 10,000 ways that won't work.",'Thomas A. Edison',new Date(2019,22,8),0,0),
   new Quote (5, 'Mike',"Inspirational",'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.','Albert Einstein',new Date(2019,11,1),0,0),
   new Quote (6, 'Jessica',"Inspirational",'It is never too late to be what you might have been.','George Eliot',new Date(2013,18,9),0,0),
   new Quote (7, 'Eddy',"Inspirational",'There is no greater agony than bearing an untold story inside you.','Maya Angelou',new Date(2016,28,6),0,0),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
