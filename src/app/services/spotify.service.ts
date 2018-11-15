import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Listo para dar caña");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQASSPzdWgeHQPr3NMLRWoG6Zz7r6EIq1v0IGkO29gtVW8FJQb15OYcbKPDrjYqfjfXtMGThf3BXQIyt1p1wfdiW5NTC5pb0tJ5Y2OVcyWs-DtYCk5S2IQBUgXyg_zs5P4TJ5QPLyNA"
    });

    return this.http.get(url, { headers });
  }
  // Servicio de lista de artistas
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe(map(data => data["albums"].items));

  }
  // Servicio busqueda de artistas
  getArtists(finished: string) {
      return this.getQuery(`search?q=${finished}&type=artist&market=US&limit=15&offset=0`)
                  .pipe(map(data => data["artists"].items));


  }
  // Servicio información de un artista
  getArtist( id: string) {
    return this.getQuery(`artists/${id}`);

  }

  // Servicio de las mejores canciones de un artista
  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data => data["tracks"]));
  }


  //Servicio de mi perfil
  getMeplaylists() { 
    return this.getQuery('me/playlists')
    .pipe(map (data =>  data['items']));
  
  }
}