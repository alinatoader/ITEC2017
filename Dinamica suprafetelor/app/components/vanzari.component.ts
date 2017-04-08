import {Component, OnInit}      from '@angular/core';
import {SuprafeteService} from '../services/suprafete.service';

declare var google:any;

@Component({
    templateUrl: 'app/components/suprafete.component.html',
    providers:[SuprafeteService]
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

    constructor(private suprafeteService:SuprafeteService){
        
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
        this.suprafeteService.incarcaVanzari(VanzariComponent.judet).then(vanzari=>{
            this.vanzari=vanzari.result.records;
            this.incarcaTipuriVanzari();
        }).catch(error=>{
            console.log("Eroare la incarcare din API a vanzarilor ");
        })
    }

    incarcaTipuriVanzari(){
        this.vanzari.forEach(v=>{
            if(v["TIP_PROPRIETATE"]=="agricol")
                VanzariComponent.agricol=v["VANZARI"];
            if(v["TIP_PROPRIETATE"]=="neagricol")
                VanzariComponent.neagricol=v["VANZARI"];
            if(v["TIP_PROPRIETATE"]=="fara constructii")
                VanzariComponent.faraConstructii=v["VANZARI"];
            if(v["TIP_PROPRIETATE"]=="constructii")
                VanzariComponent.constructii=v["VANZARI"];
            if(v["TIP_PROPRIETATE"]=="-")
                VanzariComponent.altele=v["VANZARI"];
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
                       'width':700,
                       'height':600};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}