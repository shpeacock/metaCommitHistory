import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  getCommits() {
    console.log('inside the service');
    this._http.get(`https://api.github.com/repos/shpeacock/particlesFun/commits?`).subscribe((res: any[]) => {
      console.log(res);
    });
  }

}
