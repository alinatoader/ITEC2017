import {Component, OnInit}      from '@angular/core';
import {Service} from '../services/service';
import {Router} from '@angular/router';

declare var google:any;

@Component({
    selector:'vanzari',
    templateUrl: 'app/components/vanzari.component.html',
    providers:[Service]
})

export class VanzariComponent implements OnInit{
    private vanzari:any=[];

    private static judet:string;
    private static agricol:number;
    private static apartamente:number;
    private static constructii:number;
    private static faraConstructii:number;
    private static neagricol:number;
    private static altele:number;

    constructor(private service:Service,private router:Router){
        
    }
     ngOnInit() {
        VanzariComponent.judet=localStorage.getItem("judetSelectat");
        this.incarcaVanzari();
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(this.drawChart);
     }

     incarcaVanzari(){
        if(VanzariComponent.judet=="CARAS-SEVERIN")
            VanzariComponent.judet="CARAS?SEVERIN";
        if(VanzariComponent.judet=="BISTRITA-NASAUD")
            VanzariComponent.judet="BISTRITA?NASAUD";
        this.service.incarcaVanzari(VanzariComponent.judet).then(vanzari=>{
            this.vanzari=vanzari.result.records;
            this.incarcaTipuriVanzari();
        }).catch(error=>{
            console.log("Eroare la incarcare din API a vanzarilor ");
        })
    }

    incarcaTipuriVanzari(){
        this.vanzari.forEach(v=>{
            if(v["TIP_PROPRIETATE"].indexOf("agricol")>=0)
                VanzariComponent.agricol=Number(v["VANZARI"]);
            if(v["TIP_PROPRIETATE"].indexOf("neagricol")>=0)
                VanzariComponent.neagricol=Number(v["VANZARI"]);
            if(v["TIP_PROPRIETATE"].indexOf("fara constructii")>=0)
                VanzariComponent.faraConstructii=Number(v["VANZARI"]);
            if(v["TIP_PROPRIETATE"].indexOf("constructii")>=0)
                VanzariComponent.constructii=Number(v["VANZARI"]);
            if(v["TIP_PROPRIETATE"].indexOf("-")>=0)
                VanzariComponent.altele=Number(v["VANZARI"]);
        })
    }

     drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tip proprietate');
        data.addColumn('number', 'Vanzari');
        data.addRows([
          ['Agricol', VanzariComponent.agricol],
          ['Apartamente', VanzariComponent.apartamente],
          ['Cu constructii', VanzariComponent.constructii],
          ['Fara constructii', VanzariComponent.faraConstructii],
          ['Neagricol', VanzariComponent.neagricol],
          ['Altele', VanzariComponent.altele],
        ]);

        // Set chart options
        var options = {'title':'Dinamica vanzarilor de imobile in judetul '+VanzariComponent.judet,
                       'width':1000,
                       'height':800,
                       'is3D': true,
                       'pieStartAngle': 100,
                       'slices': {  1: {offset: 0.1},},
                       'animation': {
                           duration: 1000,
                           easing: 'out',
                           startup: true}};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_vanzari'));
        chart.draw(data, options);
    }

    incarcaSupr(){
        this.router.navigate(['suprafete']);
    }

    incarcaCrim(){
       this.router.navigate(['trafic']);
    }
}