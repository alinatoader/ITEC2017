System.register(["@angular/core", "../services/service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, service_1, router_1, TraficComponent, TraficComponent_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            TraficComponent = TraficComponent_1 = class TraficComponent {
                constructor(service, router) {
                    this.service = service;
                    this.router = router;
                    this.persoane = [];
                    this.fem = true;
                    this.mas = false;
                }
                ngOnInit() {
                    TraficComponent_1.judet = localStorage.getItem("judetSelectat");
                    TraficComponent_1.gen = "feminin";
                    this.incarcaPersoane("feminin");
                    google.charts.load('current', { 'packages': ['corechart'] });
                    google.charts.setOnLoadCallback(this.drawChart);
                }
                incarcaPersoane(gen) {
                    this.service.incarcaTrafic(TraficComponent_1.judet, gen).then(persoana => {
                        this.persoane = persoana.result.records;
                        this.initiateUrbanRural();
                    }).catch(error => {
                        console.log("Eroare la incarcare din API a persoanelor traficate");
                    });
                }
                initiateUrbanRural() {
                    TraficComponent_1.urban = 0;
                    TraficComponent_1.rural = 0;
                    this.persoane.forEach(pers => {
                        if (pers["mediu_prov"].indexOf("rural") >= 0)
                            TraficComponent_1.rural = TraficComponent_1.rural + 1;
                        else
                            TraficComponent_1.urban = TraficComponent_1.urban + 1;
                    });
                    google.charts.setOnLoadCallback(this.drawChart);
                }
                getGender() {
                    console.log(this.fem);
                    console.log(this.mas);
                    if (this.mas == true) {
                        this.fem = false;
                        this.incarcaPersoane("masculin");
                        TraficComponent_1.gen = "masculin";
                        return;
                    }
                    if (this.fem == true) {
                        this.incarcaPersoane("feminin");
                        TraficComponent_1.gen = "feminin";
                        this.mas = false;
                        return;
                    }
                }
                drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Mediu provenienta');
                    data.addColumn('number', 'Persoane traficate');
                    data.addRows([
                        ['Urban', TraficComponent_1.urban],
                        ['Rural', TraficComponent_1.rural],
                    ]);
                    // Set chart options
                    var options = { 'title': 'Traficul de persoane in ' + TraficComponent_1.judet + ' genul ' + TraficComponent_1.gen,
                        'width': 1000,
                        'height': 800,
                        'is3D': true,
                        'pieStartAngle': 100,
                        'slices': { 1: { offset: 0.1 }, },
                        'animation': {
                            duration: 1000,
                            easing: 'out',
                            startup: true
                        } };
                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(document.getElementById('chart_trafic'));
                    chart.draw(data, options);
                }
                incarcaSupr() {
                    this.router.navigate(['suprafete']);
                }
                incarcaVz() {
                    this.router.navigate(['vanzari']);
                }
            };
            TraficComponent = TraficComponent_1 = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/trafic.component.html',
                    providers: [service_1.Service]
                }),
                __metadata("design:paramtypes", [service_1.Service, router_1.Router])
            ], TraficComponent);
            exports_1("TraficComponent", TraficComponent);
        }
    };
});
//# sourceMappingURL=trafic.component.js.map