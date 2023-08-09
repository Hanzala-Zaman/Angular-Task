import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
products = 
[
{
  id: "10",
  name: "Shirt",
  price: "10$"
},
{
  id: "11",
  name: "Trouser",
  price: "20$"
}
  
]

addProduct()
{
  this.products.push(
    {
      id: "12",
      name: "Jacket",
      price: "50$"
    }
  )

  }

}
