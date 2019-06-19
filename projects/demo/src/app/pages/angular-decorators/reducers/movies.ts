import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Movie} from '../../../shared/interfaces/movie';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as MovieActions from '../actions/movies';

export interface MoviesState extends EntityState<Movie> {

}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: MoviesState = adapter.getInitialState({

});


const movieReducer = createReducer(
    initialState,
    on(MovieActions.addMovie, (state, {movie}) => {
        return adapter.addOne(movie, state);
    }),
    on(MovieActions.upsertMovie, (state, {movie}) => {
        return adapter.upsertOne(movie, state);
    }),
    on(MovieActions.addMovies, (state, {movies}) => {
        return adapter.addMany(movies, state);
    }),
    on(MovieActions.upsertMovies, (state, {movies}) => {
        return adapter.upsertMany(movies, state);
    }),
    on(MovieActions.updateMovie, (state, {movie}) => {
        return adapter.updateOne(movie, state);
    }),
    on(MovieActions.updateMovies, (state, {movies}) => {
        return adapter.updateMany(movies, state);
    }),
    on(MovieActions.mapMovies, (state, {entityMap}) => {
        return adapter.map(entityMap, state);
    }),
    on(MovieActions.deleteMovie, (state, {id}) => {
        return adapter.removeOne(id, state);
    }),
    on(MovieActions.deleteMovies, (state, {ids}) => {
        return adapter.removeMany(ids, state);
    }),
);

export function reducer(state: MoviesState | undefined, action: Action) {
    return movieReducer(state, action);
}


// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectMovieIds = selectIds;

// select the dictionary of user entities
export const selectMovieEntities = selectEntities;

// select the array of users
export const selectAllMovies = selectAll;

// select the total user count
export const selectMovieTotal = selectTotal;
