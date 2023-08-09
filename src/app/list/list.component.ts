import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent 
{
  title= 'Users List';

  Users = 
[
{
  id: "10",
  name: "Ali Hamza",
  city: "Islamabad"
},
{
  id: "11",
  name: "Umer Javed",
  city: "Lahore"
},
{
  id: "12",
  name: "Arslan Muneeb",
  city: "Karachi"
},
{
  id: "13",
  name: "Zubair Khan",
  city: "Multan"
}
]



}
