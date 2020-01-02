import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _api: GithubService) { }

  ngOnInit() {
    this.getCommits();
  }

  getCommits() {
    console.log('inside get commits');
    this._api.getCommits();
    // .then(output => { console.log(output) })
    // .catch(error => { console.log(error) })
  }

}
