import { Component } from '@angular/core';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  // lotsOfTabs: string[] = [
  //   'Wayne Colley',
  //   'Blake Elizabeth Rogers',
  //   'Anthony Dalton II',
  //   'Rolonda Rochelle',
  //   'Michael Gould Jr, Mike Blesss',
  //   'Jordan Jackson, Jordan',
  //   'LisaRaye McCoy',
  //   'Amber Tai',
  //   'Miya Chantelle',
  //   'Ashley Nicole',
  //   'Schelle Purcell',
  //   'Natasha Elizabeth',
  //   'Vee Lee',
  //   'Shuntel Renay',
  //   'Navv Greene',
  //   'Libby Blake',
  //   'Nefertari Jr',
  //   'Wiley Isaac Jr',
  //   'Damien Guio',
  //   'Kamberly lightsi Kim'
  // ];


  images: any[] = [
    {
    src: '../assets/Characters/kw.jpeg',
      link: '',
    },
    {
      src: '../assets/Characters/kw.jpeg',
      link: '',
    },
    {
      src: '../assets/Characters/kw.jpeg',
      link: '',
    },
    {
      src: '../assets/Characters/kw.jpeg',
      link: '',
    }
  ]

  lotsOfTabs: any[] = [
    {
      name: 'Wayne Colley',
      birthdate: 'December 9th, 1987',
      age: 34,
      bio: 'Kountry Wayne is a comedian and social media personality who was formerly a rapper. Wayne is known for his comedy content, which went viral on Facebook in 2014. He made funny, short videos about life’s inconvenient and unfortunate moments. Since 2015, Wayne has been performing stand-up comedy. As an actor, he has appeared in films such as “Brazilian Wavy” (2016), “The Turnaround” (2017), and “Holiday Heartbreak” (2020). On Instagram, he has gained 3.3 million followers, while on his YouTube channel, Wayne has garnered around 636,000 subscribers.',
      imageSrc: '../assets/Characters/kw.jpeg',
      image2: '../assets/Original.jpeg',
      image3:'../assets/39-Kountry-Wayne.jpeg',
      image4:'../assets/unnamed.jpeg',

    },
    {
      name: 'Blake Elizabeth Rogers',
      birthdate: 'September 14, 2001',
      age: 21,
      imageSrc: '../assets/Characters/blake.jpeg'
    },
    {
      name: 'Anthony Dalton II',
      birthdate: 'July 1, 1980',
      age: 42,
      imageSrc: '../assets/Characters/lovecoach.jpeg'
    },
  
    {
      name: 'Rolonda Rochelle',
      birthdate: 'September 5, 1967',
      age: 56,
      imageSrc: '../assets/Characters/ro.jpeg'
    },
    {
      name: 'Michael Gould Jr, Mike Blesss',
      birthdate: 'February 23rd, 1979',
      age: 44,
      imageSrc: '../assets/Characters/mike.jpeg'
    },
    {
      name: 'Jordan Jackson, Jordan',
      birthdate: 'June 20, 1974',
      age: 47,
      imageSrc: '../assets/Characters/jordan.jpeg'
    },
    {
      name: 'LisaRaye McCoy',
      birthdate: 'September 23rd, 1967',
      age: 54,
      imageSrc: '../assets/Characters/lisakw.jpeg'
    },
    {
      name: 'Amber Tai',
      birthdate: 'April 21, 1980',
      age: 42,
      imageSrc: '../assets/Characters/mikeamber.jpeg'
    },
    {
      name: 'Miya Chantelle',
      birthdate: 'March 25, 1990',
      age: 32,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Ashley Nicole',
      birthdate: 'August 4, 1989',
      age: 32,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Schelle Purcell',
      birthdate: 'Unknown',
      age: 48,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Natasha Elizabeth',
      birthdate: 'January 15, 1981',
      age: 42,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Vee Lee',
      birthdate: 'June 25, 1993',
      age: 30,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Shuntel Renay',
      birthdate: 'April 28, 1992',
      age: 31,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Navv Greene',
      birthdate: 'February 13, 1988',
      age: 35,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Libby Blake',
      birthdate: 'February 23, 1988',
      age: 35,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Nefertari Jr',
      birthdate: 'September 12th, 1989',
      age: 32,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Wiley Isaac Jr',
      birthdate: 'December 30, 1992',
      age: 31,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Damien Guio',
      birthdate: 'August 9th, 1988',
      age: 35,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    },
    {
      name: 'Kamberly lightsi Kim',
      birthdate: 'Unknown',
      age: 0,
      imageSrc: 'https://example.com/wayne-colley.jpg'
    }
  ]
  
  panelOpenState = false;
}
