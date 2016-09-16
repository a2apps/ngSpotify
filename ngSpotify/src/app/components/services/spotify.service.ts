import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  private searchUrl: string;

  constructor(private _http: Http) { }
  searchMusic(artist: string){
    this.searchUrl="https://api.spotify.com/v1/search?q="+artist+"&type=artist&offset=0&limit=20&market=US";
    return this._http.get(this.searchUrl).map(res=>res.json());
  }
}
