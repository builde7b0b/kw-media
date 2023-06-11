import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `
    <div class="hero-section">
      <div class="youtube-grid">
        <div class="card-container" *ngFor="let video of videos">
          <mat-card class="example-card youtube-video">
            <mat-card-header>
              <div mat-card-avatar class="example-header-image"></div>
              <mat-card-title>{{ video.title }}</mat-card-title>
              <mat-card-subtitle>{{ video.subtitle }}</mat-card-subtitle>
            </mat-card-header>
            <img mat-card-image [src]="video.imageUrl" alt="Photo of {{ video.title }}">
            <mat-card-content>
              <p>{{ video.description }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button>LIKE</button>
              <button mat-button>SHARE</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>

      <div class="hero-text">
        <h2>"Jesus Is Poppin!"</h2>
        <a routerLink="/videos" class="cta-button mat-raised-button mat-primary">Watch My Latest Comedy Video</a>
      </div>
    </div>
  `,
  styles: [`
  .youtube-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .card-container {
    display: flex;
  }
`],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'white'},
    {text: 'Two', cols: 1, rows: 6, color: 'white'},
    {text: 'Three', cols: 1, rows: 8, color: 'white'},
    {text: 'Four', cols: 2, rows: 6, color: 'grey'},
  ];

  videos = [
    {
      title: 'When Whitney tells Wayne she seen Amber at Sarah’s house!',
      videoUrl: 'https://www.youtube.com/watch?v=WXEg620kqBw',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/WXEg620kqBw/mqdefault_6s.webp?du=3000&sqp=CIz6lqQG&rs=AOn4CLBE8qM8HvBmr-uEuUIiHkohc-YQFw'
    },
    {
      title: 'When Tatiana plots on Mike in a good way!',
      videoUrl: 'https://www.youtube.com/watch?v=xdPeQPikAn0',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/xdPeQPikAn0/mqdefault_6s.webp?du=3000&sqp=COCbl6QG&rs=AOn4CLBsQXibjmsQsHkz8Yqi_5U98phbxQ'
    },
    {
      title: 'Alec shows Brittany another side when the fine detective shows up',
      videoUrl: 'https://www.youtube.com/watch?v=vDM6hgjbs5M',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/vDM6hgjbs5M/mqdefault_6s.webp?du=3000&sqp=CPL0lqQG&rs=AOn4CLAScV3MKR-y20Ziu0C3pMsIv8eXbw'
    },
    {
      title: 'Rolonda bumps into the fine detective in the parking lot!',
      videoUrl: 'https://www.youtube.com/watch?v=kcQsrkSeGw0',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/xdPeQPikAn0/mqdefault_6s.webp?du=3000&sqp=COCbl6QG&rs=AOn4CLBsQXibjmsQsHkz8Yqi_5U98phbxQ'
    },
    {
      title: 'When Flo ask Sarah and Chantelle do the think Wayne will ever settle down!',
      videoUrl: 'https://www.youtube.com/watch?v=CzaVrA-A0q8',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/CzaVrA-A0q8/mqdefault_6s.webp?du=3000&sqp=CLPKl6QG&rs=AOn4CLA67hhrWfLq96c4zglzWflpvRLGXw'
    },
    {
      title: 'When Sarah and Flo asks Chantelle to help them write a book about Wayne!',
      videoUrl: 'https://www.youtube.com/watch?v=Uj_Bnhrkmv0',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/Uj_Bnhrkmv0/mqdefault_6s.webp?du=3000&sqp=CJTRl6QG&rs=AOn4CLC6mFuRLeU8TUQR9WAjlNf1e4AUxw'
    },
    {
      title: 'When the kids won’t let Wayne and Erica be alone! Sarah and Flo asks Chantelle to help them write a book about Wayne!',
      videoUrl: 'https://www.youtube.com/watch?v=B1IwbPDKWSo',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/B1IwbPDKWSo/mqdefault_6s.webp?du=3000&sqp=CLy3l6QG&rs=AOn4CLAx4h0187-y4NBsKMdnpPgQhjYR5Q'
    },
    {
      title: 'When Tatiana’s cleaning lady walks in on Mike and Chi Chi',
      videoUrl: 'https://www.youtube.com/watch?v=2E6EcRtk2ZU',
      description: '',
      imageUrl: 'https://i.ytimg.com/an_webp/2E6EcRtk2ZU/mqdefault_6s.webp?du=3000&sqp=CM-7l6QG&rs=AOn4CLA-naGALZ9b65GLJ6EIPSnGdYpifw'
    },
    // Add more video objects as needed
  ];

  merchProducts = [
    {
      name: '3:16 Black Letterman Jacket',
      description: 'Price: $50',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KWayne.FallCollection-72_550x825.jpg?v=1663615445'
    },
    {
      name: '3:16 Black Hoodie',
      description: 'Price: $40',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KWayne.FallCollection-58_550x825.jpg?v=1663613385'
    },
    // Add more merch products as needed
    {
      name: '3:16 Vintage Black Shirt',
      description: 'Price: $25',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KWayne.FallCollection-64_550x825.jpg?v=1663613718'
    },
    {
      name: 'Kountry Wayne: V2 Halo Yellow Hoodie of Product 2',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KWresize2_550x825.png?v=1651850645'
    },
    {
      name: 'Kountry Wayne: V2 Jesus is Poppin Halo Yellow Shorts',
      description: 'Price: $35',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KWresize5_550x825.png?v=1651850663'
    },
    {
      name: 'Kountry Wayne: White Jesus Is Poppin Mug',
      description: 'Price: $14',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KW_2021_Mockups_Web_0010_Mug_550x825.jpg?v=1617295570'
    },
    {
      name: 'Kountry Wayne: Mint Jesus is Poppin Notebook',
      description: 'Price: $14',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/KW_2021_Mockups_Web_0005_Notebook1_550x825.jpg?v=1617295422'
    },
    {
      name: '"Jesus Is Poppin" Pink Hoodie"',
      description: 'Description of Product 2',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/kwayne-jip-pink-lifestyle3_550x825.jpg?v=1678900128'
    },
    {
      name: '"Jesus Is Poppin" Pink Bucket Hat',
      description: 'Price: $25',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0503/7031/4423/products/kwayne-jip-pink-lifestyle3_a3300d35-c493-4f0f-9878-422fda27b8f8_550x825.jpg?v=1676400928'
    },
  ];

}
