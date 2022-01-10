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
    {id:1, name:'Ashley',title:"Inspirational",quote:'The purpose of our lives is to be happy.',author:'Dalai Lama'},
    {id:2, name:'Tony',title:"Inspirational",quote:'Be the change that you wish to see in the world.',author:'Mahatma Gandhi'},
    {id:3, name:'Jazan',title:"Inspirational",quote:'Without music, life would be a mistake.',author:'Friedrich Nietzsche'},
    {id:4, name:'Melissa',title:"Inspirational",quote:"I have not failed. I've just found 10,000 ways that won't work.",author:'Thomas A. Edison'},
    {id:5, name:'Mike',title:"Inspirational",quote:'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',author:'Albert Einstein'},
    {id:6, name:'Jessica',title:"Inspirational",quote:'It is never too late to be what you might have been.',author:'George Eliot'},
    {id:7, name:'Eddy',title:"Inspirational",quote:'There is no greater agony than bearing an untold story inside you.',author:'Maya Angelou'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
