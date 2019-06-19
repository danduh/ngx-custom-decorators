# Store (ngrx) related decorators

### @storeSelector()
This decorators will set observable property on your component with given ngrx selector
without injecting Store into your component. 
 

```HTML
<div *ngFor="let movie of allMoviesDecor$ | async">
    <movie-card [movie]="movie"></movie-card>
</div>
```

```JavaScript
@storeSelector({allMoviesDecor$: getAllMovies})
@Component({
    selector: 'store-decorator-example',
    templateUrl: './store-decorator.component.html',
    styleUrls: ['./store-decorator.component.scss'],
})

export class StoreDecoratorComponent implements {
    public allMoviesDecor$: Observable<Movie[]>;
    
    constructor() {
    }
}
```
