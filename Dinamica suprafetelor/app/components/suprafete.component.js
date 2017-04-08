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
    var core_1, suprafete_service_1, SuprafeteComponent, SuprafeteComponent_1;
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
            SuprafeteComponent = SuprafeteComponent_1 = class SuprafeteComponent {
                constructor(suprafeteService) {
                    this.suprafeteService = suprafeteService;
                    this.suprafete = [];
                    this.vanzari = [];
                }
                ngOnInit() {
                    this.incarcaSuprafete();
                    this.incarcaVanzari("SUCEAVA");
                    // Load the Visualization API and the corechart package.
                    google.charts.load('current', { 'packages': ['corechart'] });
                    // Set a callback to run when the Google Visualization API is loaded.
                }
                incarcaJudet() {
                    var jud = document.getElementById("judet").value;
                    this.suprafete.forEach(s => {
                        if (s.Judet.toLowerCase() == jud.toLowerCase()) {
                            this.incarcaDiagrama(s);
                            return;
                        }
                    });
                }
                incarcaSuprafete() {
                    this.suprafeteService.incarcaSuprafete().then(suprafata => {
                        this.suprafete = suprafata.result.records;
                        this.editSuprafete();
                    }).catch(error => {
                        console.log("Eroare la incarcare din API a suprafetelor");
                    });
                }
                incarcaVanzari(judet) {
                    if (judet == "CARAS-SEVERIN")
                        judet = "CARAS?SEVERIN";
                    if (judet == "BISTRITA-NASAUD")
                        judet = "BISTRITA?NASAUD";
                    this.suprafeteService.incarcaVanzari(judet).then(vanzari => {
                        this.vanzari = vanzari.result.records;
                    }).catch(error => {
                        console.log("Eroare la incarcare din API a vanzarilor ");
                    });
                }
                editSuprafete() {
                    this.suprafete.forEach(element => {
                        if (element["Judet"] == "ARGE?")
                            element["Judet"] = "ARGES";
                        if (element["Judet"] == "BAC?U")
                            element["Judet"] = "BACAU";
                        if (element["Judet"] == "BISTRI?A–N?S?UD")
                            element["Judet"] = "BISTRITA-NASAUD";
                        if (element["Judet"] == "BOTO?ANI")
                            element["Judet"] = "BOTOSANI";
                        if (element["Judet"] == "BRA?OV")
                            element["Judet"] = "BRASOV";
                        if (element["Judet"] == "BR?ILA")
                            element["Judet"] = "BRAILA";
                        if (element["Judet"] == "BUCURE?TI")
                            element["Judet"] = "BUCURESTI";
                        if (element["Judet"] == "BUZ?U")
                            element["Judet"] = "BUZAU";
                        if (element["Judet"] == "CARA?-SEVERIN")
                            element["Judet"] = "CARAS-SEVERIN";
                        if (element["Judet"] == "C?L?RA?I")
                            element["Judet"] == "CALARASI";
                        if (element["Judet"] == "CONSTAN?A")
                            element["Judet"] == "CONSTANTA";
                        if (element["Judet"] == "DÂMBOVI?A")
                            element["Judet"] == "DAMBOVITA";
                        if (element["Judet"] == "GALA?I")
                            element["Judet"] == "GALATI";
                        if (element["Judet"] == "IA?I")
                            element["Judet"] == "IASI";
                        if (element["Judet"] == "IALOMI?A")
                            element["Judet"] == "IALOMITA";
                        if (element["Judet"] == "MARAMURE?")
                            element["Judet"] = "MARAMURES";
                        if (element["Judet"] == "MEHEDIN?I")
                            element["Judet"] = "MEHEDINTI";
                        if (element["Judet"] == "MURE?")
                            element["Judet"] = "MURES";
                        if (element["Judet"] == "NEAM?")
                            element["Judet"] = "NEAMT";
                        if (element["Judet"] == "S?LAJ")
                            element["Judet"] = "SALAJ";
                        if (element["Judet"] == "TIMI?")
                            element["Judet"] = "TIMIS";
                        if (element["Judet"] == "VÂLCEA")
                            element["Judet"] = "VALCEA";
                    });
                }
                incarcaDiagrama(inregistrare) {
                    SuprafeteComponent_1.judet = inregistrare["Judet"];
                    var re = /,/gi;
                    var ur = inregistrare["Total urban (ha)"];
                    ur = ur.replace(re, '');
                    SuprafeteComponent_1.urban = Number(ur);
                    var ru = inregistrare["Total rural (ha)"];
                    ru = ru.replace(re, '');
                    SuprafeteComponent_1.rural = Number(ru);
                    google.charts.setOnLoadCallback(this.drawChart);
                }
                drawChart() {
                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Tip suprafata');
                    data.addColumn('number', 'Total (ha)');
                    data.addRows([
                        ['Urbal', SuprafeteComponent_1.urban],
                        ['Rural', SuprafeteComponent_1.rural],
                    ]);
                    // Set chart options
                    var options = { 'title': 'Dinamica suprafetelor in judetul ' + SuprafeteComponent_1.judet,
                        'width': 400,
                        'height': 300 };
                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                    chart.draw(data, options);
                }
            };
            SuprafeteComponent = SuprafeteComponent_1 = __decorate([
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