/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MovieItemComponent]
})
export class MovieListComponent implements OnInit {
  movieForm: FormGroup;
  movies: { title: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    // localStorage'daki filmleri yükle
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
    this.updateLocalStorage();
  }

  onDeleteMovie(index: number) {
    // Filmi listeden çıkar
    this.movies.splice(index, 1);

    // Güncellenen listeyi localStorage'a kaydet
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
*/

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
export class MovieListComponent implements OnInit {
  movieForm: FormGroup;
  movies: { title: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }

  onAddMovie() {
    const newMovie = { title: this.movieForm.value.title };
    this.movies.push(newMovie);
    this.movieForm.reset();
    this.updateLocalStorage();
  }

  onDeleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
