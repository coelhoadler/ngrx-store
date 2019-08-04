import { Tutorial } from './../models/tutorial.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.tutorials$ = store.select('tutorial');
  }

ngOnInit() { }

delTutorial(index) {
  this.store.dispatch(new TutorialActions.RemoveTutorial(index));
}

}
