/**
 * Created by: Ashwini Agre
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'favfunds',
  templateUrl: 'favfunds.component.html'
})
export class FavfundsComponent implements OnInit{
  favfundsModel:FavfundsModel;
 
  constructor(private http: HttpClient) {
    this.favfundsModel=new FavfundsModel();
       }
  ngOnInit(){
  }
 

   
}
export class FavfundsModel{
  t1: string;  t2: string;  email: string;  date: string; }
