import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { MenusService } from '../menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name : string;
  price : number;
  key :string;
  orderForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    price:new FormControl(),
    key:new FormControl()
  })
  
  
  
  form: FormGroup;
  img : Array<any>=[
    { name : "appe",value : "appe",path : "/assets/image/appe.jpg",price : 20 },
    { name : "idli",value : "idli",path : "/assets/image/idli.jpg", price : 10 },
    { name : "noodles",value : "noodles",path : "/assets/image/noodles.jpg", price : 15 },
    { name : "Manchurian",value : "Manchurian",path : "/assets/image/manchurian.jpg", price : 15 },
    { name : "Masala dosa",value : "Masala Dosa",path : "/assets/image/masala dosa.jpg", price : 15 },
    { name : "Poha",value : "Masala Dosa",path : "/assets/image/tpoha.jpg", price : 15 },
    { name : "Momos",value : "Momos",path : "/assets/image/momos.jpg", price : 15 },
    { name : "Samosa",value : "Samosa",path : "/assets/image/samosa.jpg", price : 15 },
    
    
    
  ]
  constructor(private fb: FormBuilder,private MS : MenusService,private router : Router) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  add(){
    if(this.key==null){
      console.log(this.orderForm.value)
      this.MS.add(this.orderForm.value).subscribe(success=>{
        console.log(success)
        this.router.navigate(['/menu']);
      });
    }
  }

  submitForm() {
    console.log(this.form.value)
  }



  ngOnInit(): void {
  }

}
