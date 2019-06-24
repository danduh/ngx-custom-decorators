import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Movie} from '../../../shared/interfaces/movie';

const MOVIES_MOCK: Movie[] = [
    {
        id: 1,
        title: 'Chernobyl',
        year: 2019,
        description: 'In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world\'s worst man-made catastrophes.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTEyYmIzMDUtNWMwNC00Y2Q1LWIyZTgtMGY1YzUxOTAwYTAwXkEyXkFqcGdeQXVyMjIyMTc0ODQ@._V1_.jpg'
    }
];

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor() {
    }

    getAll(): Observable<Movie[]> {
        return of(MOVIES_MOCK);
    }
}
