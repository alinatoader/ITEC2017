import {Component, OnInit}      from '@angular/core';
import {Service} from '../services/service';

declare var google:any;

@Component({
    templateUrl: 'app/components/vanzari.component.html',
    providers:[Service]
})

export class TraficComponent implements OnInit{
    private persoane:any=[];

    private static judet:string;
    private static urban:number;
    private static rural:number;
    private static gen:string;

    constructor(private service:Service){

    }
    ngOnInit(){
        TraficComponent.judet=localStorage.getItem("judetSelectat");
    }
    incarcaPersoane(gen:string){
        this.service.incarcaTrafic(TraficComponent.judet,gen).then(persoana=>{
            this.persoane=persoana.result.records;
        }).catch(error=>{
            console.log("Eroare la incarcare din API a persoanelor traficate");
        })
    }

}
