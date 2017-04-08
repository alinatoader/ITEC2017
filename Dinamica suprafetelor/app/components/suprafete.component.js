System.register(["@angular/core", "../services/suprafete.service"], function (exports_1, context_1) {
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
    var core_1, suprafete_service_1, SuprafeteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (suprafete_service_1_1) {
                suprafete_service_1 = suprafete_service_1_1;
            }
        ],
        execute: function () {
            SuprafeteComponent = class SuprafeteComponent {
                constructor(suprafeteService) {
                    this.suprafeteService = suprafeteService;
                    this.suprafete = [];
                    this.vanzari = [];
                }
                incarcaSuprafete() {
                    this.suprafeteService.incarcaSuprafete().then(suprafata => {
                        this.suprafete = suprafata.result.records;
                    }).catch(error => {
                        console.log("Eroare la incarcare din API a suprafetelor");
                    });
                }
                incarcaVanzari(judet) {
                    this.suprafeteService.incarcaVanzari(judet).then(vanzari => {
                        this.vanzari = vanzari.result.records;
                    }).catch(error => {
                        console.log("Eroare la incarcare din API a vanzarilor ");
                    });
                }
                ngOnInit() {
                    this.incarcaSuprafete();
                    this.incarcaVanzari("SUCEAVA");
                    console.log("Main page loaded..");
                    // Load the Visualization API and the corechart package.
                    google.charts.load('current', { 'packages': ['corechart'] });
                    // Set a callback to run when the Google Visualization API is loaded.
                    google.charts.setOnLoadCallback(this.drawChart);
                    //google.charts.load('current', {'packages':['geomap']});
                    // google.charts.setOnLoadCallback(this.drawMap);
                }
                /*  drawMap() {
                    var data = google.visualization.arrayToDataTable([
                        ['Lat', 'Long', 'Name'],
                        [44.426767, 26.102538, 'Bucharest'],
                    ]);
            
                    var options = {};
                    options['dataMode'] = 'regions';
            
                    var container = document.getElementById('regions_div');
                    var geomap = new google.visualization.GeoMap(container);
            
                    geomap.draw(data, options);
                  };*/
                // Callback that creates and populates a data table,
                // instantiates the pie chart, passes in the data and
                // draws it.
                drawChart() {
                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Topping');
                    data.addColumn('number', 'Slices');
                    data.addRows([
                        ['Mushrooms', 3],
                        ['Onions', 1],
                        ['Olives', 1],
                        ['Zucchini', 1],
                        ['Pepperoni', 2]
                    ]);
                    // Set chart options
                    var options = { 'title': 'How Much Pizza I Ate Last Night',
                        'width': 600,
                        'height': 500 };
                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                    chart.draw(data, options);
                }
            };
            SuprafeteComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/suprafete.component.html',
                    providers: [suprafete_service_1.SuprafeteService]
                }),
                __metadata("design:paramtypes", [suprafete_service_1.SuprafeteService])
            ], SuprafeteComponent);
            exports_1("SuprafeteComponent", SuprafeteComponent);
        }
    };
});
//# sourceMappingURL=suprafete.component.js.map