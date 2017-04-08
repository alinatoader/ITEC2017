import {Component, OnInit}      from '@angular/core';
import {SuprafeteService} from '../services/suprafete.service';

declare var google:any;

@Component({
    templateUrl: 'app/components/suprafete.component.html',
    providers:[SuprafeteService]
})

export class SuprafeteComponent implements OnInit{

    private suprafete:any = [];
    private vanzari:any = [];

    
    constructor(private suprafeteService:SuprafeteService){
        
    }
    incarcaSuprafete(){
        this.suprafeteService.incarcaSuprafete().then(suprafata=> {
                this.suprafete=suprafata.result.records;
                this.editSuprafete();
            }
        ).catch(error=>{
            console.log("Eroare la incarcare din API a suprafetelor");
        })
    }
    incarcaVanzari(judet:string){
        if(judet=="CARAS-SEVERIN")
            judet="CARAS?SEVERIN";
        if(judet=="BISTRITA-NASAUD")
            judet="BISTRITA?NASAUD";
        this.suprafeteService.incarcaVanzari(judet).then(vanzari=>{
            this.vanzari=vanzari.result.records;
        }).catch(error=>{
            console.log("Eroare la incarcare din API a vanzarilor ");
        })
    }
    editSuprafete(){
        this.suprafete.forEach(element => {
            if(element["Judet"] == "ARGE?")
                element["Judet"]="ARGES";
            if(element["Judet"] == "BAC?U")
                element["Judet"]="BACAU";
            if(element["Judet"] == "BISTRI?A–N?S?UD")
                element["Judet"]="BISTRITA-NASAUD";
            if(element["Judet"] == "BOTO?ANI")
                element["Judet"] = "BOTOSANI";
            if(element["Judet"]=="BRA?OV")
                element["Judet"]="BRASOV";
            if(element["Judet"]=="BR?ILA")
                element["Judet"]="BRAILA";
            if(element["Judet"]=="BUCURE?TI")
                element["Judet"] = "BUCURESTI";  
            if(element["Judet"]=="BUZ?U")
                element["Judet"] = "BUZAU";
            if(element["Judet"]=="CARA?-SEVERIN")
                element["Judet"]="CARAS-SEVERIN"
            if(element["Judet"]=="C?L?RA?I")
                element["Judet"]=="CALARASI"
            if(element["Judet"]=="CONSTAN?A")
                element["Judet"]=="CONSTANTA";
            if(element["Judet"]=="DÂMBOVI?A")
                element["Judet"]=="DAMBOVITA";
            if(element["Judet"]=="GALA?I")
                element["Judet"]=="GALATI";
            if(element["Judet"]=="IA?I")
                element["Judet"]=="IASI";
            if(element["Judet"]=="IALOMI?A")
                element["Judet"]=="IALOMITA";
            if(element["Judet"]=="MARAMURE?")
                element["Judet"]="MARAMURES";
            if(element["Judet"]=="MEHEDIN?I")
                element["Judet"]="MEHEDINTI";
            if(element["Judet"]=="MURE?")
                element["Judet"]="MURES";
            if(element["Judet"]=="NEAM?")
                element["Judet"]="NEAMT";
            if(element["Judet"]=="S?LAJ")
                element["Judet"]="SALAJ";
            if(element["Judet"]=="TIMI?")
                element["Judet"]="TIMIS";
            if(element["Judet"]=="VÂLCEA")
                element["Judet"]="VALCEA";       
        });
    }
    ngOnInit() {
        this.incarcaSuprafete();
        this.incarcaVanzari("SUCEAVA");
        console.log("Main page loaded..");
    }

     

    incarcaDiagrama(inregistrare:any){

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(this.drawChart(inregistrare["Total urban (ha)"],inregistrare["Total rural (ha)"],inregistrare["Judet"]));
      }

      drawChart(urban:number,rural:number,judet:string) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tip suprafata');
        data.addColumn('number', 'Total (ha)');
        data.addRows([
          ['Urban', urban],
          ['Rural', rural],
        ]);

        var options = {'title':'Dinamica suprafetelor in judetul '+judet,
                       'width':700,
                       'height':600,}

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}