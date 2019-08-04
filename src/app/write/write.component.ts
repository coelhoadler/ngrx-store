import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

}
