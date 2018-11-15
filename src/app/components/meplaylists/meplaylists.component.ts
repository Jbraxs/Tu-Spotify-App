import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-meplaylists',
  templateUrl: './meplaylists.component.html',
})
export class Meplaylistsomponent {

  playlists: any [] = [];

  constructor(private spotify: SpotifyService) {

    this.spotify.getMeplaylists()
        .subscribe((data: any) =>{
          console.log(data);
          this.playlists = data;
        })
   }



}
