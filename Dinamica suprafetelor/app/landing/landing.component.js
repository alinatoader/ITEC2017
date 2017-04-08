System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, LandingComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            LandingComponent = class LandingComponent {
                constructor(router) {
                    this.router = router;
                }
                ngOnInit() {
                    google.charts.load('current', { 'packages': ['treemap'] });
                    google.charts.setOnLoadCallback(this.drawChart);
                }
                drawChart() {
                    var data = google.visualization.arrayToDataTable([
                        ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
                        ['Global', null, 0, 0],
                        ['America', 'Global', 0, 0],
                        ['Europe', 'Global', 0, 0],
                        ['Asia', 'Global', 0, 0],
                        ['Australia', 'Global', 0, 0],
                        ['Africa', 'Global', 0, 0],
                        ['Brazil', 'America', 11, 10],
                        ['USA', 'America', 52, 31],
                        ['Mexico', 'America', 24, 12],
                        ['Canada', 'America', 16, -23],
                        ['France', 'Europe', 42, -11],
                        ['Germany', 'Europe', 31, -2],
                        ['Sweden', 'Europe', 22, -13],
                        ['Italy', 'Europe', 17, 4],
                        ['UK', 'Europe', 21, -5],
                        ['China', 'Asia', 36, 4],
                        ['Japan', 'Asia', 20, -12],
                        ['India', 'Asia', 40, 63],
                        ['Laos', 'Asia', 4, 34],
                        ['Mongolia', 'Asia', 1, -5],
                        ['Israel', 'Asia', 12, 24],
                        ['Iran', 'Asia', 18, 13],
                        ['Pakistan', 'Asia', 11, -52],
                        ['Egypt', 'Africa', 21, 0],
                        ['S. Africa', 'Africa', 30, 43],
                        ['Sudan', 'Africa', 12, 2],
                        ['Congo', 'Africa', 10, 12],
                        ['Zaire', 'Africa', 8, 10]
                    ]);
                    var tree = new google.visualization.TreeMap(document.getElementById('chart_main'));
                    tree.draw(data, {
                        minColor: '#f00',
                        midColor: '#ddd',
                        maxColor: '#0d0',
                        headerHeight: 15,
                        fontColor: 'black',
                        showScale: true
                    });
                }
            };
            LandingComponent = __decorate([
                core_1.Component({
                    moduleId: "landing-id",
                    selector: 'app-landing',
                    templateUrl: 'app/landing/landing.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], LandingComponent);
            exports_1("LandingComponent", LandingComponent);
        }
    };
});
//# sourceMappingURL=landing.component.js.map