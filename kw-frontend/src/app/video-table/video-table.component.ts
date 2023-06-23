import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  
 
})

export class VideoTableComponent {

  dataSource = YT_DATA;
  columnsToDisplay = ['name', 'characters', 'views', 'thumbnail'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: YoutubeTable | null | undefined;

}

export interface YoutubeTable {
  name: string;
  thumbnail: string;
  characters: number;
  views: string;
  description: string;
}

const YT_DATA: YoutubeTable[] = [
  {
    thumbnail: '../../assets/drip.jpeg',
    name: 'DRIP "The Dope Boy"',
    characters: 1,
    views: '2,624,640 views',
    description: `Introducing "DRIP: The Dope Boy" – an electrifying YouTube series featuring Kountry Wayne as the charismatic character DRIP, also known as "The Dope Boy". This captivating storyline takes viewers on a thrilling journey into the world of DRIP, a larger-than-life figure immersed in the underground street culture. With Kountry Wayne's magnetic presence and undeniable talent, DRIP comes to life in a series of episodes filled with high-stakes drama, intense action, and unexpected twists. From navigating dangerous situations to building his empire, DRIP's captivating story unfolds, captivating audiences with its gripping narrative and unforgettable moments. Step into the thrilling world of "DRIP: The Dope Boy" and get ready for an adrenaline-fueled ride like no other.`,
  },
  {
    thumbnail: '../../assets/buddy.jpeg',
    name: 'Buddy "The Sugar Daddy"',
    characters: 1,
    views: 'Over 1M',
    description: `Introducing "Buddy: The Sugar Daddy" – a captivating YouTube storyline featuring Kountry Wayne in the role of Buddy, a charismatic and generous character who embraces the lavish lifestyle of a sugar daddy. With an impressive compilation of 36 episodes spanning over 2 hours, this YouTube series takes viewers on a thrilling journey filled with laughter, unexpected twists, and heartwarming moments. As Buddy navigates the ups and downs of his sugar daddy adventures, audiences are treated to an entertaining and unforgettable experience. Explore the world of Buddy, his unique personality, and the intriguing situations he encounters in this remarkable YouTube compilation.`,
  },
  {
    thumbnail: '../../assets/libby.jpeg',
    name: 'Kountry Wayne & Libby "Mad About You"',
    characters: 2,
    views: 'Over 1M',
    description: `Introducing "Mad About You" – a hilarious comedy series starring Kountry Wayne and Libby. This uproarious YouTube storyline follows the comedic adventures of the lovable couple as they navigate the ups and downs of their relationship. With their impeccable comedic timing and infectious energy, Kountry Wayne and Libby bring the laughs in every episode. From side-splitting misunderstandings to wacky misadventures, "Mad About You" is guaranteed to keep audiences in stitches. Get ready for a comedy rollercoaster filled with hilarious antics, zany situations, and laugh-out-loud moments. Join Kountry Wayne and Libby on this sidesplitting journey that will have you hooked from the first laugh. Get ready to be mad about "Mad About You"!`,
  },
  
];
