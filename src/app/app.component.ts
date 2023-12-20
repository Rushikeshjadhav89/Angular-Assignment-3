import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_03';

  details =[
    {id:101,name:"Pratik",gender:"male",city:"latur"},
    {id:102,name:"Mansi",gender:"female",city:"pune"},
    {id:103,name:"Shreyash",gender:"male",city:"satara"},
    {id:104,name:"Swati",gender:"female",city:"nashik"},
    {id:104,name:"Rushi",gender:"male",city:"mumbai"},
  
  ]


  NUM:number[]=[1,2,3,4,5,6,7,8,9,10]

  
  radius:number[]=[10,2,4,2,8,3,4,6]

  
  
}
 