import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent implements OnInit {
  message: string = '';

  constructor(private route: ActivatedRoute) {}

  images: string[] = [
    'assets/imageone.jpg',
    'assets/imagetwo.jpg',
    'assets/imagethree.jpg',
    'assets/imagefour.jpg',
  ];
  currentIndex = 0;

  startCarousel(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  ngOnInit(): void {
    this.startCarousel();
    const messageId = this.route.snapshot.paramMap.get('id');
    if (messageId === 'love123') {
      this.message = 'Happy Valentine’s Day! You are loved and appreciated!';
    } else {
      this.message = 'Welcome to your Valentine’s message!';
    }
  }
}
