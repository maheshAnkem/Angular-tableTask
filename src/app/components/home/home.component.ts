import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData: any;
  laptopsData: any;
  categories: any;
  
  value: any;
  pl:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCategory().subscribe(val =>{
      this.categories = val
      // this.categories.push("All");
      
    } );

    
  }

    selectedType(e: any){
      
      if(e.value == "laptops"){
        this.api.getlaptops().subscribe(val => {
          this.value = val;
          this.tableData =[...this.value.products];
        });
      }
      else if(e.value == "smartphones"){
        this.api.getsmartphones().subscribe(val => {
          this.value = val
          this.tableData = [...this.value.products];
        });  
      }  
      else if(e.value == "All")  {
        this.api.getsmartphones().subscribe(val =>{
          this.value = val;
          this.tableData = [...this.value.products];
          this.api.getlaptops().subscribe(lapVal => {
            this.laptopsData = lapVal
            this.tableData = this.tableData.concat([...this.laptopsData.products]);
          });
        });
      }
    };
  }
    





