import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/movie';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() movie: Movie;

    constructor() {
    }

    ngOnInit() {
    }

}
