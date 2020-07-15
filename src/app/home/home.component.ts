import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service'
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private dataservice:DataService,private router:Router) { }
public places=[];
message: string = "Hola Mundo!"
public image;
  public images=[];

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
    this.getallplaces()
  }
  getallplaces(){
    this.http.get('http://localhost:8000/api/getall/').subscribe((response:any[])=>
    {
      this.places=response
   //console.log(this.products)
   for(var i=0;i<this.places.length;i++){
    let data=this.places[i].placename
     this.http.get('http://localhost:8200/getObjPvt/'+this.places[i].placename+1+'.jpg',{ responseType: 'text'}).subscribe((response)=>
     {
       this.image=response;
       //console.log(this.image)
       //console.log(data)
      this.images.push({name:data,imageurl:this.image})
       
       
    })
   }
  
    })
  }
  getplacename(placename:String){
  
   this.dataservice.setdata(placename)
   this.router.navigate(['/place'])
   
  }
}
