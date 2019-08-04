import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shiny-ivy-app';

  ngOnInit() {
    range(1, 200).pipe(
      filter(x => x % 2 === 1),
      map(x => x + x)
    ).subscribe(x => {
      console.log('caindo aqui...');
      console.log(x);
    });
  }
}
