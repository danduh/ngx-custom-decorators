import {Movie} from '../../../shared/interfaces/movie';
import {EntityMap, Update} from '@ngrx/entity';
import {createAction, props} from '@ngrx/store';

export const loadMovies = createAction('[Movie/API] Load Movies', props<{ apiUrl: string }>());
export const addMovie = createAction('[Movie/API] Add Movie', props<{ movie: Movie }>());
export const upsertMovie = createAction('[Movie/API] Upsert Movie', props<{ movie: Movie }>());
export const addMovies = createAction('[Movie/API] Add Movies', props<{ movies: Movie[] }>());
export const upsertMovies = createAction('[Movie/API] Upsert Movies', props<{ movies: Movie[] }>());
export const updateMovie = createAction('[Movie/API] Update Movie', props<{ movie: Update<Movie> }>());
export const updateMovies = createAction('[Movie/API] Update Movies', props<{ movies: Update<Movie>[] }>());
export const mapMovies = createAction('[Movie/API] Map Movies', props<{ entityMap: EntityMap<Movie> }>());
export const deleteMovie = createAction('[Movie/API] Delete Movie', props<{ id: string }>());
export const deleteMovies = createAction('[Movie/API] Delete Movies', props<{ ids: string[] }>());
