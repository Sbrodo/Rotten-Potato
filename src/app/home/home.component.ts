import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  trendingmovies: any;
  theatremovies: any
  popularmovies:any
  ngOnInit(): void {
    this.getrendingmovie()
    this.getheatremovie()
    this.getpopularmovie()
  }
  
  getrendingmovie(){
    this.http.get("http://localhost:4200/assets/data/trending-movies.json").subscribe((movies)=>{
      this.trendingmovies=movies
      console.log(this.trendingmovies)
    })

  }
  getheatremovie(){
    this.http.get("http://localhost:4200/assets/data/theatre-movies.json").subscribe((movies)=>{
      this.theatremovies=movies
      console.log(this.theatremovies)
    })

  }
  getpopularmovie(){
    this.http.get("http://localhost:4200/assets/data/popular-movies.json").subscribe((movies)=>{
      this.popularmovies=movies
      console.log(this.popularmovies)
    })

  }

  gotomovie(type:string,id:string){
    this.router.navigate(['movie',type,id])
  }

}

