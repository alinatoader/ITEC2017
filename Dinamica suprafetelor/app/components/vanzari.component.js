System.register(["@angular/core", "../services/service"], function (exports_1, context_1) {
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
    var core_1, service_1, VanzariComponent, VanzariComponent_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            VanzariComponent = VanzariComponent_1 = class VanzariComponent {
                constructor(service) {
                    this.service = service;
                    this.vanzari = [];
                }
                ngOnInit() {
                    VanzariComponent_1.judet = localStorage.getItem("judetSelectat");
                    this.incarcaVanzari();
                    google.charts.load('current', { 'packages': ['corechart'] });
                    google.charts.setOnLoadCallback(this.drawChart);
                }
                incarcaVanzari() {
                    if (VanzariComponent_1.judet == "CARAS-SEVERIN")
                        VanzariComponent_1.judet = "CARAS?SEVERIN";
                    if (VanzariComponent_1.judet == "BISTRITA-NASAUD")
                        VanzariComponent_1.judet = "BISTRITA?NASAUD";
                    this.service.incarcaVanzari(VanzariComponent_1.judet).then(vanzari => {
                        this.vanzari = vanzari.result.records;
                        this.incarcaTipuriVanzari();
                    }).catch(error => {
                        console.log("Eroare la incarcare din API a vanzarilor ");
                    });
                }
                incarcaTipuriVanzari() {
                    this.vanzari.forEach(v => {
                        if (v["TIP_PROPRIETATE"].indexOf("agricol") >= 0)
                            VanzariComponent_1.agricol = Number(v["VANZARI"]);
                        if (v["TIP_PROPRIETATE"].indexOf("neagricol") >= 0)
                            VanzariComponent_1.neagricol = Number(v["VANZARI"]);
                        if (v["TIP_PROPRIETATE"].indexOf("fara constructii") >= 0)
                            VanzariComponent_1.faraConstructii = Number(v["VANZARI"]);
                        if (v["TIP_PROPRIETATE"].indexOf("constructii") >= 0)
                            VanzariComponent_1.constructii = Number(v["VANZARI"]);
                        if (v["TIP_PROPRIETATE"].indexOf("-") >= 0)
                            VanzariComponent_1.altele = Number(v["VANZARI"]);
                    });
                }
                drawChart() {
                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Tip proprietate');
                    data.addColumn('number', 'Vanzari');
                    data.addRows([
                        ['Agricol', VanzariComponent_1.agricol],
                        ['Apartamente', VanzariComponent_1.apartamente],
                        ['Cu constructii', VanzariComponent_1.constructii],
                        ['Fara constructii', VanzariComponent_1.faraConstructii],
                        ['Neagricol', VanzariComponent_1.neagricol],
                        ['Altele', VanzariComponent_1.altele],
                    ]);
                    // Set chart options
                    var options = { 'title': 'Dinamica vanzarilor de imobile in judetul ' + VanzariComponent_1.judet,
                        'width': 800,
                        'height': 900 };
                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(document.getElementById('chart_vanzari'));
                    chart.draw(data, options);
                }
            };
            VanzariComponent = VanzariComponent_1 = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/vanzari.component.html',
                    providers: [service_1.Service]
                }),
                __metadata("design:paramtypes", [service_1.Service])
            ], VanzariComponent);
            exports_1("VanzariComponent", VanzariComponent);
        }
    };
});
//# sourceMappingURL=vanzari.component.js.map