import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MenusService } from '../menus.service'

@Component({
  selector: "app-foodmenu",
  templateUrl: "./foodmenu.component.html",
  styleUrls: ["./foodmenu.component.css"],
})
export class FoodmenuComponent implements OnInit {
  
  
  constructor(private router: Router,private MS:MenusService) {}
  order:any=[]
  displayOrders:any=[];
  
    getorders(){
      this.MS.getAll().subscribe(success=>{
        console.log(success);
        this.order=success;
        this.displayOrders=this.order;
      },error=>{
        console.log(error);
      }
      )
      
    }
  
  ngOnInit(): void {
    this.getorders
  }
}
