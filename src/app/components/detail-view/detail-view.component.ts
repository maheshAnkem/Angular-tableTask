import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  
  laptopList:any;

  productID: any;
  
  idProduct:any;
  
  product:any;
 

  constructor(private api:ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // console.log(routeParams)
    const productIdFromRoute = Number(routeParams.get('id'));


    this.api.getlaptops().subscribe(product => {
      this.laptopList = product;
      this.idProduct=this.laptopList.products
      this.product = this.idProduct.find((el: { id: number; }) => el.id === productIdFromRoute);
    }) ;


    this.api.getsmartphones().subscribe(product => {
      this.laptopList = product;
      this.idProduct=this.laptopList.products
      this.product = this.idProduct.find((el: { id: number; }) => el.id === productIdFromRoute);
    }) ;
  };
}
