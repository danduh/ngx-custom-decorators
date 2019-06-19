import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {MoviesService} from '../services/movies.service';
import {addMovies} from '../actions/movies';


@Injectable()
export class AppEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Movie/API] Load Movies'),
        mergeMap(() => this.moviesService.getAll()
            .pipe(
                map(movies => {
                    console.log(movies);
                    return addMovies({movies});
                }),
                catchError(() => EMPTY)
            ))
        )
    );

    constructor(private actions$: Actions,
                private moviesService: MoviesService) {
    }

}
