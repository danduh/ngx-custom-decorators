import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
// import {MoviesState, reducer} from './movies';

import * as fromMovie from './movies';
import {selectAllMovies} from './movies';
import {MoviesState} from './movies';


export interface State {
    movies: fromMovie.MoviesState;
}

export const reducers: ActionReducerMap<State> = {
    movies: fromMovie.reducer,
};


export const metaReducers: MetaReducer<State>[] = [];

export const getMoviesModuleState = createFeatureSelector<MoviesState>('decoratorsModule');

export const getMoviesState = createSelector(
    getMoviesModuleState,
    (state: any) => state.movies
);

export const getAllMovies = createSelector(
    getMoviesState,
    selectAllMovies
);
