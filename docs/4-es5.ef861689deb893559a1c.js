(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Zppw:function(e,t,n){"use strict";n.r(t);var i,r=n("1C3z"),o=n("8AiQ"),c=n("D57K"),a=n("HnWI"),s=n("l4ki"),u=(n("fQLH"),n("3riI")),d=(n("c1xn"),n("R+ki")),l=n("Jg5f"),p=n("W/Ou"),f=(n("mhnT"),n("Dgbj"),new Set),b=function(){function e(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):v}return e.prototype.matchMedia=function(e){return this._platform.WEBKIT&&function(e){if(!f.has(e))try{i||((i=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(i)),i.sheet&&(i.sheet.insertRule("@media "+e+" {.fx-query-test{ }}",0),f.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)},e.ngInjectableDef=Object(r.Kb)({factory:function(){return new e(Object(r.hc)(s.a))},token:e,providedIn:"root"}),e.ngInjectableDef=r.Kb({token:e,factory:function(t){return new(t||e)(r.hc(s.a))},providedIn:"root"}),e}();function v(e){return{matches:"all"===e||""===e,media:e,addListener:function(){},removeListener:function(){}}}var h={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px) and (max-width: 1919.99px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.99px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.99px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"},m=n("iUUs"),O=n("U3QC"),y=r.A.create({providers:[{provide:b,deps:[s.a]},{provide:s.a,deps:[]}]}),g=new r.K({enableLongStackTrace:Object(r.lb)()});r.A.create({providers:[{provide:r.g,deps:[r.K]},[{provide:r.K,useValue:g}]]});var j=function(e,t,n){for(var i={},r={},o=y.get(b),c=[],a=function(e){i[h[e]]=o.matchMedia(h[e]),r[e]=i[h[e]].matches,c.push(Object(m.a)(i[h[e]],"change").pipe(Object(O.a)(function(){return r[e]=i[h[e]].matches}),Object(p.a)(!1),Object(l.a)(function(){var t;return(t={})[e]=i[h[e]].matches,t})))},s=0,f=Reflect.ownKeys(h);s<f.length;s++)a(f[s]);return e[t]=n?u.a.apply(void 0,c).pipe(Object(d.a)(0),Object(l.a)(function(e){return Object.assign.apply(Object,[{}].concat(e))})):r,e[t]};function M(e){return void 0===e&&(e=!1),function(t,n){return j(t,n,e)}}var w=n("eKaV"),x=n("CTBb"),I=n("IugH"),A=Object(I.n)("[Movie/API] Load Movies",Object(I.s)()),C=Object(I.n)("[Movie/API] Add Movie",Object(I.s)()),U=Object(I.n)("[Movie/API] Upsert Movie",Object(I.s)()),D=Object(I.n)("[Movie/API] Add Movies",Object(I.s)()),S=Object(I.n)("[Movie/API] Upsert Movies",Object(I.s)()),P=Object(I.n)("[Movie/API] Update Movie",Object(I.s)()),B=Object(I.n)("[Movie/API] Update Movies",Object(I.s)()),N=Object(I.n)("[Movie/API] Map Movies",Object(I.s)()),k=Object(I.n)("[Movie/API] Delete Movie",Object(I.s)()),H=Object(I.n)("[Movie/API] Delete Movies",Object(I.s)()),T=function(e){return e[e.EntitiesOnly=0]="EntitiesOnly",e[e.Both=1]="Both",e[e.None=2]="None",e}({});function E(e){return function(t,n){var i={ids:Object(c.i)(n.ids),entities:Object(c.a)({},n.entities)},r=e(t,i);return r===T.Both?Object.assign({},n,i):r===T.EntitiesOnly?Object(c.a)({},n,{entities:i.entities}):n}}function K(e,t){var n=t(e);return Object(r.lb)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",e,"The `selectId` implementation:",t.toString()),n}function $(e){function t(t,n){var i=K(t,e);return i in n.entities?T.None:(n.ids.push(i),n.entities[i]=t,T.Both)}function n(e,n){var i,r,o=!1;try{for(var a=Object(c.j)(e),s=a.next();!s.done;s=a.next())o=t(s.value,n)!==T.None||o}catch(u){i={error:u}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o?T.Both:T.None}function i(e,t){var n=(e instanceof Array?e:t.ids.filter(function(n){return e(t.entities[n])})).filter(function(e){return e in t.entities}).map(function(e){return delete t.entities[e]}).length>0;return n&&(t.ids=t.ids.filter(function(e){return e in t.entities})),n?T.Both:T.None}function r(t,n){var i={};return(t=t.filter(function(e){return e.id in n.entities})).length>0?t.filter(function(t){return function(t,n,i){var r=Object.assign({},i.entities[n.id],n.changes),o=K(r,e),c=o!==n.id;return c&&(t[n.id]=o,delete i.entities[n.id]),i.entities[o]=r,c}(i,t,n)}).length>0?(n.ids=n.ids.map(function(e){return i[e]||e}),T.Both):T.EntitiesOnly:T.None}function o(t,i){var o,a,s=[],u=[];try{for(var d=Object(c.j)(t),l=d.next();!l.done;l=d.next()){var p=l.value,f=K(p,e);f in i.entities?u.push({id:f,changes:p}):s.push(p)}}catch(h){o={error:h}}finally{try{l&&!l.done&&(a=d.return)&&a.call(d)}finally{if(o)throw o.error}}var b=r(u,i),v=n(s,i);switch(!0){case v===T.None&&b===T.None:return T.None;case v===T.Both||b===T.Both:return T.Both;default:return T.EntitiesOnly}}return{removeAll:function(e){return Object.assign({},e,{ids:[],entities:{}})},addOne:E(t),addMany:E(n),addAll:E(function(e,t){return t.ids=[],t.entities={},n(e,t),T.Both}),updateOne:E(function(e,t){return r([e],t)}),updateMany:E(r),upsertOne:E(function(e,t){return o([e],t)}),upsertMany:E(o),removeOne:E(function(e,t){return i([e],t)}),removeMany:E(i),map:E(function(e,t){return r(t.ids.reduce(function(n,i){var r=e(t.entities[i]);return r!==t.entities[i]&&n.push({id:i,changes:r}),n},[]).filter(function(e){return e.id in t.entities}),t)})}}var L=function(e){void 0===e&&(e={});var t=Object(c.a)({sortComparer:!1,selectId:function(e){return e.id}},e),n=t.selectId,i=t.sortComparer,r={getInitialState:function(e){return void 0===e&&(e={}),Object.assign({ids:[],entities:{}},e)}},o={getSelectors:function(e){var t=function(e){return e.ids},n=function(e){return e.entities},i=Object(I.q)(t,n,function(e,t){return e.map(function(e){return t[e]})}),r=Object(I.q)(t,function(e){return e.length});return e?{selectIds:Object(I.q)(e,t),selectEntities:Object(I.q)(e,n),selectAll:Object(I.q)(e,i),selectTotal:Object(I.q)(e,r)}:{selectIds:t,selectEntities:n,selectAll:i,selectTotal:r}}},a=i?function(e,t){var n=$(e);function i(t,n){var i=t.filter(function(t){return!(K(t,e)in n.entities)});return 0===i.length?T.None:(a(i,n),T.Both)}function r(t,n){var i=[],r=t.filter(function(t){return function(t,n,i){if(!(n.id in i.entities))return!1;var r=Object.assign({},i.entities[n.id],n.changes),o=K(r,e);return delete i.entities[n.id],t.push(r),o!==n.id}(i,t,n)}).length>0;if(0===i.length)return T.None;var o=n.ids,c=[];return n.ids=n.ids.filter(function(e,t){return e in n.entities||(c.push(t),!1)}),a(i,n),!r&&c.every(function(e){return n.ids[e]===o[e]})?T.EntitiesOnly:T.Both}function o(t,n){var o,a,s=[],u=[];try{for(var d=Object(c.j)(t),l=d.next();!l.done;l=d.next()){var p=l.value,f=K(p,e);f in n.entities?u.push({id:f,changes:p}):s.push(p)}}catch(h){o={error:h}}finally{try{l&&!l.done&&(a=d.return)&&a.call(d)}finally{if(o)throw o.error}}var b=r(u,n),v=i(s,n);switch(!0){case v===T.None&&b===T.None:return T.None;case v===T.Both||b===T.Both:return T.Both;default:return T.EntitiesOnly}}function a(n,i){n.sort(t);for(var r=[],o=0,c=0;o<n.length&&c<i.ids.length;){var a=n[o],s=K(a,e),u=i.ids[c];t(a,i.entities[u])<=0?(r.push(s),o++):(r.push(u),c++)}i.ids=r.concat(o<n.length?n.slice(o).map(e):i.ids.slice(c)),n.forEach(function(t,n){i.entities[e(t)]=t})}return{removeOne:n.removeOne,removeMany:n.removeMany,removeAll:n.removeAll,addOne:E(function(e,t){return i([e],t)}),updateOne:E(function(e,t){return r([e],t)}),upsertOne:E(function(e,t){return o([e],t)}),addAll:E(function(e,t){return t.entities={},t.ids=[],i(e,t),T.Both}),addMany:E(i),updateMany:E(r),upsertMany:E(o),map:E(function(e,t){return r(t.ids.reduce(function(n,i){var r=e(t.entities[i]);return r!==t.entities[i]&&n.push({id:i,changes:r}),n},[]),t)})}}(n,i):$(n);return Object(c.a)({selectId:n,sortComparer:i},r,o,a)}(),q=L.getInitialState({}),F=Object(I.p)(q,Object(I.r)(C,function(e,t){return L.addOne(t.movie,e)}),Object(I.r)(U,function(e,t){return L.upsertOne(t.movie,e)}),Object(I.r)(D,function(e,t){return L.addMany(t.movies,e)}),Object(I.r)(S,function(e,t){return L.upsertMany(t.movies,e)}),Object(I.r)(P,function(e,t){return L.updateOne(t.movie,e)}),Object(I.r)(B,function(e,t){return L.updateMany(t.movies,e)}),Object(I.r)(N,function(e,t){return L.map(t.entityMap,e)}),Object(I.r)(k,function(e,t){return L.removeOne(t.id,e)}),Object(I.r)(H,function(e,t){return L.removeMany(t.ids,e)})),_=L.getSelectors().selectAll,Y={movies:function(e,t){return F(e,t)}},W=Object(I.o)("decoratorsModule"),G=Object(I.q)(W,function(e){return e.movies}),Q=Object(I.q)(G,_),R="\n@storeSelector({allMoviesDecor$: getAllMovies})\n@Component({\n    selector: 'app-store-decorator',\n    templateUrl: './store-decorator.component.html',\n    styleUrls: ['./store-decorator.component.scss'],\n})\nexport class StoreDecoratorComponent implements OnInit {\n    public allMoviesDecor$: Observable<Movie[]>;\n}",V="\n@Component({\n    selector: 'app-store-decorator',\n    templateUrl: './store-decorator.component.html',\n    styleUrls: ['./store-decorator.component.scss'],\n})\nexport class StoreDecoratorComponent implements OnInit {\n    public allMovies$: Observable<Movie[]>;\n\n    constructor(private store: Store<any>) {\n        \n    }\n    \n    ngOnInit() {\n        this.allMovies$ = this.store.select(getAllMovies);\n    }\n}\n",X=n("KdP0"),z=[1,"container"],J=[1,"example-results"],Z=[4,"ngFor","ngForOf"],ee=[3,"movie"];function te(e,t){if(1&e&&(r.bc(0,"div"),r.Pb(1,"app-movie-card",ee),r.Ub()),2&e){var n=t.$implicit;r.Cc(1),r.tc("movie",n)}}function ne(e,t){if(1&e&&(r.bc(0,"div"),r.Pb(1,"app-movie-card",ee),r.Ub()),2&e){var n=t.$implicit;r.Cc(1),r.tc("movie",n)}}var ie=function(){function e(e){this.store=e,this.snippet1=R,this.snippet2=V,this.allMovies$=this.store.select(Q)}var t;return e.prototype.ngOnInit=function(){this.store.dispatch(A({apiUrl:"someUrl"}))},e.ngComponentDef=r.Ib({type:e,selectors:[["app-store-decorator"]],factory:function(t){return new(t||e)(r.Ob(I.h))},consts:13,vars:8,template:function(e,t){1&e&&(r.bc(0,"h2"),r.Hc(1,"Store Component Decorator"),r.Ub(),r.bc(2,"div",z),r.bc(3,"div",J),r.bc(4,"pre"),r.Hc(5),r.Ub(),r.Gc(6,te,2,1,"div",Z),r.pc(7,"async"),r.Ub(),r.bc(8,"div",J),r.bc(9,"pre"),r.Hc(10),r.Ub(),r.Gc(11,ne,2,1,"div",Z),r.pc(12,"async"),r.Ub(),r.Ub()),2&e&&(r.Cc(5),r.Ic(5,r.jc("            ",t.snippet2,"\n        ")),r.Cc(6),r.tc("ngForOf",r.qc(7,4,t.allMovies$)),r.Cc(10),r.Ic(10,r.jc("            ",t.snippet1,"\n        ")),r.Cc(11),r.tc("ngForOf",r.qc(12,6,t.allMoviesDecor$)))},directives:[o.i,X.a],pipes:[o.b],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.container[_ngcontent-%COMP%]   .example-results[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:20px}"]}),e=c.c([(t={allMoviesDecor$:Q},function(e){var n=e.ngComponentDef.factory;e.ngComponentDef.factory=function(){var i=Object(r.Ob)(r.w).get(I.h),o=n(e.ngComponentDef.type);return Object.keys(t).forEach(function(e){o[e]=i.select(t[e])}),o}})],e)}(),re=["label","Overview/API"],oe=["label","Examples"],ce=[1,"tab-content-viewer"],ae=[4,"ngIf"],se=["mat-button","",3,"click"],ue=[4,"ngFor","ngForOf"];function de(e,t){if(1&e&&(r.bc(0,"div"),r.Hc(1),r.Ub()),2&e){var n=t.$implicit,i=r.oc().ngIf;r.Cc(1),r.Ic(1,r.kc(" ",n," ==> ",i[n]," "))}}function le(e,t){if(1&e&&(r.bc(0,"div"),r.Gc(1,de,2,2,"div",ue),r.Ub()),2&e){var n=t.ngIf,i=r.oc();r.Cc(1),r.tc("ngForOf",i.getKeys(n))}}function pe(e,t){if(1&e&&(r.bc(0,"div"),r.Hc(1),r.Ub()),2&e){var n=t.$implicit,i=r.oc();r.Cc(1),r.Ic(1,r.kc(" ",n," ==> ",i.deviceStatic[n]," "))}}var fe=function(){function e(){}var t;return e.prototype.getKeys=function(e){return Object.keys(e)},e.prototype.ngOnInit=function(){},e.prototype.showDevice=function(){console.log(this.device),console.log(this.deviceStatic)},e.ngComponentDef=r.Ib({type:e,selectors:[["app-angular-decorators"]],factory:function(t){return new(t||e)},consts:18,vars:4,template:function(e,t){1&e&&(r.bc(0,"mat-tab-group"),r.bc(1,"mat-tab",re),r.bc(2,"p"),r.Hc(3,"Decorators that uses Angular modules "),r.Ub(),r.Ub(),r.bc(4,"mat-tab",oe),r.bc(5,"div",ce),r.Pb(6,"app-store-decorator"),r.bc(7,"h2"),r.Hc(8,"Device State"),r.Ub(),r.bc(9,"h3"),r.Hc(10,"Observable"),r.Ub(),r.Gc(11,le,2,1,"div",ae),r.pc(12,"async"),r.bc(13,"h3"),r.Hc(14,"Static"),r.Ub(),r.bc(15,"button",se),r.lc("click",function(e){return t.showDevice()}),r.Hc(16,"Show Device"),r.Ub(),r.Gc(17,pe,2,2,"div",ue),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cc(11),r.tc("ngIf",r.qc(12,2,t.deviceObs)),r.Cc(17),r.tc("ngForOf",t.getKeys(t.deviceStatic)))},directives:[w.b,w.a,ie,o.j,x.b,o.i],pipes:[o.b],styles:[".tab-content-viewer[_ngcontent-%COMP%]{padding:20px 50px 50px 20px}"]}),c.c([(void 0===t&&(t="(max-width: 600px)"),function(e,n){var i=y.get(b).matchMedia(t);e[n]=i.matches?"mobile":"desktop"}),c.f("design:type",Object)],e.prototype,"device",void 0),c.c([M(!0),c.f("design:type",a.a)],e.prototype,"deviceObs",void 0),c.c([M(),c.f("design:type",Object)],e.prototype,"deviceStatic",void 0),e}(),be=n("5/c3"),ve=n("PCNd"),he=n("S6KJ"),me=n("4HYP"),Oe=n("IMYO"),ye=n("d9YI"),ge=n("pN2L"),je=[{id:1,title:"Chernobyl",year:2019,description:"In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",poster:"https://m.media-amazon.com/images/M/MV5BNTEyYmIzMDUtNWMwNC00Y2Q1LWIyZTgtMGY1YzUxOTAwYTAwXkEyXkFqcGdeQXVyMjIyMTc0ODQ@._V1_.jpg"}],Me=function(){function e(){}return e.prototype.getAll=function(){return Object(ge.a)(je)},e.ngInjectableDef=r.Kb({token:e,factory:function(t){return new(t||e)},providedIn:"root"}),e}(),we=function(){function e(e,t){var n=this;this.actions$=e,this.moviesService=t,this.loadMovies$=Object(he.c)(function(){return n.actions$.pipe(Object(he.d)("[Movie/API] Load Movies"),Object(me.a)(function(){return n.moviesService.getAll().pipe(Object(l.a)(function(e){return console.log(e),D({movies:e})}),Object(Oe.a)(function(){return ye.a}))}))})}return e.ngInjectableDef=r.Kb({token:e,factory:function(t){return new(t||e)(r.hc(he.a),r.hc(Me))},providedIn:null}),e}();n.d(t,"AngularRoutes",function(){return xe}),n.d(t,"AngularDecoratorsModule",function(){return Ie});var xe=be.c.forChild([{path:"",component:fe}]),Ie=function(){function e(){}return e.ngModuleDef=r.Mb({type:e}),e.ngInjectorDef=r.Lb({factory:function(t){return new(t||e)},imports:[[o.c,xe,ve.a,I.j.forFeature("decoratorsModule",Y),he.b.forFeature([we])]]}),e}();I.j.forFeature("decoratorsModule",Y),he.b.forFeature([we])}}]);