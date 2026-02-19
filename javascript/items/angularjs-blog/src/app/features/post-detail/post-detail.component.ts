import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [NgIf, NgFor, DatePipe, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly postService: PostService
  ) {}

  get post() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.postService.getPostById(id);
  }
}