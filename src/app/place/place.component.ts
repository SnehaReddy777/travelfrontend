import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(private dataservice:DataService,private http:HttpClient,private router:Router) { }
 public id;
 public details;

 public description;
 public state;
 public howtoreach;
 public besttimetovisit;
 public placename;
 public placename1;
 public image;
  public images=[];
  ngOnInit() {
  this.getplacedetails()
  }
  getplacedetails(){
    this.id=this.dataservice.getdata()
    console.log(this.id)
    this.http.get('http://localhost:8000/api/getbyid/'+this.id).subscribe((response:any[])=>
    {
      this.details=response
      console.log(this.details.placename)
      this.placename1=this.details.placename
      
        for(var j=1;j<=5;j++){
          let data=j
          console.log(this.details.placename)
         this.http.get('http://localhost:8200/getObjPvt/'+this.details.placename+j+'.jpg',{ responseType: 'text'}).subscribe((response)=>
         {
           this.image=response;
           console.log(this.image)
           //console.log(data)
          this.images.push({name:data,imageurl:this.image})
           
           
        })
       }
      
  
    })

  }
  booknow(){
  console.log(this.placename1)
  this.dataservice.setdata(this.placename1)
  this.router.navigate(['/payment'])
  }

}
