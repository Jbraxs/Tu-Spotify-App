import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  newSongs: any [] = [];
  loading: boolean;

  error: boolean; 
  messageError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.newSongs = data;
          this.loading = false;
        }, (errorServicio) => {

          this.loading = false;
          this.error = true;
          this.messageError = errorServicio.error.error.message;
        });


  }

}
