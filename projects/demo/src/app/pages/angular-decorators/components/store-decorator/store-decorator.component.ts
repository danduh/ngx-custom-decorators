import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as movieActions from '../../actions/movies';
import {Observable} from 'rxjs';
import {Movie} from '../../../../shared/interfaces/movie';
import {getAllMovies} from '../../reducers';
import {EXAMPLE1, EXAMPLE2} from './snippets';
import {storeSelector} from 'decorators/store';


@storeSelector({allMoviesDecor$: getAllMovies})
@Component({
    selector: 'app-store-decorator',
    templateUrl: './store-decorator.component.html',
    styleUrls: ['./store-decorator.component.scss'],
})

export class StoreDecoratorComponent implements OnInit {
    public allMovies$: Observable<Movie[]>;
    public allMoviesDecor$: Observable<Movie[]>;
    public snippet1 = EXAMPLE1;
    public snippet2 = EXAMPLE2;

    constructor(private store: Store<any>) {
        this.allMovies$ = this.store.select(getAllMovies);
    }

    ngOnInit() {
        this.store.dispatch(movieActions.loadMovies({apiUrl: 'someUrl'}));

    }
}
