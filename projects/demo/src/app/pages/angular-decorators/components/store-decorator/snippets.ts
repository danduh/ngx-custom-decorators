export const EXAMPLE1 = `
@storeSelector({allMoviesDecor$: getAllMovies})
@Component({
    selector: 'app-store-decorator',
    templateUrl: './store-decorator.component.html',
    styleUrls: ['./store-decorator.component.scss'],
})
export class StoreDecoratorComponent implements OnInit {
    public allMoviesDecor$: Observable<Movie[]>;
}`;

export const EXAMPLE2 = `
@Component({
    selector: 'app-store-decorator',
    templateUrl: './store-decorator.component.html',
    styleUrls: ['./store-decorator.component.scss'],
})
export class StoreDecoratorComponent implements OnInit {
    public allMovies$: Observable<Movie[]>;

    constructor(private store: Store<any>) {
        
    }
    
    ngOnInit() {
        this.allMovies$ = this.store.select(getAllMovies);
    }
}
`;

