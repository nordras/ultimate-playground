import { Component } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private readonly postService: PostService) {}

  get posts() {
    return this.postService.getPosts();
  }
}