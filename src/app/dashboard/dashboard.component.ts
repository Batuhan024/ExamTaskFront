/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true, // Standalone yapı
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // Gerekli modülleri ekle
})
export class DashboardComponent {
  username: string | null = '';
  movieForm: FormGroup;
  movies: { title: string }[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    });

    // Giriş yapan kullanıcıyı localStorage'dan al
    const user = localStorage.getItem('user');
    if (user) {
      this.username = JSON.parse(user).username;
    } else {
      // Eğer kullanıcı girişi yapılmamışsa login sayfasına yönlendir
      this.router.navigate(['/login']);
    }

    // Favori filmleri localStorage'dan yükle
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }

  onAddMovie() {
    const newMovie = { title: this.movieForm.value.title };

    // Filmi listeye ekle
    this.movies.push(newMovie);

    // Formu sıfırla
    this.movieForm.reset();

    // Filmleri localStorage'a kaydet
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  onDeleteMovie(movie: { title: string }) {
    // Filmi listeden çıkar
    this.movies = this.movies.filter(m => m.title !== movie.title);

    // Güncellenen listeyi localStorage'a kaydet
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MovieItemComponent]
})
export class DashboardComponent implements OnInit {
  movieForm: FormGroup;
  movies: { title: string }[] = [];
  username: string | null = ''; 

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {

    const user = localStorage.getItem('user');
    if (user) {
      this.username = JSON.parse(user).username; 
    }

    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }

  onAddMovie() {
    if (this.movieForm.invalid) {
      return; 
    }
    const newMovie = { title: this.movieForm.value.title };
    this.movies.push(newMovie);
    this.movieForm.reset();
    this.updateLocalStorage();
  }


  onDeleteMovie(movie: { title: string }) {
    this.movies = this.movies.filter(m => m.title !== movie.title);
    this.updateLocalStorage();
  }

  get f() {
    return this.movieForm.controls;
  }

  updateLocalStorage() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
