import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import { YoutubeVidsComponent } from './youtube-vids/youtube-vids.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CharactersComponent } from './characters/characters.component';
import { StorylinesComponent } from './storylines/storylines.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { VideoTableComponent } from './video-table/video-table.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VideosComponent,
    ContactComponent,
    YoutubeVidsComponent,
    SocialIconsComponent,
    FooterComponent,
    CharactersComponent,
    StorylinesComponent,
    MenuBarComponent,
    VideoTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,
    NgFor,
    MatExpansionModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
